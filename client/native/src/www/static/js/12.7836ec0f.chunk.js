(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{234:function(e,a,t){"use strict";t.d(a,"a",function(){return i;});var n=t(1),r=t(0),c=t.n(r),o=t(44);function i(e,a){var t=c.a.memo(c.a.forwardRef(function(a,t){return c.a.createElement(o.a,Object(n.a)({ref:t},a),e);}));return t.muiName=o.a.muiName,t;}},239:function(e,a,t){"use strict";t.d(a,"a",function(){return n;});var n={userData:"bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"};},284:function(e,a,t){"use strict";t.d(a,"c",function(){return d;}),t.d(a,"b",function(){return p;});var n=t(1),r=t(2),c=t(0),o=(t(5),t(139)),i=t(27),l=t.n(i),s=t(22),m=t(105),u=t(315),d=function(e,a){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?m.b.indexOf(e)<=m.b.indexOf(a):m.b.indexOf(e)<m.b.indexOf(a);},p=function(e,a){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?m.b.indexOf(a)<=m.b.indexOf(e):m.b.indexOf(a)<m.b.indexOf(e);},b="undefined"===typeof window?c.useEffect:c.useLayoutEffect;a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(a){var t=e.withTheme,i=void 0!==t&&t,m=e.noSSR,d=void 0!==m&&m,p=e.initialWidth;function f(e){var t=Object(s.a)(),l=e.theme||t,m=Object(o.a)({theme:l,name:"MuiWithWidth",props:Object(n.a)({},e)}),f=m.initialWidth,v=m.width,h=Object(r.a)(m,["initialWidth","width"]),w=c.useState(!1),g=w[0],O=w[1];b(function(){O(!0);},[]);var E=l.breakpoints.keys.slice().reverse().reduce(function(e,a){var t=Object(u.a)(l.breakpoints.up(a));return!e&&t?a:e;},null),x=Object(n.a)({width:v||(g||d?E:void 0)||f||p},i?{theme:l}:{},h);return void 0===x.width?null:c.createElement(a,x);}return l()(f,a),f;};};},303:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),o=(t(5),t(3)),i=t(4),l=t(90),s=c.forwardRef(function(e,a){var t=e.classes,i=e.className,s=Object(r.a)(e,["classes","className"]),m=c.useContext(l.a);return c.createElement("div",Object(n.a)({className:Object(o.a)(t.root,i,"flex-start"===m.alignItems&&t.alignItemsFlexStart),ref:a},s));});a.a=Object(i.a)(function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}};},{name:"MuiListItemIcon"})(s);},315:function(e,a,t){"use strict";t.d(a,"a",function(){return i;});var n=t(1),r=t(0),c=t(78),o=t(139);function i(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(c.a)(),i=Object(o.a)({theme:t,name:"MuiUseMediaQuery",props:{}});var l="function"===typeof e?e(t):e;l=l.replace(/^@media( ?)/m,"");var s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,m=Object(n.a)({},i,a),u=m.defaultMatches,d=void 0!==u&&u,p=m.matchMedia,b=void 0===p?s?window.matchMedia:null:p,f=m.noSsr,v=void 0!==f&&f,h=m.ssrMatchMedia,w=void 0===h?null:h,g=r.useState(function(){return v&&s?b(l).matches:w?w(l).matches:d;}),O=g[0],E=g[1];return r.useEffect(function(){var e=!0;if(s){var a=b(l),t=function(){e&&E(a.matches);};return t(),a.addListener(t),function(){e=!1,a.removeListener(t);};}},[l,b,s]),O;}},322:function(e,a,t){"use strict";var n=t(1),r=t(2),c=t(0),o=t(5),i=t.n(o),l=t(284),s=t(22);function m(e){var a=e.children,t=e.only,n=e.width,r=Object(s.a)(),c=!0;if(t)if(Array.isArray(t))for(var o=0;o<t.length;o+=1){if(n===t[o]){c=!1;break;}}else t&&n===t&&(c=!1);if(c)for(var i=0;i<r.breakpoints.keys.length;i+=1){var m=r.breakpoints.keys[i],u=e["".concat(m,"Up")],d=e["".concat(m,"Down")];if(u&&Object(l.c)(m,n)||d&&Object(l.b)(m,n)){c=!1;break;}}return c?a:null;}m.propTypes={children:i.a.node,className:i.a.string,implementation:i.a.oneOf(["js","css"]),initialWidth:i.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:i.a.bool,lgUp:i.a.bool,mdDown:i.a.bool,mdUp:i.a.bool,only:i.a.oneOfType([i.a.oneOf(["xs","sm","md","lg","xl"]),i.a.arrayOf(i.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:i.a.bool,smUp:i.a.bool,width:i.a.string.isRequired,xlDown:i.a.bool,xlUp:i.a.bool,xsDown:i.a.bool,xsUp:i.a.bool};var u=Object(l.a)()(m),d=t(10),p=t(6),b=t(4);var f=Object(b.a)(function(e){var a={display:"none"};return e.breakpoints.keys.reduce(function(t,n){return t["only".concat(Object(p.a)(n))]=Object(d.a)({},e.breakpoints.only(n),a),t["".concat(n,"Up")]=Object(d.a)({},e.breakpoints.up(n),a),t["".concat(n,"Down")]=Object(d.a)({},e.breakpoints.down(n),a),t;},{});},{name:"PrivateHiddenCss"})(function(e){var a=e.children,t=e.classes,n=e.className,o=e.only,i=(Object(r.a)(e,["children","classes","className","only"]),Object(s.a)()),l=[];n&&l.push(n);for(var m=0;m<i.breakpoints.keys.length;m+=1){var u=i.breakpoints.keys[m],d=e["".concat(u,"Up")],b=e["".concat(u,"Down")];d&&l.push(t["".concat(u,"Up")]),b&&l.push(t["".concat(u,"Down")]);}return o&&(Array.isArray(o)?o:[o]).forEach(function(e){l.push(t["only".concat(Object(p.a)(e))]);}),c.createElement("div",{className:l.join(" ")},a);});a.a=function(e){var a=e.implementation,t=void 0===a?"js":a,o=e.lgDown,i=void 0!==o&&o,l=e.lgUp,s=void 0!==l&&l,m=e.mdDown,d=void 0!==m&&m,p=e.mdUp,b=void 0!==p&&p,v=e.smDown,h=void 0!==v&&v,w=e.smUp,g=void 0!==w&&w,O=e.xlDown,E=void 0!==O&&O,x=e.xlUp,j=void 0!==x&&x,y=e.xsDown,D=void 0!==y&&y,U=e.xsUp,k=void 0!==U&&U,M=Object(r.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===t?c.createElement(u,Object(n.a)({lgDown:i,lgUp:s,mdDown:d,mdUp:b,smDown:h,smUp:g,xlDown:E,xlUp:j,xsDown:D,xsUp:k},M)):c.createElement(f,Object(n.a)({lgDown:i,lgUp:s,mdDown:d,mdUp:b,smDown:h,smUp:g,xlDown:E,xlUp:j,xsDown:D,xsUp:k},M));};},327:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(234);a.a=Object(c.a)(r.a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");},355:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(234);a.a=Object(c.a)(r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");},356:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(234);a.a=Object(c.a)(r.a.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History");},357:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(234);a.a=Object(c.a)(r.a.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");},393:function(e,a,t){"use strict";t.r(a);var n=t(45),r=t(98),c=t(0),o=t.n(c),i=t(148),l=t(22),s=t(155),m=t(278),u=t(280),d=t(301),p=t(303),b=t(222),f=t(322),v=t(261),h=t(355),w=t(327),g=t(356),O=t(357),E=t(234),x=Object(E.a)(o.a.createElement("path",{transform:"scale(1.2, 1.2)",d:"M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"Settings"),j=Object(E.a)(o.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle"),y=t(72),D=t(30),U=t(92),k=t(95),M=t(239),N=t(299),S=t(279),I=Object(i.a)(function(e){return{root:{display:"flex"},drawer:Object(r.a)({},e.breakpoints.up("xl"),{width:240,flexShrink:0}),appBar:Object(r.a)({},e.breakpoints.up("xl"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(r.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},logoText:{paddingRight:e.spacing(1)},logoContainer:{alignItems:"baseline",fontSize:e.spacing(2.25),marginLeft:e.spacing(2.5),marginBottom:e.spacing(2),marginTop:e.spacing(2)},logoImage:{height:"auto",width:e.spacing(3)},marginRight:{marginLeft:240},smallAvatar:{width:e.spacing(3),height:e.spacing(3)}};});a.default=Object(U.b)(function(e){return{isOpen:e.drawer};})(function(e){var a=e.children,t=e.window,r=I(),c=Object(l.a)(),i=o.a.useState(e.isOpen),E=Object(n.a)(i,2),U=E[0],z=E[1],L=localStorage.getItem(M.a.userData)?JSON.parse(atob(localStorage.getItem(M.a.userData))):{},C=o.a.createElement("div",null,o.a.createElement(s.a,{className:r.root},o.a.createElement(m.a,null,o.a.createElement(S.a,null,o.a.createElement(N.a,{src:L.account_image,alt:L.username})),o.a.createElement(u.a,{className:"text-truncate",primary:L.username,secondary:L.email}))),o.a.createElement("div",{className:"classes.toolbar"}),o.a.createElement(d.a,null),o.a.createElement(s.a,null,o.a.createElement(m.a,{button:!0,component:k.b,to:"/home"},o.a.createElement(p.a,null,o.a.createElement(h.a,null)),o.a.createElement(u.a,{primary:"Home"})),o.a.createElement(m.a,{button:!0,component:k.b,to:"/downloads"},o.a.createElement(p.a,null,o.a.createElement(w.a,null)),o.a.createElement(u.a,{primary:"Downloads"})),o.a.createElement(m.a,{button:!0,component:k.b,to:"/history"},o.a.createElement(p.a,null,o.a.createElement(g.a,null)),o.a.createElement(u.a,{primary:"History"})),o.a.createElement(m.a,{button:!0,component:k.b,to:"/liked"},o.a.createElement(p.a,null,o.a.createElement(O.a,null)),o.a.createElement(u.a,{primary:"Liked"}))),o.a.createElement(d.a,null),o.a.createElement(m.a,{button:!0,component:k.b,to:"/settings"},o.a.createElement(p.a,null,o.a.createElement(x,null)),o.a.createElement(u.a,{primary:"Settings"})),o.a.createElement(m.a,{button:!0},o.a.createElement(p.a,null,o.a.createElement(j,null)),o.a.createElement(u.a,{primary:"Account"})),o.a.createElement(d.a,null),o.a.createElement(s.a,null,o.a.createElement(m.a,{button:!0},o.a.createElement(b.a,{muted:!0,small:!0},o.a.createElement("div",{className:"text-muted small"},"\xa9 Kabeers Network"))))),H=void 0!==t?function(){return t().document.body;}:void 0;return o.a.createElement("div",null,o.a.createElement("nav",{className:r.drawer,"aria-label":"mailbox folders"},o.a.createElement(f.a,{smUp:!0,implementation:"css"},o.a.createElement(v.a,{container:H,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:e.isOpen,onClose:function(){z(!e.isOpen),y.a.dispatch(Object(D.h)(!e.isOpen));},classes:{paper:r.drawerPaper},ModalProps:{keepMounted:!0}},C)),o.a.createElement(f.a,{xsDown:!0,implementation:"css"},o.a.createElement(v.a,{classes:{paper:r.drawerPaper},variant:"persistent",open:U},C))),o.a.createElement("main",{className:"MainDrawerContainer ".concat(r.content)},o.a.createElement(o.a.Fragment,null,a)));});}}]);
//# sourceMappingURL=12.7836ec0f.chunk.js.map