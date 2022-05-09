var ke=Object.defineProperty,Ne=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ue=(t,n,o)=>n in t?ke(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,b=(t,n)=>{for(var o in n||(n={}))ye.call(n,o)&&ue(t,o,n[o]);if(K)for(var o of K(n))he.call(n,o)&&ue(t,o,n[o]);return t},Q=(t,n)=>Ne(t,Ie(n));var oe=(t,n)=>{var o={};for(var r in t)ye.call(t,r)&&n.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&K)for(var r of K(t))n.indexOf(r)<0&&he.call(t,r)&&(o[r]=t[r]);return o};import{O as re,S as se,_ as i,q as de,s as ae,r as g,J as Ee,a2 as Le}from"./vendor.cf5572b9.js";import{c as Te,d as X,u as Y,o as $e,p as O,a,j as e,T as Z,F as ee,i as Se,A as P,g as N,B as ze,b as ie,q as qe,r as ge,s as ve,t as f,v as Oe,w as Me,x as Re,y as Ue,z as Fe,D as le,C as je,E as Ve,G as We,H as W,J as Pe,K as He,M as Ge,N as Je,V as T,O as Ye,P as Ke,Q as Xe,L as Ze,R as et,k as we}from"./index.98728a87.js";import{C as _e}from"./index.dbde4364.js";import{T as Ce}from"./Tag.0434fba4.js";import{P as be}from"./PostedBy.0a9a010b.js";const tt=re({answerBody:se().min(30,"Must be at least 30 characters")}),nt=({quesId:t,tags:n})=>{var h;const{user:o}=X(),{notify:r,clearEdit:d}=Y(),{register:l,handleSubmit:m,reset:u,formState:{errors:p}}=de({mode:"onChange",resolver:ae(tt)}),[v,{loading:A}]=$e({onError:c=>{r(N(c),"error")}}),S=g.exports.useCallback(({answerBody:c})=>{v({variables:{quesId:t,body:c},update:($,{data:I})=>{u();const x=$.readQuery({query:O,variables:{quesId:t}}),q=Q(b({},x==null?void 0:x.viewQuestion),{answers:I==null?void 0:I.postAnswer});$.writeQuery({query:O,variables:{quesId:t},data:{viewQuestion:q}}),r("Answer submitted!")}})},[]);return a("div",{children:[o&&e(ot,{children:"Your Answer"}),o&&a("form",{onSubmit:m(S),children:[e(Z,Q(b({tag:"textarea"},l("answerBody")),{name:"answerBody",required:!0,rows:5,fullWidth:!0,placeholder:"Enter atleast 30 characters",error:"answerBody"in p,helperText:"answerBody"in p?(h=p==null?void 0:p.answerBody)==null?void 0:h.message:""})),e(it,{type:"submit",disabled:A,children:A?"processing...":"Post Your Answer"})]}),a(rt,{children:["Browse other questions tagged \xA0",n.map(c=>e(st,{tag:"a",label:c,href:`/tags/${c}`},c)),"\xA0 or \xA0",o?e(ee,{children:e(Se,{to:"/ask",onClick:()=>d(),children:"ask your own question."})}):e(P,{})]})]})};var ot=i("h3").withConfig({displayName:"AnswerForm___StyledH",componentId:"sc-qv8bcw-0"})({marginTop:"1.25rem",marginBottom:"1rem",fontWeight:"400",fontSize:"1.125rem"}),it=i(Te).withConfig({displayName:"AnswerForm___StyledButton",componentId:"sc-qv8bcw-1"})({marginTop:"2.5rem",display:"block"}),rt=i("div").withConfig({displayName:"AnswerForm___StyledDiv",componentId:"sc-qv8bcw-2"})({marginTop:"2rem",fontSize:".9375rem",lineHeight:"1.5rem","@media (min-width: 640px)":{fontSize:"1rem"}}),st=i(Ce).withConfig({displayName:"AnswerForm___StyledTag",componentId:"sc-qv8bcw-3"})({marginRight:"0.25rem"});const dt=(t,n,o)=>{if(n.length<2)return n;if(t==="OLDEST")return[...n].sort((r,d)=>new Date(r==null?void 0:r.createdAt).valueOf()-new Date(d==null?void 0:d.createdAt).valueOf());if(t==="NEWEST")return[...n].sort((r,d)=>new Date(d==null?void 0:d.createdAt).valueOf()-new Date(r==null?void 0:r.createdAt).valueOf());{const r=n.find(l=>(l==null?void 0:l._id)===o),d=n.filter(l=>(l==null?void 0:l._id)!==o).sort((l,m)=>m.points-l.points);return r?[r,...d]:d}},at=({sortBy:t,setSortBy:n})=>{const o=r=>{n(r.target.innerText.toUpperCase())};return a(ze,{children:[e(ie,{active:t==="VOTES",onClick:o,children:"Votes"}),e(ie,{active:t==="NEWEST",onClick:o,children:"Newest"}),e(ie,{active:t==="OLDEST",onClick:o,children:"Oldest"})]})};function fe(t){return g.exports.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 214.155 214.155",style:{enableBackground:"new 0 0 214.155 214.155"},xmlSpace:"preserve"},t),g.exports.createElement("path",{d:"M74.551 193.448 0 118.896l33.136-33.135 41.415 41.415L181.02 20.707l33.135 33.136L74.551 193.448z"}))}const ce=l=>{var m=l,{checkedIcon:t,checked:n,icon:o,onClick:r}=m,d=oe(m,["checkedIcon","checked","icon","onClick"]);return e(lt,Q(b({onClick:r},d),{$_css:[{alignItems:"center",justifyContent:"center",verticalAlign:"middle",transitionProperty:"background-color, border-color, color, fill, stroke",userSelect:"none",cursor:"pointer",backgroundColor:"rgba(0, 0, 0, 0)",borderStyle:"none",textDecoration:"none",borderRadius:"50%",outlineNonepadding:"9px",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(237, 242, 247, var(--tw-bg-opacity))"},":focus":{"--tw-bg-opacity":"1",backgroundColor:"rgba(237, 242, 247, var(--tw-bg-opacity))"}}],children:n?t:o}))};var lt=i("button").withConfig({displayName:"Checkbox___StyledButton",componentId:"sc-1u71f9m-0"})(["",""],t=>t.$_css);const H=i(qe).withConfig({displayName:"Vote__StyledSvgIcon",componentId:"sc-adxtcd-0"})(()=>[{width:"2rem",height:"2rem",padding:"0.25rem","@media (min-width: 768px)":{padding:"0.5rem",width:"3rem",height:"3rem"}}]);var ct=i(H).withConfig({displayName:"Vote___StyledStyledSvgIcon4",componentId:"sc-adxtcd-1"})({"--tw-text-opacity":"1",color:"rgba(56, 161, 105, var(--tw-text-opacity))"}),mt=i(H).withConfig({displayName:"Vote___StyledStyledSvgIcon3",componentId:"sc-adxtcd-2"})({"--tw-text-opacity":"1",color:"rgba(203, 213, 224, var(--tw-text-opacity))"}),pt=i(H).withConfig({displayName:"Vote___StyledStyledSvgIcon2",componentId:"sc-adxtcd-3"})({"--tw-text-opacity":"1",color:"rgba(56, 161, 105, var(--tw-text-opacity))"}),ut=i(H).withConfig({displayName:"Vote___StyledStyledSvgIcon",componentId:"sc-adxtcd-4"})({"--tw-text-opacity":"1",color:"rgba(203, 213, 224, var(--tw-text-opacity))"});const De=({checked:t,onUpvote:n})=>e(ce,{"aria-label":"upvote",checked:t,icon:e(ut,{children:e(ge,{})}),checkedIcon:e(pt,{children:e(ge,{})}),onClick:n}),Ae=({checked:t,onDownvote:n})=>e(ce,{"aria-label":"downvote",checked:t,icon:e(mt,{children:e(ve,{})}),checkedIcon:e(ct,{children:e(ve,{})}),onClick:n}),yt=({checked:t,handleAcceptAns:n})=>e(ce,{"aria-label":t?"Un accept the answer":"Accept the answer",checked:t,icon:e(ht,{"aria-hidden":"true",children:e(fe,{})}),checkedIcon:e(gt,{"aria-hidden":"true",children:e(fe,{})}),onClick:n});var ht=i(H).withConfig({displayName:"AcceptAnswer___StyledStyledSvgIcon",componentId:"sc-18y2uux-0"})({"--tw-text-opacity":"1",color:"rgba(203, 213, 224, var(--tw-text-opacity))"}),gt=i(H).withConfig({displayName:"AcceptAnswer___StyledStyledSvgIcon2",componentId:"sc-18y2uux-1"})({"--tw-text-opacity":"1",color:"rgba(56, 161, 105, var(--tw-text-opacity))"});const me=({open:t,onConfirm:n,onClose:o,children:r,loading:d})=>e(ee,{children:t&&a(Oe,{onClose:o,children:[e(Me,{children:"Confirm Delete"}),e(Re,{children:r}),a(Ue,{children:[e(vt,{onClick:o,disabled:d,children:"Cancel"}),e(wt,{onClick:n,disabled:d,children:"Delete"})]})]})});var vt=i(f).withConfig({displayName:"DeleteDialog___StyledLightButton",componentId:"sc-w7kwp8-0"})({marginRight:"0.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem"}),wt=i(f).withConfig({displayName:"DeleteDialog___StyledLightButton2",componentId:"sc-w7kwp8-1"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(197, 48, 48, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem"});const _t=({comment:t,user:n,onDelete:o,onEdit:r})=>{const[d,l]=g.exports.useState(!1),[m,u]=g.exports.useState(!1),[p,v]=g.exports.useState(t.body);g.exports.useEffect(()=>{v(t.body)},[t]);const A=()=>{o(t._id),u(!1)};return e(ft,{children:d?a(Dt,{onSubmit:h=>{h.preventDefault(),r(p,t._id),l(!1)},children:[e(Z,{tag:"textarea",value:p,required:!0,fullWidth:!0,placeholder:"Enter at least 15 characters",rows:2,onChange:h=>v(h.target.value)}),a("div",{children:[e(At,{type:"submit",children:"Update Comment"}),e(f,{onClick:()=>l(!1),children:"Cancel"})]})]}):a("div",{children:[a(St,{children:[t.body," \u2013"," ",e(Se,{to:`/user/${t.author.username}`,children:t.author.username}),e("span",{children:` ${Fe(t.createdAt)} `}),e(Ct,{children:t.createdAt!==t.updatedAt&&"(edited)"})]}),n&&n._id===t.author._id&&a(ee,{children:[e(bt,{onClick:()=>l(!0),children:"Edit"}),e(f,{onClick:()=>u(!0),children:"Delete"}),e(me,{open:m,onConfirm:()=>A(),onClose:()=>u(!1),children:e("p",{children:"Are you sure you want to delete this comment?"})})]})]})})};var ft=i("div").withConfig({displayName:"Comment___StyledDiv",componentId:"sc-z6b6z5-0"})({marginTop:"0.25rem",marginBottom:"0.25rem"}),St=i("p").withConfig({displayName:"Comment___StyledP",componentId:"sc-z6b6z5-1"})({fontSize:".8125rem",wordBreak:"break-all",display:"inline",marginRight:"0.5rem","@media (min-width: 768px)":{fontSize:"0.875rem"}}),Ct=i("span").withConfig({displayName:"Comment___StyledSpan",componentId:"sc-z6b6z5-2"})({fontSize:".8em"}),bt=i(f).withConfig({displayName:"Comment___StyledLightButton",componentId:"sc-z6b6z5-3"})({marginRight:"0.25rem"}),Dt=i("form").withConfig({displayName:"Comment___StyledForm",componentId:"sc-z6b6z5-4"})({marginTop:"0.75rem"}),At=i(f).withConfig({displayName:"Comment___StyledLightButton2",componentId:"sc-z6b6z5-5"})({marginRight:"1rem"});const xt=re({commentBody:se().min(15,"Must be at least 15 characters")}),xe=({user:t,comments:n,parentId:o,quesId:r,parentType:d})=>{var z;const[l,m]=g.exports.useState(!0),[u,p]=g.exports.useState(!1),{notify:v}=Y(),{register:A,handleSubmit:S,reset:h,formState:{errors:c}}=de({mode:"onChange",resolver:ae(xt)}),[$]=je({onError:y=>{v(N(y),"error")}}),[I]=Ve({onError:y=>{v(N(y),"error")}}),[x]=We({onError:y=>{v(N(y),"error")}}),q=g.exports.useCallback(y=>{$({variables:{parentId:o,parentType:d,body:y},update:(B,{data:C})=>{var R,E,L;const s=B.readQuery({query:O,variables:{quesId:r}});let D;if(d===W.Question)D=Q(b({},s==null?void 0:s.viewQuestion),{comments:[...(E=(R=s==null?void 0:s.viewQuestion)==null?void 0:R.comments)!=null?E:[],C==null?void 0:C.addComment]});else if(d===W.Answer){const U=s==null?void 0:s.viewQuestion.answers.find(k=>(k==null?void 0:k._id)===o),w=[...(L=U==null?void 0:U.comments)!=null?L:[],C==null?void 0:C.addComment],te=s==null?void 0:s.viewQuestion.answers.map(k=>(k==null?void 0:k._id)===o?Q(b({},k),{comments:w}):k);D=Q(b({},s==null?void 0:s.viewQuestion),{answers:te})}B.writeQuery({query:O,variables:{quesId:r},data:{viewQuestion:D}}),v("Comment added!")}})},[]),G=g.exports.useCallback((y,B)=>{I({variables:{commentId:B,body:y},update:()=>{v("Comment edited!")}})},[]),J=g.exports.useCallback(y=>{x({variables:{commentId:y},update:(B,{data:C})=>{var R;const s=B.readQuery({query:O,variables:{quesId:r}});let D;if(d===W.Question){const E=(R=s==null?void 0:s.viewQuestion)==null?void 0:R.comments.filter(L=>(L==null?void 0:L._id)!==y);D=Q(b({},s==null?void 0:s.viewQuestion),{comments:E})}else if(d===W.Answer){const E=s==null?void 0:s.viewQuestion.answers.find(w=>(w==null?void 0:w._id)===o),L=E==null?void 0:E.comments.filter(w=>(w==null?void 0:w._id)!==(C==null?void 0:C.deleteComment)),U=s==null?void 0:s.viewQuestion.answers.map(w=>(w==null?void 0:w._id)===o?Q(b({},w),{comments:L}):w);D=Q(b({},s==null?void 0:s.viewQuestion),{answers:U})}B.writeQuery({query:O,variables:{quesId:r},data:{viewQuestion:D}}),v("Comment deleted!")}})},[]),j=({commentBody:y})=>{q(y),m(!1),p(!1),h()},M=l?n.slice(0,3):n;return a("div",{children:[n.length!==0&&e(Qt,{}),M.map(y=>e(Bt,{children:e(_t,{comment:y,user:t,onDelete:J,onEdit:G})},y==null?void 0:y._id)),M.length!==n.length?a(f,{onClick:()=>m(!1),children:["show ",n.length-M.length," more comments"]}):t&&!u&&e(f,{onClick:()=>p(!0),children:"Add a comment"}),u&&a(kt,{onSubmit:S(j),children:[e(Nt,Q(b({tag:"textarea"},A("commentBody")),{required:!0,placeholder:"Enter at least 15 characters",rows:3,fullWidth:!0,error:"commentBody"in c,helperText:"commentBody"in c?(z=c==null?void 0:c.commentBody)==null?void 0:z.message:""})),a("div",{children:[e(f,{type:"submit",style:{marginRight:9},children:"Add Comment"}),e(f,{onClick:()=>p(!1),children:"Cancel"})]})]})]})};var Qt=i(le).withConfig({displayName:"Comments___StyledDivider",componentId:"sc-b51hkw-0"})({"--tw-border-opacity":"1",borderColor:"hsla(210, 8%, 90%, var(--tw-border-opacity))"}),Bt=i("div").withConfig({displayName:"Comments___StyledDiv",componentId:"sc-b51hkw-1"})({borderBottom:"1px solid rgba(0,0,0,.08)"}),kt=i("form").withConfig({displayName:"Comments___StyledForm",componentId:"sc-b51hkw-2"})({marginTop:"0.25rem"}),Nt=i(Z).withConfig({displayName:"Comments___StyledTextField",componentId:"sc-b51hkw-3"})({fontSize:".9375rem"});const It=re({editedAnswerBody:se().min(30,"Must be at least 30 characters")});function Et({data:t,quesId:n,acceptedAnswer:o,questionAuthor:r}){var pe;const{_id:d,author:l,body:m,comments:u,points:p,voted:v,createdAt:A,updatedAt:S}=t,{user:h}=X(),{notify:c}=Y(),[$,I]=g.exports.useState(!1),[x,q]=g.exports.useState(!1),{register:G,handleSubmit:J,getValues:j,reset:M,formState:{errors:z}}=de({mode:"onChange",resolver:ae(It),defaultValues:{editedAnswerBody:m}}),[y]=Pe({onError:_=>{c(N(_),"error")}}),[B]=He({onError:_=>{c(N(_),"error")}}),[C]=Ge({onError:_=>{c(N(_),"error")}}),[s]=Je({onError:_=>{c(N(_),"error")}}),D=_=>{C({variables:{quesId:n,ansId:d,voteType:_},optimisticResponse:{__typename:"Mutation",voteAnswer:{__typename:"Answer",_id:d,voted:_,points:_===T.Upvote?p+1:p-1}}})},R=_=>{y({variables:{quesId:n,ansId:d,body:_},update:()=>{c("Answer updated!")}})},E=()=>{B({variables:{quesId:n,ansId:d},update:(_,{data:F})=>{const V=_.readQuery({query:O,variables:{quesId:n}}),Qe=V==null?void 0:V.viewQuestion.answers.filter(ne=>(ne==null?void 0:ne._id)!==(F==null?void 0:F.deleteAnswer)),Be=Q(b({},V==null?void 0:V.viewQuestion),{answers:Qe});_.writeQuery({query:O,variables:{quesId:n},data:{viewQuestion:Be}}),c("Answer deleted!")}})},L=()=>{s({variables:{quesId:n,ansId:d},optimisticResponse:{acceptAnswer:{_id:n,acceptedAnswer:o===d?null:d,__typename:"Question"}},update:(_,{data:F})=>{F!=null&&F.acceptAnswer.acceptedAnswer?c("Accepted the answer!"):c("Un-accepted the answer.")}})},U=()=>{E(),I(!1)},w=()=>{D(T.Upvote)},te=()=>{D(T.Downvote)},k=()=>{M(),R(j("editedAnswerBody")),q(!1)};return a(Lt,{children:[a(Tt,{children:[h?e(De,{checked:v===T.Upvote,onUpvote:w}):e(P,{buttonType:"upvote"}),e("span",{children:p}),h?e(Ae,{checked:v===T.Downvote,onDownvote:te}):e(P,{buttonType:"downvote"}),h&&h._id===(r==null?void 0:r._id)&&e(yt,{checked:o===d,handleAcceptAns:L})]}),a($t,{children:[x?a("form",{onSubmit:J(k),children:[e(Z,b({tag:"textarea",fullWidth:!0,error:"editedAnswerBody"in z,helperText:"editedAnswerBody"in z?(pe=z.editedAnswerBody)==null?void 0:pe.message:"",required:!0,placeholder:"Enter at least 30 characters",rows:4},G("editedAnswerBody"))),a("div",{children:[e(qt,{type:"submit",children:"Update Answer"}),e(f,{onClick:()=>q(!1),children:"Cancel"})]})]}):e(zt,{children:m}),a(Ot,{children:[!x&&e(Mt,{children:h&&h._id===l._id&&a(ee,{children:[e(Rt,{onClick:()=>q(!0),children:"Edit"}),e(f,{children:"Delete"}),e(me,{open:$,onConfirm:U,onClose:()=>I(!1),children:e("p",{children:"Are you sure you want to delete this answer?"})})]})}),e(be,{username:l.username,userId:l._id,createdAt:A,updatedAt:S,postType:"answered"})]}),e(xe,{user:h,comments:u,parentId:d,quesId:n,parentType:W.Answer})]})]})}var Lt=i("div").withConfig({displayName:"AnswerDetails___StyledDiv",componentId:"sc-1f3jes-0"})({display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%"}),Tt=i("div").withConfig({displayName:"AnswerDetails___StyledDiv2",componentId:"sc-1f3jes-1"})({display:"flex",flexDirection:"column",alignItems:"center"}),$t=i("div").withConfig({displayName:"AnswerDetails___StyledDiv3",componentId:"sc-1f3jes-2"})({paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",width:"100%"}),zt=i("p").withConfig({displayName:"AnswerDetails___StyledP",componentId:"sc-1f3jes-3"})({margin:"0",paddingBottom:"0.25rem",fontSize:"1rem","--tw-text-opacity":"1",color:"rgba(45, 55, 72, var(--tw-text-opacity))"}),qt=i(f).withConfig({displayName:"AnswerDetails___StyledLightButton",componentId:"sc-1f3jes-4"})({marginRight:"1rem"}),Ot=i("div").withConfig({displayName:"AnswerDetails___StyledDiv4",componentId:"sc-1f3jes-5"})({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:"0.5rem",marginTop:"1.25rem",marginBottom:"1.25rem"}),Mt=i("div").withConfig({displayName:"AnswerDetails___StyledDiv5",componentId:"sc-1f3jes-6"})({display:"inline-block",marginRight:"0.5rem"}),Rt=i(f).withConfig({displayName:"AnswerDetails___StyledLightButton2",componentId:"sc-1f3jes-7"})({marginRight:"0.25rem"});const Ut=({quesId:t,answers:n,acceptedAnswer:o,quesAuthor:r})=>{const[d,l]=g.exports.useState("VOTES"),m=dt(d,n,o);return a(Ft,{children:[m.length!==0&&a(jt,{children:[a(Vt,{children:[m.length," ",m.length===1?"Answer":"Answers"]}),e(at,{sortBy:d,setSortBy:l})]}),e(Wt,{children:m.map((u,p)=>a("div",{children:[e(Et,{data:u,quesId:t,acceptedAnswer:o,questionAuthor:r}),p>=0&&p<m.length&&e(Pt,{})]},u==null?void 0:u._id))})]})};var Ft=i("div").withConfig({displayName:"AnswerList___StyledDiv",componentId:"sc-lerqm1-0"})({marginTop:"2.5rem"}),jt=i("div").withConfig({displayName:"AnswerList___StyledDiv2",componentId:"sc-lerqm1-1"})({display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}),Vt=i("h2").withConfig({displayName:"AnswerList___StyledH",componentId:"sc-lerqm1-2"})({fontWeight:"400",fontSize:"1.25rem",marginBottom:"1rem"}),Wt=i("div").withConfig({displayName:"AnswerList___StyledDiv3",componentId:"sc-lerqm1-3"})({marginTop:"1rem"}),Pt=i(le).withConfig({displayName:"AnswerList___StyledDivider",componentId:"sc-lerqm1-4"})({marginTop:"1rem",marginBottom:"1rem","--tw-border-opacity":"1",borderColor:"hsla(210, 8%, 90%, var(--tw-border-opacity))"});function Ht({data:t}){const{_id:n,author:o,body:r,title:d,tags:l,comments:m,points:u,voted:p,createdAt:v,updatedAt:A}=t,{user:S}=X(),[h,c]=g.exports.useState(!1),$=Ee(),{setEditingQuestion:I,notify:x,editingQuestion:q}=Y(),[G]=Ye({onError:s=>{x(N(s),"error")}}),[J]=Ke({onError:s=>{x(N(s),"error")}}),j=(s,D)=>{G({variables:{quesId:n,voteType:s},optimisticResponse:{__typename:"Mutation",voteQuestion:{__typename:"Question",_id:n,points:s===T.Upvote?D+1:D-1,voted:s}}})},M=()=>{I({quesId:n,title:d,body:r,tags:l}),$("/ask")},z=()=>{J({variables:{quesId:n},onCompleted:()=>{$("/"),x("Question deleted!")}})},y=()=>{z(),c(!1)},B=()=>{j(T.Upvote,u)},C=()=>{j(T.Downvote,u)};return a(Gt,{children:[a(Jt,{children:[S?e(De,{checked:p===T.Upvote,onUpvote:B}):e(P,{buttonType:"upvote"}),e("span",{children:u}),S?e(Ae,{checked:p===T.Downvote,onDownvote:C}):e(P,{buttonType:"downvote"})]}),a(Yt,{children:[e(Kt,{children:r}),e(Xt,{children:l&&l.map(s=>e("li",{children:e(Ce,{tag:"a",label:s,href:`/tags/${s}`,styles:{link:{margin:"0 .25em .25em"}}})},s))}),a(Zt,{children:[S&&S._id===o._id&&a(en,{children:[e(tn,{onClick:M,children:"Edit"}),e(f,{onClick:z,children:"Delete"}),e(me,{open:h,onConfirm:y,onClose:()=>c(!1),children:e("p",{children:"Are you sure you want to delete this question"})})]}),e(be,{username:o.username,userId:o._id,createdAt:v,updatedAt:A,postType:"asked"})]}),e(xe,{user:S,comments:m,parentId:n,quesId:n,parentType:W.Question})]})]})}var Gt=i("div").withConfig({displayName:"QuestionDetails___StyledDiv",componentId:"sc-z1lh0v-0"})({display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100%"}),Jt=i("div").withConfig({displayName:"QuestionDetails___StyledDiv2",componentId:"sc-z1lh0v-1"})({display:"flex",flexDirection:"column",alignItems:"center"}),Yt=i("div").withConfig({displayName:"QuestionDetails___StyledDiv3",componentId:"sc-z1lh0v-2"})({paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",width:"100%"}),Kt=i("p").withConfig({displayName:"QuestionDetails___StyledP",componentId:"sc-z1lh0v-3"})({margin:"0",paddingBottom:"0.25rem",fontSize:"1rem","--tw-text-opacity":"1",color:"rgba(45, 55, 72, var(--tw-text-opacity))"}),Xt=i("ul").withConfig({displayName:"QuestionDetails___StyledUl",componentId:"sc-z1lh0v-4"})({display:"flex",flexWrap:"wrap"}),Zt=i("div").withConfig({displayName:"QuestionDetails___StyledDiv4",componentId:"sc-z1lh0v-5"})({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:"0.5rem",marginTop:"1.25rem",marginBottom:"1.25rem"}),en=i("div").withConfig({displayName:"QuestionDetails___StyledDiv5",componentId:"sc-z1lh0v-6"})({display:"inline-block",marginRight:"0.5rem"}),tn=i(f).withConfig({displayName:"QuestionDetails___StyledLightButton",componentId:"sc-z1lh0v-7"})({marginRight:"0.25rem"});const nn=({data:t})=>{const r=t,{answers:n}=r,o=oe(r,["answers"]);return a("div",{children:[e(Ht,{data:o}),e(Ut,{quesId:o._id,answers:n,acceptedAnswer:o.acceptedAnswer,quesAuthor:o.author}),e(nt,{quesId:o._id,tags:o.tags})]})},on=i.div.withConfig({displayName:"Question__QuestionHeader",componentId:"sc-qcm1x0-0"})({}),wn=()=>{const{clearEdit:t,notify:n}=Y(),{user:o}=X(),{quesId:r}=Le(),[d,l]=g.exports.useState(null),[m,{data:u,loading:p}]=Xe({onError:c=>{n(N(c),"error")}});if(g.exports.useEffect(()=>{r&&m({variables:{quesId:r}})},[r]),g.exports.useEffect(()=>{u&&l(u.viewQuestion)},[u]),p||!d)return e(_e,{children:e(Ze,{})});const{title:v,views:A,createdAt:S,updatedAt:h}=d;return a(_e,{children:[a(on,{children:[a(rn,{children:[e(sn,{children:v}),e(dn,{children:o?e(et,{to:"/ask",onClick:()=>t(),children:"Ask Question"}):e(P,{buttonType:"ask"})})]}),a(an,{children:[a("span",{children:["Asked ",a("strong",{children:[we(S)," ago"]})]}),S!==h&&a(ln,{children:["Edited ",a("strong",{children:[we(h)," ago"]})]}),a(cn,{children:["Viewed ",a("strong",{children:[A," times"]})]})]})]}),e(mn,{}),e(nn,{data:d})]})};var rn=i("div").withConfig({displayName:"Question___StyledDiv",componentId:"sc-qcm1x0-1"})({display:"flex",flexWrap:"nowrap",flexDirection:"column","@media (min-width: 640px)":{justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}),sn=i("h1").withConfig({displayName:"Question___StyledH",componentId:"sc-qcm1x0-2"})({margin:"0",marginBottom:"0.25rem",fontWeight:"400",fontSize:"1.5rem",wordWrap:"break-word"}),dn=i("div").withConfig({displayName:"Question___StyledDiv2",componentId:"sc-qcm1x0-3"})({padding:"0",margin:"0",marginLeft:"0.5rem",verticalAlign:"baseline",order:"-1",alignSelf:"flex-end","@media (min-width: 640px)":{order:"0",alignSelf:"auto"}}),an=i("div").withConfig({displayName:"Question___StyledDiv3",componentId:"sc-qcm1x0-4"})({fontSize:".8125rem"}),ln=i("span").withConfig({displayName:"Question___StyledSpan",componentId:"sc-qcm1x0-5"})({marginLeft:"0.5rem"}),cn=i("span").withConfig({displayName:"Question___StyledSpan2",componentId:"sc-qcm1x0-6"})({marginLeft:"0.5rem"}),mn=i(le).withConfig({displayName:"Question___StyledDivider",componentId:"sc-qcm1x0-7"})({marginTop:"1rem",marginBottom:"1rem","--tw-border-opacity":"1",borderColor:"hsla(210, 8%, 90%, var(--tw-border-opacity))"});export{wn as default};
