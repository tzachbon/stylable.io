(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[4105],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,b=g["".concat(p,".").concat(d)]||g[d]||u[d]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5830:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],i={id:"install-configure",title:"Installation"},p={unversionedId:"getting-started/install-configure",id:"getting-started/install-configure",isDocsHomePage:!1,title:"Installation",description:"There are currently two options for installing and working with Stylable as described in the following sections.",source:"@site/docs/getting-started/install-configure.md",sourceDirName:"getting-started",slug:"/getting-started/install-configure",permalink:"/docs/getting-started/install-configure",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/getting-started/install-configure.md",version:"current",frontMatter:{id:"install-configure",title:"Installation"},sidebar:"Discover",previous:{title:"Intro",permalink:"/docs/getting-started/intro"},next:{title:"React Integration",permalink:"/docs/getting-started/react-integration"}},c=[{value:"Create a new Stylable project from a boilerplate",id:"create-a-new-stylable-project-from-a-boilerplate",children:[]},{value:"Install Stylable to work with an existing project",id:"install-stylable-to-work-with-an-existing-project",children:[]},{value:"Write in Stylable",id:"write-in-stylable",children:[]},{value:"Build configuration",id:"build-configuration",children:[]},{value:"TypeScript support",id:"typescript-support",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are currently two options for installing and working with ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," as described in the following sections."),(0,l.kt)("h2",{id:"create-a-new-stylable-project-from-a-boilerplate"},"Create a new Stylable project from a boilerplate"),(0,l.kt)("p",null,"To begin writing your own project, you can create a ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," app from our boilerplate. The project can be created by any of the following commands:"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"npx"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-stylable-app <project-name>\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm init stylable-app <project-name>\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create stylable-app <project-name>\n")),(0,l.kt)("p",null,"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"<project-name>")," placeholder above, replace with the name of your project. Once you run the command, a directory with that same name is created. Go to that directory and run ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," to view the project in a browser, or ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run build")," to build your project's target code."),(0,l.kt)("p",null,"The project includes several basic components and ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," stylesheets which have the suffix ",(0,l.kt)("inlineCode",{parentName:"p"},".st.css"),"."),(0,l.kt)("h2",{id:"install-stylable-to-work-with-an-existing-project"},"Install Stylable to work with an existing project"),(0,l.kt)("p",null,"To work with an existing ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," based project, you can install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable"},"Stylable")," and the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/webpack-plugin"},"@stylable/webpack-plugin")," packages from our GitHub repositories."),(0,l.kt)("p",null,"Install ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," and the ",(0,l.kt)("strong",{parentName:"p"},"@stylable/webpack-plugin")," as a dependency in your local project."),(0,l.kt)("p",null,"Using npm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @stylable/core @stylable/webpack-plugin --save-dev\n")),(0,l.kt)("p",null,"Using Yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @stylable/core @stylable/webpack-plugin --dev\n")),(0,l.kt)("h2",{id:"write-in-stylable"},"Write in Stylable"),(0,l.kt)("p",null,"Once you've installed either the boilerplate or the packages into your own project, you can begin writing in ",(0,l.kt)("strong",{parentName:"p"},"Stylable"),". Look through the ",(0,l.kt)("a",{parentName:"p",href:"/docs/references/cheatsheet"},"Specifications Reference")," for specs and code examples."),(0,l.kt)("p",null,"To take advantage of code completion and diagnostics, install ",(0,l.kt)("a",{parentName:"p",href:"/docs/getting-started/stylable-intelligence"},(0,l.kt)("strong",{parentName:"a"},"Stylable Intelligence"))," currently supported for only Visual Studio Code."),(0,l.kt)("h2",{id:"build-configuration"},"Build configuration"),(0,l.kt)("p",null,"Currently we support Webpack as our build system. To author a component library, use our CLI tool to build each CSS separately."),(0,l.kt)("p",null,"Add ",(0,l.kt)("strong",{parentName:"p"},"Stylable")," to your Webpack configuration as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');\n...\n{\n    module: {\n        rules: [\n        {\n            test: /\\.(png|jpg|gif)$/,\n            use: [\n            {\n                loader: \"url-loader\",\n                options: {\n                    limit: 8192\n                }\n            }\n            ]\n        }\n        ]\n    }\n    plugins: [\n        new StylableWebpackPlugin()\n    ]\n}\n")),(0,l.kt)("p",null,"For more information on configuring the @stylable/webpack-plugin, see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wix/stylable/tree/master/packages/webpack-plugin"},"readme file"),"."),(0,l.kt)("h2",{id:"typescript-support"},"TypeScript support"),(0,l.kt)("p",null,"To configure Stylable to work with TypeScript, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/getting-started/typescript-integration"},"TypeScript Integration")," guide."))}u.isMDXComponent=!0}}]);