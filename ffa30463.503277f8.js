(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(126)),o={id:"state-parameter-types",title:"Parameter Types to Use with Pseudo-Classes",layout:"docs"},i={unversionedId:"references/state-parameter-types",id:"references/state-parameter-types",isDocsHomePage:!1,title:"Parameter Types to Use with Pseudo-Classes",description:"Custom pseudo-classes can either be simple or accept parameters.",source:"@site/docs/references/state-parameter-types.md",slug:"/references/state-parameter-types",permalink:"/stylable.io/docs/references/state-parameter-types",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/state-parameter-types.md",version:"current"},l=[{value:"Tag",id:"tag",children:[]},{value:"Enum",id:"enum",children:[]},{value:"String",id:"string",children:[{value:"String validation optional",id:"string-validation-optional",children:[]}]},{value:"Number",id:"number",children:[{value:"Number validation optional",id:"number-validation-optional",children:[]}]},{value:"Future intent",id:"future-intent",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Custom ",Object(s.b)("a",{parentName:"p",href:"/stylable.io/docs/references/pseudo-classes"},"pseudo-classes")," can either be simple or accept parameters. "),Object(s.b)("p",null,"A custom pseudo-class with no parameters is considered a ",Object(s.b)("a",{parentName:"p",href:"/stylable.io/docs/references/pseudo-classes#simple-custom-states"},"simple custom state"),"."),Object(s.b)("p",null,"When defining a custom pseudo-class with a parameter:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"You must provide a type definition."),Object(s.b)("li",{parentName:"ul"},"Optionally you can provide validation arguments to the type defined"),Object(s.b)("li",{parentName:"ul"},"Optionally you can provide each state definition with a ",Object(s.b)("inlineCode",{parentName:"li"},"default value"),", enabling it to be used without providing a parameter argument.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'.root {\n    -st-states: stateX([type]) [default Value?],\n                stateY([type]) [default Value?];\n}\n\n.root:stateX(arg) {}\n\n.root:stateX {\n    /* parameter resolves to "default Value", \n    if no default value was provided,\n    this will fail validation */\n}\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Note"),Object(s.b)("br",{parentName:"p"}),"\n","When defining a ",Object(s.b)("inlineCode",{parentName:"p"},"default value"),", you can use ",Object(s.b)("a",{parentName:"p",href:"/stylable.io/docs/references/st-variables"},"variables")," and ",Object(s.b)("a",{parentName:"p",href:"/stylable.io/docs/references/formatters"},"formatters"),".")),Object(s.b)("h2",{id:"tag"},"Tag"),Object(s.b)("p",null,"You can define a custom state with a ",Object(s.b)("strong",{parentName:"p"},"tags value")," (seperated by whitespace), and then target it using a pseudo-class selector with a matching ",Object(s.b)("strong",{parentName:"p"},"tag argument"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* define a custom state called "cart" */\n    -st-states: cart( tag )\n}\n\n.root:cart(shirt) {\n    /* targets an element that has a state with a value that\n    is a whitespace-separated list of tags, \n    one of which is exactly the tag argument "shirt" */\n}\n')),Object(s.b)("p",null,"Setting the state ",Object(s.b)("strong",{parentName:"p"},"tag values")," in the view ",Object(s.b)("inlineCode",{parentName:"p"},'<span className={style(classes.root, {cart: "shirt"})}>')," resolves to ",Object(s.b)("inlineCode",{parentName:"p"},'<span className="style__root style---cart-5-shirt" />'),"."),Object(s.b)("h2",{id:"enum"},"Enum"),Object(s.b)("p",null,"You can define a custom state with possible ",Object(s.b)("strong",{parentName:"p"},"enum value")," options, and then target one of the options using a pseudo-class selector with a matching ",Object(s.b)("strong",{parentName:"p"},"string argument"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* define the custom state "size" */\n    -st-states: size( enum(small, medium, large) )\n}\n\n.root:size(medium) {\n    /* target an element with a state value of "medium" */\n}\n\n.root:size(huge) {\n   /* invalid because "huge" is not a one of the possible \n   values defined for the state "size" */\n}\n')),Object(s.b)("p",null,"Setting the state's ",Object(s.b)("strong",{parentName:"p"},"enum value")," in the view ",Object(s.b)("inlineCode",{parentName:"p"},'<span className={style(classes.root, {size: "medium"})}>')," resolves to ",Object(s.b)("inlineCode",{parentName:"p"},'<span className="style--size-medium" />'),"."),Object(s.b)("h2",{id:"string"},"String"),Object(s.b)("p",null,"You can define a custom state with a ",Object(s.b)("strong",{parentName:"p"},"string value"),", and then target it using a pseudo-class selector with a matching ",Object(s.b)("strong",{parentName:"p"},"string argument"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* define the "selected" custom state with a string parameter type */\n    -st-states: selected( string );\n}\n\n.root:selected(username) {\n    /* target an element with a state value that \n    is exactly the string argument "username" */\n}\n')),Object(s.b)("p",null,"Setting the state ",Object(s.b)("strong",{parentName:"p"},"string value")," in the view ",Object(s.b)("inlineCode",{parentName:"p"},'<span className={style(classes.root, {selected: "username"})}>')," resolves to ",Object(s.b)("inlineCode",{parentName:"p"},'<span className="style--selected-username" />'),"."),Object(s.b)("h3",{id:"string-validation-optional"},"String validation ","[optional]"),Object(s.b)("p",null,"You can optionally pass a regular expression string as an argument to add validation for the pseudo-class selector ",Object(s.b)("strong",{parentName:"p"},"string argument"),". The regular expression must be within quotes."),Object(s.b)("p",null,"You can optionally pass a regular expression function (",Object(s.b)("inlineCode",{parentName:"p"},"regex()"),") to the string type to add regular expression validation for the pseudo-class selector.\nThis function accepts a single expression to be tested against the selector parameter. The expression must be within quotes."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* validates that the targeting string argument begins with "user" */\n    -st-states: selected( string(regex("^user")) );\n}\n\n/* a valid argument */\n.root:selected(username) {}\n\n/* invalid because it doesn\'t match the regular expression "^user" */\n.root:selected(index) {}\n')),Object(s.b)("p",null,"String type can also accept several other validations, including ",Object(s.b)("inlineCode",{parentName:"p"},"minLength(number)"),", ",Object(s.b)("inlineCode",{parentName:"p"},"maxLength(number)")," and ",Object(s.b)("inlineCode",{parentName:"p"},"contains(string)"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},".root {\n    /* validates the targeting string arguments with multiple validations */\n    -st-states: selected( \n                    string( \n                        minLength(2), \n                        maxLength(10), \n                        contains(user) \n                    ) \n                );\n}\n\n/* valid argument */\n.root:selected(username) {}\n\n/* invalid due to minLength(2) & contains(user) */\n.root:selected(x) {}\n")),Object(s.b)("h2",{id:"number"},"Number"),Object(s.b)("p",null,"You can define a custom state with a ",Object(s.b)("strong",{parentName:"p"},"number value"),", and then target it using a pseudo-class selector with a matching ",Object(s.b)("strong",{parentName:"p"},"number argument"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<span data-column="5" />\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* define the custom pseudo-class "column" */\n    -st-states: column( number )\n}\n\n.root:column(5) {\n    /* target an element with a state value that is exactly the number argument "5" */\n}\n')),Object(s.b)("p",null,"Setting the state ",Object(s.b)("strong",{parentName:"p"},"number value")," in the view ",Object(s.b)("inlineCode",{parentName:"p"},"<span className={style(classes.root, {column: 5})}>")," resolves to ",Object(s.b)("inlineCode",{parentName:"p"},'<span className="style--column-5" />'),"."),Object(s.b)("h3",{id:"number-validation-optional"},"Number validation ","[optional]"),Object(s.b)("p",null,"You can use several validators that the number type provides."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-css"},'.root {\n    /* validates the targeting number argument */\n    -st-states: column( number( min(2), max(6), multipleOf(2) ) )\n}\n\n/* valid arguments */\n.root:column(2),\n.root:column(4),\n.root:column(6) {}\n\n/* invalid because not a "multipleOf(2)" */\n.root:column(3),\n.root:column(5) {}\n\n/* invalid because of "min(2)" and "max(6)" validations */\n.root:column(1),\n.root:column(7) {}\n')),Object(s.b)("h2",{id:"future-intent"},"Future intent"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/wix/stylable/issues/268"},"Custom user types and validations")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/wix/stylable/issues/270"},'Custom pseudo-class type "nth"')),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/wix/stylable/issues/269"},"Multiple named parameters")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/wix/stylable/issues/271"},"Custom pseudo-class string prefixes")),Object(s.b)("li",{parentName:"ul"},"Lang type - use attribute selector ",Object(s.b)("inlineCode",{parentName:"li"},'[state|="en"]')," to support language code")))}u.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||s;return n?r.a.createElement(d,i(i({ref:t},c),{},{components:n})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);