(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{77656:function(e,t,r){Promise.resolve().then(r.bind(r,74)),Promise.resolve().then(r.t.bind(r,8920,23)),Promise.resolve().then(r.t.bind(r,65887,23)),Promise.resolve().then(r.bind(r,61589))},74:function(e,t,r){"use strict";r.r(t);var s=r(9268),n=r(35846),l=r.n(n);t.default=e=>{let{collections:t}=e;return(0,s.jsxs)("section",{className:"my-2 shadowBottom mb-5 p-3 box-border",children:[(0,s.jsx)("h1",{className:" my-2",children:"Collection"}),(0,s.jsx)("article",{className:"text-[#65737E] dark:text-[#848484] ",children:t.map(e=>(0,s.jsxs)("article",{className:"",children:[(0,s.jsxs)("h1",{className:"text-highlight pb-2 flex justify-between items-center font-bold hover:underline",children:[(0,s.jsx)(l(),{href:"/collection/"+e._raw.flattenedPath,children:(0,s.jsx)("span",{children:e.title})}),(0,s.jsx)("div",{className:"text-highlight",onClick:()=>{var t;null===(t=document.querySelector("#".concat(e.collection)))||void 0===t||t.classList.toggle("hidden")},children:e.posts.length})]}),(0,s.jsx)("div",{id:e.collection,className:"border-l-[1px] border-l-solid border-l-[#65737E] ml-1 pb-5",children:e.posts.map(e=>(0,s.jsx)(l(),{href:"/collection/"+e._raw.flattenedPath,children:(0,s.jsx)("h1",{className:"pl-2 pb-2 hover:underline",children:e.title})},e._id))})]},e._id))})]})}},25941:function(e,t,r){"use strict";var s=r(9268),n=r(86006);t.Z=()=>{let[e,t]=(0,n.useState)(!1),r=()=>{document.querySelector("html").classList.toggle("dark"),t(e=>!e)};return(0,n.useEffect)(()=>{"true"===localStorage.getItem("darkMode")&&t(localStorage.getItem("darkMode"))},[]),(0,n.useEffect)(()=>{localStorage.setItem("darkMode",e)},[e]),(0,s.jsx)(s.Fragment,{children:e?(0,s.jsx)("i",{className:"bi bi-brightness-high text-[20px]",onClick:r}):(0,s.jsx)("i",{className:"bi bi-moon text-[20px]",onClick:r})})}},61589:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var s=r(9268),n=r(35846),l=r.n(n),i=r(25941);function o(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("nav",{className:"flex items-center justify-between text-[1rem] p-[0.5em]",children:[(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)("h1",{className:"font-bebas-neue text-[2em] font-bold mx-[20px]",children:"Teal's Log"})}),(0,s.jsxs)("div",{className:"flex items-center justify-center items-center mx-[10px] [&>*]:mx-[10px] text-[20px]",children:[(0,s.jsx)(l(),{href:"/collection",children:(0,s.jsx)("i",{className:"bi bi-book"})}),(0,s.jsx)(l(),{href:"/tags",children:(0,s.jsx)("i",{className:"bi bi-tags "})}),(0,s.jsx)(i.Z,{})]})]})})}},65887:function(){},83177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(86006),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var s,l={},a=null,d=null;for(s in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:n,type:e,key:a,ref:d,props:l,_owner:o.current}}t.Fragment=l,t.jsx=a,t.jsxs=a},9268:function(e,t,r){"use strict";e.exports=r(83177)},35846:function(e,t,r){e.exports=r(8920)}},function(e){e.O(0,[920,667,488,744],function(){return e(e.s=77656)}),_N_E=e.O()}]);