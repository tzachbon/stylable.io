(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{120:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,O=p["".concat(o,".").concat(u)]||p[u]||m[u]||c;return r?a.a.createElement(O,s(s({ref:t},i),{},{components:r})):a.a.createElement(O,s({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(120)),o={id:"cheatsheet",title:"Specification Overview"},s={unversionedId:"references/cheatsheet",id:"references/cheatsheet",isDocsHomePage:!1,title:"Specification Overview",description:"CSS Terminology",source:"@site/docs/references/cheatsheet.md",slug:"/references/cheatsheet",permalink:"/docs/references/cheatsheet",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/cheatsheet.md",version:"current",sidebar:"Specification Reference",next:{title:"Imports",permalink:"/docs/references/imports"}},l=[{value:"CSS Terminology",id:"css-terminology",children:[]},{value:"Stylable",id:"stylable",children:[]}],i={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"css-terminology"},"CSS Terminology"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Simple selector"),": Type selector, class selector (+Stylable ",Object(c.b)("a",{parentName:"li",href:"/docs/references/root"},"root class"),")"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CSS property"),": Name of the rule (e.g. color)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CSS declaration"),": CSS property paired with a value"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CSS declaration Block"),": List of CSS declarations"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CSS ruleset"),": CSS declaration block paired with a selector")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax#CSS_Declarations"},"MDN docs")),Object(c.b)("h2",{id:"stylable"},"Stylable"),Object(c.b)("p",null,"Syntax unique to Stylable - Click each to access code examples and descriptions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Directive rules")," ",Object(c.b)("inlineCode",{parentName:"li"},"-st-*")," Instructions for the ",Object(c.b)("strong",{parentName:"li"},"Stylable")," pre-processor, removed during transpilation",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/extend-stylesheet"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},"-st-extends")))," Simple selector base class"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/pseudo-classes"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},"-st-states")))," Define custom pseudo-classes"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/mixins"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},"-st-mixin")))," Apply mixins to CSS ruleset"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Selectors"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/class-selectors"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},".xX")))," Class selectors"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"../references/tag-selectors"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},"X")))," Tag/component selectors"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/pseudo-elements"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},"::X")))," Target internal part (pseudo-element) "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/pseudo-classes"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},":X")))," Target states including native and custom (pseudo-classes)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/custom-selectors"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},":--X")))," Selector alias (custom selector)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/global-selectors"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},":global(X)")))," Keep selector global"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/imports"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},":import {}")))," Import external assets like mixins, stylesheets, common CSS and vars",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/imports"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},"-st-from")))," Location of file to import"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/imports"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},"-st-default")))," Import the file's default export value"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/imports"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},"-st-named")))," Import the file's named export value or values"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/namespace"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},'@namespace "readable name";')))," Development display name for debugging"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/st-variables"},Object(c.b)("strong",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"strong"},":vars{}")))," Define common values to be used across the stylesheet or project"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/references/formatters"},Object(c.b)("strong",{parentName:"a"},"formatters"))," Custom TypeScript/JavaScript functions for generating declaration values")))}b.isMDXComponent=!0}}]);