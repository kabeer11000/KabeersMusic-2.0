(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{233:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=(a(371),a(265)),i=a(267),c=a(266),l=a(236),s=Object(l.a)(o.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu"),d=Object(l.a)(o.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),u=a(224),p=a(71),m=a(73),f=a(30),g=a(150),b=a(29),v=(a(372),a(306)),h=a(145),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(b.a)({},e,{direction:"down",appear:!1}),t=e.children,a=e.window,r=Object(v.a)({target:a?a():void 0});return o.a.createElement(h.a,{appear:e.appear,direction:e.direction,in:!r},t)};y.defaultProps={};var O=y,j=(Object(g.a)({appBar:{width:"100vw"}}),function(e){return o.a.createElement(O,null,o.a.createElement(n.a,{position:"fixed"},o.a.createElement(i.a,null,o.a.createElement(c.a,{onClick:function(){m.a.dispatch(Object(f.h)(!0))},edge:"start",style:{color:"#FFFFFF"},"aria-label":"menu"},o.a.createElement(s,null)),o.a.createElement(u.a,{style:{color:"#FFFFFF"},variant:"h6"},e.title||"Music"),o.a.createElement("div",{style:{flex:"1 1 auto"}}),o.a.createElement(c.a,{edge:"start",style:{color:"#FFFFFF"},"aria-label":"Search",component:p.b,to:"/search"},o.a.createElement(d,null)))))});j.defaultProps={};t.default=j},236:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(1),o=a(0),n=a.n(o),i=a(44);function c(e,t){var a=n.a.memo(n.a.forwardRef(function(t,a){return n.a.createElement(i.a,Object(r.a)({ref:a},t),e)}));return a.muiName=i.a.muiName,a}},265:function(e,t,a){"use strict";var r=a(1),o=a(2),n=a(0),i=(a(5),a(3)),c=a(4),l=a(6),s=a(83),d=n.forwardRef(function(e,t){var a=e.classes,c=e.className,d=e.color,u=void 0===d?"primary":d,p=e.position,m=void 0===p?"fixed":p,f=Object(o.a)(e,["classes","className","color","position"]);return n.createElement(s.a,Object(r.a)({square:!0,component:"header",elevation:4,className:Object(i.a)(a.root,a["position".concat(Object(l.a)(m))],a["color".concat(Object(l.a)(u))],c,"fixed"===m&&"mui-fixed"),ref:t},f))});t.a=Object(c.a)(function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}},{name:"MuiAppBar"})(d)},266:function(e,t,a){"use strict";var r=a(1),o=a(2),n=a(0),i=(a(5),a(3)),c=a(4),l=a(18),s=a(158),d=a(6),u=n.forwardRef(function(e,t){var a=e.edge,c=void 0!==a&&a,l=e.children,u=e.classes,p=e.className,m=e.color,f=void 0===m?"default":m,g=e.disabled,b=void 0!==g&&g,v=e.disableFocusRipple,h=void 0!==v&&v,y=e.size,O=void 0===y?"medium":y,j=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(s.a,Object(r.a)({className:Object(i.a)(u.root,p,"default"!==f&&u["color".concat(Object(d.a)(f))],b&&u.disabled,"small"===O&&u["size".concat(Object(d.a)(O))],{start:u.edgeStart,end:u.edgeEnd}[c]),centerRipple:!0,focusRipple:!h,disabled:b,ref:t},j),n.createElement("span",{className:u.label},l))});t.a=Object(c.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.d)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(u)},267:function(e,t,a){"use strict";var r=a(1),o=a(2),n=a(10),i=a(0),c=(a(5),a(3)),l=a(4),s=i.forwardRef(function(e,t){var a=e.classes,n=e.className,l=e.component,s=void 0===l?"div":l,d=e.disableGutters,u=void 0!==d&&d,p=e.variant,m=void 0===p?"regular":p,f=Object(o.a)(e,["classes","className","component","disableGutters","variant"]);return i.createElement(s,Object(r.a)({className:Object(c.a)(a.root,a[m],n,!u&&a.gutters),ref:t},f))});t.a=Object(l.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(n.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}},{name:"MuiToolbar"})(s)},306:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(1),o=a(2),n=a(0);function i(e,t){var a=t.disableHysteresis,r=void 0!==a&&a,o=t.threshold,n=void 0===o?100:o,i=t.target,c=e.current;return i&&(e.current=void 0!==i.pageYOffset?i.pageYOffset:i.scrollTop),!(!r&&void 0!==c&&e.current<c)&&e.current>n}var c="undefined"!==typeof window?window:null;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,a=void 0===t?i:t,l=e.target,s=void 0===l?c:l,d=Object(o.a)(e,["getTrigger","target"]),u=n.useRef(),p=n.useState(function(){return a(u,d)}),m=p[0],f=p[1];return n.useEffect(function(){var e=function(){f(a(u,Object(r.a)({target:s},d)))};return e(),s.addEventListener("scroll",e),function(){s.removeEventListener("scroll",e)}},[s,a,JSON.stringify(d)]),m}},371:function(e,t,a){},372:function(e,t,a){}}]);
//# sourceMappingURL=14.642a3c04.chunk.js.map