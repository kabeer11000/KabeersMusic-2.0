(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{235:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(69),a=n.n(r),o=n(86),i=n(87),u=n.n(i),c=n(238),s=n(239),l={getCookie:function(t){for(var e=t+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var a=n[r];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return""},setCookie:function(t,e,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="expires="+r.toUTCString();document.cookie=t+"="+e+";"+a+";path=/"}};function f(){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=l.getCookie("token")){t.next=3;break}return t.abrupt("return",window.location.href=u.a.authRedirect);case 3:if(e=JSON.parse(e),!(Math.floor((Date.now()-e.exp)/1e3/60)>120)){t.next=8;break}return t.next=7,Object(c.a)(u.a.refreshToken,{},5e3).then(function(t){return t.ok?t.json():null});case 7:return t.abrupt("return",t.sent);case 8:return t.abrupt("return",e.token);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(o.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:l.getCookie("user_data_token")&&null===localStorage.getItem(s.a.userData)&&Object(c.a)("http://localhost:9000/auth/user/data",{headers:new Headers({IdToken:JSON.parse(l.getCookie("user_data_token")).token})}).then(function(t){return t.json()}).then(function(t){return localStorage.setItem(s.a.userData,btoa(JSON.stringify(t)))}).catch(function(t){return console.log(t)});case 1:case"end":return t.stop()}},t)}))()},238:function(t,e,n){"use strict";var r=n(29),a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(r,a){var o=1;return function t(n,i){return fetch(n,e).then(r).catch(function(e){1===i?a(e):setTimeout(function(){o++,t(n,i-1)},3e3*o)})}(t,n)})};e.a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=new AbortController;return Promise.race([a(t,Object(r.a)({},e,{signal:i.signal}),o),new Promise(function(t,e){return setTimeout(function(){return e(function(){i.abort(),new Error("timeout")})},n)})])}},239:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={userData:"bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}},244:function(t,e,n){"use strict";var r=n(69),a=n.n(r),o=n(45),i=n(86),u=n(259),c=n(87),s=n.n(c),l=n(235);function f(t){var e=t;return new Promise(function(t,n){return Object(l.a)().then(function(r){var a=new XMLHttpRequest;a.open("GET",s.a.proxyURI(e)),a.responseType="blob",a.setRequestHeader("Authorization","Bearer ".concat(r)),a.onload=function(){var e=a.status;e>=200&&e<300?t(a.response):n({status:e,statusText:a.statusText})},a.send(),setTimeout(function(){a.abort(),a.open("GET",s.a.proxyURI(e)),a.send()},1e3)})})}var p=n(238),h=n(266);n(260);n.d(e,"c",function(){return b}),n.d(e,"b",function(){return y}),n.d(e,"f",function(){return x}),n.d(e,"g",function(){return O}),n.d(e,"d",function(){return I}),n.d(e,"a",function(){return A}),n.d(e,"h",function(){return R}),n.d(e,"i",function(){return N}),n.d(e,"e",function(){return H});var d=10;function m(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(Date.now()/1e3).toString(16).split(".").join("");n.length<14;)n+="0";var r="";return e&&(r=".",r+=Math.round(1e8*Math.random())),t+n+r}var g=new u.a("KabeersMusic_Songs");g.version(d).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var v=new u.a("KabeersMusic_History");function b(){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(a.a.mark(function t(){var e,n=arguments;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n.length>0&&void 0!==n[0]?n[0]:{videoId:null,rating:0,title:"",channelTitle:"",tags:"",videoElement:{},success:function(){},error:function(){}},t.prev=1,Object(l.a)().then(function(){var t=Object(i.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Download Started"),r="https://i.ytimg.com/vi/".concat(e.videoId,"/hqdefault.jpg"),Object(p.a)(s.a.getProxyfiedURI(e.videoId),{headers:new Headers({Authorization:"Bearer ".concat(n)})}).then(function(t){return t.json()}).then(function(){var t=Object(i.a)(a.a.mark(function t(n){var i,u,c,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([f(r),f(n)]);case 2:i=t.sent,u=Object(o.a)(i,2),c=u[0],s=u[1],g.songs.put({id:e.videoId,state:"downloaded",thumbnail:c,blob:s,valid:!0,time:Date.now(),videoId:e.videoId,rating:e.rating,tags:e.tags||[],title:e.title,channelTitle:e.channelTitle,videoElement:e.videoElement}).then(function(t){e.success()}).catch(function(t){e.error()});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),t.next=8;break;case 5:return t.prev=5,t.t0=t.catch(1),t.abrupt("return",t.t0);case 8:case"end":return t.stop()}},t,null,[[1,5]])}))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.songs.delete(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function x(t){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)().then(function(t){return navigator.onLine?Object(p.a)(s.a.getProxyfiedURI(e),{headers:new Headers({Authorization:"Bearer ".concat(t)})},1e4).then(function(t){return t.ok?t.json():null}):new Error("No Connection")}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function O(t){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.songs.toArray();case 2:if(!(n=t.sent).some(function(t){return t.id===e})){t.next=5;break}return t.abrupt("return",n.find(function(t){return t.videoId===e}));case 5:return t.abrupt("return",Object(l.a)().then(function(t){Object(p.a)(s.a.getProxyfiedURI(e),{headers:new Headers({Authorization:"Bearer ".concat(t)})}).then(function(t){return t.ok?t.json():null})}));case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function I(){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g.songs.toArray());case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}v.version(d).stores({songs:"id, time, rating, thumbnail, channelTitle, title, tags"});var C={},S={isCaseSensitive:!1,shouldSort:!1,threshold:.6,ignoreLocation:!0,useExtendedSearch:!0,findAllMatches:!0,keys:["title","channelTitle",{name:"title",weight:1.5},{name:"channelTitle",weight:1}]};function A(t){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",C.fuse.search(e));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(t){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.songs.toArray();case 2:return n=t.sent,t.abrupt("return",n&&n.some(function(t){return t.id===e}));case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}function N(t){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:v.songs.put({id:m()+m(),title:e.title,channelTitle:e.ChannelTitle,tags:e.tags,thumbnail:e.thumbnail,time:Date.now(),rating:e.rating}).then(function(t){console.log(t)});case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function H(){return J.apply(this,arguments)}function J(){return(J=Object(i.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v.songs.toArray()||[]);case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function U(){return(U=Object(i.a)(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.songs.toArray();case 2:return e=t.sent,n=[],e.map(function(t,e){n.push(t.videoElement)}),t.abrupt("return",{kind:"KabeersMusic#searchListResponse",etag:"makeid(10)",regionCode:"PK",pageInfo:{totalResults:n.length},items:n});case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}g.songs.toArray().then(function(t){C.fuse=new h.a(t,S)}),console.log("%20 SongJS Loaded"),function(){U.apply(this,arguments)}()},367:function(t,e,n){},368:function(t,e,n){},399:function(t,e,n){"use strict";n.r(e);var r=n(45),a=n(0),o=n.n(a),i=(n(367),n(245)),u=n.n(i),c=n(155),s=n(301),l=n(244),f=(n(368),n(278)),p=n(279),h=n(299),d=n(280),m=n(222),g=u()(function(t){return{inline:{display:"inline"}}}),v=function(t){var e=g();return o.a.createElement(f.a,{alignItems:"flex-start"},o.a.createElement(p.a,null,o.a.createElement(h.a,{alt:t.title,src:t.thumbnail})),o.a.createElement(d.a,{primary:t.title,secondary:o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},t.channelTitle))}))};v.defaultProps={};var b=v,w=n(267),y=n(121),k=n(95),x=u()(function(t){return{root:{width:"100%",maxWidth:"100%",backgroundColor:t.palette.background.paper},inline:{display:"inline"}}}),j=function(){var t=x(),e=o.a.useState(o.a.createElement(o.a.Fragment,null)),n=Object(r.a)(e,2),i=n[0],u=n[1];Object(a.useEffect)(function(){Object(l.e)().then(function(t){if(!t.length)return u(f("History Will Appear Here",o.a.createElement(o.a.Fragment,null)));t=t.length>=5?t.slice(Math.max(t.length-5,1)).reverse():t.reverse(),u(function(){return t.map(function(e,n){return o.a.createElement(o.a.Fragment,{key:n},o.a.createElement(b,{title:e.title,channelTitle:e.channelTitle,thumbnail:e.thumbnail,tags:e.tags}),t.length?null:o.a.createElement(s.a,{variant:"inset",component:"li"}))})})})},[]);var f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.a.createElement(y.a,{component:k.b,to:"/search"},"Retry");return o.a.createElement("div",{className:"errorPage text-center",style:{position:"absolute",top:"1000%",left:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),o.a.createElement("br",null),o.a.createElement("div",{className:"text-truncate"},t),e)};return o.a.createElement(w.a,{fixed:!0},o.a.createElement(c.a,{className:"".concat(t.root," mt-5 bg-transparent")},i))};j.defaultProps={};e.default=j}}]);
//# sourceMappingURL=16.d6072d6e.chunk.js.map