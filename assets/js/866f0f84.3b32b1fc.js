(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(120)),c={id:"project-commons",title:"Project Commons"},i={unversionedId:"guides/project-commons",id:"guides/project-commons",isDocsHomePage:!1,title:"Project Commons",description:"The goal of the project file is to contain the CSS commons for the project, including variables, component variants and shared classes.",source:"@site/docs/guides/project-commons.md",slug:"/guides/project-commons",permalink:"/docs/guides/project-commons",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/guides/project-commons.md",version:"current",sidebar:"Guides",previous:{title:"Create a Stylable Component Library",permalink:"/docs/guides/stylable-component-library"},next:{title:"Shared Classes",permalink:"/docs/guides/shared-classes"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The goal of the project file is to contain the CSS commons for the project, including ",Object(a.b)("a",{parentName:"p",href:"/docs/references/st-variables"},"variables"),", ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/component-variants"},"component variants")," and ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/shared-classes"},"shared classes"),"."),Object(a.b)("p",null,"In the following code, you can see a project with:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"2 color, 2 font and 1 spacing size variables "),Object(a.b)("li",{parentName:"ul"},"1 ",Object(a.b)("inlineCode",{parentName:"li"},"Button")," component variant named ",Object(a.b)("inlineCode",{parentName:"li"},"cancelButton")," "),Object(a.b)("li",{parentName:"ul"},"1 shared class for ",Object(a.b)("inlineCode",{parentName:"li"},"emphasisBox"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* project.st.css */\n@namespace \"Project\";\n:vars {\n    color1: #F012BE;\n    color2: #FF4136;\n    fontBig: 2rem;\n    fontSmall: 1rem;\n    spacing: 6px;\n}\n:import {\n    -st-from: './button/button.st.css';\n    -st-default: Button;\n}\n.cancelButton {\n    -st-extends: Button;\n}\n.emphasisBox {}\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"We recommend calling the project commons file ",Object(a.b)("inlineCode",{parentName:"p"},"project.st.css"),"."))))}p.isMDXComponent=!0}}]);