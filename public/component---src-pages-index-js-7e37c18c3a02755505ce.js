(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6Gk8":function(t,e,n){"use strict";var r=n("DZdY"),a=(n("q1tI"),n("Wbzz")),i=n("9eSz"),o=n.n(i),c=n("p3AD"),f=n("AeFk");e.a=function(){var t=Object(a.useStaticQuery)("461510332"),e=t.site.siteMetadata,n=e.author,i=(e.social,Object(r.a)("div",{target:"e28a7030",label:"StyledDiv"})({name:"10dyfcc",styles:"display:flex;margin-top:rhythm(0.5);marginbottom:rhythm(2.5)"}));return Object(f.b)(i,null,Object(f.b)(o.a,{fixed:t.avatar.childImageSharp.fixed,alt:n.name,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:100,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),Object(f.b)("p",null,n.name," ",n.summary," "))}},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("6Gk8"),c=n("Bl7J"),f=n("DZdY"),u=n("k1TG"),l=n("aXB2"),d=n("iuhU"),s=n("ucgz");n("RUBk");function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=n("2+6g"),g=["xs","sm","md","lg","xl"];function h(t){var e=t.values,n=void 0===e?{xs:0,sm:600,md:960,lg:1280,xl:1920}:e,r=t.unit,a=void 0===r?"px":r,i=t.step,o=void 0===i?5:i,c=Object(l.a)(t,["values","unit","step"]);function f(t){var e="number"==typeof n[t]?n[t]:t;return"@media (min-width:".concat(e).concat(a,")")}function d(t,e){var r=g.indexOf(e);return r===g.length-1?f(t):"@media (min-width:".concat("number"==typeof n[t]?n[t]:t).concat(a,") and ")+"(max-width:".concat((-1!==r&&"number"==typeof n[g[r+1]]?n[g[r+1]]:e)-o/100).concat(a,")")}return Object(u.a)({keys:g,values:n,up:f,down:function(t){var e=g.indexOf(t)+1,r=n[g[e]];return e===g.length?f("xs"):"@media (max-width:".concat(("number"==typeof r&&e>0?r:t)-o/100).concat(a,")")},between:d,only:function(t){return d(t,t)},width:function(t){return n[t]}},c)}function m(t,e,n){var r;return Object(u.a)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.a)({paddingLeft:e(2),paddingRight:e(2)},n,b({},t.up("sm"),Object(u.a)({paddingLeft:e(3),paddingRight:e(3)},n[t.up("sm")])))},toolbar:(r={minHeight:56},b(r,"".concat(t.up("xs")," and (orientation: landscape)"),{minHeight:48}),b(r,t.up("sm"),{minHeight:64}),r)},n)}function v(t){for(var e="https://material-ui.com/production-error/?code="+t,n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+t+"; visit "+e+" for the full message."}var y={black:"#000",white:"#fff"},O={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},x={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},j={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},A={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},w={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},k={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},S={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(e,t),n)}function z(t){if(t.type)return t;if("#"===t.charAt(0))return z(function(t){t=t.substr(1);var e=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),n=t.match(e);return n&&1===n[0].length&&(n=n.map((function(t){return t+t}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(t,e){return e<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3})).join(", "),")"):""}(t));var e=t.indexOf("("),n=t.substring(0,e);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(v(3,t));var r=t.substring(e+1,t.length-1).split(",");return{type:n,values:r=r.map((function(t){return parseFloat(t)}))}}function R(t){var e=t.type,n=t.values;return-1!==e.indexOf("rgb")?n=n.map((function(t,e){return e<3?parseInt(t,10):t})):-1!==e.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(e,"(").concat(n.join(", "),")")}function T(t){var e="hsl"===(t=z(t)).type?z(function(t){var e=(t=z(t)).values,n=e[0],r=e[1]/100,a=e[2]/100,i=r*Math.min(a,1-a),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(t+n/30)%12;return a-i*Math.max(Math.min(e-3,9-e,1),-1)},c="rgb",f=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===t.type&&(c+="a",f.push(e[3])),R({type:c,values:f})}(t)).values:t.values;return e=e.map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function B(t,e){if(t=z(t),e=M(e),-1!==t.type.indexOf("hsl"))t.values[2]*=1-e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]*=1-e;return R(t)}function I(t,e){if(t=z(t),e=M(e),-1!==t.type.indexOf("hsl"))t.values[2]+=(100-t.values[2])*e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;return R(t)}var W={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:y.white,default:O[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},E={text:{primary:y.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:O[800],default:"#303030"},action:{active:y.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function F(t,e,n,r){var a=r.light||r,i=r.dark||1.5*r;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:"light"===e?t.light=I(t.main,a):"dark"===e&&(t.dark=B(t.main,i)))}function L(t){var e=t.primary,n=void 0===e?{light:x[300],main:x[500],dark:x[700]}:e,r=t.secondary,a=void 0===r?{light:j.A200,main:j.A400,dark:j.A700}:r,i=t.error,o=void 0===i?{light:A[300],main:A[500],dark:A[700]}:i,c=t.warning,f=void 0===c?{light:w[300],main:w[500],dark:w[700]}:c,d=t.info,s=void 0===d?{light:k[300],main:k[500],dark:k[700]}:d,b=t.success,g=void 0===b?{light:S[300],main:S[500],dark:S[700]}:b,h=t.type,m=void 0===h?"light":h,M=t.contrastThreshold,z=void 0===M?3:M,R=t.tonalOffset,B=void 0===R?.2:R,I=Object(l.a)(t,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function L(t){return function(t,e){var n=T(t),r=T(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(t,E.text.primary)>=z?E.text.primary:W.text.primary}var C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(t=Object(u.a)({},t)).main&&t[e]&&(t.main=t[e]),!t.main)throw new Error(v(4,e));if("string"!=typeof t.main)throw new Error(v(5,JSON.stringify(t.main)));return F(t,"light",n,B),F(t,"dark",r,B),t.contrastText||(t.contrastText=L(t.main)),t},H={dark:E,light:W};return Object(p.a)(Object(u.a)({common:y,type:m,primary:C(n),secondary:C(a,"A400","A200","A700"),error:C(o),warning:C(f),info:C(s),success:C(g),grey:O,contrastThreshold:z,getContrastText:L,augmentColor:C,tonalOffset:B},H[m]),I)}function C(t){return Math.round(1e5*t)/1e5}var H={textTransform:"uppercase"};function N(t,e){var n="function"==typeof e?e(t):e,r=n.fontFamily,a=void 0===r?'"Roboto", "Helvetica", "Arial", sans-serif':r,i=n.fontSize,o=void 0===i?14:i,c=n.fontWeightLight,f=void 0===c?300:c,d=n.fontWeightRegular,s=void 0===d?400:d,b=n.fontWeightMedium,g=void 0===b?500:b,h=n.fontWeightBold,m=void 0===h?700:h,v=n.htmlFontSize,y=void 0===v?16:v,O=n.allVariants,x=n.pxToRem,j=Object(l.a)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var A=o/14,w=x||function(t){return"".concat(t/y*A,"rem")},k=function(t,e,n,r,i){return Object(u.a)({fontFamily:a,fontWeight:t,fontSize:w(e),lineHeight:n},'"Roboto", "Helvetica", "Arial", sans-serif'===a?{letterSpacing:"".concat(C(r/e),"em")}:{},i,O)},S={h1:k(f,96,1.167,-1.5),h2:k(f,60,1.2,-.5),h3:k(s,48,1.167,0),h4:k(s,34,1.235,.25),h5:k(s,24,1.334,0),h6:k(g,20,1.6,.15),subtitle1:k(s,16,1.75,.15),subtitle2:k(g,14,1.57,.1),body1:k(s,16,1.5,.15),body2:k(s,14,1.43,.15),button:k(g,14,1.75,.4,H),caption:k(s,12,1.66,.4),overline:k(s,12,2.66,1,H)};return Object(p.a)(Object(u.a)({htmlFontSize:y,pxToRem:w,round:C,fontFamily:a,fontSize:o,fontWeightLight:f,fontWeightRegular:s,fontWeightMedium:g,fontWeightBold:m},S),j,{clone:!1})}function D(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var X=["none",D(0,2,1,-1,0,1,1,0,0,1,3,0),D(0,3,1,-2,0,2,2,0,0,1,5,0),D(0,3,3,-2,0,3,4,0,0,1,8,0),D(0,2,4,-1,0,4,5,0,0,1,10,0),D(0,3,5,-1,0,5,8,0,0,1,14,0),D(0,3,5,-1,0,6,10,0,0,1,18,0),D(0,4,5,-2,0,7,10,1,0,2,16,1),D(0,5,5,-3,0,8,10,1,0,3,14,2),D(0,5,6,-3,0,9,12,1,0,3,16,2),D(0,6,6,-3,0,10,14,1,0,4,18,3),D(0,6,7,-4,0,11,15,1,0,4,20,3),D(0,7,8,-4,0,12,17,2,0,5,22,4),D(0,7,8,-4,0,13,19,2,0,5,24,4),D(0,7,9,-4,0,14,21,2,0,5,26,4),D(0,8,9,-5,0,15,22,2,0,6,28,5),D(0,8,10,-5,0,16,24,2,0,6,30,5),D(0,8,11,-5,0,17,26,2,0,6,32,5),D(0,9,11,-5,0,18,28,2,0,7,34,6),D(0,9,12,-6,0,19,29,2,0,7,36,6),D(0,10,13,-6,0,20,31,3,0,8,38,7),D(0,10,13,-6,0,21,33,3,0,8,40,7),D(0,10,14,-6,0,22,35,3,0,8,42,7),D(0,11,14,-7,0,23,36,3,0,9,44,8),D(0,11,15,-7,0,24,38,3,0,9,46,8)],P={borderRadius:4};var Y=n("sXA6");function U(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(f){a=!0,i=f}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(t,e)||Object(Y.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n("t8Zj");var J=n("0QZy");n("17x9");var Z=function(t,e){return e?Object(p.a)(t,e,{clone:!1}):t},G={xs:0,sm:600,md:960,lg:1280,xl:1920},V={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(G[t],"px)")}};var q,Q,_={m:"margin",p:"padding"},K={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},$={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},tt=(q=function(t){if(t.length>2){if(!$[t])return[t];t=$[t]}var e=U(t.split(""),2),n=e[0],r=e[1],a=_[n],i=K[r]||"";return Array.isArray(i)?i.map((function(t){return a+t})):[a+i]},Q={},function(t){return void 0===Q[t]&&(Q[t]=q(t)),Q[t]}),et=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function nt(t){var e=t.spacing||8;return"number"==typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"==typeof e?e:function(){}}function rt(t,e){return function(n){return t.reduce((function(t,r){return t[r]=function(t,e){if("string"==typeof e)return e;var n=t(Math.abs(e));return e>=0?n:"number"==typeof n?-n:"-".concat(n)}(e,n),t}),{})}}function at(t){var e=nt(t.theme);return Object.keys(t).map((function(n){if(-1===et.indexOf(n))return null;var r=rt(tt(n),e),a=t[n];return function(t,e,n){if(Array.isArray(e)){var r=t.theme.breakpoints||V;return e.reduce((function(t,a,i){return t[r.up(r.keys[i])]=n(e[i]),t}),{})}if("object"===Object(J.a)(e)){var a=t.theme.breakpoints||V;return Object.keys(e).reduce((function(t,r){return t[a.up(r)]=n(e[r]),t}),{})}return n(e)}(t,a,r)})).reduce(Z,{})}at.propTypes={},at.filterProps=et;function it(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(t.mui)return t;var e=nt({spacing:t}),n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 0===n.length?e(1):1===n.length?e(n[0]):n.map((function(t){if("string"==typeof t)return t;var n=e(t);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return t}}),n.mui=!0,n}var ot={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},ct={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ft(t){return"".concat(Math.round(t),"ms")}var ut={easing:ot,duration:ct,create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,r=void 0===n?ct.standard:n,a=e.easing,i=void 0===a?ot.easeInOut:a,o=e.delay,c=void 0===o?0:o;Object(l.a)(e,["duration","easing","delay"]);return(Array.isArray(t)?t:[t]).map((function(t){return"".concat(t," ").concat("string"==typeof r?r:ft(r)," ").concat(i," ").concat("string"==typeof c?c:ft(c))})).join(",")},getAutoHeightDuration:function(t){if(!t)return 0;var e=t/36;return Math.round(10*(4+15*Math.pow(e,.25)+e/5))}},lt={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var dt=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.breakpoints,n=void 0===e?{}:e,r=t.mixins,a=void 0===r?{}:r,i=t.palette,o=void 0===i?{}:i,c=t.spacing,f=t.typography,u=void 0===f?{}:f,d=Object(l.a)(t,["breakpoints","mixins","palette","spacing","typography"]),s=L(o),b=h(n),g=it(c),v=Object(p.a)({breakpoints:b,direction:"ltr",mixins:m(b,g,a),overrides:{},palette:s,props:{},shadows:X,typography:N(s,u),spacing:g,shape:P,transitions:ut,zIndex:lt},d),y=arguments.length,O=new Array(y>1?y-1:0),x=1;x<y;x++)O[x-1]=arguments[x];return v=O.reduce((function(t,e){return Object(p.a)(t,e)}),v)}();var st=function(t,e){return Object(s.a)(t,Object(u.a)({defaultTheme:dt},e))};function bt(t){if("string"!=typeof t)throw new Error(v(7));return t.charAt(0).toUpperCase()+t.slice(1)}var pt=r.forwardRef((function(t,e){var n=t.children,a=t.classes,i=t.className,o=t.color,c=void 0===o?"inherit":o,f=t.component,s=void 0===f?"svg":f,b=t.fontSize,p=void 0===b?"default":b,g=t.htmlColor,h=t.titleAccess,m=t.viewBox,v=void 0===m?"0 0 24 24":m,y=Object(l.a)(t,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return r.createElement(s,Object(u.a)({className:Object(d.a)(a.root,i,"inherit"!==c&&a["color".concat(bt(c))],"default"!==p&&a["fontSize".concat(bt(p))]),focusable:"false",viewBox:v,color:g,"aria-hidden":!h||void 0,role:h?"img":void 0,ref:e},y),n,h?r.createElement("title",null,h):null)}));pt.muiName="SvgIcon";var gt=st((function(t){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:t.typography.pxToRem(24),transition:t.transitions.create("fill",{duration:t.transitions.duration.shorter})},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorAction:{color:t.palette.action.active},colorError:{color:t.palette.error.main},colorDisabled:{color:t.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:t.typography.pxToRem(20)},fontSizeLarge:{fontSize:t.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(pt);function ht(t,e){var n=function(e,n){return a.a.createElement(gt,Object(u.a)({ref:n},e),t)};return n.muiName=gt.muiName,a.a.memo(a.a.forwardRef(n))}var mt=ht(r.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"})),vt=ht(r.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})),yt=ht(r.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})),Ot=n("AeFk");var xt=Object(f.a)("div",{target:"eosssa50",label:"PositionedBar"})({name:"12b1dao",styles:"position:absolute;color:#292859;top:2rem;right:1rem;display:flex;flex-direction:column;a{box-shadow:none;padding-right:10px;}"}),jt=function(t){return Object(Ot.b)(xt,null,Object(Ot.b)("a",{href:t.twitter},Object(Ot.b)(mt,null)),Object(Ot.b)("a",{href:t.linkedin},Object(Ot.b)(vt,null)),Object(Ot.b)("a",{href:t.github},Object(Ot.b)(yt,null)))},At=n("vrFN"),wt=n("p3AD");e.default=function(t){var e=t.data,n=t.location,r=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,f=e.site.siteMetadata.social;return Object(Ot.b)(c.a,{location:n,title:r},Object(Ot.b)(At.a,{title:"All posts"}),Object(Ot.b)(jt,f),Object(Ot.b)(o.a,null),a.map((function(t){var e=t.node,n=e.frontmatter.title||e.fields.slug;return Object(Ot.b)("article",{key:e.fields.slug},Object(Ot.b)("header",null,Object(Ot.b)("h3",{style:{marginBottom:Object(wt.a)(1/4)}},Object(Ot.b)(i.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),Object(Ot.b)("small",null,e.frontmatter.date)),Object(Ot.b)("section",null,Object(Ot.b)("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}})))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7e37c18c3a02755505ce.js.map