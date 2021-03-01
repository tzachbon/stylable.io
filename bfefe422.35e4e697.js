(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),s=(r(0),r(126)),o={id:"css-vars",title:"CSS Custom Properties (CSS vars)",sidebar_label:"CSS Custom Properties"},i={unversionedId:"references/css-vars",id:"references/css-vars",isDocsHomePage:!1,title:"CSS Custom Properties (CSS vars)",description:"CSS Custom Properties is a new feature introduced to the CSS language, providing the ability to define and re-use variables across stylesheets.",source:"@site/docs/references/css-vars.md",slug:"/references/css-vars",permalink:"/stylable.io/docs/references/css-vars",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/css-vars.md",version:"current",sidebar_label:"CSS Custom Properties",sidebar:"someSidebar",previous:{title:"Stylable Variables",permalink:"/stylable.io/docs/references/st-variables"},next:{title:"Scoping",permalink:"/stylable.io/docs/references/st-scope"}},l=[{value:"Stylable variables vs. CSS custom properties",id:"stylable-variables-vs-css-custom-properties",children:[]},{value:"Automatic scoping (namespacing)",id:"automatic-scoping-namespacing",children:[]},{value:"Importing CSS variables",id:"importing-css-variables",children:[]},{value:"Overriding CSS variables during runtime",id:"overriding-css-variables-during-runtime",children:[]},{value:"Using global CSS variables",id:"using-global-css-variables",children:[]}],c={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"CSS Custom Properties")," is a new feature introduced to the CSS language, providing the ability to define and re-use variables across stylesheets."),Object(s.b)("p",null,"CSS Custom Properties are defined using the ",Object(s.b)("inlineCode",{parentName:"p"},"--*")," property syntax, and accessed using the ",Object(s.b)("inlineCode",{parentName:"p"},"var(--*)")," CSS function."),Object(s.b)("p",null,"To learn more about this language feature, check out the following resources"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"MDN - Custom properties"),'{:target="_blank"}'),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables"},"MDN - Using CSS custom properties"),'{:target="_blank"}'),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/"},"Smashing Magazine - It's Time To Start Using CSS Custom Properties"),'{:target="_blank"}')),Object(s.b)("h2",{id:"stylable-variables-vs-css-custom-properties"},"Stylable variables vs. CSS custom properties"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/stylable.io/docs/references/st-variables"},"Stylable variables")," and CSS custom properties offer different capabilities, and as such serve different use-cases."),Object(s.b)("p",null,"Stylable variables exist only in your source code, and get replaced during transpilation to the final target code. They serve well for reducing code repetition, increasing readability and can benefit any static theme or styling without incurring any runtime performance cost. "),Object(s.b)("p",null,"CSS custom properties on the other hand do incur a small runtime cost, but offer the ability to override their values during runtime, allowing dynamic styling through Stylable."),Object(s.b)("h2",{id:"automatic-scoping-namespacing"},"Automatic scoping (namespacing)"),Object(s.b)("p",null,"Stylable automatically scopes any CSS custom property found in the stylesheet. It does so by generating a unique namespace for the stylesheet (similar to how classes are scoped), and replaces the variable with its scoped counterpart. "),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"/* entry.st.css */\n.root {\n    --myVar: green;\n    color: var(--myVar);\n}\n")),Object(s.b)("p",null,"Transpiled output:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"/* entry.st.css */\n.root {\n    --entry-myVar: green;\n    color: var(--entry-myVar);\n}\n")),Object(s.b)("h2",{id:"importing-css-variables"},"Importing CSS variables"),Object(s.b)("p",null,"Due to the fact Stylable provides scoping to CSS variables, it also provides the ability to import CSS variables defined in another stylesheet."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'/* entry.st.css */\n:import {\n    -st-from: "./imported.st.css";\n    -st-named: --myVar;\n}\n\n.root {\n    /* value determined by the nearest property assignment up the DOM tree */\n    color: var(--myVar);\n}\n\n.part {\n    /* this override will match the namespace of the imported stylesheet */\n    --myVar: gold;\n    background-color: var(--myVar); /* gold */\n}\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"/* imported.st.css */\n.root {\n    --myVar: green;\n}\n")),Object(s.b)("h2",{id:"overriding-css-variables-during-runtime"},"Overriding CSS variables during runtime"),Object(s.b)("p",null,"Override any variable by redefining its value using an inline style attribute. "),Object(s.b)("p",null,"{% raw %}"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import { classes, vars } from './entry.st.css';\n\n<div className={classes.root}\n     style={{ \n        [vars.myVar]: 'pink',  \n        background: 'gold' }} \n/>\n")),Object(s.b)("p",null,"{% endraw %}"),Object(s.b)("p",null,"Output:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'<div className="entry__root" \n    style="--entry-color: green; --entry-border-size: 5px; background: gold;" />\n')),Object(s.b)("h2",{id:"using-global-css-variables"},"Using global CSS variables"),Object(s.b)("p",null,"In cases where you have no control over the name of the CSS variable used, use the ",Object(s.b)("inlineCode",{parentName:"p"},"@st-global-custom-property")," directive to define CSS variables that will not be scoped, and will maintain their exact given name."),Object(s.b)("p",null,"This is mostly useful when working with 3rd-party libraries, where you only attempt to affect it externally."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"@st-global-custom-property --color, --bg;\n\n.root {\n    --color: green;\n    color: var(--color);\n}\n")),Object(s.b)("p",null,"{% raw %}"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import { classes } from './entry.st.css';\n\n<div className={classes.root}\n     style={{ \n         '--color': 'red', \n         '--bg': 'yellow' }}\n/>\n")),Object(s.b)("p",null,"{% endraw %}"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Accessing any globally defined variable on the stylesheet will return its global name (un-scoped).")))}b.isMDXComponent=!0},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||s;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);