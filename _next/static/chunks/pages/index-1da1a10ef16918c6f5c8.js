(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{6071:function(e,a,t){"use strict";var r=t(3848),s=t(9448);a.default=void 0;var l=s(t(7294)),o=t(1689),i=t(2441),n=t(5749),c={};function _(e,a,t,r){if(e&&(0,o.isLocalURL)(a)){e.prefetch(a,t,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[a+"%"+t+(s?"%"+s:"")]=!0}}var m=function(e){var a=!1!==e.prefetch,t=(0,i.useRouter)(),s=t&&t.pathname||"/",m=l.default.useMemo((function(){var a=(0,o.resolveHref)(s,e.href,!0),t=r(a,2),l=t[0],i=t[1];return{href:l,as:e.as?(0,o.resolveHref)(s,e.as):i||l}}),[s,e.href,e.as]),d=m.href,p=m.as,u=e.children,f=e.replace,y=e.shallow,P=e.scroll,b=e.locale;"string"===typeof u&&(u=l.default.createElement("a",null,u));var v=l.Children.only(u),x=v&&"object"===typeof v&&v.ref,h=(0,n.useIntersection)({rootMargin:"200px"}),g=r(h,2),N=g[0],w=g[1],O=l.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);(0,l.useEffect)((function(){var e=w&&a&&(0,o.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,s=c[d+"%"+p+(r?"%"+r:"")];e&&!s&&_(t,d,p,{locale:r})}),[p,d,w,b,a,t]);var j={ref:O,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,a,t,r,s,l,i,n){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),a[s?"replace":"push"](t,r,{shallow:l,locale:n,scroll:i}))}(e,t,d,p,f,y,P,b)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),_(t,d,p,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof b?b:t&&t.locale,k=t&&t.isLocaleDomain&&(0,o.getDomainLocale)(p,E,t&&t.locales,t&&t.domainLocales);j.href=k||(0,o.addBasePath)((0,o.addLocale)(p,E,t&&t.defaultLocale))}return l.default.cloneElement(v,j)};a.default=m},5749:function(e,a,t){"use strict";var r=t(3848);a.__esModule=!0,a.useIntersection=function(e){var a=e.rootMargin,t=e.disabled||!o,n=(0,s.useRef)(),c=(0,s.useState)(!1),_=r(c,2),m=_[0],d=_[1],p=(0,s.useCallback)((function(e){n.current&&(n.current(),n.current=void 0),t||m||e&&e.tagName&&(n.current=function(e,a,t){var r=function(e){var a=e.rootMargin||"",t=i.get(a);if(t)return t;var r=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var a=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;a&&t&&a(t)}))}),e);return i.set(a,t={id:a,observer:s,elements:r}),t}(t),s=r.id,l=r.observer,o=r.elements;return o.set(e,a),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),i.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:a}))}),[t,a,m]);return(0,s.useEffect)((function(){if(!o&&!m){var e=(0,l.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,l.cancelIdleCallback)(e)}}}),[m]),[p,m]};var s=t(7294),l=t(8391),o="undefined"!==typeof IntersectionObserver;var i=new Map},4913:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return ue}});var r=t(5893),s=t(7294),l=t(5093);var o=t(355);function i(e){return function(e){if(Array.isArray(e))return(0,l.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=t(9008),c=t(4941),_=t(6265),m=t(1664),d=(t(5390),t(8199)),p=t(7536),u=t(443);function f(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?y(Object(t),!0).forEach((function(a){(0,_.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var b=function(e){var a=e.className,t=e.style,s=e.title,l=f(e,["className","style","title"]);return(0,r.jsxs)("svg",P(P({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 36 18",height:"1em",width:"1em",className:(0,c.classNames)("plasmic-default__svg",a),style:t},l),{},{children:[s&&(0,r.jsx)("title",{children:s}),(0,r.jsx)("path",{fill:"url(#kQdHwLjSFa)",d:"M2 18C.895 18-.012 17.101.11 16.003 1.103 7.002 8.734 0 18 0s16.897 7.002 17.89 16.003C36.013 17.101 35.106 18 34 18h-2c0-7.732-6.268-14-14-14S4 10.268 4 18H2z",clipRule:"evenodd",fillRule:"evenodd"}),(0,r.jsx)("path",{fill:"url(#kQdHwLjSFb)",d:"M6 18c0-6.627 5.373-12 12-12s12 5.373 12 12h-4a8 8 0 10-16 0H6z",clipRule:"evenodd",fillRule:"evenodd"}),(0,r.jsx)("path",{fill:"url(#kQdHwLjSFc)",d:"M12 18a6 6 0 0112 0h-3c-.552 0-.98-.474-1.244-.959a2 2 0 00-3.512 0c-.265.485-.692.959-1.244.959h-3z",clipRule:"evenodd",fillRule:"evenodd"}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",y2:"18",x2:"18",y1:"18",x1:"1.977",id:"kQdHwLjSFa",children:[(0,r.jsx)("stop",{stopColor:"#1877F2"}),(0,r.jsx)("stop",{stopColor:"#04A4F4",offset:"1"})]}),(0,r.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",y2:"18",x2:"18",y1:"18",x1:"7.968",id:"kQdHwLjSFb",children:[(0,r.jsx)("stop",{stopColor:"#2ABBA7"}),(0,r.jsx)("stop",{stopColor:"#45BD62",offset:"1"})]}),(0,r.jsxs)("linearGradient",{gradientUnits:"userSpaceOnUse",y2:"18",x2:"18",y1:"18",x1:"13.953",id:"kQdHwLjSFc",children:[(0,r.jsx)("stop",{stopColor:"#F02849"}),(0,r.jsx)("stop",{stopColor:"#F5533D",offset:"1"})]})]})]}))},v=new Array,x=new Array("profilepic","description");var h={root:["root","box"],box:["box"]};function g(e){var a=function(a){var t=(0,c.deriveRenderOpts)(a,{name:e,descendantNames:i(h[e]),internalArgPropNames:x,internalVariantPropNames:v});return function(e){e.variants;var a=e.args,t=e.overrides,r=e.forNode;return e.dataFetches,(0,c.createPlasmicElementProxy)(c.Stack,{as:"div","data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,hasGap:!0,className:(0,c.classNames)(d.all,p.root_reset,u.root)},c.renderPlasmicSlot({defaultContents:(0,c.createPlasmicElementProxy)(b,{className:(0,c.classNames)(d.all,u.svg__urKu6),role:"img"}),value:a.profilepic}),(0,c.createPlasmicElementProxy)("div",{"data-plasmic-name":"box","data-plasmic-override":t.box,className:(0,c.classNames)(d.all,u.box)},c.renderPlasmicSlot({defaultContents:"Built with love by the Plasmic team. ",value:a.description})))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicDescription":"PlasmicDescription.".concat(e),a}var N=Object.assign(g("root"),{box:g("box"),internalVariantProps:v,internalArgProps:x});function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function O(e,a){return(0,r.jsx)(N,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(Object(t),!0).forEach((function(a){(0,_.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var j=s.forwardRef(O),E=t(5661),k=new Array,C=new Array("title");var H={root:["root","link","description","box"],link:["link"],description:["description","box"],box:["box"]};function A(e){var a=function(a){var t=(0,c.deriveRenderOpts)(a,{name:e,descendantNames:i(H[e]),internalArgPropNames:C,internalVariantPropNames:k});return function(e){e.variants;var a=e.args,t=e.overrides,r=e.forNode;return e.dataFetches,(0,c.createPlasmicElementProxy)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:(0,c.classNames)(d.all,p.root_reset,E.root)},(0,c.createPlasmicElementProxy)(c.PlasmicLink,{"data-plasmic-name":"link","data-plasmic-override":t.link,className:(0,c.classNames)(d.all,E.link),component:m.default,href:"/",platform:"nextjs"},c.renderPlasmicSlot({defaultContents:"Code components",value:a.title,className:(0,c.classNames)(E.slotTitle)})),(0,c.createPlasmicElementProxy)(j,{"data-plasmic-name":"description","data-plasmic-override":t.description,className:(0,c.classNames)("__wab_instance",E.description),description:(0,c.createPlasmicElementProxy)("div",{"data-plasmic-name":"box","data-plasmic-override":t.box,className:(0,c.classNames)(d.all,d.__wab_text,E.box)},"Examples of how to bring real components to Plasmic")}))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicHomeHeader":"PlasmicHomeHeader.".concat(e),a}var S=Object.assign(A("root"),{link:A("link"),description:A("description"),box:A("box"),internalVariantProps:k,internalArgProps:C});function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function D(e,a){return(0,r.jsx)(S,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(Object(t),!0).forEach((function(a){(0,_.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var F=s.forwardRef(D),L=t(606),R=new Array,z=new Array("title","_package","children");var M={root:["root"]};var Q=Object.assign(function(e){var a=function(a){var t=(0,c.deriveRenderOpts)(a,{name:e,descendantNames:i(M[e]),internalArgPropNames:z,internalVariantPropNames:R});return function(e){e.variants;var a=e.args,t=e.overrides,r=e.forNode;return e.dataFetches,(0,c.createPlasmicElementProxy)(c.Stack,{as:"div","data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,hasGap:!0,className:(0,c.classNames)(d.all,p.root_reset,L.root)},(0,c.createPlasmicElementProxy)("div",{className:(0,c.classNames)(d.all,L.box__bcBbs)},c.renderPlasmicSlot({defaultContents:"Component",value:a.title,className:(0,c.classNames)(L.slotTitle)}),c.renderPlasmicSlot({defaultContents:"package",value:a._package,className:(0,c.classNames)(L.slotPackage)})),(0,c.createPlasmicElementProxy)("div",{className:(0,c.classNames)(d.all,L.box__h652A)},c.renderPlasmicSlot({defaultContents:"Show the components here",value:a.children})))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicListItem":"PlasmicListItem.".concat(e),a}("root"),{internalVariantProps:R,internalArgProps:z});function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function Z(e,a){return(0,r.jsx)(Q,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(Object(t),!0).forEach((function(a){(0,_.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var K=s.forwardRef(Z),J=t(5406),U=t(9744),q=t(5454),B=t(5128),V=t(1005),G=t(9122),X=t(1602),W=t(1677),Y=t(1870),$=t(6515),ee=new Array,ae=new Array;var te={root:["root","link"],link:["link"]};function re(e){var a=function(a){var t=(0,c.deriveRenderOpts)(a,{name:e,descendantNames:i(te[e]),internalArgPropNames:ae,internalVariantPropNames:ee});return function(e){e.variants,e.args;var a=e.overrides,t=e.forNode;return e.dataFetches,(0,c.createPlasmicElementProxy)("div",{"data-plasmic-name":"root","data-plasmic-override":a.root,"data-plasmic-root":!0,"data-plasmic-for-node":t,className:(0,c.classNames)(d.all,p.root_reset,$.root)},(0,c.createPlasmicElementProxy)(c.Stack,{as:"div",hasGap:!0,className:(0,c.classNames)(d.all,$.box__mu7So)},(0,c.createPlasmicElementProxy)("div",{className:(0,c.classNames)(d.all,d.__wab_text,$.box__rPe8Z)},"\xa9 2021"),(0,c.createPlasmicElementProxy)("div",{className:(0,c.classNames)(d.all,d.__wab_text,$.box__hJKs6)},"Built with"),(0,c.createPlasmicElementProxy)(c.PlasmicLink,{"data-plasmic-name":"link","data-plasmic-override":a.link,className:(0,c.classNames)(d.all,d.__wab_text,$.link),component:m.default,href:"https://www.plasmic.app",platform:"nextjs"},"Plasmic")))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicFooter":"PlasmicFooter.".concat(e),a}var se=Object.assign(re("root"),{link:re("link"),internalVariantProps:ee,internalArgProps:ae});function le(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function oe(e,a){return(0,r.jsx)(se,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?le(Object(t),!0).forEach((function(a){(0,_.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var ie=s.forwardRef(oe),ne=t(5449),ce=new Array,_e=new Array;var me={root:["root","homeHeader","container","youTube","map","slider","menu","collapse","svg","radialChart","xyPlot","xAxis","yAxis","barSeries","footer"],homeHeader:["homeHeader"],container:["container","youTube","map","slider","menu","collapse","svg","radialChart","xyPlot","xAxis","yAxis","barSeries"],youTube:["youTube"],map:["map"],slider:["slider"],menu:["menu"],collapse:["collapse"],svg:["svg"],radialChart:["radialChart"],xyPlot:["xyPlot","xAxis","yAxis","barSeries"],xAxis:["xAxis"],yAxis:["yAxis"],barSeries:["barSeries"],footer:["footer"]};function de(e){var a=function(a){var t=(0,c.deriveRenderOpts)(a,{name:e,descendantNames:i(me[e]),internalArgPropNames:_e,internalVariantPropNames:ce});return function(e){e.variants,e.args;var a=e.overrides,t=e.forNode;return e.dataFetches,(0,c.createPlasmicElementProxy)(s.Fragment,null,(0,c.createPlasmicElementProxy)(n.default,null,(0,c.createPlasmicElementProxy)("title",{key:"title"},""),(0,c.createPlasmicElementProxy)("meta",{key:"og:title",property:"og:title",content:""}),(0,c.createPlasmicElementProxy)("meta",{key:"description",name:"description",property:"og:description",content:""})),(0,c.createPlasmicElementProxy)("div",{className:d.plasmic_page_wrapper},(0,c.createPlasmicElementProxy)("div",{"data-plasmic-name":"root","data-plasmic-override":a.root,"data-plasmic-root":!0,"data-plasmic-for-node":t,className:(0,c.classNames)(d.all,p.root_reset,ne.root)},(0,c.createPlasmicElementProxy)(c.Stack,{as:"div",hasGap:!0,className:(0,c.classNames)(d.all,ne.box__datbb)},(0,c.createPlasmicElementProxy)(F,{"data-plasmic-name":"homeHeader","data-plasmic-override":a.homeHeader,className:(0,c.classNames)("__wab_instance",ne.homeHeader),title:"Code components"}),(0,c.createPlasmicElementProxy)(c.Stack,{as:"div","data-plasmic-name":"container","data-plasmic-override":a.container,hasGap:!0,className:(0,c.classNames)(d.all,ne.container)},(0,c.createPlasmicElementProxy)(K,{_package:(0,c.createPlasmicElementProxy)("div",{className:(0,c.classNames)(d.all,d.__wab_text,ne.box___33MxC)},"react-youtube"),className:(0,c.classNames)("__wab_instance",ne.listItem__tfkV),title:"Youtube"},(0,c.createPlasmicElementProxy)(J.Z,{"data-plasmic-name":"youTube","data-plasmic-override":a.youTube,className:(0,c.classNames)("__wab_instance",ne.youTube),videoId:"R6MeLqRQzYw"})),(0,c.createPlasmicElementProxy)(K,{_package:"@react-google-maps/api",className:(0,c.classNames)("__wab_instance",ne.listItem__il7Xs),title:"Maps"},(0,c.createPlasmicElementProxy)(U.b6,{"data-plasmic-name":"map","data-plasmic-override":a.map,center:{lat:-5,lng:-40},mapContainerClassName:(0,c.classNames)("__wab_instance",ne.map),zoom:6})),(0,c.createPlasmicElementProxy)(K,{_package:"antd",className:(0,c.classNames)("__wab_instance",ne.listItem__tChJd),title:"Slider"},(0,c.createPlasmicElementProxy)(q.Z,{"data-plasmic-name":"slider","data-plasmic-override":a.slider,className:(0,c.classNames)("__wab_instance",ne.slider),range:!0,vertical:!1})),(0,c.createPlasmicElementProxy)(K,{_package:"antd",className:(0,c.classNames)("__wab_instance",ne.listItem__el4De),title:"Menu"},(0,c.createPlasmicElementProxy)(B.Z,{"data-plasmic-name":"menu","data-plasmic-override":a.menu,className:(0,c.classNames)("__wab_instance",ne.menu),defaultSelectedKeys:["opt3"]},(0,c.createPlasmicElementProxy)(V.Z,{className:(0,c.classNames)("__wab_instance",ne.menuItem___83QR3),key:"opt1"},"Menu Option 1"),(0,c.createPlasmicElementProxy)(V.Z,{className:(0,c.classNames)("__wab_instance",ne.menuItem___1PLx),key:"opt2"},"Menu Option 2"),(0,c.createPlasmicElementProxy)(V.Z,{className:(0,c.classNames)("__wab_instance",ne.menuItem__xo8Jv),key:"opt3"},"Menu Option 3"))),(0,c.createPlasmicElementProxy)(K,{_package:"antd",className:(0,c.classNames)("__wab_instance",ne.listItem__kfrAt),title:"Collapse"},(0,c.createPlasmicElementProxy)(G.Z,{"data-plasmic-name":"collapse","data-plasmic-override":a.collapse,className:(0,c.classNames)("__wab_instance",ne.collapse),defaultActiveKey:["1"]},(0,c.createPlasmicElementProxy)(X.Z,{className:(0,c.classNames)("__wab_instance",ne.collapsePanel___7XMTk),header:"My collapse header",key:"1"},"First collapse contents!"),(0,c.createPlasmicElementProxy)(X.Z,{className:(0,c.classNames)("__wab_instance",ne.collapsePanel__and7C),header:"My other collapse panel",key:"2"},"More super fancy content"))),(0,c.createPlasmicElementProxy)(K,{_package:"antd",className:(0,c.classNames)("__wab_instance",ne.listItem__peCqW),title:"Alert"},(0,c.createPlasmicElementProxy)(W.Z,{className:(0,c.classNames)("__wab_instance",ne.alert__nuj4J),description:(0,c.createPlasmicElementProxy)("div",{className:(0,c.classNames)(d.all,ne.box__qCm7R)},(0,c.createPlasmicElementProxy)("div",{className:(0,c.classNames)(d.all,d.__wab_text,ne.box__q6Thx)},"Description goes here! "),(0,c.createPlasmicElementProxy)(b,{"data-plasmic-name":"svg","data-plasmic-override":a.svg,className:(0,c.classNames)(d.all,ne.svg),role:"img"})),message:"So cooooool!",showIcon:!0,type:"success"}),(0,c.createPlasmicElementProxy)(W.Z,{className:(0,c.classNames)("__wab_instance",ne.alert__bQk8E),description:":(",message:"Ooops",showIcon:!0,type:"error"})),(0,c.createPlasmicElementProxy)(K,{_package:"react-vis",className:(0,c.classNames)("__wab_instance",ne.listItem___2Iz78),title:"Radial Chart"},(0,c.createPlasmicElementProxy)(Y.iw,{"data-plasmic-name":"radialChart","data-plasmic-override":a.radialChart,className:(0,c.classNames)("__wab_instance",ne.radialChart),data:[{angle:1},{angle:5},{angle:7},{angle:12},{angle:7}],height:150,width:150})),(0,c.createPlasmicElementProxy)(K,{_package:"react-vis",className:(0,c.classNames)("__wab_instance",ne.listItem__dL0Ja),title:"Bar Series + XY Plot"},(0,c.createPlasmicElementProxy)(Y.dp,{"data-plasmic-name":"xyPlot","data-plasmic-override":a.xyPlot,className:(0,c.classNames)("__wab_instance",ne.xyPlot),height:200,width:200,xDomain:[10,50],yDomain:[0,100]},(0,c.createPlasmicElementProxy)(Y.Kc,{"data-plasmic-name":"xAxis","data-plasmic-override":a.xAxis,className:(0,c.classNames)("__wab_instance",ne.xAxis)}),(0,c.createPlasmicElementProxy)(Y.B2,{"data-plasmic-name":"yAxis","data-plasmic-override":a.yAxis,className:(0,c.classNames)("__wab_instance",ne.yAxis)}),(0,c.createPlasmicElementProxy)(Y.XQ,{"data-plasmic-name":"barSeries","data-plasmic-override":a.barSeries,barWidth:1,className:(0,c.classNames)("__wab_instance",ne.barSeries),data:[{id:0,x:12,y:30},{id:1,x:29,y:46},{id:2,x:43,y:60},{id:3,x:16,y:40},{id:4,x:39,y:55},{id:5,x:25,y:94},{id:6,x:36,y:78},{id:7,x:33,y:69}]})))),(0,c.createPlasmicElementProxy)(ie,{"data-plasmic-name":"footer","data-plasmic-override":a.footer,className:(0,c.classNames)("__wab_instance",ne.footer)})))))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicHome":"PlasmicHome.".concat(e),a}var pe=Object.assign(de("root"),{homeHeader:de("homeHeader"),container:de("container"),youTube:de("youTube"),map:de("map"),slider:de("slider"),menu:de("menu"),collapse:de("collapse"),svg:de("svg"),radialChart:de("radialChart"),xyPlot:de("xyPlot"),xAxis:de("xAxis"),yAxis:de("yAxis"),barSeries:de("barSeries"),footer:de("footer"),internalVariantProps:ce,internalArgProps:_e});t(5791),t(9229);var ue=function(){return(0,r.jsx)(pe,{})}},5301:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4913)}])},443:function(e){e.exports={root:"PlasmicDescription_root__Ya91M",svg__urKu6:"PlasmicDescription_svg__urKu6__23RhS",box:"PlasmicDescription_box__2Uaiu"}},6515:function(e){e.exports={root:"PlasmicFooter_root__3rMY-",box__mu7So:"PlasmicFooter_box__mu7So__1Iy7J",box__rPe8Z:"PlasmicFooter_box__rPe8Z__1-zX6",box__hJKs6:"PlasmicFooter_box__hJKs6__1Ec6K",link:"PlasmicFooter_link__zqyOt"}},5449:function(e){e.exports={root:"PlasmicHome_root__3tbkG",box__datbb:"PlasmicHome_box__datbb__3GMgP",homeHeader:"PlasmicHome_homeHeader__1DjNX",container:"PlasmicHome_container__2sAGA",listItem__tfkV:"PlasmicHome_listItem__tfkV__1Iv5y",box___33MxC:"PlasmicHome_box___33MxC__3TR5F",youTube:"PlasmicHome_youTube__313mM",listItem__il7Xs:"PlasmicHome_listItem__il7Xs__3cZD1",map:"PlasmicHome_map__3rRZA",listItem__tChJd:"PlasmicHome_listItem__tChJd__2jH4n",slider:"PlasmicHome_slider__23jUc",listItem__el4De:"PlasmicHome_listItem__el4De__1kOUG",menu:"PlasmicHome_menu__g7Qi6",listItem__kfrAt:"PlasmicHome_listItem__kfrAt__21ZxH",collapse:"PlasmicHome_collapse__1AyDn",listItem__peCqW:"PlasmicHome_listItem__peCqW__1rBz4",alert__nuj4J:"PlasmicHome_alert__nuj4J__36Uge",box__qCm7R:"PlasmicHome_box__qCm7R__1F5dv",box__q6Thx:"PlasmicHome_box__q6Thx__1W2qt",svg:"PlasmicHome_svg__3-cZg",alert__bQk8E:"PlasmicHome_alert__bQk8E__1C1a7",listItem___2Iz78:"PlasmicHome_listItem___2Iz78__OuF3J",radialChart:"PlasmicHome_radialChart__21dw5",listItem__dL0Ja:"PlasmicHome_listItem__dL0Ja__lLZiJ",xyPlot:"PlasmicHome_xyPlot__dK__a",footer:"PlasmicHome_footer__1wyaa"}},5661:function(e){e.exports={root:"PlasmicHomeHeader_root__l0jLc",link:"PlasmicHomeHeader_link__1w86c",slotTitle:"PlasmicHomeHeader_slotTitle__1FDuz",description:"PlasmicHomeHeader_description__2CNuD",svg___1ADdO:"PlasmicHomeHeader_svg___1ADdO__3f3nU",box:"PlasmicHomeHeader_box__2lhKJ"}},606:function(e){e.exports={root:"PlasmicListItem_root__2QtlN",box__bcBbs:"PlasmicListItem_box__bcBbs__2hdQE",slotTitle:"PlasmicListItem_slotTitle__2EkOw",slotPackage:"PlasmicListItem_slotPackage__1MoZT",box__h652A:"PlasmicListItem_box__h652A__1PeN0"}},7536:function(e){e.exports={root_reset:"plasmic_code_component_examples_root_reset__2FjkK"}},8199:function(e){e.exports={all:"plasmic__default_style_all__1QizC",img:"plasmic__default_style_img__3g8in plasmic__default_style_all__1QizC",input:"plasmic__default_style_input__1SIfv plasmic__default_style_all__1QizC",textarea:"plasmic__default_style_textarea__aORkV plasmic__default_style_all__1QizC",button:"plasmic__default_style_button__3IN4h plasmic__default_style_all__1QizC",code:"plasmic__default_style_code__Sz3Ne plasmic__default_style_all__1QizC",pre:"plasmic__default_style_pre__2L7Pg plasmic__default_style_all__1QizC",h1:"plasmic__default_style_h1__18nhR plasmic__default_style_all__1QizC",h2:"plasmic__default_style_h2__u_nut plasmic__default_style_all__1QizC",h3:"plasmic__default_style_h3__2rKIU plasmic__default_style_all__1QizC",h4:"plasmic__default_style_h4__102jt plasmic__default_style_all__1QizC",h5:"plasmic__default_style_h5__2T8ui plasmic__default_style_all__1QizC",h6:"plasmic__default_style_h6__26ghp plasmic__default_style_all__1QizC",address:"plasmic__default_style_address__3e6gS plasmic__default_style_all__1QizC",ol:"plasmic__default_style_ol__cfuZ8 plasmic__default_style_all__1QizC",ul:"plasmic__default_style_ul__2EsAM plasmic__default_style_all__1QizC",select:"plasmic__default_style_select__26-_r plasmic__default_style_all__1QizC",li:"plasmic__default_style_li__24ESa plasmic__default_style_all__1QizC",plasmic_default__component_wrapper:"plasmic__default_style_plasmic_default__component_wrapper__3qif4",__wab_text:"plasmic__default_style___wab_text__1BDc3",plasmic_page_wrapper:"plasmic__default_style_plasmic_page_wrapper__17wzu"}},5390:function(){},1664:function(e,a,t){e.exports=t(6071)},6265:function(e,a,t){"use strict";function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,{Z:function(){return r}})},8374:function(){},4453:function(){}},function(e){e.O(0,[774,532,351,433,495],(function(){return a=5301,e(e.s=a);var a}));var a=e.O();_N_E=a}]);