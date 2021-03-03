(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),s=(n(0),n(127)),r={id:"custom-selectors",title:"Custom Selectors"},c={unversionedId:"references/custom-selectors",id:"references/custom-selectors",isDocsHomePage:!1,title:"Custom Selectors",description:"You use custom selectors to define an alias that can match complex selectors.",source:"@site/docs/references/custom-selectors.md",slug:"/references/custom-selectors",permalink:"/stylable.io/docs/references/custom-selectors",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/custom-selectors.md",version:"current",sidebar:"someSidebar",previous:{title:"Global Selectors",permalink:"/stylable.io/docs/references/global-selectors"},next:{title:"Mixins",permalink:"/stylable.io/docs/references/mixins"}},l=[{value:"Usage",id:"usage",children:[{value:"Expose pseudo-element",id:"expose-pseudo-element",children:[]}]},{value:"Use cases",id:"use-cases",children:[{value:"Container and recursive components",id:"container-and-recursive-components",children:[]},{value:"Expose inner parts that are deeply defined",id:"expose-inner-parts-that-are-deeply-defined",children:[]},{value:"Combination selector",id:"combination-selector",children:[]},{value:"Group of selectors",id:"group-of-selectors",children:[]}]}],i={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You use ",Object(s.b)("a",{parentName:"p",href:"https://drafts.csswg.org/css-extensions/#custom-selectors"},"custom selectors")," to define an alias that can match complex selectors. "),Object(s.b)("p",null,"For example, a specific type of button within a form that appears only when hovered can be defined as a custom selector. By defining the button as a custom selector with its own name, the button is exposed in the API and available for use by using just the custom selector name."),Object(s.b)("p",null,"You could also use custom selectors to define a group of selectors with one name. For example, you can access all the headings on a page as one custom selector. This could be useful if you want to style just their color the same."),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("p",null,"The following code maps the alias name ",Object(s.b)("inlineCode",{parentName:"p"},"controlBtn")," that matches any ",Object(s.b)("inlineCode",{parentName:"p"},".btn")," CSS class nested under the ",Object(s.b)("inlineCode",{parentName:"p"},".controls")," CSS class."),Object(s.b)("hr",null),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n@custom-selector :--controlBtn .controls .btn;\n/* \nselector: .Comp__controls .Comp__btn \n*/\n:--controlBtn { border: 1px solid grey; }\n/* \nselector: .Comp__controls .Comp__btn:hover \n*/\n:--controlBtn:hover { border-color: red; }\n')),Object(s.b)("h3",{id:"expose-pseudo-element"},"Expose pseudo-element"),Object(s.b)("p",null,"Custom selectors generate a ",Object(s.b)("a",{parentName:"p",href:"/stylable.io/docs/references/pseudo-elements"},"pseudo-element"),". So, for example, ",Object(s.b)("a",{parentName:"p",href:"/stylable.io/docs/references/imports"},"importing")," a stylesheet into another stylesheet enables access to the ",Object(s.b)("inlineCode",{parentName:"p"},"controlBtn")," pseudo-element. In this example, the stylesheet ",Object(s.b)("inlineCode",{parentName:"p"},"comp.st.css")," from the previous example is imported into this stylesheet."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n:import {\n    -st-from: "./comp.st.css";\n    -st-default: Comp;\n}\n/*\nselector: .Comp__root .Comp__controls .Comp__btn\n*/\nComp::controlBtn { \n    background: gold; \n}\n')),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"If a ",Object(s.b)("inlineCode",{parentName:"p"},"custom-selector")," alias conflicts with a local CSS class name, the exposed ",Object(s.b)("inlineCode",{parentName:"p"},"pseudo-element")," targets the ",Object(s.b)("inlineCode",{parentName:"p"},"custom-selector"),". However, the exported CSS class is still exported to JavaScript."))),Object(s.b)("h2",{id:"use-cases"},"Use cases"),Object(s.b)("p",null,"The following examples demonstrate how to effectively use custom selectors in ",Object(s.b)("strong",{parentName:"p"},"Stylable"),"."),Object(s.b)("h3",{id:"container-and-recursive-components"},"Container and recursive components"),Object(s.b)("p",null,'Some components might contain nested instances of themselves because they\'re a container or a "recursive" component. For example, a tree component might render itself. '),Object(s.b)("p",null,"If the component exposes any ",Object(s.b)("inlineCode",{parentName:"p"},"pseudo-elements"),", it is a good practice to define them as ",Object(s.b)("inlineCode",{parentName:"p"},"custom selectors")," with ",Object(s.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors"},"child selectors")," to avoid affecting the inner parts of internal instances."),Object(s.b)("p",null,"The following example shows how a tree component exposes an icon."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Tree";\n@custom-selector :--icon .root > .icon;\n')),Object(s.b)("p",null,"Here you can use the icon ",Object(s.b)("inlineCode",{parentName:"p"},"custom selector")," from the outside just like you would use any other ",Object(s.b)("inlineCode",{parentName:"p"},"pseudo-element"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Panel";\n:import {\n    -st-from: "./tree.st.css";\n    -st-default: Tree;\n}\n/*\nselector: .Tree__root > .Tree__icon\n*/\nTree::icon {\n    background: yellow;  /* paints the icons all the way down the tree */\n}\n')),Object(s.b)("h3",{id:"expose-inner-parts-that-are-deeply-defined"},"Expose inner parts that are deeply defined"),Object(s.b)("p",null,"When you want to make internal parts of your component API more accessible, you can describe ",Object(s.b)("inlineCode",{parentName:"p"},"pseudo-elements")," using ",Object(s.b)("inlineCode",{parentName:"p"},"custom selectors"),"."),Object(s.b)("p",null,"For example, you can expose a ",Object(s.b)("inlineCode",{parentName:"p"},"pseudo-element")," named ",Object(s.b)("inlineCode",{parentName:"p"},"navigationBtn")," that enables you to style an internal gallery component's ",Object(s.b)("inlineCode",{parentName:"p"},"navBtn")," element."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},':import {\n    -st-from: "./gallery.st.css";\n    -st-default: Gallery;\n}\n@custom-selector :--navigationBtn Gallery::navBtn;\n')),Object(s.b)("h3",{id:"combination-selector"},"Combination selector"),Object(s.b)("p",null,"You may have a component with several basic CSS classes and with corresponding ",Object(s.b)("inlineCode",{parentName:"p"},"pseudo-elements"),". You could expose a combination ",Object(s.b)("inlineCode",{parentName:"p"},"pseudo-element"),"."),Object(s.b)("p",null,"For example, a ",Object(s.b)("inlineCode",{parentName:"p"},"pseudo-element")," named ",Object(s.b)("inlineCode",{parentName:"p"},"navBtn")," matches any ",Object(s.b)("inlineCode",{parentName:"p"},"btn")," CSS class nested in a ",Object(s.b)("inlineCode",{parentName:"p"},"nav")," CSS class."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n@custom-selector :--navBtn .nav .btn;\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n:import {\n    -st-from: "./comp.st.css";\n    -st-default: Comp;\n}\n/*\nselector: .Comp__root .Comp__nav .Comp__btn\n*/\nComp::navBtn { \n    border: 1px solid grey; \n}\n')),Object(s.b)("h3",{id:"group-of-selectors"},"Group of selectors"),Object(s.b)("p",null,"You could also use custom selectors to gather a collection of selectors into a single selector. For example, you may want to access media that includes both images and videos."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Comp";\n@custom-selector :--media .image, .video;\n/*\nselector: \n.Comp__image, .Comp__video \n*/\n:--media { \n    border: 1px solid grey; \n}\n')),Object(s.b)("h4",{id:"issues-to-consider"},"Issues to consider"),Object(s.b)("p",null,"Aliasing multiple selectors in a ",Object(s.b)("inlineCode",{parentName:"p"},"custom selector")," may generate lots of CSS that could affect performance."),Object(s.b)("p",null,"For example, when you import the ",Object(s.b)("inlineCode",{parentName:"p"},"Comp")," stylesheet (the selector described in the previous example) into another stylesheet, in the output the selector is split for each override."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n:import {\n    -st-from: "./comp.st.css";\n    -st-default: Comp;\n}\nComp::media { \n    border-color: red; \n}\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},"/* CSS Output */\n.Comp__root .Comp__image, \n.Comp__root .Comp__video {\n    border-color: red;\n}\n")))}p.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,d=m["".concat(r,".").concat(u)]||m[u]||b[u]||s;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var i=2;i<s;i++)r[i]=n[i];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);