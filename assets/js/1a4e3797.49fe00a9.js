(self.webpackChunkstylable_io=self.webpackChunkstylable_io||[]).push([[7920],{895:function(e,t,n){"use strict";n.d(t,{dK:function(){return r},_k:function(){return a},vc:function(){return u},rx:function(){return c},qo:function(){return o},Hk:function(){return l},Iz:function(){return s}});n(1336);var r=["en"],a=!1,u=null,c="ebcd2de5",o=8,l=50,s={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},7731:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(2137),a=n(7757),u=n.n(a),c=n(7294),o=n(2263),l=n(6591),s=n(9105),i=n(6742),f=n(5977),m=n(412);var h=function(){var e=(0,f.k6)(),t=(0,f.TH)(),n=(0,o.default)().siteConfig.baseUrl;return{searchValue:m.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},d=n(22),_=n(206),p=n(2539),v=n(9481),E=n(1073),g=n(4041),S=n(7365);function y(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var w="searchQueryInput_36Gj",k="searchResultItem_3Ppn",I="searchResultItemPath_DHCY",b="searchResultItemSummary__doj";function C(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,u=t.tokens,o=t.metadata,l=0===r,s=2===r,f=(l?n.b:a.b).slice(),m=s?n.s:n.t;return l||f.push(a.t),c.createElement("article",{className:k},c.createElement("h2",null,c.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:s?(0,p.C)(m,u):(0,v.o)(m,(0,E.m)(o,"t"),u,100)}})),f.length>0&&c.createElement("p",{className:I},f.join(" \u203a ")),s&&c.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,v.o)(n.t,(0,E.m)(o,"t"),u,100)}}))}var P=function(){var e=(0,o.default)().siteConfig.baseUrl,t=h(),n=t.searchValue,a=t.updateSearchPath,i=(0,c.useState)(n),f=i[0],m=i[1],p=(0,c.useState)(),v=p[0],E=p[1],k=(0,c.useState)(),I=k[0],b=k[1],P=(0,c.useMemo)((function(){return f?y(S.Iz.search_results_for,{keyword:f}):S.Iz.search_the_documentation}),[f]);(0,c.useEffect)((function(){a(f),v&&(f?v(f,(function(e){b(e)})):b(void 0))}),[f,v]);var R=(0,c.useCallback)((function(e){m(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==f&&m(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,a=n.zhDictionary,E((function(){return(0,_.v)(r,a,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(l.Z,{title:P},c.createElement(s.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"})),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,P),c.createElement("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:R,value:f,autoComplete:"off",autoFocus:!0}),!v&&f&&c.createElement("div",null,c.createElement(g.Z,null)),I&&(I.length>0?c.createElement("p",null,y(1===I.length?S.Iz.count_documents_found:S.Iz.count_documents_found_plural,{count:I.length})):c.createElement("p",null,S.Iz.no_documents_were_found)),c.createElement("section",null,I&&I.map((function(e){return c.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);