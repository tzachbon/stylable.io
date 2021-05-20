(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[6629],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8122:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),a={id:"stylable-intelligence",title:"Stylable Intelligence"},o={unversionedId:"getting-started/stylable-intelligence",id:"getting-started/stylable-intelligence",isDocsHomePage:!1,title:"Stylable Intelligence",description:"Stylable Intelligence is an extension implementing the Language Server Protocol that provides IDE support for Stylable. It currently includes:",source:"@site/docs/getting-started/stylable-intelligence.md",sourceDirName:"getting-started",slug:"/getting-started/stylable-intelligence",permalink:"/docs/getting-started/stylable-intelligence",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/getting-started/stylable-intelligence.md",version:"current",frontMatter:{id:"stylable-intelligence",title:"Stylable Intelligence"},sidebar:"Discover",previous:{title:"NextJS Integration",permalink:"/docs/getting-started/nextjs-integration"}},s=[{value:"Installation",id:"installation",children:[]},{value:"IDE extensions",id:"ide-extensions",children:[]},{value:"CSS functionality",id:"css-functionality",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stylable Intelligence")," is an extension implementing the Language Server Protocol that provides IDE support for ",(0,l.kt)("strong",{parentName:"p"},"Stylable"),". It currently includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Code completion "),(0,l.kt)("li",{parentName:"ul"},"Diagnostics")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You can install ",(0,l.kt)("strong",{parentName:"p"},"Stylable Intelligence")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence"},"Visual Studio Code market"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In your VSC window, click the ",(0,l.kt)("strong",{parentName:"li"},"Extensions")," icon to open the market."),(0,l.kt)("li",{parentName:"ul"},"In the search field, enter ",(0,l.kt)("strong",{parentName:"li"},"Stylable Intelligence"),". "),(0,l.kt)("li",{parentName:"ul"},"Install and reload the window when prompted.")),(0,l.kt)("h2",{id:"ide-extensions"},"IDE extensions"),(0,l.kt)("p",null,"Because stylable-intelligence registers ",(0,l.kt)("inlineCode",{parentName:"p"},".st.css")," files as Stylable and not CSS, certain CSS extensions may not work until they explicitly add Stylable support. The stylable-intelligence extension for VSCode is compatible with the following CSS extensions:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kisstkondoros/csstriggers"},"CssTriggers"),"(^0.4.0) - A VSCode extension which adds inline decoration to css properties to indicate their costs.")),(0,l.kt)("p",null,"If you are using an extension that you would like to add to this list, let us know and we're happy to help."),(0,l.kt)("h2",{id:"css-functionality"},"CSS functionality"),(0,l.kt)("p",null,"Because Stylable files are not recognized as CSS, we proxy the CSS Language Server through stylable-intelligence. Most basic features are already supported, but if you notice anything strange, let us know."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Future plans include:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"More Language Server features. "),(0,l.kt)("li",{parentName:"ul"},"Support for JetBrains IDEs (WebStorm, IntelliJ). Currently supported only in VSCode (version 1.16 and later).")))))}u.isMDXComponent=!0}}]);