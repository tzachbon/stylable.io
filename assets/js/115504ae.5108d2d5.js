(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[9965],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2995:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={id:"react-integration",title:"React Integration"},l={unversionedId:"getting-started/react-integration",id:"getting-started/react-integration",isDocsHomePage:!1,title:"React Integration",description:"You can manually integrate Stylable with a React component as described below. You can also build your own helpers.",source:"@site/docs/getting-started/react-integration.md",sourceDirName:"getting-started",slug:"/getting-started/react-integration",permalink:"/docs/getting-started/react-integration",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/getting-started/react-integration.md",version:"current",frontMatter:{id:"react-integration",title:"React Integration"},sidebar:"Discover",previous:{title:"Installation",permalink:"/docs/getting-started/install-configure"},next:{title:"TypeScript Integration",permalink:"/docs/getting-started/typescript-integration"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can manually integrate ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," with a React component as described below. You can also build your own helpers."),(0,o.kt)("p",null,"Before you begin, read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/runtime"},"Runtime guide")," to understand the ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," runtime API."),(0,o.kt)("p",null,"To manualy integrate ",(0,o.kt)("strong",{parentName:"p"},"Stylable")," to a React component, you ",(0,o.kt)("strong",{parentName:"p"},"must")," first mark the root element of the component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { style, classes } from "style.st.css";\n\nclass Comp extends React.Component {\n    render() {\n        return (\n            <div className={style(\n                classes.root, \n                { stateA: true, stateB: false },\n                this.props.className )}>\n            </div>\n        );\n    }\n}\n')),(0,o.kt)("p",null,"The result of the above generates and adds the props needed to define the root element for styling:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Marks component root by setting the root target ",(0,o.kt)("inlineCode",{parentName:"li"},"className")),(0,o.kt)("li",{parentName:"ul"},"Sets component states using generated class names "),(0,o.kt)("li",{parentName:"ul"},"Appends ",(0,o.kt)("inlineCode",{parentName:"li"},"className")," override from component props to the root ",(0,o.kt)("inlineCode",{parentName:"li"},"className")),(0,o.kt)("li",{parentName:"ul"},"Custom or overridden component states are added via additional class names")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To enable external styling, we recommend passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," prop. To make the component more stylable, we also recommend also merging the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," prop."))),(0,o.kt)("p",null,"All nodes, other than ",(0,o.kt)("inlineCode",{parentName:"p"},"root"),", can be marked directly with the class mapping and the ",(0,o.kt)("a",{parentName:"p",href:"../guides/runtime#custom-state-mapping"},"$cssStates")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { style, classes, cssStates } from "style.st.css";\n\nclass Comp extends React.Component {\n    render() {\n        return (\n            <div className={style(classes.root, {}, this.props.className) }>\n                <span className={classes.label} >\n                    Text\n                </span>\n                <span className={cssStates({ stateA: true })} >\n                    More Text\n                </span>\n            </div>\n        );\n    }\n}\n')))}m.isMDXComponent=!0}}]);