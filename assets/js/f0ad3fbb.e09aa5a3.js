/*! For license information please see f0ad3fbb.e09aa5a3.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[969],{93985:(e,s,o)=>{"use strict";o(16655).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},64852:(e,s,o)=>{"use strict";o.r(s),o.d(s,{default:()=>c});o(63696);var t=o(62035),r=o(8432),n=o(62540);const c=function(e){var s,o;let{layoutProps:c,specProps:u}=e;const i=(null==(s=u.spec)||null==(s=s.info)?void 0:s.title)||"API Docs",l=(null==(o=u.spec)||null==(o=o.info)?void 0:o.description)||"Open API Reference Docs for the API";return(0,n.jsx)(t.A,{title:i,description:l,...c,children:(0,n.jsx)(r.A,{...u})})}},8432:(e,s,o)=>{"use strict";o.d(s,{A:()=>d});o(63696);var t=o(68017),r=(o(93985),o(57654)),n=o(14358),c=o(59598),u=o(62540);function i(e){return(0,u.jsx)("div",{className:"redocusaurus-styles"})}const l=function(e){const{className:s,optionsOverrides:o,...n}=e,{store:l,darkThemeOptions:d,lightThemeOptions:a,hasLogo:p}=(0,c.r)(n,o);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{specProps:n,lightThemeOptions:a,darkThemeOptions:d}),(0,u.jsx)("div",{className:(0,t.A)(["redocusaurus",p&&"redocusaurus-has-logo",s]),children:(0,u.jsx)(r.Redoc,{store:l})})]})};const d=function(e){const{className:s,optionsOverrides:o,spec:c,url:i,themeId:d,isSpecFile:a}=e,{options:p}=(0,n.X)(d,o);return c?(0,u.jsx)(l,{...e,spec:c}):(0,u.jsx)("div",{className:(0,t.A)(["redocusaurus",s]),children:(0,u.jsx)(r.RedocStandalone,{specUrl:i,options:p})})}},59598:(e,s,o)=>{"use strict";o.d(s,{r:()=>d});var t=o(63696),r=o(10883),n=o(86681),c=o(72363),u=(o(93985),o(57654)),i=o(14358);let l=null;function d(e,s){let{spec:o,url:d,themeId:a}=e;const p=(0,i.X)(a,s),h=(0,r.A)(d,{absolute:!0}),m=(0,n.A)(),f="dark"===(0,c.G)().colorMode,v=(0,t.useMemo)((()=>{var e;return null!==l&&m&&l.dispose(),l=new u.AppStore(o,h,p.options),{...p,hasLogo:!(null==(e=o.info)||!e["x-logo"]),store:l}}),[m,o,h,p]);return(0,t.useEffect)((()=>{v.store.onDidMount()}),[v,m,f]),v}},14358:(e,s,o)=>{"use strict";o.d(s,{X:()=>l});var t=o(63696),r=o(86681),n=o(25466),c=o(72363),u=o(25632),i=o.n(u);o(93985);function l(e,s){void 0===e&&(e="theme-redoc");const o=(0,r.A)(),u="dark"===(0,c.G)().colorMode,l=(0,n.kh)("docusaurus-theme-redoc",{failfast:!0}),d=(0,n.P_)("docusaurus-theme-redoc",e)||Object.values(l)[0];return(0,t.useMemo)((()=>{const{lightTheme:e,darkTheme:t,options:r}=d,n={scrollYOffset:o||"string"!=typeof r.scrollYOffset?r.scrollYOffset:0},c=i()({...r,...n,theme:e},s),l=i()({...r,...n,theme:t},s);return{options:o&&u?l:c,darkThemeOptions:l,lightThemeOptions:c}}),[o,u,d,s])}},16820:()=>{},59990:()=>{},3836:()=>{},94033:()=>{},35725:()=>{},67279:()=>{},78237:()=>{}}]);