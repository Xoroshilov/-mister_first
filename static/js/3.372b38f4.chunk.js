(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{303:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__20LkQ",profileStatus:"ProfileInfo_profileStatus__3is-U"}},304:function(t,e,s){t.exports={postBlock:"MyPost_postBlock__1lU1T",posts:"MyPost_posts__xn0TG"}},305:function(t,e,s){t.exports={item:"Post_item__3w6HQ"}},307:function(t,e,s){"use strict";s.r(e);var o=s(5),c=s(34),n=s(35),i=s(38),a=s(37),r=s(0),u=s.n(r),j=s(303),p=s.n(j),l=s(39),d=s(1),b=(u.a.Component,s(127)),h=s(95),f=function(t){var e=Object(r.useState)(!1),s=Object(b.a)(e,2),o=s[0],c=s[1],n=Object(r.useState)(t.status),i=Object(b.a)(n,2),a=i[0],u=i[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(d.jsxs)("div",{children:[!o&&Object(d.jsx)("div",{children:Object(d.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"Status"})}),o&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(a)},onChange:function(t){u(t.currentTarget.value)},value:a})})]})},O=function(t){var e=t.profile,s=t.status,o=t.updateStatus;if(!e)return Object(d.jsx)(l.a,{});e.lookingForAJob;var c=Object(d.jsx)("a",{href:e.contacts.facebook,children:"Facebook"});return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:p.a.descriptionBlock,children:[Object(d.jsx)("img",{src:e.photos.large}),Object(d.jsx)(f,{status:s,updateStatus:o}),Object(d.jsx)("div",{children:Object(d.jsx)("strong",{children:e.fullName})}),Object(d.jsx)("div",{children:Object(d.jsxs)("span",{className:p.a.profileStatus,children:['"',e.aboutMe,'"']})}),Object(d.jsx)("div",{children:Object(d.jsx)("strong",{children:c})}),Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["Looking for a job: ","Yes"]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("span",{className:p.a.profileStatus,children:['"',e.lookingForAJobDescription,'"']})})]})})},x=s(304),m=s.n(x),v=s(305),k=s.n(v),g=function(t){return Object(d.jsxs)("div",{className:k.a.item,children:[Object(d.jsx)("img",{src:"https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"}),t.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:" Like "}),t.likeCount]})]})},_=s(91),S=s(126),P=s(49),y=s(33),N=Object(P.a)(10),w=Object(S.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(_.a,{name:"newPostText",component:y.b,validate:[P.b,N],placeholder:"Post message"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Post"})})]})})),B=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(d.jsx)(g,{message:t.message,likeCount:t.likeCount},t.id)}));return Object(d.jsxs)("div",{className:m.a.postBlock,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)("div",{children:Object(d.jsx)(w,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(d.jsx)("div",{className:m.a.posts,children:e})]})})),C=s(19),I=Object(C.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(B),T=function(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(d.jsx)(I,{store:t.store})]})},U=s(11),A=s(10),F=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),setTimeout((function(){t.props.getStatus(e)}),1e3)}},{key:"render",value:function(){return Object(d.jsx)(T,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(A.d)(Object(C.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getStatus:h.c,updateStatus:h.e,getUserProfile:h.d}),U.f)(F)}}]);
//# sourceMappingURL=3.372b38f4.chunk.js.map