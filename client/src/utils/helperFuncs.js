import { formatDistanceToNow, format } from 'date-fns';

export const filterDuplicates = (originalArr, arrToConcat) => {
  return arrToConcat.filter((a) => !originalArr.find((o) => o.id === a.id));
};

export const formatDateAgo = (date) => {
  return formatDistanceToNow(new Date(date), {
    includeSeconds: true,
  });
};

export const formatDayTime = (date) => {
  return format(new Date(date), "MMM d', ' yy 'at' H':'mm");
};

export const sortAnswers = (sortBy, answers, acceptedAnswer) => {
  if (sortBy === 'OLDEST') {
    return [...answers].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else if (sortBy === 'NEWEST') {
    return [...answers].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else {
    const accepted = answers.find((a) => a.id === acceptedAnswer);
    const restSorted = answers
      .filter((a) => a.id !== acceptedAnswer)
      .sort((a, b) => b.points - a.points);

    if (accepted) {
      return [accepted, ...restSorted];
    } else {
      return restSorted;
    }
  }
};
