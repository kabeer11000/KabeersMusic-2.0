(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{269:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=(n(40),n(16)),o=n(28),l=n(194),c=n(77),u=n(196),m=n(252),p=n(255),s=n(0),d=n.n(s),g=n(62),f=Object(g.a)(d.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),E=n(78),S=n(38),y=n(63),b=n(272),h=Object(y.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement}})(function(e){if(!e.componentState.MiniPlayer)return d.a.createElement(d.a.Fragment,null);var t=d.a.useState(e.audioElement.currentTime),n=Object(o.a)(t,2),a=n[0],l=n[1];function c(e){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:isFinite(n)&&(e.audioElement.currentTime=n,E.a.dispatch(Object(S.e)(e.audioElement,E.a.getState().currentSong.videoElement,E.a.getState().currentSong.componentState,E.a.getState().currentSong.reOpenDialog,E.a.getState().currentSong.playList)));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(s.useEffect)(function(){e.componentState.MiniPlayer&&setInterval(function(){return!e.audioElement.paused&&e.componentState.MiniPlayer?l(e.audioElement.currentTime):null},1e3)},[]),d.a.createElement(b.a,{className:"p-0 m-0",defaultValue:0,value:a,min:0,color:"primary",max:e.audioElement.duration,valueLabelDisplay:"auto",onChangeCommitted:function(){var e=Object(i.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c(n));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()})});t.default=Object(y.b)(function(e){return{componentState:e.currentSong.componentState,audioElement:e.currentSong.audioElement,videoElement:e.currentSong.videoElement,reOpenDialog:e.currentSong.reOpenDialog,playList:e.currentSong.playList}})(function(e){if(e.hidden)return d.a.createElement(d.a.Fragment,null);var t=e.componentState,n=e.audioElement,a=e.videoElement,r=d.a.useState(d.a.createElement(u.a,{onClick:b},d.a.createElement(m.a,{color:"#fff"}))),i=Object(o.a)(r,2),g=i[0],y=i[1];function b(){n.pause(),y(d.a.createElement(u.a,{onClick:O},d.a.createElement(p.a,{color:"#fff"})))}function O(){n.play(),y(d.a.createElement(u.a,{onClick:b},d.a.createElement(m.a,{color:"#fff"})))}return Object(s.useEffect)(function(){document.addEventListener("swiped-up",function(t){e.reOpenDialog(),E.a.dispatch(Object(S.e)(n,a,{Dialog:!0,MiniPlayer:!1},e.reOpenDialog,e.playList)),e.componentState.Dialog&&E.a.getState().currentSong.reOpenDialog()})}),!t.dialog&&t.MiniPlayer&&null!==n?d.a.createElement(l.a,{color:"primary.miniPlayer.main",style:{position:"fixed",top:"auto",bottom:"3.5rem",width:"100%"},component:"div",elevation:1,className:"d-inline-flex KabeersMiniPlayerContainer"},d.a.createElement("div",{className:"d-inline-flex"},d.a.createElement("div",{onClick:function(){e.reOpenDialog(),E.a.dispatch(Object(S.e)(n,a,{Dialog:!0,MiniPlayer:!1},e.reOpenDialog,e.playList)),e.componentState.Dialog&&E.a.getState().currentSong.reOpenDialog()},className:"d-inline-flex"},d.a.createElement("img",{src:a.snippet.thumbnails.high.url,style:{width:"4rem",height:"3rem",maxWidth:"5rem!important",maxHeight:"4rem!important"},alt:"Song Image",className:"KabeersMiniPlayerImage"}),d.a.createElement(c.a,{component:"span",className:"text-truncate p-2 KabeersMiniPlayerText",color:"#000",style:{width:"10em",color:"primary.miniPlayer.text"}},a.snippet.title||"Untitled")),d.a.createElement("div",{className:"float-right ml-auto"},g,d.a.createElement(u.a,{onClick:function(){n.pause(),E.a.dispatch(Object(S.e)(new Audio(""),a,{Dialog:!1,MiniPlayer:!1},e.reOpenDialog,e.playList))}},d.a.createElement(f,null)))),d.a.createElement(h,null)):d.a.createElement(d.a.Fragment,null)})}}]);
//# sourceMappingURL=14.c91b8d59.chunk.js.map