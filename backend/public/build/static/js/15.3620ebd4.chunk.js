(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{259:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(16),o=a(28),i=a(0),l=a.n(i),s=(a(119),a(193)),u=a(194),m=a(195),p=a(196),f=a(198),h=a(197),d=a(203),g=a(109),b=a(204),E=a(191),y=a(192),v=a(88),w=a.n(v),S=a(14),j=a(58),x=a(78),O=a(63),k=a(38),C=w()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),K=function(e){var t=Object(S.f)(),a=l.a.useState(!0),n=Object(o.a)(a,2),i=n[0],v=n[1],w=l.a.useState(""),O=Object(o.a)(w,2),K=(O[0],O[1],l.a.useState([])),q=Object(o.a)(K,2),N=q[0],P=q[1],F=l.a.useState(l.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),l.a.createElement("br",null),l.a.createElement("div",null,"Results will appear as you  type"))),L=Object(o.a)(F,2),M=L[0],B=L[1],J=C(),R=function(){var t=Object(c.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Object(g.b)(a.target.value).then(function(e){return P(e)}),N&&B(function(){return N.map(function(e,t){if(e)return l.a.createElement(b.a,{button:!0,key:t,component:j.b,to:"/search/results"},l.a.createElement(E.a,null,l.a.createElement(f.a,null)),l.a.createElement(y.a,{primary:"".concat(e.suggestion.attributes.data)}))})}),e.history.push({pathname:"search",search:"?"+new URLSearchParams({q:a.target.value}).toString()}),x.a.dispatch(Object(k.g)(a.target.value));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"SearchComponent"},l.a.createElement(s.a,{fullScreen:!0,open:i,onClose:function(){}},l.a.createElement(u.a,{className:"fixed-top"},l.a.createElement(m.a,null,window.history?l.a.createElement(p.a,{onClick:function(){v(!1)},component:j.b,to:"/home",color:"primary.light",visibility:!1},l.a.createElement(h.a,null)):l.a.createElement(l.a.Fragment,null),l.a.createElement(d.a,{autoCapitalize:!0,autoComplete:!0,autoFocus:!0,onKeyUp:R,onKeyDown:function(e){if("Enter"===e.key&&x.a.getState().q)return t.push("/search/results")},onFocus:function(){},onBlur:function(){},className:"".concat(J.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}),l.a.createElement(f.a,{visibility:!1}))),l.a.createElement("div",{class:"container px-3",style:{marginTop:"4rem"}},l.a.createElement("div",{class:"row"},M))))};K.defaultProps={};t.default=Object(O.b)(function(e){return{query:e.q}})(K)}}]);
//# sourceMappingURL=15.3620ebd4.chunk.js.map