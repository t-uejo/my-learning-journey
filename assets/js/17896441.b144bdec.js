"use strict";(self.webpackChunkmy_learning_journey=self.webpackChunkmy_learning_journey||[]).push([[401],{2234:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var s=t(4164),a=t(4084),i=t(7559),o=t(7293),l=t(4848);function r(e){let{className:n}=e;return(0,l.jsx)(o.A,{type:"caution",title:(0,l.jsx)(a.Rc,{}),className:(0,s.A)(n,i.G.common.unlistedBanner),children:(0,l.jsx)(a.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.AE,{}),(0,l.jsx)(r,{...e})]})}},1689:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var s=t(4164),a=t(4084),i=t(7559),o=t(7293),l=t(4848);function r(e){let{className:n}=e;return(0,l.jsx)(o.A,{type:"caution",title:(0,l.jsx)(a.Yh,{}),className:(0,s.A)(n,i.G.common.draftBanner),children:(0,l.jsx)(a.TT,{})})}var c=t(2234);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:s}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||s.unlisted)&&(0,l.jsx)(c.A,{}),s.draft&&(0,l.jsx)(r,{})]})}},575:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ae});var s=t(6540),a=t(1213),i=t(9532),o=t(4848);const l=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,o.jsx)(l.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(4164),m=t(4581),h=t(1312),v=t(9022);function b(e){const{previous:n,next:t}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,o.jsx)(v.A,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,o.jsx)(v.A,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,o.jsx)(b,{previous:e.previous,next:e.next})}var f=t(4586),p=t(8774),g=t(4070),j=t(7559),A=t(3886),L=t(3025);const C={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){const n=C[e.versionMetadata.banner];return(0,o.jsx)(n,{...e})}function _(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(p.A,{to:t,onClick:s,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,f.A)(),{pluginId:a}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,g.HW)(a),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.A)(n,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(N,{siteTitle:s,versionMetadata:t})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function k(e){let{className:n}=e;const t=(0,L.r)();return t.banner?(0,o.jsx)(T,{className:n,versionMetadata:t}):null}function H(e){let{className:n}=e;const t=(0,L.r)();return t.badge?(0,o.jsx)("span",{className:(0,u.A)(n,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var y=t(2053),M=t(4336);function B(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(n||t||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(y.A,{tags:a})})}),l&&(0,o.jsx)(M.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var I=t(1422),w=t(5195);const E={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function V(e){let{collapsed:n,...t}=e;return(0,o.jsx)("button",{type:"button",...t,className:(0,u.A)("clean-btn",E.tocCollapsibleButton,!n&&E.tocCollapsibleButtonExpanded,t.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const O={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function G(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,I.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(O.tocCollapsible,!i&&O.tocCollapsibleExpanded,t),children:[(0,o.jsx)(V,{collapsed:i,onClick:l}),(0,o.jsx)(I.N,{lazy:!0,className:O.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(w.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const S={tocMobile:"tocMobile_ITEo"};function P(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(G,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,S.tocMobile)})}var R=t(7763);function U(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(R.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var F=t(1107),D=t(2125);function z(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[t&&(0,o.jsx)("header",{children:(0,o.jsx)(F.A,{as:"h1",children:t})}),(0,o.jsx)(D.A,{children:n})]})}var q=t(6972),Y=t(9169),$=t(6025);function W(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Z={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function J(){const e=(0,$.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(W,{className:Z.breadcrumbHomeIcon})})})}const K={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Q(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,o.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,o.jsx)(p.A,{className:a,href:t,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:n})}):(0,o.jsx)("span",{className:a,children:n})}function X(e){let{children:n,active:t,index:s,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,q.OF)(),n=(0,Y.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,K.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,o.jsx)(J,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,o.jsx)(X,{active:s,index:t,addMicrodata:!!a,children:(0,o.jsx)(Q,{href:a,isLast:s,children:n.label})},t)}))]})}):null}var ne=t(1689);const te={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,o.jsx)(P,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,o.jsx)(U,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!t.hidden&&te.docItemCol),children:[(0,o.jsx)(ne.A,{metadata:s}),(0,o.jsx)(k,{}),(0,o.jsxs)("div",{className:te.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ee,{}),(0,o.jsx)(H,{}),t.mobile,(0,o.jsx)(z,{children:n}),(0,o.jsx)(B,{})]}),(0,o.jsx)(x,{})]})]}),t.desktop&&(0,o.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ae(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:n,children:[(0,o.jsx)(d,{}),(0,o.jsx)(se,{children:(0,o.jsx)(t,{})})]})})}},5195:(e,n,t)=>{t.d(n,{A:()=>b});var s=t(6540),a=t(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(8774),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.p)(),x=c??b.tableOfContents.minHeadingLevel,f=u??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:f}}),[l,r,x,f])),(0,m.jsx)(v,{toc:p,className:t,linkClassName:l,...h})}},7763:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var s=t(4164),a=t(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(4848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(a.A,{...t,linkClassName:l,linkActiveClassName:r})})}},4084:(e,n,t)=>{t.d(n,{AE:()=>r,Rc:()=>o,TT:()=>d,Uh:()=>l,Yh:()=>c});t(6540);var s=t(1312),a=t(5260),i=t(4848);function o(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);