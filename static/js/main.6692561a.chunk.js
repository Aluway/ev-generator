(this.webpackJsonpev_project=this.webpackJsonpev_project||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(24),r=a.n(c),s=(a(45),a(26)),i=a(12),o=(a(46),a.p+"static/media/logo.647e8670.png"),l=a(5);var d=function(){return Object(l.jsx)("div",{className:"nav__container",children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"nav__wrapper",children:[Object(l.jsx)(s.b,{to:"/ev-generator",children:Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("img",{className:"logo__img",src:o,alt:"ev_logo"}),Object(l.jsx)("div",{children:"Ev generator"})]})}),Object(l.jsx)("ul",{className:"nav__menu",children:Object(l.jsx)(s.b,{to:"ev-generator/about",className:"menu__item",children:"About"})})]})})})},j=a(0),u=a.n(j),h=a(4),b=a(13),m=a(20);a(55);var p=function(e){return Object(l.jsx)("button",{onClick:e.handleClick,form:e.formId,type:e.buttonType,children:e.buttonText})};a(56);var v=function(e){return Object(l.jsxs)("div",{className:"radio__wrapper",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",value:"reading",checked:"reading"===e.checked,onChange:function(t){return e.changeParam(t.target.value)}}),"Reading"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",value:"speaking",checked:"speaking"===e.checked,onChange:function(t){return e.changeParam(t.target.value)}}),"Speaking"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",value:"vocabulary",checked:"vocabulary"===e.checked,onChange:function(t){return e.changeParam(t.target.value)}}),"Vocabulary"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",value:"grammar",checked:"grammar"===e.checked,onChange:function(t){return e.changeParam(t.target.value)}}),"Grammar"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",value:"none",checked:"none"===e.checked,onChange:function(t){return e.changeParam(t.target.value)}}),"None"]})]})};var O=function(e,t,a){return{type:"SUBMIT_FORM",payload:{studentName:e,addition:t,consParam:a}}};a(57);var x=function(){var e=Object(m.b)(),t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),o=i[0],d=i[1],j=Object(n.useState)("reading"),u=Object(b.a)(j,2),h=u[0],x=u[1];return Object(l.jsx)("div",{className:"setting__container",children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(O(c,o,h))},className:"setting__form",id:"setting__form",children:[Object(l.jsxs)("div",{className:"form__class-info",children:[Object(l.jsx)("h3",{children:"Class info"}),Object(l.jsxs)("div",{className:"form__input_wrapper form__input_names",children:[Object(l.jsx)("label",{htmlFor:"input__student_name",children:"Student's name"}),Object(l.jsx)("input",{required:!0,onChange:function(e){return r(e.target.value)},type:"text",id:"input__student_name",name:"input__student_name"})]}),Object(l.jsxs)("div",{className:"form__input_wrapper form__input_additions",children:[Object(l.jsx)("label",{htmlFor:"input__course_addition",children:"Additions"}),Object(l.jsx)("textarea",{required:!0,onChange:function(e){return d(e.target.value)},type:"text",id:"input__course_addition_id",name:"input__course_addition_name"})]})]}),Object(l.jsxs)("div",{className:"improve__wrapper",children:[Object(l.jsx)("h3",{children:"What to improve?"}),Object(l.jsx)(v,{required:!0,checked:h,changeParam:x})]}),Object(l.jsx)("div",{className:"form__buttons_wrapper",children:Object(l.jsx)(p,{formId:"setting__form",buttonType:"submit",buttonText:"Evaluate"})})]})})};a(58),a(59);var f=function(e){return Object(l.jsx)("div",{className:"ev-text_wrapper",children:Object(l.jsxs)("form",{className:"text__form",id:e.formId,children:[Object(l.jsxs)("div",{className:"ev-text__head",children:[Object(l.jsx)("h4",{className:"ev-text__header",children:e.header}),Object(l.jsx)(p,{handleClick:function(){navigator.clipboard.writeText(e.text)},formId:e.formId,buttonType:"button",buttonText:"Copy"})]}),Object(l.jsx)("textarea",{readOnly:!0,name:e.areaName,form:e.formId,value:e.text})]})})};var g=function(){var e=Object(m.c)((function(e){return e.finalEv}));return Object(l.jsxs)("div",{className:"result__wrapper",children:[Object(l.jsx)(f,{header:"Pros",name:"pros",text:e.evPros,formId:"id_pros"}),Object(l.jsx)(f,{header:"Cons",name:"cons",text:e.evCons,formId:"id_cons"}),Object(l.jsx)(f,{header:"Thanks",name:"thanks",text:e.evThanks,formId:"id_thanks"})]})},_=a(37);a(71);_.a.initializeApp({apiKey:"AIzaSyBYDfBn0tHmsulmjvorA0ojQXLumLCd2gw",authDomain:"ev-generator.firebaseapp.com",projectId:"ev-generator",storageBucket:"ev-generator.appspot.com",messagingSenderId:"605773452546",appId:"1:605773452546:web:562a63295a367cefeb9e1b",measurementId:"G-K43CH4L8WJ"});var N=_.a;a(61);var A=function(e){return{type:"GET_PRESETS",payload:e}};var k=function(e,t,a){return{type:"PUSH_EV",payload:{evPros:e,evCons:t,evThanks:a}}},y=a(23),w=function(e){for(var t=Object(y.a)(e),a=0;a<1e4;a++){var n=Math.floor(Math.random()*e.length),c=Math.floor(Math.random()*e.length),r=t[n];t[n]=t[c],t[c]=r}return t};var I=function(e){var t=Object(m.b)();Object(n.useEffect)((function(){0===Object.keys(x).length||0===x.studentName.length?console.log("Enter the name"):t(k(b,p,v))}));var a,c,r,s,i,o,l,d,j,u,h,b,p,v,O=Object(m.c)((function(e){return e.storedPresets})),x=Object(m.c)((function(e){return e.setting}));switch(a=O[1],c=O[0],r=O[2],s=w(a.adj),i=w(a.begin)[0],o=w(a.comp),l=w(a.second)[0],d=w(a.final)[0],j=w(r.thanksFirst)[0],u=w(r.thanksSecond)[0],h=w(r.thanksThird)[0],b="".concat(i.replace("ADJ",s[0]).replace("NAME",x.studentName)," ").concat(o[0].replace("ADJ",s[1])," ").concat(x.addition," ").concat(l.replace("ADJ",s[3])," ").concat(d.replace("ADJ",s[4])," ").concat(o[1].replace("ADJ",s[5]),"\n    "),x.consParam){case"reading":p=w(c.reading)[0];break;case"speaking":p=w(c.speaking)[0];break;case"vocabulary":p=w(c.vocabulary)[0];break;case"grammar":p=w(c.grammar)[0];break;default:p=w(c.def)[0]}return v="".concat(j.replace("NAME",x.studentName).replace("ADJ",s[6])," ").concat(u.replace("NAME",x.studentName).replace("ADJ",s[7])," ").concat(h.replace("NAME",x.studentName).replace("ADJ",s[8])),null};var T=function(){var e=Object(m.b)(),t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!0),i=Object(b.a)(s,2),o=i[0],j=i[1],p=N.firestore().collection("presets");return Object(n.useEffect)((function(){var e=function(){var e=Object(h.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,p.get();case 3:t=e.sent,a=t.docs.map((function(e){return e.data()})),r(a),j(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),e(A(c)),o?Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"main__container",children:Object(l.jsx)("h1",{className:"main__header",children:"Wait a sec... Setting your app."})})]}):Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"main__container",children:[Object(l.jsx)("h1",{className:"main__header",children:"Let's evaluate!"}),Object(l.jsxs)("div",{className:"main__content",children:[Object(l.jsx)(x,{}),Object(l.jsx)(g,{})]}),Object(l.jsx)(I,{})]})})},E=Object(n.createContext)(),C=(a(62),a(63),function(e){var t=Object(n.useContext)(E),a=t.isOpen,c=t.setIsOpen;return r.a.createPortal(Object(l.jsx)("div",{className:"modal__changelog",children:Object(l.jsxs)("div",{className:"modal__wrapper",children:[Object(l.jsx)("h1",{className:"modal__header",children:"Changelog"}),Object(l.jsxs)("div",{className:"info__wrapper",children:[Object(l.jsx)("h2",{className:"info__header",children:"v.1.0161221"}),Object(l.jsx)("p",{className:"info__text",children:"In new version I've implemented several things and changed some of the features:"}),Object(l.jsxs)("ul",{className:"info__features",children:[Object(l.jsx)("li",{className:"info__feature",children:"Changed checkboxes to radio buttons, because checkboxes were not pretty useful in the case, where you need to change only one position."}),Object(l.jsx)("li",{className:"info__feature",children:'Refactored NavBar and put "About" tab, where you can find some information about this project and why I made it.'}),Object(l.jsx)("li",{className:"info__feature",children:"Added several buttons, which allow you to go back to evaluation page or check the changelog of this app."}),Object(l.jsx)("li",{className:"info__feature",children:"Added a fancy icon~"})]}),Object(l.jsx)("h2",{className:"info__header",children:"v.0.8101121"}),Object(l.jsx)("p",{className:"info__text",children:"That was a pre-release version of the app with the following features:"}),Object(l.jsxs)("ul",{className:"info__features",children:[Object(l.jsx)("li",{className:"info__feature",children:'Name and Additions feature, which allow you to add a name and some additional info to the "Pros" part.'}),Object(l.jsx)("li",{className:"info__feature",children:'"Pros" part, represented with 4 checkboxes, which allow you to choose and area of improvments to mention.'}),Object(l.jsx)("li",{className:"info__feature",children:"Three text areas, where you have a generated evaluation for each of the evaluation parts: Pros, Cons and Ending."})]})]}),Object(l.jsx)("div",{className:"modal__close_wrapper",children:Object(l.jsx)(p,{buttonType:"button",buttonText:"Close",handleClick:function(){return c(!a)}})})]})}),document.getElementById("modal"))});var J=function(){var e=Object(i.f)(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],r=a[1];return Object(l.jsxs)("div",{className:"about__wrapper",children:[Object(l.jsx)("h1",{className:"about__header",children:"Ev generator"}),Object(l.jsx)("div",{className:"about__text",children:"I'm glad to introduce an evaluation generator, which was made to increase the speed of writing evaluations for my English classes using presets, which I've collected during my part-time job as an ESL teacher."}),Object(l.jsxs)("div",{className:"about__buttons",children:[Object(l.jsx)(p,{type:"button",handleClick:function(){return r(!c)},buttonText:"Changelog"}),Object(l.jsx)(p,{type:"button",handleClick:function(){return e("/ev-generator")},buttonText:"Back to evaluation"})]}),Object(l.jsx)(E.Provider,{value:{isOpen:c,setIsOpen:r},children:c?Object(l.jsx)(C,{}):null})]})};a(64),a(65);var S=function(){return Object(l.jsx)("div",{className:"footer__container",children:Object(l.jsxs)("div",{className:"footer__content",children:[Object(l.jsxs)("div",{className:"link__container",children:[Object(l.jsx)("img",{className:"link__logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=",alt:"icon"}),Object(l.jsx)("a",{className:"link__text",href:"https://github.com/Aluway",target:"_blank",rel:"noreferrer",children:"Aluway"})]}),Object(l.jsx)("div",{children:"v.1.0161221"})]})})};var M=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{element:Object(l.jsx)(T,{}),path:"/ev-generator"}),Object(l.jsx)(i.a,{element:Object(l.jsx)(J,{}),path:"ev-generator/about"})]}),Object(l.jsx)(S,{})]})},D=a(32),B={auth:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;return e},G={},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return"SUBMIT_FORM"===t.type?t.payload:e},U=[];var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return"GET_PRESETS"===t.type?t.payload:e},F={evPros:"",evCons:"",evThanks:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return"PUSH_EV"===t.type?t.payload:e},H=Object(D.b)({auth:R,setting:P,storedPresets:Z,finalEv:W}),V=a(40),Q=a.n(V),Y=Object(D.a)(Q.a)(D.c)(H);r.a.render(Object(l.jsx)(m.a,{store:Y,children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.6692561a.chunk.js.map