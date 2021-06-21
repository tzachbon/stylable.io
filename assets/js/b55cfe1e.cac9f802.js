(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[9087],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4555:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={id:"extending-through-js",title:"Extend Through JavaScript"},s=void 0,u={unversionedId:"unpublished/extending-through-js",id:"unpublished/extending-through-js",isDocsHomePage:!1,title:"Extend Through JavaScript",description:"Stylable is a CSS pre-processor, but developers can extend their Stylable definitions utlizing CSS, JavaScript or both while maintaining code hinting and type checking for validations.",source:"@site/docs/unpublished/extending-through-js.md",sourceDirName:"unpublished",slug:"/unpublished/extending-through-js",permalink:"/docs/unpublished/extending-through-js",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/unpublished/extending-through-js.md",version:"current",frontMatter:{id:"extending-through-js",title:"Extend Through JavaScript"}},p=[{value:"Plugin types",id:"plugin-types",children:[]},{value:"Stylable types",id:"stylable-types",children:[{value:"Available types and validations",id:"available-types-and-validations",children:[]}]},{value:"Extending through values",id:"extending-through-values",children:[]},{value:"Extending through formatters",id:"extending-through-formatters",children:[]},{value:"Extending through mixins",id:"extending-through-mixins",children:[]},{value:"Declaring types through JS docs",id:"declaring-types-through-js-docs",children:[]}],m={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stylable")," is a CSS pre-processor, but developers can extend their ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," definitions utlizing CSS, JavaScript or both while maintaining code hinting and type checking for validations."),(0,l.kt)("p",null,"This enables developers greater freedom in generating CSS from code to provide consistency and efficient management of complex CSS-based patterns. "),(0,l.kt)("h2",{id:"plugin-types"},"Plugin types"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," supports the following types of plugins:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Values - string values exported from a javascript module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/references/formatters"},"Formatters")," - functions for manipulating single CSS declaration values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/references/mixins"},"Mixins")," - functions for generating a CSS fragment that can include single or multiple rulesets and declarations. ")),(0,l.kt)("p",null,"The types described below are the provided arguments ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," provides for the plugins. For example: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function lighten(amount: stNumber, color: stColor) {\n    ...\n}\n")),(0,l.kt)("h2",{id:"stylable-types"},"Stylable types"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stylable")," types represent the available primitive types in CSS. They follow the spirit of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3c/css-houdini-drafts/wiki"},"Houdini")," future spec. "),(0,l.kt)("p",null,"Using these types enables the consumers of the plugin to receive code hinting and type checking for validations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stylable")," uses TypeScript or JSDocs to infer JS extension signatures."),(0,l.kt)("h3",{id:"available-types-and-validations"},"Available types and validations"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Validations"),(0,l.kt)("th",{parentName:"tr",align:null},"Validation Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stColor","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"allowOpacity","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stSizeUnit","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"allowedUnits","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"min","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"max","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"multiplesOf","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stPercentage","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"min","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"max","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"multiplesOf","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stImage","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"allowBase64","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"allowUrl","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stNumber","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"min","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"max","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"multiplesOf","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stEnum","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"allowedValues","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]")))),(0,l.kt)("h2",{id:"extending-through-values"},"Extending through values"),(0,l.kt)("p",null,"Values are strings exported via JavaScript modules they can be used inside a Stylable value() function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},':import {\n    -st-from: "../my-js-values.js";\n    -st-named: myValue;\n}\n\n.myClass {\n    color: value(myValue);\n}\n')),(0,l.kt)("p",null,"Uses the following TypeScript code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"/*my-js-values.ts*/\nexport const myValue = 'red';\n")),(0,l.kt)("h2",{id:"extending-through-formatters"},"Extending through formatters"),(0,l.kt)("p",null,"Formatters are methods that manipulate parameters to produce a string that is returned as a single declaration value."),(0,l.kt)("p",null,"For example the following CSS code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},'\n:import {\n    -st-from: "../my-formatter.js";\n    -st-named: lighten;\n    -st-default: frmt;\n}\n\n.myClass {\n    color: lighten(30, #ff0000);\n}\n\n')),(0,l.kt)("p",null,"Uses the following TypeScript code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"/*my-formatter.ts*/\n\nimport {darken as polishedDarken, lighten as polishedLighten} from 'polished';\nimport {stNumber, stColor} from \"stylable\";\n\n\n/**\n * Lighten - lightens a color by a percentage.\n*/\nexport function lighten(amount: stNumber, color: stColor): stColor {\n    return polishedLighten(amount, color);\n}\n")),(0,l.kt)("h2",{id:"extending-through-mixins"},"Extending through mixins"),(0,l.kt)("p",null,"In many cases its useful to generate bigger chunks of css through js.\nHere's an example creating and using an expandOnHover mixin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},'\n:import{\n    -st-from:"../my-mixins.js";\n    -st-named:expandOnHover;\n}\n\n.myClass{\n    -st-mixin:expandOnHover(200,2);\n}\n\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import {stNumber, stColor, stCurves, stCssFragment} from "stylable";\n\n/**\n* Expand\n*/\nexport function expandOnHover( durationMS:stNumber<0,1000> = 200,\n                               increaseBy:stNumber = 1.5,\n                               animationCurve:stCurves = \'easeIn\'):stCssFragment{\n    return {\n        transition:"all "+duration+"ms "+animationCurve;,\n        ":hover":{\n            transform:scale(increaseBy)\n        }\n    }\n}\n\n')),(0,l.kt)("h2",{id:"declaring-types-through-js-docs"},"Declaring types through JS docs"),(0,l.kt)("p",null,"You can also declare your parameters using JS docs.\nHere is a the same formatter and mixin from above, written in js with JS docs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\n/**\n * Lighten - lightens a color by a percentage.\n*/\n/**\n * Lightens a color by an amount.\n * @constructor\n * @param {string} amount - Amount to lighten\n * @param {string} color - Color to be lightened\n*/\nexport function lighten(amount, color) {\n    return polishedLighten(amount, color);\n}\n\n/**\n* Expand\n* @param {stNumber<0,1000>} [durationMS=200] - total animation time MS\n* @param {stPercentage} [increaseBy=1.5] - how much to increase size;\n* @param {stCurves} [animationCurve=cubicEaseIn] - animation change over time curve\n* @returns {stCssFragment}\n*/\nexport function expandOnHover(durationMS,increaseBy,animationCurve){\n    return {\n        transition:"all "+duration+"ms "+animationCurve;,\n        ":hover":{\n            transform:scale(increaseBy)\n        }\n    }\n}\n\n')))}d.isMDXComponent=!0}}]);