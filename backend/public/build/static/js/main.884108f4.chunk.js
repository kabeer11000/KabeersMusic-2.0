(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(154)},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},123:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(116),a(95)),c=a(19),u=(a(117),a(118),a(194)),s=a(75),m=a(195),d=a(61),p=a.n(d),f=a(46),v=a.n(f),h=(a(119),a(189)),E=a(190),b=a(191),y=a(192),g=a(13),w=a.n(g),x=a(25),k=a(6);a(122);function j(e){var t=e;return new Promise(function(e,a){var n=new XMLHttpRequest;n.open("GET","http://localhost:9000/proxy/"+t),n.responseType="blob",n.onload=function(){var t=n.status;t>=200&&t<300?e(n.response):a({status:t,statusText:n.statusText})},n.send(),setTimeout(function(){n.abort(),n.open("GET","http://localhost:9000/proxy/"+t),n.send()},1e3)})}var F=new k.a("KabeersMusic_Songs");F.version(2).stores({songs:"id, &videoId, valid, time, rating, blob, state, thumbnail"});var N=new k.a("KabeersMusic_History");function C(){return(C=Object(x.a)(w.a.mark(function e(){var t,a,n,r,o,l,i,u=arguments;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{videoId:null,rating:0},e.prev=1,console.log("Download Started"),a="https://i.ytimg.com/vi/".concat(t.videoId,"/hqdefault.jpg"),e.next=6,fetch(v.a.getProxyfiedURI(t.videoId)).then(function(e){return e.json()});case 6:return n=e.sent,e.next=9,Promise.all([j(a),j(n)]);case 9:return r=e.sent,o=Object(c.a)(r,2),l=o[0],i=o[1],F.songs.put({id:t.videoId,state:"downloaded",thumbnail:l,blob:i,valid:!0,time:Date.now(),videoId:t.videoId,rating:t.rating}).then(function(e){console.log(e)}),e.abrupt("return",!0);case 17:return e.prev=17,e.t0=e.catch(1),e.abrupt("return",e.t0);case 20:case"end":return e.stop()}},e,null,[[1,17]])}))).apply(this,arguments)}function I(){return(I=Object(x.a)(w.a.mark(function e(t,a){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v.a.getProxyfiedURI(a)).then(function(e){return e.json()});case 2:return e.abrupt("return",e.sent);case 5:if(!(n=e.sent).some(function(e){return e.videoId===a})){e.next=10;break}return e.abrupt("return",n.find(function(e){return e.videoId===a}));case 10:return e.abrupt("return",fetch(v.a.getProxyfiedURI(a)).then(function(e){return e.json()}));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){return(S=Object(x.a)(w.a.mark(function e(t){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.songs.toArray();case 2:return a=e.sent,e.abrupt("return",a&&a.some(function(e){return e.videoId===t}));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(){return(O=Object(x.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.songs.toArray());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}N.version(2).stores({songs:"id, &videoId, time, rating, thumbnail, channelTitle, title, tags"}),console.log("%20 SongJS Loaded");a(123);var P=a(185),T=a(180),M=a(207),U=a(177),R=a(178),A=a(179),B=a(181),L=a(182),q=a(183),D=a(184),V=a(186),W=a(187),G=a(188),H=a(35),J=a.n(H),z=a(176),K=a(206),_=r.a.forwardRef(function(e,t){return r.a.createElement(z.a,Object.assign({direction:"up",ref:t},e))}),Q=function(e){var t=J()(function(e){return{title:{marginLeft:e.spacing(2),flex:1}}});if(e.hidden)return r.a.createElement(r.a.Fragment,null);t();var a=r.a.useState(!0),o=Object(c.a)(a,2),l=o[0],i=o[1],u=r.a.useState(0),m=Object(c.a)(u,2),d=m[0],p=m[1],f=r.a.useState(r.a.createElement(U.a,{onClick:te},r.a.createElement(R.a,{color:"#fff"}))),v=Object(c.a)(f,2),h=v[0],E=v[1],b=r.a.useState(r.a.createElement(U.a,{style:{backgroundColor:"initial"},onClick:function(){j.loop=!0,k(r.a.createElement(U.a,{onClick:function(){j.loop=!1},style:{backgroundColor:"#3F51B5"}},r.a.createElement(A.a,{style:{color:"#FFFFFF"}})))}},r.a.createElement(A.a,{style:{color:"initial"}}))),y=Object(c.a)(b,2),g=y[0],k=y[1],j=e.audio,F=r.a.useState(!1),N=Object(c.a)(F,2),I=N[0],O=N[1],H=r.a.useState(r.a.createElement("div",null)),z=Object(c.a)(H,2),Q=z[0],X=z[1],$=function(){O(!0),i(!1)},Y=function(){j.pause(),j.currentTime=0,j.remove(),O(!1),i(!1)};function Z(){j.play(),E(r.a.createElement(U.a,{onClick:te},r.a.createElement(R.a,{color:"#fff"})))}function ee(){!function(){C.apply(this,arguments)}({videoId:e.video.id,rating:0})}function te(){j.pause(),E(r.a.createElement(U.a,{onClick:Z},r.a.createElement(L.a,{color:"#fff"})))}function ae(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(x.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p(Math.round(t)),j.currentTime=Math.round(t);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return j.addEventListener("timeupdate",Object(x.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p(Math.round(j.currentTime));case 1:case"end":return e.stop()}},e)}))),function(e){return S.apply(this,arguments)}(e.video.snippet.videoId).then(function(e){X(e?r.a.createElement(U.a,{color:"#FFF"},r.a.createElement(q.a,null)):r.a.createElement(U.a,{color:"#FFF",onClick:ee},r.a.createElement(D.a,null)))}),Object(n.useEffect)(function(){j.play()},[]),r.a.createElement("div",{className:"Player"},r.a.createElement("div",{className:"container"},function(){if(I&&null!==j.src)return r.a.createElement(T.a,{color:"primary",style:{position:"fixed",top:"auto",bottom:"3.5rem",width:"100%",backgroundColor:"#FEFEFE"},component:"div",elevation:1,className:"d-inline-flex border-top"},r.a.createElement("div",{className:"d-inline-flex"},r.a.createElement("div",{onClick:function(){i(!0),O(!1)},className:"d-inline-flex"},r.a.createElement("img",{src:e.thumbnail,style:{width:"4rem",height:"3rem"}}),r.a.createElement(s.a,{component:"span",className:"text-truncate p-2 pt-0` text-dark",color:"#000",style:{width:"10em"}},e.video.snippet.title||"Untitled")),r.a.createElement("div",{className:"float-right ml-auto"},h,r.a.createElement(U.a,{onClick:Y},r.a.createElement(B.a,null)))),r.a.createElement(K.a,{className:"m-0 p-0",defaultValue:0,value:d,min:0,max:j.duration,valueLabelDisplay:"auto"}))}(),r.a.createElement(M.a,{fullScreen:!0,open:l,onClose:$,TransitionComponent:_},r.a.createElement(T.a,null,r.a.createElement(P.a,null,r.a.createElement(U.a,{edge:"start",color:"inherit",onClick:$,"aria-label":"close"},r.a.createElement(V.a,null)),r.a.createElement(s.a,{variant:"h6",component:"div",className:"py-1 text-truncate"},e.video.snippet.title||"Untitled",r.a.createElement(s.a,{variant:"body2",style:{opacity:"50%"}},e.video.snippet.channelTitle||"Unavailable")),r.a.createElement("div",{style:{flex:"1 1 auto"}}),r.a.createElement(r.a.Fragment,null,Q))),r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundImage:e.thumbnail},className:"ImageCircle rounded-circle thumbnail"},r.a.createElement("img",{src:e.thumbnail,className:"image img-fluid roun1ded-circle border",style:{width:"auto",height:"100%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})),r.a.createElement("div",{id:"waveForm",style:{width:"100%"}})),r.a.createElement(T.a,{color:"primary",style:{position:"fixed",top:"auto",bottom:0,width:"100%",backgroundColor:"#FEFEFE"},component:"div"},r.a.createElement(K.a,{className:"container",defaultValue:0,value:d,min:0,max:j.duration,valueLabelDisplay:"auto",onChangeCommitted:function(){var e=Object(x.a)(w.a.mark(function e(t,a){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ae(a));case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}),g,r.a.createElement("div",{className:"container mb-2",style:{width:"70%",display:"inline-flex",justifyContent:"space-around",transform:"translate(0%)"}},r.a.createElement(U.a,null,r.a.createElement(W.a,null)),r.a.createElement("div",{className:"ExpandedPlayButtonContainer"},h),r.a.createElement(U.a,null,r.a.createElement(G.a,null)))))))};Q.defaultProps={};var X=Q;function $(e){var t=e.video.snippet;return r.a.createElement(h.a,{className:"SongCard",onClick:function(){return e.onPlay(e.video)}},r.a.createElement(E.a,null,r.a.createElement(b.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:t.thumbnails.standard.url,title:t.title,loading:"lazy"}),r.a.createElement(y.a,{className:"text-left"},r.a.createElement(s.a,{gutterBottom:!0,variant:"h6",component:"p",className:"text-truncate"},t.title.slice(0,70)+" ..."),r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p",className:"text-truncate"},t.description.slice(0,70)+" ...",r.a.createElement("span",{className:"text-muted"},t.channelTitle)))))}$.defaultProps={};var Y=$,Z=(a(148),a(205)),ee=function(){return r.a.createElement(T.a,{position:"fixed"},r.a.createElement(P.a,null,r.a.createElement(U.a,{edge:"start",color:"primary","aria-label":"menu"},r.a.createElement(Z.a,null)),r.a.createElement(s.a,{variant:"h6"},"Music")))};ee.defaultProps={};var te=ee,ae=function(e){var t=r.a.useState(function(){fetch(v.a.mostPopularFake(p.a.youtube)).then(function(e){return e.json()}).then(function(e){o(e.items.map(function(e,t){return r.a.createElement(Y,{onPlay:l,key:t,video:e})}))})}),a=Object(c.a)(t,2),n=a[0],o=a[1];function l(t){(function(e,t){return I.apply(this,arguments)})(p.a.youtube,t.id).then(function(a){return e.appState({uri:a,thumbnail:t.snippet.thumbnails.maxres.url,video:t})})}return r.a.createElement("div",{className:"home"},r.a.createElement(u.a,null),r.a.createElement(te,null),r.a.createElement("div",{style:{marginTop:"5rem"}},r.a.createElement(s.a,{variant:"h5",className:"pl-3 text-left"},"Trending Now"),r.a.createElement(m.a,{maxWidth:"xl",className:"px-0 mx-0"},r.a.createElement("div",{className:"cardSlider Slider"},n))))};ae.defaultProps={};var ne=ae,re=a(56),oe=a(14),le=(a(149),a(197)),ie=a(198),ce=a(199),ue=a(200),se=a(196),me=J()({root:{width:"100%"}}),de=function(){var e=me(),t=r.a.useState("recents"),a=Object(c.a)(t,2),n=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{color:"primary",style:{position:"fixed",top:"auto",bottom:0,width:"100%"},component:"div"},r.a.createElement(se.a,{value:n,onChange:function(e,t){o(t)},className:e.root},r.a.createElement(le.a,{component:re.b,to:"/home",label:"Home",value:"recents",icon:r.a.createElement(ie.a,null)}),r.a.createElement(le.a,{component:re.b,to:"/downloads",label:"Downloads",value:"favorites",icon:r.a.createElement(D.a,null)}),r.a.createElement(le.a,{label:"Nearby",value:"nearby",icon:r.a.createElement(ce.a,null)}),r.a.createElement(le.a,{label:"Folder",value:"folder",icon:r.a.createElement(ue.a,null)}))))};de.defaultProps={};var pe=de,fe=(a(152),a(193)),ve=a(203),he=(a(153),a(209)),Ee=a(201),be=a(208),ye=a(202),ge=J()(function(e){return{inline:{display:"inline"}}}),we=function(e){var t=ge();return r.a.createElement(he.a,{alignItems:"flex-start"},r.a.createElement(Ee.a,null,r.a.createElement(be.a,{alt:e.title,src:e.thumbnail})),r.a.createElement(ye.a,{primary:e.title,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},e.channelTitle),e.tags)}))};we.defaultProps={};var xe=we,ke=J()(function(e){return{root:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}),je=function(){var e=ke(),t=r.a.useState(r.a.createElement(r.a.Fragment,null)),a=Object(c.a)(t,2),o=a[0],l=a[1];function i(){(function(){return O.apply(this,arguments)})().then(function(e){l(function(){return e.map(function(t,a){var n=a=e.length?r.a.createElement("div",null):r.a.createElement(ve.a,{variant:"inset",component:"li"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,{key:a,title:t.title,channelTitle:t.channelTitle,thumbnail:t.thumbnail,tags:t.tags}),n)})})})}return Object(n.useEffect)(function(){i()},[]),r.a.createElement(fe.a,{className:e.root},o)};je.defaultProps={};var Fe=je;var Ne=function(){var e=new Audio(""),t=r.a.useState({audio:e,uri:"",thumbnail:"",video:{snippet:{}},hidden:!0}),a=Object(c.a)(t,2),n=a[0],o=a[1];function l(t){o({audio:e,uri:"",thumbnail:"",video:{snippet:{}},hidden:!0}),t.thumbnail&&t.video&&t.uri?t.hidden=!1:t.hidden=!0,e.src=t.uri,o(Object(i.a)({audio:e},t))}return r.a.createElement(re.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(X,{audio:n.audio,thumbnail:n.thumbnail,video:n.video,hidden:n.hidden}),r.a.createElement(oe.a,{path:"/home",render:function(){return r.a.createElement(ne,{appState:l})}}),r.a.createElement(oe.a,{path:"/downloads",component:Fe}),r.a.createElement(pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},46:function(e,t){e.exports={mostPopular:function(e){return"https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=".concat(e,"&chart=mostPopular")},mostPopularFake:function(e){return"https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/yt-api/yt.json"},getVideo:function(e,t){return"https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".concat(t,"&key=").concat(e)},getVideoFake:function(e,t){return"https://cdn.jsdelivr.net/gh/kabeer11000/sample-response@master/yt-api/video-.json"},getProxyfiedURI:function(e){return"http://localhost:5000/song?id=".concat(e)}}},61:function(e,t){e.exports={youtube:"AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8"}}},[[111,1,2]]]);
//# sourceMappingURL=main.884108f4.chunk.js.map