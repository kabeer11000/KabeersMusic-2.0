(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{237:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(69),a=n.n(r),o=n(88),i=n(87),c=n.n(i),s=n(238),u=n(240),l={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return""},setCookie:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="expires="+r.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}};function f(){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=c.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>120)){e.next=8;break}return e.next=7,Object(s.a)(c.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l.getCookie("user_data_token")&&null===localStorage.getItem(u.a.userData)&&Object(s.a)("http://localhost:9000/auth/user/data",{headers:new Headers({IdToken:JSON.parse(l.getCookie("user_data_token")).token})}).then(function(e){return e.json()}).then(function(e){return localStorage.setItem(u.a.userData,btoa(JSON.stringify(e)))}).catch(function(e){return console.log(e)});case 1:case"end":return e.stop()}},e)}))()},238:function(e,t,n){"use strict";var r=n(29),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(r,a){var o=1;return function e(n,i){return fetch(n,t).then(r).catch(function(t){1===i?a(t):setTimeout(function(){o++,e(n,i-1)},3e3*o)})}(e,n)})};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=new AbortController;return Promise.race([a(e,Object(r.a)({},t,{signal:i.signal}),o),new Promise(function(e,t){return setTimeout(function(){return t(function(){i.abort(),new Error("timeout")})},n)})])}},240:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={userData:"bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",homeSongObject:"6pcGyKPkNzCc1LIrvJperozvZemGtVK6FKn2uU4",homeTimeObject:"b1dvcmxkX0NuOU91VU5UWlJmdWFDbndjNjp1c2V"}},244:function(e,t,n){"use strict";var r=n(69),a=n.n(r),o=n(45),i=n(88),c=n(256),s=n(87),u=n.n(s),l=n(237);function f(e){var t=e;return new Promise(function(e,n){return Object(l.a)().then(function(r){var a=new XMLHttpRequest;a.open("GET",u.a.proxyURI(t)),a.responseType="blob",a.setRequestHeader("Authorization","Bearer ".concat(r)),a.onload=function(){var t=a.status;t>=200&&t<300?e(a.response):n({status:t,statusText:a.statusText})},a.send(),setTimeout(function(){a.abort(),a.open("GET",u.a.proxyURI(t)),a.send()},1e3)})})}var d=n(238),p=n(263);n(257);n.d(t,"c",function(){return v}),n.d(t,"b",function(){return w}),n.d(t,"f",function(){return x}),n.d(t,"g",function(){return k}),n.d(t,"d",function(){return S}),n.d(t,"a",function(){return R}),n.d(t,"h",function(){return A}),n.d(t,"i",function(){return L}),n.d(t,"e",function(){return M});var h=10;function m(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var r="";return t&&(r=".",r+=Math.round(1e8*Math.random())),e+n+r}var g=new c.a("KabeersMusic_Songs");g.version(h).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var b=new c.a("KabeersMusic_History");function v(){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(a.a.mark(function e(){var t,n,r=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length>0&&void 0!==r[0]?r[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:"",videoElement:{},success:function(){},error:function(){}},n=r.length>1&&void 0!==r[1]?r[1]:new AbortController,e.prev=2,Object(l.a)().then(function(){var e=Object(i.a)(a.a.mark(function e(r){var c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Download Started"),c="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),Object(d.a)(u.a.getProxyfiedURI(t.videoId),{headers:new Headers({Authorization:"Bearer ".concat(r)}),signal:n.signal}).then(function(e){return e.json()}).then(function(){var e=Object(i.a)(a.a.mark(function e(n){var r,i,s,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([f(c),f(n)]);case 2:r=e.sent,i=Object(o.a)(r,2),s=i[0],u=i[1],g.songs.put({id:t.videoId,state:"downloaded",thumbnail:s,blob:u,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating,tags:t.tags||[],title:t.title,channelTitle:t.channelTitle,videoElement:t.videoElement}).then(function(e){t.success()}).catch(function(e){t.error()});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(2),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}},e,null,[[2,6]])}))).apply(this,arguments)}function w(e){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.songs.delete(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)().then(function(e){return navigator.onLine?Object(d.a)(u.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})},1e5).then(function(e){return e.ok?e.json():null}):new Error("No Connection")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.songs.toArray();case 2:if(!(n=e.sent).some(function(e){return e.id===t})){e.next=5;break}return e.abrupt("return",n.find(function(e){return e.videoId===t}));case 5:return e.abrupt("return",Object(l.a)().then(function(e){Object(d.a)(u.a.getProxyfiedURI(t),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.ok?e.json():null})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}b.version(h).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var I={},N={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function R(e){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.fuse.search(t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e){return U.apply(this,arguments)}function U(){return(U=Object(i.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.songs.toArray();case 2:return n=e.sent,e.abrupt("return",n&&n.some(function(e){return e.id===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b.songs.put({id:m()+m(),title:t.title,channelTitle:t.ChannelTitle,tags:t.tags,thumbnail:t.thumbnail,time:Date.now(),rating:t.rating}).then(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(){return z.apply(this,arguments)}function z(){return(z=Object(i.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.songs.toArray()||[]);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function q(){return(q=Object(i.a)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.songs.toArray();case 2:return t=e.sent,n=[],t.map(function(e,t){n.push(e.videoElement)}),e.abrupt("return",{kind:"KabeersMusic#searchListResponse",etag:"makeid(10)",regionCode:"PK",pageInfo:{totalResults:n.length},items:n});case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}g.songs.toArray().then(function(e){I.fuse=new p.a(e,N)}),console.log("%20 SongJS Loaded"),function(){q.apply(this,arguments)}()},264:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(0),i=(n(5),n(3)),c=n(4),s=n(89),u=Object(s.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var l=o.forwardRef(function(e,t){var n=e.alt,c=e.children,s=e.classes,l=e.className,f=e.component,d=void 0===f?"div":f,p=e.imgProps,h=e.sizes,m=e.src,g=e.srcSet,b=e.variant,v=void 0===b?"circle":b,y=Object(a.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),w=null,j=function(e){var t=e.src,n=e.srcSet,r=o.useState(!1),a=r[0],i=r[1];return o.useEffect(function(){if(t||n){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}},[t,n]),a}({src:m,srcSet:g}),x=m||g,O=x&&"error"!==j;return w=O?o.createElement("img",Object(r.a)({alt:n,src:m,srcSet:g,sizes:h,className:s.img},p)):null!=c?c:x&&n?n[0]:o.createElement(u,{className:s.fallback}),o.createElement(d,Object(r.a)({className:Object(i.a)(s.root,s.system,s[v],l,!O&&s.colorDefault),ref:t},y),w)});t.a=Object(c.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}},{name:"MuiAvatar"})(l)},286:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(0),i=(n(5),n(3)),c=n(4),s=n(91),u=o.forwardRef(function(e,t){var n=e.classes,c=e.className,u=Object(a.a)(e,["classes","className"]),l=o.useContext(s.a);return o.createElement("div",Object(r.a)({className:Object(i.a)(n.root,c,"flex-start"===l.alignItems&&n.alignItemsFlexStart),ref:t},u))});t.a=Object(c.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(u)},320:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}},329:function(e,t,n){"use strict";var r=n(69),a=n.n(r),o=n(88),i=n(87),c=n.n(i);function s(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t.attributes={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t.attributes[r.nodeName]=r.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);var a=[].slice.call(e.childNodes).filter(function(e){return 3===e.nodeType});if(e.hasChildNodes()&&e.childNodes.length===a.length)t=[].slice.call(e.childNodes).reduce(function(e,t){return e+t.nodeValue},"");else if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var i=e.childNodes.item(o),c=i.nodeName;if("undefined"==typeof t[c])t[c]=s(i);else{if("undefined"==typeof t[c].push){var u=t[c];t[c]=[],t[c].push(u)}t[c].push(s(i))}}return t}var u=n(320),l=n.n(u),f=n(237);function d(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark(function e(t){var n,r,o,i=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:new AbortController,e.next=3,fetch(c.a.getSuggestionFake(t),{signal:n.signal}).then(function(e){return e.text()});case 3:return r=e.sent,o=s((new DOMParser).parseFromString(r,"text/xml")),e.abrupt("return",o.toplevel?o.toplevel.CompleteSuggestion:[]);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(a.a.mark(function e(t){var n,r=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:new AbortController,e.abrupt("return",Object(f.a)().then(function(e){return fetch(c.a.searchYoutube(l.a.youtube,t),{headers:new Headers({"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}),signal:n.signal}).then(function(e){return e.json()})}).catch(function(e){return e}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"b",function(){return d}),n.d(t,"a",function(){return h})},373:function(e,t,n){},374:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var r=n(45),a=n(0),o=n.n(a),i=(n(373),n(119)),c=n(265),s=n(267),u=n(266),l=n(333),f=n(122),d=n(329),p=n(285),h=n(308),m=n(287),g=n(247),b=n.n(g),v=n(11),y=n(71),w=n(93),j=n(264),x=n(244),O=n(145),k=n(121),E=n(305),S=(n(374),n(157)),C=n(286),I=n(1),N=n(2),R=n(3),T=(n(5),n(18)),A=n(4),U=a.forwardRef(function(e,t){var n=e.animation,r=void 0===n?"pulse":n,o=e.classes,i=e.className,c=e.component,s=void 0===c?"span":c,u=e.height,l=e.variant,f=void 0===l?"text":l,d=e.width,p=Object(N.a)(e,["animation","classes","className","component","height","variant","width"]),h=Boolean(p.children);return a.createElement(s,Object(I.a)({ref:t,className:Object(R.a)(o.root,o[f],i,h&&[o.withChildren,!d&&o.fitContent,!u&&o.heightAuto],!1!==r&&o[r])},p,{style:Object(I.a)({width:d,height:u},p.style)}))}),L=Object(A.a)(function(e){return{root:{display:"block",backgroundColor:Object(T.d)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},{name:"MuiSkeleton"})(U),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return o.a.createElement(S.a,null,Object(E.a)(Array(e.length)).map(function(e){return o.a.createElement(p.a,{alignItems:"flex-start"},o.a.createElement(C.a,null,o.a.createElement(L,{variant:"circle",style:{height:"2.5rem",width:"2.5rem"}})),o.a.createElement(m.a,{primary:o.a.createElement(L,null),secondary:o.a.createElement(L,{width:"100%"})}))}))};P.defaultProps={};var M=P,z=b()(function(e){return{root:{marginTop:"1rem",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),q=(o.a.forwardRef(function(e,t){return o.a.createElement(O.a,Object.assign({direction:"left",ref:t},e))}),function(e){var t=Object(v.f)(),n=o.a.useState(!0),g=Object(r.a)(n,2),b=g[0],w=g[1],O=o.a.useState([]),E=Object(r.a)(O,2),S=(E[0],E[1],o.a.useState(o.a.createElement(M,{length:5}))),C=Object(r.a)(S,2),I=C[0],N=C[1],R=z(),T=new AbortController,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.a.createElement(k.a,{component:y.b,to:"/search"},"Retry");return o.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("img",{src:"/./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),o.a.createElement("br",null),o.a.createElement("div",{className:"text-truncate"},e),t)};return Object(a.useEffect)(function(){return e.query?(navigator.onLine?Object(d.a)(e.query,T).catch(N(A())).then(function(t){t&&N(function(){return t.items?t.items.map(function(n,r){if(n)return o.a.createElement(p.a,{button:!0,key:r,onClick:function(){return a=n,o={list:t,index:r},void Object(x.f)(a.id).then(function(t){t&&setTimeout(function(){e.appState({uri:t,thumbnail:a.snippet.thumbnails.high.url,video:a,list:o.list,index:o.index})},100)});var a,o}},o.a.createElement(h.a,null,o.a.createElement(j.a,{alt:n.snippet.title,src:n.snippet.thumbnails.default.url})),o.a.createElement(m.a,{primary:"".concat(decodeURIComponent(n.snippet.title)),secondary:"".concat(n.snippet.channelTitle)}))}):A("Nothing Found Retry")})}):Object(x.a)(e.query).then(function(t){t&&N(function(){return t.length?t.map(function(t,n){return(t=t.item)?o.a.createElement(p.a,{button:!0,key:n,onClick:function(){!function(t,n){var r="";"object"===typeof t.videoElement.id&&(r=t.videoElement.id.videoId),"string"===typeof t.videoElement.id&&(r=t.videoElement.id),Object(x.g)(r).then(function(r){r&&(t.videoElement.snippet.thumbnails.high.url=URL.createObjectURL(r.thumbnail),e.appState({uri:URL.createObjectURL(r.blob),thumbnail:URL.createObjectURL(r.thumbnail),video:t.videoElement,list:{items:[t.videoElement]},index:n},!1))})}(t,n)}},o.a.createElement(h.a,null,o.a.createElement(j.a,{alt:t.title,src:URL.createObjectURL(t.thumbnail)})),o.a.createElement(m.a,{primary:"".concat(decodeURIComponent(t.title)),secondary:"".concat(t.channelTitle)})):A("Nothing Matched your Search!")}):null})}).catch(function(e){N(A())}),function(){T.abort()}):t.push("/search")},[]),o.a.createElement("div",{className:"SearchResultComponent"},o.a.createElement(i.a,{fullScreen:!0,open:b,onClose:function(){}},o.a.createElement(c.a,{className:"fixed-top"},o.a.createElement(s.a,{component:y.b,to:"/search?q=".concat(e.query)},window.history?o.a.createElement(u.a,{onClick:function(){w(!1)},component:y.b,to:"/home",color:"primary.light",visibility:!1},o.a.createElement(l.a,null)):o.a.createElement(o.a.Fragment,null),o.a.createElement(f.a,{autoCapitalize:!0,autoComplete:!0,value:e.query,className:"".concat(R.input," text-light"),placeholder:"Search Kabeers Music",inputProps:{"aria-label":"Search Kabeers Music"}}))),o.a.createElement("div",{className:"container px-3",style:{marginTop:"4rem"}},o.a.createElement("div",{className:"row"},I.length?I:o.a.createElement(M,{length:10})))))});q.defaultProps={};t.default=Object(w.b)(function(e){return{query:e.q}})(q)}}]);
//# sourceMappingURL=10.ae47e8f3.chunk.js.map