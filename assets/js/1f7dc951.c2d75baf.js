(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[5535],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?s.createElement(h,o(o({ref:t},p),{},{components:n})):s.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var s=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],i={id:"shared-classes",title:"Shared Classes"},c=void 0,l={unversionedId:"guides/shared-classes",id:"guides/shared-classes",isDocsHomePage:!1,title:"Shared Classes",description:"When building a Stylable component library or a Stylable application, it is useful to reuse classes that can be shared across components to achieve common CSS with lower specificity.",source:"@site/docs/guides/shared-classes.md",sourceDirName:"guides",slug:"/guides/shared-classes",permalink:"/docs/guides/shared-classes",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/guides/shared-classes.md",version:"current",frontMatter:{id:"shared-classes",title:"Shared Classes"},sidebar:"Guides",previous:{title:"Project Commons",permalink:"/docs/guides/project-commons"},next:{title:"Component Variants",permalink:"/docs/guides/component-variants"}},p=[{value:"Defining a shared class",id:"defining-a-shared-class",children:[]},{value:"Use shared classes in components",id:"use-shared-classes-in-components",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When building a ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/stylable-component-library"},"Stylable component library")," or a ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/stylable-application"},"Stylable application"),", it is useful to reuse classes that can be shared across components to achieve common CSS with lower specificity."),(0,r.kt)("h2",{id:"defining-a-shared-class"},"Defining a shared class"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/project-commons"},"commons stylable stylesheet")," of your project (usually named ",(0,r.kt)("inlineCode",{parentName:"p"},"project.st.css"),"), you define a CSS class with a descriptive name like ",(0,r.kt)("inlineCode",{parentName:"p"},"emphasisBox"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "project";\n.emphasisBox {\n    background: pink;\n    color: white;\n}\n')),(0,r.kt)("h2",{id:"use-shared-classes-in-components"},"Use shared classes in components"),(0,r.kt)("p",null,"A component's ",(0,r.kt)("strong",{parentName:"p"},"Stylable")," stylesheet can use and extend shared classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'@namespace "comp";\n:import {\n    -st-from: \'./project.st.css\';\n    -st-named: emphasisBox;\n}\n/*\nselector: .comp__root .project__emphasisBox\njs value: "project__emphasisBox"\n*/\n.root .emphasisBox { }\n/*\nselector: .comp__messageBox.project__emphasisBox\njs value: "comp__messageBox project__emphasisBox"\n*/\n.messageBox {\n    -st-extends: emphasisBox;\n}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For the ",(0,r.kt)("inlineCode",{parentName:"p"},".emphasisBox")," selector, we manually added the ",(0,r.kt)("inlineCode",{parentName:"p"},".root")," class to avoid overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"emphasisBox")," outside of this scope."))))}m.isMDXComponent=!0}}]);