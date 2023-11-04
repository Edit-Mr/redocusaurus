/*! For license information please see e45aaca6.1c2dc439.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[878],{9949:(s,e,o)=>{"use strict";o(161).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},1550:(s,e,o)=>{"use strict";o.d(e,{Z:()=>a});o(7378);var t=o(8944),r=(o(9949),o(7725)),u=o(6216),n=o(3542),c=o(4246);function i(s){return(0,c.jsx)("div",{className:"redocusaurus-styles"})}const l=function(s){const{className:e,optionsOverrides:o,...u}=s,{store:l,darkThemeOptions:a,lightThemeOptions:d,hasLogo:m}=(0,n.U)(u,o);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{specProps:u,lightThemeOptions:d,darkThemeOptions:a}),(0,c.jsx)("div",{className:(0,t.Z)(["redocusaurus",m&&"redocusaurus-has-logo",e]),children:(0,c.jsx)(r.Redoc,{store:l})})]})};const a=function(s){const{className:e,optionsOverrides:o,spec:n,url:i,themeId:a,isSpecFile:d}=s,{options:m}=(0,u.N)(a,o);return n?(0,c.jsx)(l,{...s,spec:n}):(0,c.jsx)("div",{className:(0,t.Z)(["redocusaurus",e]),children:(0,c.jsx)(r.RedocStandalone,{specUrl:i,options:m})})}},2035:(s,e,o)=>{"use strict";o.d(e,{Z:()=>u,u:()=>r});var t=o(1869);function r(s){var e;const o=(0,t.OD)("docusaurus-plugin-redoc");return s?null==o?void 0:o[s]:null==(e=Object.values(null!=o?o:{}))?void 0:e[0]}const u=r},3542:(s,e,o)=>{"use strict";o.d(e,{U:()=>a});var t=o(7378),r=o(8948),u=o(6457),n=o(5421),c=(o(9949),o(7725)),i=o(6216);let l=null;function a(s,e){let{spec:o,url:a,themeId:d}=s;const m=(0,i.N)(d,e),h=(0,r.Z)(a,{absolute:!0}),p=(0,u.Z)(),f="dark"===(0,n.I)().colorMode,v=(0,t.useMemo)((()=>{var s;return null!==l&&p&&l.dispose(),l=new c.AppStore(o,h,m.options),{...m,hasLogo:!(null==(s=o.info)||!s["x-logo"]),store:l}}),[p,o,h,m]);return(0,t.useEffect)((()=>{v.store.onDidMount()}),[v,p,f]),v}},6216:(s,e,o)=>{"use strict";o.d(e,{N:()=>l});var t=o(7378),r=o(6457),u=o(1869),n=o(5421),c=o(5409),i=o.n(c);o(9949);function l(s,e){void 0===s&&(s="theme-redoc");const o=(0,r.Z)(),c="dark"===(0,n.I)().colorMode,l=(0,u.OD)("docusaurus-theme-redoc",{failfast:!0}),a=(0,u.eZ)("docusaurus-theme-redoc",s)||Object.values(l)[0];return(0,t.useMemo)((()=>{const{lightTheme:s,darkTheme:t,options:r}=a,u={scrollYOffset:o||"string"!=typeof r.scrollYOffset?r.scrollYOffset:0},n=i()({...r,...u,theme:s},e),l=i()({...r,...u,theme:t},e);return{options:o&&c?l:n,darkThemeOptions:l,lightThemeOptions:n}}),[o,c,a,e])}},7765:(s,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});o(7378);var t=o(8788),r=o(1550),u=o(2035),n=o(4246);const c=function(){const s=(0,u.Z)("using-custom-layout");return(0,n.jsx)(t.Z,{title:"Custom Layout Docs",description:"Example showing custom layout",children:(0,n.jsx)(r.Z,{...s})})}},9184:()=>{},6016:()=>{},3715:()=>{},259:()=>{},3421:()=>{},8002:()=>{},7622:()=>{}}]);