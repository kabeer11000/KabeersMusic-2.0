(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{235:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(69),r=n.n(a),i=n(86),o=n(87),c=n.n(o),s=n(238),l=n(239),u={getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var r=n[a];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""},setCookie:function(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var r="expires="+a.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}};function f(){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.getCookie("token")){e.next=3;break}return e.abrupt("return",window.location.href=c.a.authRedirect);case 3:if(t=JSON.parse(t),!(Math.floor((Date.now()-t.exp)/1e3/60)>120)){e.next=8;break}return e.next=7,Object(s.a)(c.a.refreshToken,{},5e3).then(function(e){return e.ok?e.json():null});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",t.token);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.getCookie("user_data_token")&&null===localStorage.getItem(l.a.userData)&&Object(s.a)("http://localhost:9000/auth/user/data",{headers:new Headers({IdToken:JSON.parse(u.getCookie("user_data_token")).token})}).then(function(e){return e.json()}).then(function(e){return localStorage.setItem(l.a.userData,btoa(JSON.stringify(e)))}).catch(function(e){return console.log(e)});case 1:case"end":return e.stop()}},e)}))()},238:function(e,t,n){"use strict";var a=n(29),r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return new Promise(function(a,r){var i=1;return function e(n,o){return fetch(n,t).then(a).catch(function(t){1===o?r(t):setTimeout(function(){i++,e(n,o-1)},3e3*i)})}(e,n)})};t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7e3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=new AbortController;return Promise.race([r(e,Object(a.a)({},t,{signal:o.signal}),i),new Promise(function(e,t){return setTimeout(function(){return t(function(){o.abort(),new Error("timeout")})},n)})])}},239:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={userData:"bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}},302:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(0),o=(n(5),n(3)),c=n(4),s=n(6),l=i.forwardRef(function(e,t){var n=e.classes,c=e.className,l=e.color,u=void 0===l?"default":l,f=e.component,d=void 0===f?"li":f,g=e.disableGutters,p=void 0!==g&&g,m=e.disableSticky,x=void 0!==m&&m,v=e.inset,h=void 0!==v&&v,b=Object(r.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return i.createElement(d,Object(a.a)({className:Object(o.a)(n.root,c,"default"!==u&&n["color".concat(Object(s.a)(u))],h&&n.inset,!x&&n.sticky,!p&&n.gutters),ref:t},b))});t.a=Object(c.a)(function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}},{name:"MuiListSubheader"})(l)},321:function(e,t,n){"use strict";var a=n(2),r=n(1),i=n(0),o=(n(5),n(3)),c=n(4),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=i.forwardRef(function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,f=e.className,d=e.component,g=void 0===d?"div":d,p=e.container,m=void 0!==p&&p,x=e.direction,v=void 0===x?"row":x,h=e.item,b=void 0!==h&&h,w=e.justify,y=void 0===w?"flex-start":w,k=e.lg,j=void 0!==k&&k,S=e.md,C=void 0!==S&&S,O=e.sm,I=void 0!==O&&O,E=e.spacing,N=void 0===E?0:E,W=e.wrap,z=void 0===W?"wrap":W,L=e.xl,P=void 0!==L&&L,M=e.xs,D=void 0!==M&&M,G=e.zeroMinWidth,R=void 0!==G&&G,T=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(o.a)(u.root,f,m&&[u.container,0!==N&&u["spacing-xs-".concat(String(N))]],b&&u.item,R&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==z&&u["wrap-xs-".concat(String(z))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==y&&u["justify-xs-".concat(String(y))],!1!==D&&u["grid-xs-".concat(String(D))],!1!==I&&u["grid-sm-".concat(String(I))],!1!==C&&u["grid-md-".concat(String(C))],!1!==j&&u["grid-lg-".concat(String(j))],!1!==P&&u["grid-xl-".concat(String(P))]);return i.createElement(g,Object(r.a)({className:F,ref:t},T))}),d=Object(c.a)(function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach(function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})}),n}(e,"xs"),e.breakpoints.keys.reduce(function(t,n){return function(e,t,n){var a={};l.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))},{name:"MuiGrid"})(f);t.a=d},382:function(e,t,n){},390:function(e,t,n){"use strict";n.r(t);var a=n(45),r=n(0),i=n.n(r),o=(n(382),n(302)),c=n(321),s=n(82),l=n(245),u=n.n(l),f=n(222),d=n(235),g=n(87),p=n.n(g),m=n(121),x="PLFgquLnL59akA2PflFpeQG9L01VFg90wS",v=u()(function(e){return{root:{flexGrow:1},paper:{margin:e.spacing(1),padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}}),h=function(e){var t=v();return i.a.createElement(c.a,{item:!0,xs:6,sm:4,onClick:function(){e.onClick(e.video,e.index)}},i.a.createElement(s.a,{className:t.paper},i.a.createElement("img",{src:"props.video.author.avatar",alt:"PlayList Icon"}),i.a.createElement(f.a,{className:"text-left text-truncate"},e.video.title)))},b=function(){v();var e=i.a.useState(i.a.createElement(i.a.Fragment,null)),t=Object(a.a)(e,2),n=t[0],s=t[1],l=function(e,t){console.log(e,t)};return Object(r.useEffect)(function(){Object(d.a)().then(function(e){fetch(p.a.getPlayListById(x),{headers:new Headers({Authorization:"Bearer ".concat(e)})}).then(function(e){return e.json()}).then(function(e){s(e.items.map(function(e,t){return i.a.createElement(h,{onClick:l,video:e,index:t})}))}).catch(function(e){return s(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Internet Connection",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.a.createElement(m.a,{onClick:function(){}},"Retry");return i.a.createElement("div",{className:"errorPage",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},i.a.createElement("img",{src:"./assets/icons/darkmode_nothingfound.svg",style:{width:"8rem",height:"auto"},alt:"Kabeers Music Logo"}),i.a.createElement("br",null),i.a.createElement("div",{className:"text-truncate"},e),t)}())})})},[]),i.a.createElement("div",{className:"PlayLists"},i.a.createElement(o.a,{component:"div"},"December"),i.a.createElement(c.a,{container:!0,spacing:0},n||null))};b.defaultProps={},t.default=b}}]);
//# sourceMappingURL=18.4cc55720.chunk.js.map