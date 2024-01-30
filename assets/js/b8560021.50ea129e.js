"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9536],{85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(87462),a=r(67294),o=r(86010),s=r(12466),i=r(16550),l=r(91980),u=r(67392),p=r(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:r,groupId:n}),[c,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=l??c;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var g=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function S(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==i&&(c(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,o.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(S,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function h(e){const t=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},46300:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(50012);function o(e){let{path:t}=e;const[r]=(0,a.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),s=t.slice(o+1,t.length-1),[i,l]=s.split(","),u=t.slice(0,o);return n.createElement("code",null,u+("js"===r?i:l))}},48863:(e,t,r)=>{r.d(t,{A:()=>s,v:()=>i});var n=r(67294),a=r(50012),o=r(49875);function s(e){let{children:t}=e;const[r]=(0,a.Nk)("docusaurus.tab.js-ts");return"ts"===r&&n.createElement(o.Z,null,t)}function i(e){let{children:t}=e;const[r]=(0,a.Nk)("docusaurus.tab.js-ts");return"js"===r&&n.createElement(o.Z,null,t)}},27185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=(r(46300),r(85162)),s=r(74866),i=r(48863);const l={title:"Server Config"},u=void 0,p={unversionedId:"project/server-config",id:"version-0.11.8/project/server-config",title:"Server Config",description:"You can configure the behavior of the server via the server field of app declaration:",source:"@site/versioned_docs/version-0.11.8/project/server-config.md",sourceDirName:"project",slug:"/project/server-config",permalink:"/docs/project/server-config",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/project/server-config.md",tags:[],version:"0.11.8",frontMatter:{title:"Server Config"},sidebar:"docs",previous:{title:"Client Config",permalink:"/docs/project/client-config"},next:{title:"Static Asset Handling",permalink:"/docs/project/static-assets"}},c={},m=[{value:"Setup Function",id:"setup-function",level:2},{value:"Adding a Custom Route",id:"adding-a-custom-route",level:3},{value:"Storing Some Values for Later Use",id:"storing-some-values-for-later-use",level:3},{value:"Middleware Config Function",id:"middleware-config-function",level:2},{value:"API Reference",id:"api-reference",level:2}],d={toc:m},f="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can configure the behavior of the server via the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," field of ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," declaration:"),(0,a.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  server: {\n    setupFn: import { mySetupFunction } from "@server/myServerSetupCode.js",\n    middlewareConfigFn: import { myMiddlewareConfigFn } from "@server/myServerSetupCode.js"\n  }\n}\n'))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  server: {\n    setupFn: import { mySetupFunction } from "@server/myServerSetupCode.js",\n    middlewareConfigFn: import { myMiddlewareConfigFn } from "@server/myServerSetupCode.js"\n  }\n}\n')))),(0,a.kt)("h2",{id:"setup-function"},"Setup Function"),(0,a.kt)(i.A,{mdxType:"ShowForTs"},(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setupFn")," declares a Typescript function that will be executed on server start.")),(0,a.kt)(i.v,{mdxType:"ShowForJs"},(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setupFn")," declares a Javascript function that will be executed on server start.")),(0,a.kt)("h3",{id:"adding-a-custom-route"},"Adding a Custom Route"),(0,a.kt)("p",null,"As an example, adding a custom route would look something like:"),(0,a.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/myServerSetupCode.ts"',title:'"src/server/myServerSetupCode.ts"'},"export const mySetupFunction = async ({ app }) => {\n  addCustomRoute(app)\n}\n\nfunction addCustomRoute(app) {\n  app.get('/customRoute', (_req, res) => {\n    res.send('I am a custom route')\n  })\n}\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/myServerSetupCode.ts"',title:'"src/server/myServerSetupCode.ts"'},"import { ServerSetupFn, Application } from '@wasp/types'\n\nexport const mySetupFunction: ServerSetupFn = async ({ app }) => {\n  addCustomRoute(app)\n}\n\nfunction addCustomRoute(app: Application) {\n  app.get('/customRoute', (_req, res) => {\n    res.send('I am a custom route')\n  })\n}\n")))),(0,a.kt)("h3",{id:"storing-some-values-for-later-use"},"Storing Some Values for Later Use"),(0,a.kt)("p",null,"In case you want to store some values for later use, or to be accessed by the ",(0,a.kt)("a",{parentName:"p",href:"../data-model/operations/overview"},"Operations")," you do that in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setupFn")," function."),(0,a.kt)("p",null,"Dummy example of such function and its usage:"),(0,a.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/myServerSetupCode.js"',title:'"src/server/myServerSetupCode.js"'},"let someResource = undefined\n\nexport const mySetupFunction = async () => {\n  // Let's pretend functions setUpSomeResource and startSomeCronJob\n  // are implemented below or imported from another file.\n  someResource = await setUpSomeResource()\n  startSomeCronJob()\n}\n\nexport const getSomeResource = () => someResource\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/queries.js"',title:'"src/server/queries.js"'},"import { getSomeResource } from './myServerSetupCode.js'\n\n...\n\nexport const someQuery = async (args, context) => {\n  const someResource = getSomeResource()\n  return queryDataFromSomeResource(args, someResource)\n}\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/myServerSetupCode.ts"',title:'"src/server/myServerSetupCode.ts"'},"import { ServerSetupFn } from '@wasp/types'\n\nlet someResource = undefined\n\nexport const mySetupFunction: ServerSetupFn = async () => {\n  // Let's pretend functions setUpSomeResource and startSomeCronJob\n  // are implemented below or imported from another file.\n  someResource = await setUpSomeResource()\n  startSomeCronJob()\n}\n\nexport const getSomeResource = () => someResource\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/queries.ts"',title:'"src/server/queries.ts"'},"import { SomeQuery } from '@wasp/queries/types'\nimport { getSomeResource } from './myServerSetupCode.js'\n\n...\n\nexport const someQuery: SomeQuery<...> = async (args, context) => {\n  const someResource = getSomeResource()\n  return queryDataFromSomeResource(args, someResource)\n}\n")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The recommended way is to put the variable in the same module where you defined the setup function and then expose additional functions for reading those values, which you can then import directly from Operations and use."),(0,a.kt)("p",{parentName:"admonition"},"This effectively turns your module into a singleton whose construction is performed on server start.")),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"#setupfn-serverimport"},"server setup function")," below."),(0,a.kt)("h2",{id:"middleware-config-function"},"Middleware Config Function"),(0,a.kt)("p",null,"You can configure the global middleware via the ",(0,a.kt)("inlineCode",{parentName:"p"},"middlewareConfigFn"),". This will modify the middleware stack for all operations and APIs."),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"#middlewareconfigfn-serverimport"},"middleware config function")," below."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  server: {\n    setupFn: import { mySetupFunction } from "@server/myServerSetupCode.js",\n    middlewareConfigFn: import { myMiddlewareConfigFn } from "@server/myServerSetupCode.js"\n  }\n}\n'))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  server: {\n    setupFn: import { mySetupFunction } from "@server/myServerSetupCode.js",\n    middlewareConfigFn: import { myMiddlewareConfigFn } from "@server/myServerSetupCode.js"\n  }\n}\n')))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app.server")," is a dictionary with the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"setupfn-serverimport"},(0,a.kt)("inlineCode",{parentName:"h4"},"setupFn: ServerImport")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"setupFn")," declares a ",(0,a.kt)(i.A,{mdxType:"ShowForTs"},"Typescript"),(0,a.kt)(i.v,{mdxType:"ShowForJs"},"Javascript")," function that will be executed on server start. This function is expected to be async and will be awaited before the server starts accepting any requests."),(0,a.kt)("p",{parentName:"li"},"It allows you to do any custom setup, e.g. setting up additional database/websockets or starting cron/scheduled jobs."),(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"setupFn")," function receives the ",(0,a.kt)("inlineCode",{parentName:"p"},"express.Application")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"http.Server")," instances as part of its context. They can be useful for setting up any custom server routes or for example, setting up ",(0,a.kt)("inlineCode",{parentName:"p"},"socket.io"),"."),(0,a.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/myServerSetupCode.js"',title:'"src/server/myServerSetupCode.js"'},"export const mySetupFunction = async () => {\n  await setUpSomeResource()\n}\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"li"},"Types for the setup function and its context are as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="@wasp/types"',title:'"@wasp/types"'},"export type ServerSetupFn = (context: ServerSetupFnContext) => Promise<void>\n\nexport type ServerSetupFnContext = {\n  app: Application // === express.Application\n  server: Server // === http.Server\n}\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/myServerSetupCode.ts"',title:'"src/server/myServerSetupCode.ts"'},"import { ServerSetupFn } from '@wasp/types'\n\nexport const mySetupFunction: ServerSetupFn = async () => {\n  await setUpSomeResource()\n}\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"middlewareconfigfn-serverimport"},(0,a.kt)("inlineCode",{parentName:"h4"},"middlewareConfigFn: ServerImport")),(0,a.kt)("p",{parentName:"li"},"The import statement to an Express middleware config function. This is a global modification affecting all operations and APIs. See more in the ",(0,a.kt)("a",{parentName:"p",href:"../advanced/middleware-config#1-customize-global-middleware"},"configuring middleware section"),"."))))}v.isMDXComponent=!0}}]);