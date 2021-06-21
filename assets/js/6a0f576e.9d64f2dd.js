(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[2263],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3067:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(2122),s=n(9756),r=(n(7294),n(3905)),l=["components"],o={id:"runtime",title:"Runtime"},i=void 0,c={unversionedId:"guides/runtime",id:"guides/runtime",isDocsHomePage:!1,title:"Runtime",description:"Imported Stylable stylesheets contain minimal runtime code to help define the structure and state of the component.",source:"@site/docs/guides/runtime.md",sourceDirName:"guides",slug:"/guides/runtime",permalink:"/docs/guides/runtime",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/guides/runtime.md",version:"current",frontMatter:{id:"runtime",title:"Runtime"},sidebar:"Guides",previous:{title:"Component Best Practices",permalink:"/docs/guides/component-best-practices"},next:{title:"Stylable Application",permalink:"/docs/guides/stylable-application"}},p=[{value:"Manual mapping",id:"manual-mapping",children:[]},{value:"Custom state mapping",id:"custom-state-mapping",children:[{value:"Element name",id:"element-name",children:[]},{value:"Custom states",id:"custom-states",children:[]},{value:"Merge props",id:"merge-props",children:[]}]}],m={toc:p};function u(e){var t=e.components,n=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Imported ",(0,r.kt)("strong",{parentName:"p"},"Stylable")," stylesheets contain minimal runtime code to help define the structure and state of the component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* style.st.css */\n.root {\n    -st-states: selected;\n}\n.label {}\n.icon {}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'/* index.jsx - stylesheet runtime api */\nimport { \n    style,    // runtime utility function \n    st,       // alias for the style function above\n    classes,  // class names mapping\n    vars,     // css variables mapping\n    stVars,   // stylable build-time variable values\n    cssStates // utility function for setting stylable states\n    keyframes // keyframes mapping\n}  from "style.st.css";\n')),(0,r.kt)("h2",{id:"manual-mapping"},"Manual mapping"),(0,r.kt)("p",null,"CSS class names, defined in the stylesheet, are exposed on the imported ",(0,r.kt)("inlineCode",{parentName:"p"},"classes")," reference and mapped to their runtime target value. The expected class name is then used as an element class name in the structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'classes.root  // "style__root"\nclasses.label // "style__label"\nclasses.icon  // "style__icon"\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/root"},"root class")," is available even when it is not defined in the stylesheet. "))),(0,r.kt)("h2",{id:"custom-state-mapping"},"Custom state mapping"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/references/pseudo-classes"},"Custom states"),", which can be targeted from the style, are generated using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cssStates")," function. The function accepts a map of local state names and generates string with concatenated class names used to mark the element state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/* { 'data-style-selected':true } */\ncssStates({ selected:true })\n/* { 'data-style-unknownstate':true } */\ncssStates({ unknownState:true })\n\n/* { } */\ncssStates({ selected:false }) // no states\n\n/* { 'data-style-a':true, 'data-style-b':true } */\ncssStates({ a:true, b:true }) // multiple\n")),(0,r.kt)("h3",{id:"element-name"},"Element name"),(0,r.kt)("p",null,"The first argument represents the scoped name of the element, and passes through the received class name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/* 'style__root'  */\nstyle(classes.root) \n/* 'style__label' */\nstyle(classes.label) \n\n// multiple markings\nstyle(classes.label, classes.icon) \n/* 'style__label style__icon' */\n\n// string pass-through\nstyle('root') \n/* 'root' */\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Stylable no longer performs auto-scoping for classes, and strings are passed as-is. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"classes")," mapping object to resolve to the scoped class name."))),(0,r.kt)("h3",{id:"custom-states"},"Custom states"),(0,r.kt)("p",null,"The second argument represents the ",(0,r.kt)("a",{parentName:"p",href:"#custom-state-mapping"},"custom state")," (or another class), and returns a class to represent every custom state on the element."),(0,r.kt)("p",null,"States are optional and the second argument can be replaced with another className if needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/* 'style__root style--selected' */\nstyle(classes.root, { selected:true })\n/* 'style__label style--searched' */\nstyle(classes.label, { searched:true })\n\n/* 'style__label style__icon' */\nstyle(classes.label, classes.icon)\n")),(0,r.kt)("h3",{id:"merge-props"},"Merge props"),(0,r.kt)("p",null,"The third argument (and any arguments after) can be used for any additional classes that need to be applied to the element. In a component root node, it is recommended to pass along the ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," prop received through your parent component as props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// this.props.className = 'app__root app--selected'\n/*  'style__root app__root app--selected' */\nstyle(classes.root, this.props.className)\n\n/*  'style__root label icon' */\nstyle(classes.root, 'label', 'icon') // label and icon are global (un-scoped)\n\n/*  'style__root style--selected' */\nstyle(classes.root, 'style--selected')\n")))}u.isMDXComponent=!0}}]);