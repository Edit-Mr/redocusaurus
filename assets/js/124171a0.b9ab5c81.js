(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[752],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1869:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return i},usePluginData:function(){return s}});var r=n(353);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function s(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},579:function(e,t,n){"use strict";var r=n(7378).createContext(void 0);t.Z=r},9237:function(e,t,n){"use strict";var r=n(7378),o=n(579);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},5657:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w},frontMatter:function(){return y},metadata:function(){return v},toc:function(){return b}});var r=n(5773),o=n(808),i=n(7378),s=n(5318),a=n(1869),u=n(9237),c=n(8944),l=n(3169),p=n(200),m=n(138),d=["id","example","pointer"],h=function(e){var t=e.id,n=e.example,s=e.pointer,h=(0,o.Z)(e,d),f=(0,u.Z)().isDarkTheme,g=(0,a.useAllPluginInstancesData)("docusaurus-plugin-redoc"),y=(0,a.usePluginData)("docusaurus-theme-redoc"),v=y.lightTheme,b=y.darkTheme,k=y.redocOptions,w=f?b:v,x=(0,i.useMemo)((function(){var e,n=g[t]||(null==(e=Object.values(g).filter((function(e){return"object"===e.type})))?void 0:e[0]),r=n.specUrl,o=n.content;return"object"===n.type&&o?new p.AppStore(o,r,Object.assign({},k,{theme:w})):(m.warn({allData:g},"[Redocusaurus] ApiSchems needs a spec file to render"),null)}),[t,g,k,w]);return x?i.createElement(l.ThemeProvider,{theme:x.options.theme},i.createElement("div",{className:(0,c.Z)(["redocusaurus","redocusaurus-schema",n?null:"hide-example"])},i.createElement(p.SchemaDefinition,(0,r.Z)({parser:x.spec.parser,options:x.options,schemaRef:s},h)))):null};h.defaultProps={example:!1};var f=h,g=["components"],y={title:"Schema Imports"},v={unversionedId:"guides/schema-imports",id:"guides/schema-imports",isDocsHomePage:!1,title:"Schema Imports",description:"You can import model definitions from your API schema and render them in your Docusaurus Docs. You'll need to create an .mdx file and import the React Component. Read more here about MDX in Docusaurus.",source:"@site/docs/guides/schema-imports.mdx",sourceDirName:"guides",slug:"/guides/schema-imports",permalink:"/redocusaurus/docs/guides/schema-imports",editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/docs/guides/schema-imports.mdx",version:"current",frontMatter:{title:"Schema Imports"},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/redocusaurus/docs/getting-started/Installation"},next:{title:"Server Side Rendering",permalink:"/redocusaurus/docs/guides/server-side-rendering"}},b=[{value:"Results",id:"results",children:[]},{value:"Import Schema Model (with example) in Docs",id:"import-schema-model-with-example-in-docs",children:[{value:"Results",id:"results-1",children:[]}]},{value:"Importing Schema Model with multiple OpenAPI schemas",id:"importing-schema-model-with-multiple-openapi-schemas",children:[{value:"Results",id:"results-2",children:[]}]}],k={toc:b};function w(e){var t=e.components,n=(0,o.Z)(e,g);return(0,s.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can import model definitions from your API schema and render them in your Docusaurus Docs. You'll need to create an ",(0,s.kt)("inlineCode",{parentName:"p"},".mdx")," file and import the React Component. Read more ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/react"},"here about MDX in Docusaurus"),"."),(0,s.kt)("h1",{id:"import-schema-model-in-docs"},"Import Schema Model in Docs"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"pointer")," prop is passed on to ",(0,s.kt)("a",{parentName:"p",href:"https://redoc.ly/docs/resources/ref-guide/#pointer"},"Redoc"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import ApiSchema from '@theme/ApiSchema';\n\n<ApiSchema pointer=\"#/components/schemas/Pet\" />;\n")),(0,s.kt)("h3",{id:"results"},"Results"),(0,s.kt)(f,{pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,s.kt)("h2",{id:"import-schema-model-with-example-in-docs"},"Import Schema Model (with example) in Docs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import ApiSchema from '@theme/ApiSchema';\n\n<ApiSchema example pointer=\"#/components/schemas/Pet\" />;\n")),(0,s.kt)("h3",{id:"results-1"},"Results"),(0,s.kt)(f,{example:!0,pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,s.kt)("h2",{id:"importing-schema-model-with-multiple-openapi-schemas"},"Importing Schema Model with multiple OpenAPI schemas"),(0,s.kt)("p",null,"If you have multiple APIs loaded with redocusaurus, then it is recommended to add ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),"s to the config so that you can refer them when loading schema models."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  presets: [\n    [\n      'redocusaurus',\n      {\n        specs: [\n          {\n            id: 'using-spec-url',\n            specUrl: 'https://redocly.github.io/redoc/openapi.yaml',\n            routePath: '/examples/using-spec-url/',\n          },\n          {\n            id: 'using-relative-url',\n            specUrl: `${process.env.DEPLOY_BASE_URL || '/'}openapi-page.yaml`,\n            routePath: '/examples/using-relative-url/',\n          },\n        ],\n        theme: {\n          /**\n           * Highlight color for docs\n           */\n          primaryColor: '#1890ff',\n          /**\n           * Options to pass to redoc\n           * @see https://github.com/redocly/redoc#redoc-options-object\n           */\n          redocOptions: { hideDownloadButton: false, disableSearch: true },\n        },\n      },\n    ],\n    '@docusaurus/preset-classic',\n  ],\n  title: 'Redocusaurus',\n};\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},'import ApiSchema from \'@theme/ApiSchema\';\n\n<ApiSchema id="using-spec-url" pointer="#/components/schemas/Pet" />;\n<ApiSchema id="using-relative-url" pointer="#/components/schemas/Pet" />;\n')),(0,s.kt)("h3",{id:"results-2"},"Results"),(0,s.kt)("h4",{id:"idusing-spec-url"},(0,s.kt)("inlineCode",{parentName:"h4"},'id="using-spec-url"')),(0,s.kt)(f,{id:"using-spec-url",pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),";",(0,s.kt)("h4",{id:"idusing-relative-url"},(0,s.kt)("inlineCode",{parentName:"h4"},'id="using-relative-url"')),(0,s.kt)(f,{id:"using-relative-url",pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),";")}w.isMDXComponent=!0},8944:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},9184:function(){},8002:function(){},6466:function(){},1632:function(){},1450:function(){}}]);