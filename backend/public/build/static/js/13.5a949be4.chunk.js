(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{236:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(1),r=n(0),o=n.n(r),c=n(44);function i(e,t){var n=o.a.memo(o.a.forwardRef(function(t,n){return o.a.createElement(c.a,Object(a.a)({ref:n},t),e)}));return n.muiName=c.a.muiName,n}},237:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(69),r=n.n(a),o=n(88),c=n(87),i=n.n(c),l=n(238),u=n(240),s={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var r=n[a];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""},setCookie:function(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var r="expires="+a.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}};function d(){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=i.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>120)){e.next=8;break}return e.next=7,Object(l.a)(i.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s.getCookie("user_data_token")&&null===localStorage.getItem(u.a.userData)&&Object(l.a)("http://localhost:9000/auth/user/data",{headers:new Headers({IdToken:JSON.parse(s.getCookie("user_data_token")).token})}).then(function(e){return e.json()}).then(function(e){return localStorage.setItem(u.a.userData,btoa(JSON.stringify(e)))}).catch(function(e){return console.log(e)});case 1:case"end":return e.stop()}},e)}))()},238:function(e,t,n){"use strict";var a=n(29),r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(a,r){var o=1;return function e(n,c){return fetch(n,t).then(a).catch(function(t){1===c?r(t):setTimeout(function(){o++,e(n,c-1)},3e3*o)})}(e,n)})};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,c=new AbortController;return Promise.race([r(e,Object(a.a)({},t,{signal:c.signal}),o),new Promise(function(e,t){return setTimeout(function(){return t(function(){c.abort(),new Error("timeout")})},n)})])}},240:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={userData:"bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",homeSongObject:"6pcGyKPkNzCc1LIrvJperozvZemGtVK6FKn2uU4",homeTimeObject:"b1dvcmxkX0NuOU91VU5UWlJmdWFDbndjNjp1c2V"}},244:function(e,t,n){"use strict";var a=n(69),r=n.n(a),o=n(45),c=n(88),i=n(256),l=n(87),u=n.n(l),s=n(237);function d(e){var t=e;return new Promise(function(e,n){return Object(s.a)().then(function(a){var r=new XMLHttpRequest;r.open("GET",u.a.proxyURI(t)),r.responseType="blob",r.setRequestHeader("Authorization","Bearer ".concat(a)),r.onload=function(){var t=r.status;t>=200&&t<300?e(r.response):n({status:t,statusText:r.statusText})},r.send(),setTimeout(function(){r.abort(),r.open("GET",u.a.proxyURI(t)),r.send()},1e3)})})}var p=n(238),f=n(263);n(257);n.d(t,"c",function(){return v}),n.d(t,"b",function(){return j}),n.d(t,"f",function(){return k}),n.d(t,"g",function(){return w}),n.d(t,"d",function(){return C}),n.d(t,"a",function(){return L}),n.d(t,"h",function(){return P}),n.d(t,"i",function(){return z}),n.d(t,"e",function(){return D});var m=10;function h(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var a="";return t&&(a=".",a+=Math.round(1e8*Math.random())),e+n+a}var b=new i.a("KabeersMusic_Songs");b.version(m).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var g=new i.a("KabeersMusic_History");function v(){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(r.a.mark(function e(){var t,n,a=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:"",videoElement:{},success:function(){},error:function(){}},n=a.length>1&&void 0!==a[1]?a[1]:new AbortController,e.prev=2,Object(s.a)().then(function(){var e=Object(c.a)(r.a.mark(function e(a){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Download Started"),i="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),Object(p.a)(u.a.getProxyfiedURI(t.videoId),{headers:new Headers({Authorization:"Bearer ".concat(a)}),signal:n.signal}).then(function(e){return e.json()}).then(function(){var e=Object(c.a)(r.a.mark(function e(n){var a,c,l,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([d(i),d(n)]);case 2:a=e.sent,c=Object(o.a)(a,2),l=c[0],u=c[1],b.songs.put({id:t.videoId,state:"downloaded",thumbnail:l,blob:u,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating,tags:t.tags||[],title:t.title,channelTitle:t.channelTitle,videoElement:t.videoElement}).then(function(e){t.success()}).catch(function(e){t.error()});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(2),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}},e,null,[[2,6]])}))).apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.delete(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.a)().then(function(e){return navigator.onLine?Object(p.a)(u.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})},1e5).then(function(e){return e.ok?e.json():null}):new Error("No Connection")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e){return S.apply(this,arguments)}function S(){return(S=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.toArray();case 2:if(!(n=e.sent).some(function(e){return e.id===t})){e.next=5;break}return e.abrupt("return",n.find(function(e){return e.videoId===t}));case 5:return e.abrupt("return",Object(s.a)().then(function(e){Object(p.a)(u.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}g.version(m).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var I={},N={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function L(e){return T.apply(this,arguments)}function T(){return(T=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.fuse.search(t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e){return R.apply(this,arguments)}function R(){return(R=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.toArray();case 2:return n=e.sent,e.abrupt("return",n&&n.some(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(e){return A.apply(this,arguments)}function A(){return(A=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:g.songs.put({id:h()+h(),title:t.title,channelTitle:t.ChannelTitle,tags:t.tags,thumbnail:t.thumbnail,time:Date.now(),rating:t.rating}).then(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(){return F.apply(this,arguments)}function F(){return(F=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.songs.toArray()||[]);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(){return(M=Object(c.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.songs.toArray();case 2:return t=e.sent,n=[],t.map(function(e,t){n.push(e.videoElement)}),e.abrupt("return",{kind:"KabeersMusic#searchListResponse",etag:"makeid(10)",regionCode:"PK",pageInfo:{totalResults:n.length},items:n});case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}b.songs.toArray().then(function(e){I.fuse=new f.a(e,N)}),console.log("%20 SongJS Loaded"),function(){M.apply(this,arguments)}()},264:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),c=(n(5),n(3)),i=n(4),l=n(89),u=Object(l.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=o.forwardRef(function(e,t){var n=e.alt,i=e.children,l=e.classes,s=e.className,d=e.component,p=void 0===d?"div":d,f=e.imgProps,m=e.sizes,h=e.src,b=e.srcSet,g=e.variant,v=void 0===g?"circle":g,y=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),j=null,O=function(e){var t=e.src,n=e.srcSet,a=o.useState(!1),r=a[0],c=a[1];return o.useEffect(function(){if(t||n){c(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&c("loaded")},a.onerror=function(){e&&c("error")},function(){e=!1}}},[t,n]),r}({src:h,srcSet:b}),k=h||b,x=k&&"error"!==O;return j=x?o.createElement("img",Object(a.a)({alt:n,src:h,srcSet:b,sizes:m,className:l.img},f)):null!=i?i:k&&n?n[0]:o.createElement(u,{className:l.fallback}),o.createElement(p,Object(a.a)({className:Object(c.a)(l.root,l.system,l[v],s,!x&&l.colorDefault),ref:t},y),j)});t.a=Object(i.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}},{name:"MuiAvatar"})(s)},275:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(10),c=n(0),i=(n(5),n(3)),l=n(4),u=n(6),s=c.forwardRef(function(e,t){var n=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,d=e.disableGutters,p=void 0!==d&&d,f=e.fixed,m=void 0!==f&&f,h=e.maxWidth,b=void 0===h?"lg":h,g=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(s,Object(a.a)({className:Object(i.a)(n.root,o,m&&n.fixed,p&&n.disableGutters,!1!==b&&n["maxWidth".concat(Object(u.a)(String(b)))]),ref:t},g))});t.a=Object(l.a)(function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce(function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t},{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}},{name:"MuiContainer"})(s)},310:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),c=(n(5),n(3)),i=n(89),l=Object(i.a)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),u=n(4),s=n(18),d=n(8),p=n(6),f=n(158);function m(e){return"Backspace"===e.key||"Delete"===e.key}var h=o.forwardRef(function(e,t){var n=e.avatar,i=e.classes,u=e.className,s=e.clickable,h=e.color,b=void 0===h?"default":h,g=e.component,v=e.deleteIcon,y=e.disabled,j=void 0!==y&&y,O=e.icon,k=e.label,x=e.onClick,w=e.onDelete,S=e.onKeyDown,C=e.onKeyUp,E=e.size,I=void 0===E?"medium":E,N=e.variant,L=void 0===N?"default":N,T=Object(r.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),P=o.useRef(null),R=Object(d.a)(P,t),z=function(e){e.stopPropagation(),w&&w(e)},A=!(!1===s||!x)||s,D="small"===I,F=g||(A?f.a:"div"),M=F===f.a?{component:"div"}:{},W=null;if(w){var K=Object(c.a)("default"!==b&&("default"===L?i["deleteIconColor".concat(Object(p.a)(b))]:i["deleteIconOutlinedColor".concat(Object(p.a)(b))]),D&&i.deleteIconSmall);W=v&&o.isValidElement(v)?o.cloneElement(v,{className:Object(c.a)(v.props.className,i.deleteIcon,K),onClick:z}):o.createElement(l,{className:Object(c.a)(i.deleteIcon,K),onClick:z})}var $=null;n&&o.isValidElement(n)&&($=o.cloneElement(n,{className:Object(c.a)(i.avatar,n.props.className,D&&i.avatarSmall,"default"!==b&&i["avatarColor".concat(Object(p.a)(b))])}));var U=null;return O&&o.isValidElement(O)&&(U=o.cloneElement(O,{className:Object(c.a)(i.icon,O.props.className,D&&i.iconSmall,"default"!==b&&i["iconColor".concat(Object(p.a)(b))])})),o.createElement(F,Object(a.a)({role:A||w?"button":void 0,className:Object(c.a)(i.root,u,"default"!==b&&[i["color".concat(Object(p.a)(b))],A&&i["clickableColor".concat(Object(p.a)(b))],w&&i["deletableColor".concat(Object(p.a)(b))]],"default"!==L&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[b]],j&&i.disabled,D&&i.sizeSmall,A&&i.clickable,w&&i.deletable),"aria-disabled":!!j||void 0,tabIndex:A||w?0:void 0,onClick:x,onKeyDown:function(e){e.currentTarget===e.target&&m(e)&&e.preventDefault(),S&&S(e)},onKeyUp:function(e){e.currentTarget===e.target&&(w&&m(e)?w(e):"Escape"===e.key&&P.current&&P.current.blur()),C&&C(e)},ref:R},M,T),$||U,o.createElement("span",{className:Object(c.a)(i.label,D&&i.labelSmall)},k),W)});t.a=Object(u.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=Object(s.d)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(s.c)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(s.c)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(s.c)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(s.c)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(s.c)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(s.c)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.d)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.d)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(s.d)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(s.d)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(s.d)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(s.d)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(h)},339:function(e,t,n){},340:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(236);t.a=Object(o.a)(r.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done")},406:function(e,t,n){"use strict";n.r(t);var a=n(98),r=n(29),o=n(69),c=n.n(o),i=n(88),l=n(45),u=n(0),s=n.n(u),d=(n(339),n(121)),p=n(87),f=n.n(p),m=Object(u.lazy)(function(){return n.e(20).then(n.bind(null,402))}),h=function(e){return s.a.createElement(u.Suspense,{fallback:null},s.a.createElement(m,e))},b=n(244),g=n(100),v=n(237),y=n(275),j=n(224),O=n(93),k=n(15),x=n(118),w=n(240),S=n(264),C=n(310),E=n(340),I=n(150),N=n(71);function L(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*a));return t}var T="PLFgquLnL59akA2PflFpeQG9L01VFg90wS",P="PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",R="PLw-VjHDlEOgs658kAHR_LAaILBXb-s6Q5",z="PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",A="PLDcnymzs18LU4Kexrs91TVdfnplU3I5zs",D="PLS_oEMUyvA728OZPmF9WPKjsGtfC75LiN",F=Object(I.a)({}),M=function(e){Object(I.a)(F);var t=Object(g.b)(),n=t.enqueueSnackbar,o=(t.closeSnackbar,new AbortController),p=s.a.useState({}),m=Object(l.a)(p,2),O=m[0],M=m[1],W=s.a.useState({}),K=Object(l.a)(W,2),$=K[0],U=K[1],H=s.a.useState(s.a.createElement(s.a.Fragment,null)),J=Object(l.a)(H,2),B=(J[0],J[1],s.a.useState(function(){if(!navigator.onLine)return s.a.createElement("div",{className:"errorPage",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},s.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),s.a.createElement("br",null),s.a.createElement("div",{className:"text-truncate"},"No Internet Connection"),s.a.createElement(d.a,{onClick:Q},"Retry"))})),G=Object(l.a)(B,2),V=(G[0],G[1]),_=function(){var e=Object(i.a)(c.a.mark(function e(t,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f.a.getPlayListById(t),{headers:new Headers({Authorization:"Bearer ".concat(n)}),signal:o.signal});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f.a.getTopArtistFeed(),{headers:new Headers({Authorization:"Bearer ".concat(t)}),signal:o.signal});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f.a.getSearchFeed(),{headers:new Headers({Authorization:"Bearer ".concat(t)}),signal:o.signal});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Q=function(){Object(v.a)().then(function(e){e||console.log("No Token");var t=function(){return new Error("Not Found")};return _(z,e).then(function(e){return e.ok?e.json():t()}).then(function(e){return U(function(t){return Object(r.a)({},t,Object(a.a)({},L(10),e))})}).catch(function(e){return e}),_(T,e).then(function(e){return e.ok?e.json():t()}).then(function(e){return U(function(t){return Object(r.a)({},t,Object(a.a)({},L(10),e))})}).catch(function(e){return e}),_(A,e).then(function(e){return e.ok?e.json():t()}).then(function(e){return U(function(t){return Object(r.a)({},t,Object(a.a)({},L(10),e))})}).catch(function(e){return e}),_(P,e).then(function(e){return e.ok?e.json():t()}).then(function(e){return U(function(t){return Object(r.a)({},t,Object(a.a)({},L(10),e))})}).catch(function(e){return e}),_(R,e).then(function(e){return e.ok?e.json():t()}).then(function(e){return U(function(t){return Object(r.a)({},t,Object(a.a)({},L(10),e))})}).catch(function(e){return e}),_(D,e).then(function(e){return e.ok?e.json():t()}).then(function(e){return U(function(t){return Object(r.a)({},t,Object(a.a)({},L(10),e))})}).catch(function(e){return e}),q(e).then(function(e){return e.ok?e.json():t()}).then(function(e){return U(function(t){return Object(r.a)({},t,Object(a.a)({},L(10),e))})}).catch(function(e){return e}),X(e).then(function(e){return e.ok?e.json():t()}).then(function(e){return U(function(t){return Object(r.a)({},t,Object(a.a)({},L(10),e))})}).catch(function(e){return e}),Object.keys($).length?localStorage.setItem(w.a.homeTimeObject,JSON.stringify(Date.now())):null}).catch(function(e){n("Failed to Load Songs"),V(Y("An error Occurred Please Re login",s.a.createElement(d.a,{onClick:function(){window.location.href="/auth/redirect"}},"Login")))})},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.a.createElement(d.a,{onClick:function(){null===localStorage.getItem("homePageSongObj")||(Date.now()-parseInt(localStorage.getItem("homeObjectTime")))/6e4>1?Q():U(JSON.parse(localStorage.getItem("homePageSongObj")))}},"Retry");return s.a.createElement("div",{className:"errorPage",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},s.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),s.a.createElement("br",null),s.a.createElement("div",{className:"text-truncate"},e),t)};function Z(t,a,r){e.misc.showBackdrop(),Object(b.f)("object"===typeof t.id?t.id.videoId:t.id).then(function(n){n&&e.appState({uri:n,thumbnail:t.snippet.thumbnails.high.url,video:t,list:r,index:a})}).catch(function(e){return n("Cannot Play Song")})}return Object(u.useEffect)(function(){return navigator.onLine?(null===localStorage.getItem(w.a.homeSongObject)||!(Date.now()-parseInt(localStorage.getItem(w.a.homeTimeObject)))/6e3>1?Q():U(JSON.parse(localStorage.getItem(w.a.homeSongObject))),Object(v.a)().then(function(e){return fetch(f.a.getFeedArtists,{headers:new Headers({Authorization:"Bearer ".concat(e)}),signal:o.signal}).then(function(e){return e.json()}).then(function(e){return M(e)}).catch(function(e){return console.log(e)})})):n("Failed to Load Songs"),function(){o.abort()}},[]),Object(u.useEffect)(function(){Object.keys($).length&&(localStorage.setItem(w.a.homeSongObject,JSON.stringify($)),localStorage.setItem(w.a.homeTimeObject,JSON.stringify(Date.now())))},[$]),s.a.createElement("div",{className:"home mb-5",style:{minHeight:"70vh"}},s.a.createElement("div",{style:{marginTop:"5rem"}},s.a.createElement("div",{className:"cardSlider text-left Slider ".concat(O.items?"d-block":"d-none")},O.items?O.items.map(function(e,t){return s.a.createElement(C.a,{component:N.b,to:"/artist?id="+e.id,avatar:s.a.createElement(S.a,null,e.name.charAt(0)),label:e.name,clickable:!0,className:"mx-1",deleteIcon:s.a.createElement(E.a,null)})}):null),e.homeComponents?e.homeComponents:s.a.createElement("div",null,-1!==Object.keys($).length?s.a.createElement(s.a.Fragment,null,Object.keys($).map(function(e,t){return s.a.createElement(s.a.Fragment,{key:t},$[e]&&$[e].items?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement(x.a,{in:!0},s.a.createElement(j.a,{variant:"h5",className:"pl-3 text-left text-truncate"},$[e].title)),s.a.createElement(y.a,{maxWidth:"xl",className:"px-0 mx-0"},s.a.createElement("div",{className:"cardSlider Slider"},$[e].items.map(function(t,n){return s.a.createElement(h,{key:n,thumbnail:t.snippet.thumbnails.high.url,key_:n,video:t,onPlay:Z,list:$[e]})})))):null)})):$.error?Y():null),navigator.onLine?null:Y(),-1===Object.keys($).length&&navigator.onLine?s.a.createElement(k.a,null):null))};M.defaultProps={};t.default=Object(O.b)(function(e){return{homeComponents:e.home}})(M)}}]);
//# sourceMappingURL=13.5a949be4.chunk.js.map