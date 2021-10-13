import { DocumentType } from '@typegoose/typegoose'
import { AuthenticationError, UserInputError } from 'apollo-server'
import { Arg, Args, ArgsType, Ctx, Field, ID, Mutation, ObjectType, Query, registerEnumType, Resolver } from 'type-graphql'
import { Question, QuestionModel } from '../entities/Question'
import { UserModel } from '../entities/User'
import { TContext } from '../types'
import authChecker from '../utils/authChecker'
import errorHandler from '../utils/errorHandler'
import { downvoteIt, paginateResults, quesRep, upvoteIt } from '../utils/helperFuncs'
import { questionValidator } from '../utils/validators'

@ObjectType()
class Author {
  @Field(type => ID)
  id: string;

  @Field()
  username: string;
}

@ObjectType()
export class NextPrevPage {
  @Field()
  page: number

  @Field()
  limit: number
}

@ObjectType()
class PaginatedQuesList {
  @Field(type => [Question], { nullable: 'items' })
  questions: Question[];

  @Field({ nullable: true })
  next?: NextPrevPage;

  @Field({ nullable: true })
  previous?: NextPrevPage;

}

@ObjectType()
class Tag {

  @Field()
  tagName: string;

  @Field()
  count: number;
}

enum VoteType {
  UPVOTE,
  DOWNVOTE
}
enum SortByType {
  HOT,
  VOTES,
  VIEWS,
  NEWEST,
  OLDEST
}
registerEnumType(SortByType, { name: "SortByType" });
registerEnumType(VoteType, { name: "VoteType" });

@ArgsType()
class GetQuestionsArgs {
  @Field()
  sortBy: SortByType

  @Field()
  page: number

  @Field()
  limit: number

  @Field({ nullable: true })
  filterByTag?: string

  @Field({ nullable: true })
  filterBySearch?: string
}

@Resolver(of => Question)
export class QuestionResolver {

  @Query(() => PaginatedQuesList)
  async getQuestions(@Args() { sortBy, page, limit, filterByTag, filterBySearch }: GetQuestionsArgs): Promise<PaginatedQuesList> {
    const _page = Number(page)
    const _limit = Number(limit)

    let sortQuery
    switch (sortBy) {
      case SortByType.VOTES:
        sortQuery = { points: -1 }
        break
      case SortByType.VIEWS:
        sortQuery = { views: -1 }
        break
      case SortByType.NEWEST:
        sortQuery = { createdAt: -1 }
        break
      case SortByType.OLDEST:
        sortQuery = { createdAt: 1 }
        break
      default:
        sortQuery = { hotAlgo: -1 }
    }

    let findQuery = {}
    if (filterByTag) {
      findQuery = { tags: { $all: [filterByTag] } }
    } else if (filterBySearch) {
      findQuery = {
        $or: [
          {
            title: {
              $regex: filterBySearch,
              $options: 'i',
            },
          },
          {
            body: {
              $regex: filterBySearch,
              $options: 'i',
            },
          },
        ],
      }
    }

    try {
      const quesCount = await QuestionModel.find(findQuery).countDocuments()
      const paginated = paginateResults(_page, _limit, quesCount)
      const questions = await QuestionModel.find(findQuery)
        .sort(sortQuery)
        .limit(_limit)
        .skip(paginated.startIndex)
        .populate('author', 'username')

      const paginatedQues = {
        previous: paginated.results.previous,
        questions,
        next: paginated.results.next,
      }

      return paginatedQues
    } catch (err) {
      if (err instanceof Error) {
        throw new UserInputError(errorHandler(err))
      } else {
        throw new UserInputError(JSON.stringify(err))
      }
    }
  }
  @Query()
  async viewQuestion(@Arg('quesId', type => ID) quesId: string): Promise<Question> {

    try {
      const question = await QuestionModel.findById(quesId)
      if (!question) {
        throw new Error(`Question with ID: ${quesId} does not exist in DB.`)
      }

      question.views++
      const savedQues = await question.save()
      const populatedQues = await savedQues
        .populate('author', 'username')
        .populate('comments.author', 'username')
        .populate('answers.author', 'username')
        .populate('answers.comments.author', 'username')
        .execPopulate()

      return populatedQues
    } catch (err) {
      if (err instanceof Error) {
        throw new UserInputError(errorHandler(err))
      } else {
        throw new UserInputError(JSON.stringify(err))
      }
    }
  }
  @Mutation()
  async postQuestion(@Arg('title') title: string, @Arg("body") body: string, @Arg('tags', type => [String]) tags: string[], @Ctx() context: TContext): Promise<Question> {
    const loggedUser = authChecker(context)

    const { errors, valid } = questionValidator(title, body, tags)
    if (!valid) {
      throw new UserInputError(Object.values(errors)[0], { errors })
    }

    try {
      if (typeof loggedUser === 'string') {
        throw new Error('expected jwt payload, instead got string!')
      }
      const author = await UserModel.findById(loggedUser.id)

      if (!author) {
        throw new UserInputError(
          `User with ID: ${loggedUser.id} does not exist in DB.`
        )
      }
      const newQuestion = new QuestionModel({
        title,
        body,
        tags,
        author: author._id,
      })
      const savedQues = await newQuestion.save()
      const populatedQues = await savedQues
        .populate('author', 'username')
        .execPopulate()

      author.questions.push({ quesId: savedQues._id })
      await author.save()

      return populatedQues
    } catch (err) {
      if (err instanceof Error) {
        throw new UserInputError(errorHandler(err))
      }
      else {
        throw new UserInputError(JSON.stringify(err))
      }
    }
  }

  @Mutation()
  async deleteQuestion(@Arg('quesId', type => ID) quesId: string, @Ctx() context: TContext): Promise<string> {
    const loggedUser = authChecker(context)

    try {
      if (typeof loggedUser === 'string') {
        throw new Error('expected jwt payload, instead got string!')
      }
      const user = await UserModel.findById(loggedUser.id)
      if (!user) {
        throw new UserInputError(
          `User with ID: ${loggedUser.id} does not exist in DB.`
        )
      }
      const question = await QuestionModel.findById(quesId)
      if (!question) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }
      if (
        question.author.toString() !== user._id.toString() &&
        user.role !== 'admin'
      ) {
        throw new AuthenticationError('Access is denied.')
      }

      await QuestionModel.findByIdAndDelete(quesId)
      return question._id.toString();
    } catch (err) {
      if (err instanceof Error) {
        throw new UserInputError(errorHandler(err))
      }
      else {
        throw new UserInputError(JSON.stringify(err))
      }
    }
  }
  @Mutation()
  async editQuestion(@Arg('quesId', type => ID) quesId: string, @Arg('title') title: string, @Arg("body") body: string, @Arg('tags', type => [String]) tags: string[], @Ctx() context: TContext): Promise<Question> {
    const loggedUser = authChecker(context)

    const { errors, valid } = questionValidator(title, body, tags)
    if (!valid) {
      throw new UserInputError(Object.values(errors)[0], { errors })
    }

    const updatedQuesObj = {
      title,
      body,
      tags,
      updatedAt: Date.now(),
    }

    try {
      const question = await QuestionModel.findById(quesId)
      if (!question) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }
      if (typeof loggedUser === 'string') {
        throw new Error('expected jwt payload, instead got string!')
      }
      if (question.author.toString() !== loggedUser.id) {
        throw new AuthenticationError('Access is denied.')
      }

      const updatedQues = await QuestionModel.findByIdAndUpdate(
        quesId,
        updatedQuesObj,
        { new: true }
      )
        .populate('author', 'username')
        .populate('comments.author', 'username')
        .populate('answers.author', 'username')
        .populate('answers.comments.author', 'username')
      if (!updatedQues) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }

      return updatedQues
    } catch (err) {
      if (err instanceof Error) {
        throw new UserInputError(errorHandler(err))
      }
      else {
        throw new UserInputError(JSON.stringify(err))
      }
    }
  }
  @Mutation()
  async voteQuestion(@Arg('quesId', type => ID) quesId: string, @Arg('voteType') voteType: VoteType, @Ctx() context: TContext): Promise<Question> {
    const loggedUser = authChecker(context)

    try {
      if (typeof loggedUser === 'string') {
        throw new Error('expected jwt payload, instead got string!')
      }
      const user = await UserModel.findById(loggedUser.id)

      if (!user) {
        throw new UserInputError(
          `User with ID: ${loggedUser.id} does not exist in DB.`
        )
      }
      const question = await QuestionModel.findById(quesId)
      if (!question) {
        throw new UserInputError(
          `Question with ID: ${quesId} does not exist in DB.`
        )
      }

      if (question.author.toString() === user._id.toString()) {
        throw new UserInputError("You can't vote for your own post.")
      }

      let votedQues;
      if (voteType === VoteType.UPVOTE) {
        votedQues = upvoteIt(question, user) as DocumentType<Question>;
      } else {
        votedQues = downvoteIt(question, user) as DocumentType<Question>;
      }

      votedQues.hotAlgo =
        Math.log(Math.max(Math.abs(votedQues.points), 1)) +
        Math.log(Math.max(votedQues.views * 2, 1)) +
        votedQues.createdAt / 4500;

      const savedQues = await votedQues.save()
      const author = await UserModel.findById(question.author)
      if (!author) {
        throw new UserInputError(
          `User with ID: ${question.author} does not exist in DB.`
        )
      }
      const addedRepAuthor = quesRep(question, author)
      await addedRepAuthor.save()

      return await savedQues
        .populate('author', 'username')
        .populate('comments.author', 'username')
        .populate('answers.author', 'username')
        .populate('answers.comments.author', 'username')
        .execPopulate()
    } catch (err) {
      if (err instanceof Error) {
        throw new UserInputError(errorHandler(err))
      }
      else {
        throw new UserInputError(JSON.stringify(err))
      }
    }
  }
}

