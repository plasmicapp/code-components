(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{5609:function(e,t,i){"use strict";i.r(t),i.d(t,{WiredButton:function(){return c},WiredCalendar:function(){return p},WiredCard:function(){return u},WiredCheckBox:function(){return f},WiredCombo:function(){return v},WiredDialog:function(){return b},WiredDivider:function(){return m},WiredFab:function(){return x},WiredIconButton:function(){return S},WiredImage:function(){return C},WiredInput:function(){return z},WiredItem:function(){return j},WiredLink:function(){return M},WiredListBox:function(){return N},WiredProgress:function(){return D},WiredRadio:function(){return L},WiredRadioGroup:function(){return B},WiredSearchInput:function(){return H},WiredSlider:function(){return q},WiredSpinner:function(){return F},WiredTab:function(){return G},WiredTabs:function(){return Z},WiredTextArea:function(){return ee},WiredToggle:function(){return te},WiredVideo:function(){return ie}});i(82958);var s=i(67294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}var n=s.useState,o=s.useRef,a=s.useEffect;function l(e){var t=n({}),i=t[0],s=t[1],l=o(!1),d=o();return a((function(){if(l.current){var t,i=e.attributes,n=e.css;n&&function(e){Object.keys(e).forEach((function(t){var i=e[t];i&&(t.startsWith("--")?document.documentElement.style.setProperty(t,i||"#333"):d.current.style[t]=i)}))}(n),i&&(t=i,Object.keys(t).forEach((function(e){s((function(i){var s;return r({},i,((s={})[e]=t[e],s))}))})))}}),[e]),a((function(){if(l.current){var t,i=e.methods;i&&(t=i,Object.keys(t).forEach((function(e){d.current.addEventListener(e,t[e])})))}}),[e]),a((function(){setTimeout((function(){var e;(null===(e=d.current)||void 0===e?void 0:e.requestUpdate)&&d.current.requestUpdate()}),0)})),a((function(){Object.keys(i).forEach((function(e){d.current[e]=i[e]}))}),[i]),a((function(){d.current.addEventListener("input",(function(e){s((function(t){return r({},t,{value:e.target.value})}))}))}),[]),function(e){d.current=e,l.current=!0}}var d=s.useMemo,c=function(e){var t=e.className,i=e.style,r=e.onClick,n=e.elevation,o=void 0===n?1:n,a=e.disabled,c=void 0!==a&&a,h=e.children,p=void 0===h?"Click Me!":h,u=l(d((function(){return{attributes:{disabled:c,elevation:o}}}),[o,c]));return(0,s.createElement)("wired-button",{onClick:r,class:t,style:i,ref:u},p)},h=s.useMemo,p=function(e){var t=e.elevation,i=void 0===t?1:t,r=e.selectedDate,n=e.firstDate,o=e.lastDate,a=e.locale,d=e.disabled,c=void 0!==d&&d,p=e.initials,u=void 0!==p&&p,f=e.bgColor,g=void 0===f?"white":f,v=e.lineColor,y=void 0===v?"black":v,b=e.selectedColor,m=void 0===b?"red":b,w=e.dimmedColor,x=void 0===w?"gray":w,k=e.onSelect,S=e.className,R=e.style,C=l(h((function(){return{attributes:{elevation:i,selected:r,firstdate:n,lastdate:o,locale:a,disabled:c,initials:u},methods:{selected:k},css:{"--wired-calendar-bg":g,"--wired-calendar-color":y,"--wired-calendar-selected-color":m,"--wired-calendar-dimmed-color":x}}}),[i,r,n,o,a,c,u,g,y,m,x,k]));return(0,s.createElement)("wired-calendar",{class:S,style:R,ref:C})},u=function(e){var t=e.requestUpdate,i=e.elevation,r=e.fill,n=e.children,o=e.className,a=e.style,d=l((0,s.useMemo)((function(){return{attributes:{elevation:i,fill:r},methods:{requestUpdate:t}}}),[i,r,t]));return(0,s.createElement)("wired-card",{class:o,style:a,ref:d},n)},f=function(e){var t=e.checked,i=void 0!==t&&t,r=e.color,n=void 0===r?"currentColor":r,o=e.disabled,a=void 0!==o&&o,d=e.onChange,c=e.className,h=e.style,p=l((0,s.useMemo)((function(){return{attributes:{disabled:a,checked:i},methods:{change:d},css:{"--wired-checkbox-icon-color":n}}}),[i,a,n,d]));return(0,s.createElement)("wired-checkbox",{class:c,style:h,ref:p})},g=s.useMemo,v=function(e){var t=e.children,i=e.disabled,r=void 0!==i&&i,n=e.value,o=e.onSelect,a=e.popupBgColor,d=void 0===a?"white":a,c=e.selectedBgColor,h=void 0===c?"gray":c,p=e.className,u=e.style,f=l(g((function(){return{attributes:{disabled:r,value:n},methods:{selected:o},css:{"--wired-combo-popup-bg":d,"--wired-item-selected-bg":h}}}),[r,n,o,d,h]));return(0,s.createElement)("wired-combo",{class:p,style:u,ref:f},t)},y=s.useMemo,b=function(e){var t=e.children,i=e.elevation,r=void 0===i?1:i,n=e.open,o=void 0!==n&&n,a=e.zIndex,d=void 0===a?1:a,c=e.className,h=e.style,p=l(y((function(){return{attributes:{open:o,elevation:r},css:{"--wired-dialog-z-index":d}}}),[r,o,d]));return(0,s.createElement)("wired-dialog",{class:c,style:h,ref:p},t)},m=function(e){var t=e.elevation,i=void 0===t?1:t,r=e.className,n=e.style,o=l((0,s.useMemo)((function(){return{attributes:{elevation:i}}}),[i]));return(0,s.createElement)("wired-divider",{class:r,style:n,ref:o})},w=s.useMemo,x=function(e){var t=e.disabled,i=void 0!==t&&t,r=e.bgColor,n=void 0===r?"#018786":r,o=e.iconColor,a=void 0===o?"white":o,d=e.icon,c=void 0===d?"favorite":d,h=e.onClick,p=e.children,u=e.className,f=e.style,g=l(w((function(){return{attributes:{disabled:i},methods:{click:h},css:{"--wired-fab-bg-color":n,color:a}}}),[i,n,a,h]));return(0,s.createElement)("wired-fab",{class:u,style:f,ref:g},(0,s.createElement)("span",null,p||(0,s.createElement)("span",{className:"material-icons",style:{color:a}},c)))},k=s.useMemo,S=function(e){var t=e.disabled,i=void 0!==t&&t,r=e.lineColor,n=void 0===r?"#018786":r,o=e.iconColor,a=void 0===o?"#018786":o,d=e.icon,c=void 0===d?"favorite":d,h=e.iconSize,p=void 0===h?24:h,u=e.onClick,f=e.children,g=e.className,v=e.style,y=l(k((function(){return{attributes:{disabled:i},css:{color:n,"--mdc-icon-size":p}}}),[i,n,p]));return(0,s.createElement)("wired-icon-button",{onClick:u,class:g,style:v,ref:y},(0,s.createElement)("div",{style:{height:"24px",width:"24px"}},f||(0,s.createElement)("span",{className:"material-icons",style:{fontSize:p,color:a}},c)))},R=s.useMemo,C=function(e){var t=e.elevation,i=void 0===t?1:t,r=e.src,n=void 0===r?"http://placekitten.com/200/300":r,o=e.className,a=e.style,d=l(R((function(){return{attributes:{src:n,elevation:i}}}),[i,n]));return(0,s.createElement)("wired-image",{class:o,style:a,ref:d})},O=s.useMemo,z=function(e){var t=e.placeholder,i=void 0===t?"":t,r=e.disabled,n=void 0!==r&&r,o=e.type,a=void 0===o?"text":o,d=e.value,c=void 0===d?"":d,h=e.onChange,p=e.onBlur,u=e.onFocus,f=e.className,g=e.style,v=l(O((function(){return{attributes:{placeholder:i,disabled:n,type:a,value:c},methods:{input:h,blur:p,focus:u}}}),[i,n,a,c,h,p,u]));return(0,s.createElement)("wired-input",{class:f,style:g,ref:v})},_=s.useMemo,j=function(e){var t=e.children,i=e.value,n=e.selectedBgColor,o=void 0===n?"black":n,a=e.selectedColor,d=void 0===a?"white":a,c=e.color,h=void 0===c?"black":c,p=e.selected,u=void 0!==p&&p,f=e.onClick,g=e.className,v=e.style,y=l(_((function(){return{attributes:{value:i,selected:u},css:{"--wired-item-selected-color":d,"--wired-item-selected-bg":o}}}),[i,o,d,u])),b=r({},v);return b.backgroundColor=u?o:null===v||void 0===v?void 0:v.backgroundColor,b.color=u?d:h||(null===v||void 0===v?void 0:v.color),(0,s.createElement)("wired-item",{value:i,class:g,style:b,onClick:function(){return f&&f(u)},ref:y},t)},M=function(e){var t=e.elevation,i=void 0===t?1:t,r=e.href,n=void 0===r?"":r,o=e.target,a=e.color,d=void 0===a?"black":a,c=e.lineColor,h=void 0===c?"black":c,p=e.children,u=e.className,f=e.style,g=l((0,s.useMemo)((function(){return{attributes:{elevation:i,href:n,target:o},css:{"--wired-link-decoration-color":h,color:d}}}),[i,n,o,d,h]));return(0,s.createElement)("wired-link",{class:u,style:f,ref:g},p)},P=s.useMemo,N=function(e){var t=e.children,i=e.horizontal,r=void 0!==i&&i,n=e.selected,o=e.onSelect,a=e.color,d=void 0===a?"black":a,c=e.bgColor,h=void 0===c?"white":c,p=e.className,u=e.style,f=l(P((function(){return{attributes:{horizontal:r,selected:n},methods:{selected:o},css:{"--wired-item-selected-color ":d,"--wired-item-selected-bg":h}}}),[r,n,o,d,h]));return(0,s.createElement)("wired-listbox",{selected:n,class:p,style:u,ref:f},t)},$=s.useMemo,E=s.useState,I=s.useEffect,D=function(e){var t=e.value,i=void 0===t?30:t,r=e.min,n=void 0===r?0:r,o=e.max,a=void 0===o?100:o,d=e.showPercentage,c=void 0!==d&&d,h=e.labelColor,p=void 0===h?"black":h,u=e.labelBgColor,f=void 0===u?"rgba(255,255,255,0.9)":u,g=e.progressBarColor,v=void 0===g?"rgba(0, 0, 200, 0.8)":g,y=e.fontSize,b=void 0===y?14:y,m=e.stuckAt,w=e.className,x=e.style,k=E(null),S=k[0],R=k[1];I((function(){var e;return m&&(e=setInterval((function(){R((function(e){return e===m?e+.01:m}))}),750)),function(){return clearInterval(e)}}),[m]);var C=l($((function(){return{attributes:{value:S||i,min:S?0:n,max:S?100:a,percentage:c},css:{"--wired-progress-label-color":p,"--wired-progress-label-background":f,"--wired-progress-color":v,"--wired-progress-font-size":b}}}),[i,n,a,c,p,f,v,b,S]));return(0,s.createElement)("wired-progress",{class:w,style:x,ref:C})},A=s.useMemo,L=function(e){var t=e.checked,i=void 0!==t&&t,r=e.disabled,n=void 0!==r&&r,o=e.name,a=e.color,d=void 0===a?"currentColor":a,c=e.onChange,h=e.children,p=e.className,u=e.style,f=l(A((function(){return{attributes:{checked:i,disabled:n,name:o},methods:{change:c},css:{"--wired-radio-icon-color":d}}}),[i,n,o,d,c]));return(0,s.createElement)("wired-radio",{class:p,style:u,ref:f},h)},T=s.useMemo,B=function(e){var t=e.children,i=e.selected,r=e.onSelect,n=e.className,o=e.style,a=l(T((function(){return{attributes:{selected:i},methods:{selected:r}}}),[i,r]));return(0,s.createElement)("wired-radio-group",{class:n,style:o,ref:a},t)},V=s.useMemo,H=function(e){var t=e.placeholder,i=void 0===t?"":t,r=e.disabled,n=void 0!==r&&r,o=e.value,a=void 0===o?"":o,d=e.onChange,c=e.onBlur,h=e.onFocus,p=e.className,u=e.style,f=l(V((function(){return{attributes:{placeholder:i,disabled:n,value:a},methods:{input:d,blur:c,focus:h}}}),[i,n,a,d,c,h]));return(0,s.createElement)("wired-search-input",{class:p,style:u,ref:f})};function U(e,t,i){var s;return function(){var r=this,n=arguments,o=function(){s=null,i||e.apply(r,n)},a=i&&!s;clearTimeout(s),s=setTimeout(o,t),a&&e.apply(r,n)}}var W=s.useMemo,q=function(e){var t=e.value,i=void 0===t?30:t,r=e.min,n=void 0===r?0:r,o=e.max,a=void 0===o?100:o,d=e.knobZeroColor,c=void 0===d?"black":d,h=e.knobColor,p=void 0===h?"rgba(0, 0, 200, 0.8)":h,u=e.barColor,f=void 0===u?"currentColor":u,g=e.onChange,v=e.className,y=e.style,b=l(W((function(){return{attributes:{value:i,min:n,max:a},css:{"--wired-slider-knob-color":i===n?c:p,"--wired-slider-bar-color":f},methods:{change:U(g,500)}}}),[i,n,a,c,p,f,g]));return(0,s.createElement)("wired-slider",{class:v,style:y,ref:b})},F=function(e){var t=e.spinning,i=void 0!==t&&t,r=e.duration,n=void 0===r?1500:r,o=e.color,a=void 0===o?"black":o,d=e.className,c=e.style,h=l((0,s.useMemo)((function(){return{attributes:{spinning:i,duration:n},css:{color:a}}}),[i,n,a]));return(0,s.createElement)("wired-spinner",{class:d,style:c,ref:h})},Y=s.useMemo,G=function(e){var t=e.children,i=e.name,n=e.label,o=e.className,a=e.style,d=l(Y((function(){return{attributes:{name:i,label:n}}}),[i,n])),c=r({},a,{minWidth:"200px"});return(0,s.createElement)("wired-tab",{class:o,style:c,ref:d},t)},K=function(e){var t=e.when,i=e.children;return(0,s.createElement)(s.Fragment,null,t&&i)},J=s.useState,Q=s.useRef,Z=function(e){var t=e.children,i=e.initialSelected,r=e.selectedColor,n=void 0===r?"white":r,o=e.selectedBgColor,a=void 0===o?"black":o,l=J(i),d=l[0],c=l[1],h=Q(null);return(0,s.createElement)("div",null,(0,s.createElement)("div",{ref:h},(0,s.createElement)(K,{when:Array.isArray(t)},t&&t.map((function(e){return(0,s.createElement)(j,{selectedColor:n,selectedBgColor:a,onClick:function(){return t=e.props.name,void c(t);var t},selected:d===e.props.name,key:e.props.name,value:e.props.name},e.props.name)})))),(0,s.createElement)("div",null,(0,s.createElement)(K,{when:Array.isArray(t)},t&&t.map((function(e){return e.props.name===d?(0,s.createElement)("div",{key:e,style:{width:(null===h||void 0===h?void 0:h.current)?null===h||void 0===h?void 0:h.current.clientWidth:"auto"}},e):null})))))},X=s.useMemo,ee=function(e){var t=e.placeholder,i=e.disabled,r=e.value,n=e.rows,o=void 0===n?3:n,a=e.maxRows,d=void 0===a?20:a,c=e.onChange,h=e.onBlur,p=e.onFocus,u=e.className,f=e.style,g=l(X((function(){return{attributes:{placeholder:t,disabled:i,value:r,rows:o,maxrows:d},methods:{keyup:c,blur:h,focus:p}}}),[t,i,r,o,d,c,h,p]));return(0,s.createElement)("wired-textarea",{class:u,style:f,ref:g})},te=function(e){var t=e.checked,i=void 0!==t&&t,r=e.disabled,n=void 0!==r&&r,o=e.onChange,a=e.activeColor,d=void 0===a?"rgb(63, 81, 181)":a,c=e.inactiveColor,h=void 0===c?"gray":c,p=e.className,u=e.style,f=l((0,s.useMemo)((function(){return{attributes:{checked:i,disabled:n},methods:{change:o},css:{"--wired-toggle-on-color":d,"--wired-toggle-off-color":h}}}),[i,n,o,d,h]));return(0,s.createElement)("wired-toggle",{class:p,style:u,ref:f})},ie=function(e){var t=e.src,i=void 0===t?"https://res.cloudinary.com/gojutin/video/upload/w_400/v1585407774/cat-video.mp4":t,r=e.autoPlay,n=void 0!==r&&r,o=e.loop,a=void 0!==o&&o,d=e.muted,c=void 0!==d&&d,h=e.playsInline,p=void 0!==h&&h,u=e.color,f=void 0===u?"black":u,g=e.className,v=e.style,y=l((0,s.useMemo)((function(){return{attributes:{src:i,autoplay:n,loop:a,muted:c,playsinline:p},css:{"--wired-video-highlight-color":f}}}),[i,n,a,c,p,f]));return(0,s.createElement)("wired-video",{class:g,style:v,ref:y})}},82958:function(e,t){"use strict";const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},r=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${r}--\x3e`,o=new RegExp(`${r}|${n}`);class a{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],n=document.createTreeWalker(t.content,133,null,!1);let a=0,d=-1,p=0;const{strings:u,values:{length:f}}=e;for(;p<f;){const e=n.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)l(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=u[p],i=h.exec(t)[2],s=i.toLowerCase()+"$lit$",r=e.getAttribute(s);e.removeAttribute(s);const n=r.split(o);this.parts.push({type:"attribute",index:d,name:i,strings:n}),p+=n.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const s=e.parentNode,r=t.split(o),n=r.length-1;for(let t=0;t<n;t++){let i,n=r[t];if(""===n)i=c();else{const e=h.exec(n);null!==e&&l(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(n)}s.insertBefore(i,e),this.parts.push({type:"node",index:++d})}""===r[n]?(s.insertBefore(c(),e),i.push(e)):e.data=r[n],p+=n}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&d!==a||(d++,t.insertBefore(c(),e)),a=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(i.push(e),d--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),p++}}else n.currentNode=s.pop()}for(const r of i)r.parentNode.removeChild(r)}}const l=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:i},parts:s}=e,r=document.createTreeWalker(i,133,null,!1);let n=f(s),o=s[n],a=-1,l=0;const d=[];let c=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,n=f(s,n),o=s[n]}d.forEach((e=>e.parentNode.removeChild(e)))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},f=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(d(t))return i}return-1},g=new WeakMap,v=e=>"function"==typeof e&&g.has(e),y={},b={};class m{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const i of this.__parts)void 0!==i&&i.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,l=r.nextNode();for(;o<s.length;)if(n=s[o],d(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=` ${r} `;class x{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],o=e.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===e.indexOf("--\x3e",o+1);const a=h.exec(e);t+=null===a?e+(i?w:n):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const k=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class R{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(k(e)||!S(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||k(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class O{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(k(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===b?(this.value=b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof m&&this.value.template===t)this.value.update(e.values);else{const i=new m(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const r of e)i=t[s],void 0===i&&(i=new O(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(r),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class z{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class _ extends R{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends C{}let M=!1;(()=>{try{const e={get capture(){return M=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(i){}})();class P{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=N(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const N=e=>e&&(M?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function $(e){let t=E.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},E.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(r);return i=t.keyString.get(s),void 0===i&&(i=new a(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const E=new Map,I=new WeakMap,D=new class{handleAttributeExpressions(e,t,i,s){const r=t[0];return"."===r?new _(e,t.slice(1),i).parts:"@"===r?[new P(e,t.slice(1),s.eventContext)]:"?"===r?[new z(e,t.slice(1),i)]:new R(e,t,i).parts}handleTextExpression(e){return new O(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const A=(e,...t)=>new x(e,t,"html",D),L=(e,t)=>`${e}--${t}`;let T=!0;void 0===window.ShadyCSS?T=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),T=!1);const B=e=>t=>{const i=L(t.type,e);let s=E.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},E.set(i,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(r);if(n=s.keyString.get(o),void 0===n){const i=t.getTemplateElement();T&&window.ShadyCSS.prepareTemplateDom(i,e),n=new a(t,i),s.keyString.set(o,n)}return s.stringsArray.set(t.strings,n),n},V=["html","svg"],H=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const U={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:W};class F extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this._requestUpdate(e,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||q}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=W){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||U,r="function"==typeof s?s:s.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||U.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=q){const s=this.constructor,r=s._attributeNameForProperty(e,i);if(void 0!==r){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const s=this.constructor,r=s.getPropertyOptions(e);s._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}F.finalized=!0;const Y=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function K(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):G(e,t)}function J(e){return(t,i)=>{const s={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?Q(s,t,i):Z(s,t)}}const Q=(e,t,i)=>{Object.defineProperty(t,i,e)},Z=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),X="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(e,...t)=>{const i=t.reduce(((t,i,s)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1]),e[0]);return new te(i,ee)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const se={};class re extends F{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),s=[];i.forEach((e=>s.unshift(e))),this._styles=s}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=e.map((e=>e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==se&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return se}}re.finalized=!0,re.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=I.has(t),o=T&&11===t.nodeType&&!!t.host,a=o&&!H.has(r),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let r=I.get(t);void 0===r&&(s(t,t.firstChild),I.set(t,r=new O(Object.assign({templateFactory:$},i))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:B(r)},i)),a){const e=I.get(l);I.delete(l);((e,t,i)=>{H.add(e);const s=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let d=0;d<n;d++){const e=r[d];e.parentNode.removeChild(e),o.textContent+=e.textContent}(e=>{V.forEach((t=>{const i=E.get(L(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),p(e,i)}))}))})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:r}=e;if(null==i)return void s.appendChild(t);const n=document.createTreeWalker(s,133,null,!1);let o=f(r),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===i&&(a=u(t),i.parentNode.insertBefore(t,i));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=f(r,o);return}o=f(r,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),p(i,e)}})(r,l,e.value instanceof m?e.value.template:void 0),s(t,t.firstChild),t.appendChild(l),I.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};const ne=ie`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class oe extends re{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",""+t[0]),this.svg.setAttribute("height",""+t[1]),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}}function ae(e,t,i,s=!0,r=!0){if(t){const n={bubbles:"boolean"!=typeof s||s,composed:"boolean"!=typeof r||r};i&&(n.detail=i),e.dispatchEvent(new CustomEvent(t,n))}}function le(){return Math.floor(Math.random()*2**31)}function de(e,t,i){if(e&&e.length){const[s,r]=t,n=Math.PI/180*i,o=Math.cos(n),a=Math.sin(n);e.forEach((e=>{const[t,i]=e;e[0]=(t-s)*o-(i-r)*a+s,e[1]=(t-s)*a+(i-r)*o+r}))}}function ce(e){const t=e[0],i=e[1];return Math.sqrt(Math.pow(t[0]-i[0],2)+Math.pow(t[1]-i[1],2))}function he(e,t,i,s){const r=t[1]-e[1],n=e[0]-t[0],o=r*e[0]+n*e[1],a=s[1]-i[1],l=i[0]-s[0],d=a*i[0]+l*i[1],c=r*l-a*n;return c?[(l*o-n*d)/c,(r*d-a*o)/c]:null}function pe(e,t,i){const s=e.length;if(s<3)return!1;const r=[Number.MAX_SAFE_INTEGER,i],n=[t,i];let o=0;for(let a=0;a<s;a++){const t=e[a],i=e[(a+1)%s];if(ge(t,i,n,r)){if(0===fe(t,n,i))return ue(t,n,i);o++}}return o%2==1}function ue(e,t,i){return t[0]<=Math.max(e[0],i[0])&&t[0]>=Math.min(e[0],i[0])&&t[1]<=Math.max(e[1],i[1])&&t[1]>=Math.min(e[1],i[1])}function fe(e,t,i){const s=(t[1]-e[1])*(i[0]-t[0])-(t[0]-e[0])*(i[1]-t[1]);return 0===s?0:s>0?1:2}function ge(e,t,i,s){const r=fe(e,t,i),n=fe(e,t,s),o=fe(i,s,e),a=fe(i,s,t);return r!==n&&o!==a||!(0!==r||!ue(e,i,t))||!(0!==n||!ue(e,s,t))||!(0!==o||!ue(i,e,s))||!(0!==a||!ue(i,t,s))}!function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);n>3&&o&&Object.defineProperty(t,i,o)}([J("svg"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",SVGSVGElement)],oe.prototype,"svg",void 0);class ve extends class{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,i=!1){let s=function(e,t){const i=[0,0],s=Math.round(t.hachureAngle+90);s&&de(e,i,s);const r=function(e,t){const i=[...e];i[0].join(",")!==i[i.length-1].join(",")&&i.push([i[0][0],i[0][1]]);const s=[];if(i&&i.length>2){let e=t.hachureGap;e<0&&(e=4*t.strokeWidth),e=Math.max(e,.1);const r=[];for(let t=0;t<i.length-1;t++){const e=i[t],s=i[t+1];if(e[1]!==s[1]){const t=Math.min(e[1],s[1]);r.push({ymin:t,ymax:Math.max(e[1],s[1]),x:t===e[1]?e[0]:s[0],islope:(s[0]-e[0])/(s[1]-e[1])})}}if(r.sort(((e,t)=>e.ymin<t.ymin?-1:e.ymin>t.ymin?1:e.x<t.x?-1:e.x>t.x?1:e.ymax===t.ymax?0:(e.ymax-t.ymax)/Math.abs(e.ymax-t.ymax))),!r.length)return s;let n=[],o=r[0].ymin;for(;n.length||r.length;){if(r.length){let e=-1;for(let t=0;t<r.length&&!(r[t].ymin>o);t++)e=t;r.splice(0,e+1).forEach((e=>{n.push({s:o,edge:e})}))}if(n=n.filter((e=>!(e.edge.ymax<=o))),n.sort(((e,t)=>e.edge.x===t.edge.x?0:(e.edge.x-t.edge.x)/Math.abs(e.edge.x-t.edge.x))),n.length>1)for(let e=0;e<n.length;e+=2){const t=e+1;if(t>=n.length)break;const i=n[e].edge,r=n[t].edge;s.push([[Math.round(i.x),o],[Math.round(r.x),o]])}o+=e,n.forEach((t=>{t.edge.x=t.edge.x+e*t.edge.islope}))}}return s}(e,t);return s&&(de(e,i,-s),function(e,t,i){const s=[];e.forEach((e=>s.push(...e))),de(s,t,i)}(r,i,-s)),r}(e,t);if(i){const t=this.connectingLines(e,s);s=s.concat(t)}return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){const i=[];for(const s of e)i.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return i}connectingLines(e,t){const i=[];if(t.length>1)for(let s=1;s<t.length;s++){const r=t[s-1];if(ce(r)<3)continue;const n=[t[s][0],r[1]];if(ce(n)>3){const t=this.splitOnIntersections(e,n);i.push(...t)}}return i}midPointInPolygon(e,t){return pe(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){const i=Math.max(5,.1*ce(t)),s=[];for(let r=0;r<e.length;r++){const n=e[r],o=e[(r+1)%e.length];if(ge(n,o,...t)){const e=he(n,o,t[0],t[1]);if(e){const r=ce([e,t[0]]),n=ce([e,t[1]]);r>i&&n>i&&s.push({point:e,distance:r})}}}if(s.length>1){const i=s.sort(((e,t)=>e.distance-t.distance)).map((e=>e.point));if(pe(e,...t[0])||i.shift(),pe(e,...t[1])||i.pop(),i.length<=1)return this.midPointInPolygon(e,t)?[t]:[];const r=[t[0],...i,t[1]],n=[];for(let t=0;t<r.length-1;t+=2){const i=[r[t],r[t+1]];this.midPointInPolygon(e,i)&&n.push(i)}return n}return this.midPointInPolygon(e,t)?[t]:[]}}{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}}class ye{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function be(e,t,i,s,r){return{type:"path",ops:Ce(e,t,i,s,r)}}function me(e,t){return function(e,t,i){const s=(e||[]).length;if(s>2){const t=[];for(let r=0;r<s-1;r++)t.push(...Ce(e[r][0],e[r][1],e[r+1][0],e[r+1][1],i));return t.push(...Ce(e[s-1][0],e[s-1][1],e[0][0],e[0][1],i)),{type:"path",ops:t}}return 2===s?be(e[0][0],e[0][1],e[1][0],e[1][1],i):{type:"path",ops:[]}}(e,0,t)}function we(e,t,i,s,r){return function(e,t,i,s){const[r,n]=_e(s.increment,e,t,s.rx,s.ry,1,s.increment*Se(.1,Se(.4,1,i),i),i);let o=ze(r,null,i);if(!i.disableMultiStroke){const[r]=_e(s.increment,e,t,s.rx,s.ry,1.5,0,i),n=ze(r,null,i);o=o.concat(n)}return{estimatedPoints:n,opset:{type:"path",ops:o}}}(e,t,r,xe(i,s,r)).opset}function xe(e,t,i){const s=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),r=Math.max(i.curveStepCount,i.curveStepCount/Math.sqrt(200)*s),n=2*Math.PI/r;let o=Math.abs(e/2),a=Math.abs(t/2);const l=1-i.curveFitting;return o+=Re(o*l,i),a+=Re(a*l,i),{increment:n,rx:o,ry:a}}function ke(e){return e.randomizer||(e.randomizer=new ye(e.seed||0)),e.randomizer.next()}function Se(e,t,i,s=1){return i.roughness*s*(ke(i)*(t-e)+e)}function Re(e,t,i=1){return Se(-e,e,t,i)}function Ce(e,t,i,s,r,n=!1){const o=n?r.disableMultiStrokeFill:r.disableMultiStroke,a=Oe(e,t,i,s,r,!0,!1);if(o)return a;const l=Oe(e,t,i,s,r,!0,!0);return a.concat(l)}function Oe(e,t,i,s,r,n,o){const a=Math.pow(e-i,2)+Math.pow(t-s,2),l=Math.sqrt(a);let d=1;d=l<200?1:l>500?.4:-.0016668*l+1.233334;let c=r.maxRandomnessOffset||0;c*c*100>a&&(c=l/10);const h=c/2,p=.2+.2*ke(r);let u=r.bowing*r.maxRandomnessOffset*(s-t)/200,f=r.bowing*r.maxRandomnessOffset*(e-i)/200;u=Re(u,r,d),f=Re(f,r,d);const g=[],v=()=>Re(h,r,d),y=()=>Re(c,r,d);return n&&(o?g.push({op:"move",data:[e+v(),t+v()]}):g.push({op:"move",data:[e+Re(c,r,d),t+Re(c,r,d)]})),o?g.push({op:"bcurveTo",data:[u+e+(i-e)*p+v(),f+t+(s-t)*p+v(),u+e+2*(i-e)*p+v(),f+t+2*(s-t)*p+v(),i+v(),s+v()]}):g.push({op:"bcurveTo",data:[u+e+(i-e)*p+y(),f+t+(s-t)*p+y(),u+e+2*(i-e)*p+y(),f+t+2*(s-t)*p+y(),i+y(),s+y()]}),g}function ze(e,t,i){const s=e.length,r=[];if(s>3){const n=[],o=1-i.curveTightness;r.push({op:"move",data:[e[1][0],e[1][1]]});for(let t=1;t+2<s;t++){const i=e[t];n[0]=[i[0],i[1]],n[1]=[i[0]+(o*e[t+1][0]-o*e[t-1][0])/6,i[1]+(o*e[t+1][1]-o*e[t-1][1])/6],n[2]=[e[t+1][0]+(o*e[t][0]-o*e[t+2][0])/6,e[t+1][1]+(o*e[t][1]-o*e[t+2][1])/6],n[3]=[e[t+1][0],e[t+1][1]],r.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[3][0],n[3][1]]})}if(t&&2===t.length){const e=i.maxRandomnessOffset;r.push({op:"lineTo",data:[t[0]+Re(e,i),t[1]+Re(e,i)]})}}else 3===s?(r.push({op:"move",data:[e[1][0],e[1][1]]}),r.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):2===s&&r.push(...Ce(e[0][0],e[0][1],e[1][0],e[1][1],i));return r}function _e(e,t,i,s,r,n,o,a){const l=[],d=[],c=Re(.5,a)-Math.PI/2;d.push([Re(n,a)+t+.9*s*Math.cos(c-e),Re(n,a)+i+.9*r*Math.sin(c-e)]);for(let h=c;h<2*Math.PI+c-.01;h+=e){const e=[Re(n,a)+t+s*Math.cos(h),Re(n,a)+i+r*Math.sin(h)];l.push(e),d.push(e)}return d.push([Re(n,a)+t+s*Math.cos(c+2*Math.PI+.5*o),Re(n,a)+i+r*Math.sin(c+2*Math.PI+.5*o)]),d.push([Re(n,a)+t+.98*s*Math.cos(c+o),Re(n,a)+i+.98*r*Math.sin(c+o)]),d.push([Re(n,a)+t+.9*s*Math.cos(c+.5*o),Re(n,a)+i+.9*r*Math.sin(c+.5*o)]),[d,l]}const je={randOffset:(e,t)=>e,randOffsetWithRange:(e,t,i)=>(e+t)/2,ellipse:(e,t,i,s,r)=>we(e,t,i,s,r),doubleLineOps:(e,t,i,s,r)=>function(e,t,i,s,r){return Ce(e,t,i,s,r,!0)}(e,t,i,s,r)};function Me(e){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:e}}function Pe(e,t){let i="";for(const s of e.ops){const e=s.data;switch(s.op){case"move":if(t&&i)break;i+=`M${e[0]} ${e[1]} `;break;case"bcurveTo":i+=`C${e[0]} ${e[1]}, ${e[2]} ${e[3]}, ${e[4]} ${e[5]} `;break;case"lineTo":i+=`L${e[0]} ${e[1]} `}}return i.trim()}function Ne(e,t){const i=document.createElementNS("http://www.w3.org/2000/svg",e);if(t)for(const s in t)i.setAttributeNS(null,s,t[s]);return i}function $e(e,t,i=!1){const s=Ne("path",{d:Pe(e,i)});return t&&t.appendChild(s),s}function Ee(e,t,i,s,r,n){return $e(function(e,t,i,s,r){return me([[e,t],[e+i,t],[e+i,t+s],[e,t+s]],r)}(t+2,i+2,s-4,r-4,Me(n)),e)}function Ie(e,t,i,s,r,n){return $e(be(t,i,s,r,Me(n)),e)}function De(e,t,i,s,r,n){return $e(we(t,i,s=Math.max(s>10?s-4:s-1,1),r=Math.max(r>10?r-4:r-1,1),Me(n)),e)}function Ae(e,t){return $e(new ve(je).fillPolygon(e,Me(t)),null)}function Le(e,t,i,s,r){const n=xe(i,s,Me(r)),o=[];let a=0;for(;a<=2*Math.PI;)o.push([e+n.rx*Math.cos(a),t+n.ry*Math.sin(a)]),a+=n.increment;return Ae(o,r)}var Te=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Be=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.kz=class extends oe{constructor(){super(),this.elevation=1,this.disabled=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender(!0)})))}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return A`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}return this.lastSize}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-2*(i-1),height:t[1]-2*(i-1)};Ee(e,0,0,s.width,s.height,this.seed);for(let r=1;r<i;r++)Ie(e,2*r,s.height+2*r,s.width+2*r,s.height+2*r,this.seed).style.opacity=""+(75-10*r)/100,Ie(e,s.width+2*r,s.height+2*r,s.width+2*r,2*r,this.seed).style.opacity=""+(75-10*r)/100,Ie(e,2*r,s.height+2*r,s.width+2*r,s.height+2*r,this.seed).style.opacity=""+(75-10*r)/100,Ie(e,s.width+2*r,s.height+2*r,s.width+2*r,2*r,this.seed).style.opacity=""+(75-10*r)/100}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.resizeObserver&&this.resizeObserver.observe&&this.resizeObserver.observe(this.button)}detachResizeListener(){this.button&&this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this.button)}},Te([K({type:Number}),Be("design:type",Object)],t.kz.prototype,"elevation",void 0),Te([K({type:Boolean,reflect:!0}),Be("design:type",Object)],t.kz.prototype,"disabled",void 0),Te([J("button"),Be("design:type",HTMLButtonElement)],t.kz.prototype,"button",void 0),t.kz=Te([Y("wired-button"),Be("design:paramtypes",[])],t.kz);var Ve=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},He=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.OI=class extends re{constructor(){super(...arguments),this.elevation=3,this.disabled=!1,this.initials=!1,this.format=e=>this.months_short[e.getMonth()]+" "+e.getDate()+", "+e.getFullYear(),this.weekdays_short=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.months_short=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.firstOfMonthDate=new Date,this.fDate=void 0,this.lDate=void 0,this.calendarRefSize={width:0,height:0},this.tblColWidth=0,this.tblRowHeight=0,this.tblHeadHeight=0,this.monthYear="",this.weeks=[[]],this.seed=le()}connectedCallback(){super.connectedCallback(),this.resizeHandler||(this.resizeHandler=this.debounce(this.resized.bind(this),200,!1,this),window.addEventListener("resize",this.resizeHandler,{passive:!0})),this.localizeCalendarHeaders(),this.setInitialConditions(),this.computeCalendar(),this.refreshSelection(),setTimeout((()=>this.updated()))}disconnectedCallback(){super.disconnectedCallback(),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),delete this.resizeHandler)}static get styles(){return ie`
    :host {
      display: inline-block;
      font-family: inherit;
      position: relative;
      outline: none;
      opacity: 0;
    }

    :host(.wired-disabled) {
      opacity: 0.5 !important;
      cursor: default;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.02);
    }

    :host(.wired-rendered) {
      opacity: 1;
    }

    :host(:focus) path {
      stroke-width: 1.5;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    svg {
      display: block;
    }

    .calendar path {
      stroke: var(--wired-calendar-color, black);
      stroke-width: 0.7;
      fill: transparent;
    }

    .selected path {
      stroke: var(--wired-calendar-selected-color, red);
      stroke-width: 2.5;
      fill: transparent;
      transition: transform 0.05s ease;
    }

    table {
      position: relative;
      background: var(--wired-calendar-bg, white);
      border-collapse: collapse;
      font-size: inherit;
      text-transform: capitalize;
      line-height: unset;
      cursor: default;
      overflow: hidden;
    }

    table:focus {
      outline: none !important;
    }

    td,
    th {
      border-radius: 4px;
      text-align: center;
    }

    td.disabled {
      color: var(--wired-calendar-disabled-color, lightgray);
      cursor: not-allowed;
    }

    td.dimmed {
      color: var(--wired-calendar-dimmed-color, gray);
    }

    td.selected {
      position: absolute;
    }

    td:not(.disabled):not(.selected):hover {
      background-color: #d0d0d0;
      cursor: pointer;
    }

    .pointer {
      cursor: pointer;
    }

    `}render(){return A`
    <table style="width:${this.calendarRefSize.width}px;height:${this.calendarRefSize.height}px;border:${8}px solid transparent"
            @mousedown="${this.onItemClick}"
            @touchstart="${this.onItemClick}">
      ${""}
      <tr class="top-header" style="height:${this.tblHeadHeight}px;">
        <th id="prevCal" class="pointer" @click="${this.onPrevClick}">&lt;&lt;</th>
        <th colSpan="5">${this.monthYear}</th>
        <th id="nextCal" class="pointer" @click="${this.onNextClick}">&gt;&gt;</th>
      </tr>
      ${""}
      <tr class="header" style="height:${this.tblHeadHeight}px;">
        ${this.weekdays_short.map((e=>A`<th style="width: ${this.tblColWidth};">${this.initials?e[0]:e}</th>
            `))}
      </tr>
      ${""}
      ${this.weeks.map((e=>A`<tr style="height:${this.tblRowHeight}px;">
              ${""}
              ${e.map((e=>A`${e.selected?A`
                            <td class="selected" value="${e.value}">
                            <div style="width: ${this.tblColWidth}px; line-height:${this.tblRowHeight}px;">${e.text}</div>
                            <div class="overlay">
                              <svg id="svgTD" class="selected"></svg>
                            </div></td>
                        `:A`
                            <td .className="${e.disabled?"disabled":e.dimmed?"dimmed":""}"
                                value="${e.disabled?"":e.value}">${e.text}</td>
                        `}
                    `))}${""}
            </tr>`))}${""}
    </table>
    <div class="overlay">
      <svg id="svg" class="calendar"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","dialog")}updated(e){e&&e instanceof Map&&(e.has("disabled")&&this.refreshDisabledState(),e.has("selected")&&this.refreshSelection());const t=this.shadowRoot.getElementById("svg");for(;t.hasChildNodes();)t.removeChild(t.lastChild);const i=this.getCalendarSize(),s=Math.min(Math.max(1,this.elevation),5),r=i.width+2*(s-1),n=i.height+2*(s-1);t.setAttribute("width",""+r),t.setAttribute("height",""+n),Ee(t,2,2,i.width-4,i.height-4,this.seed);for(let a=1;a<s;a++)Ie(t,2*a,i.height-4+2*a,i.width-4+2*a,i.height-4+2*a,this.seed).style.opacity=""+(85-10*a)/100,Ie(t,i.width-4+2*a,i.height-4+2*a,i.width-4+2*a,2*a,this.seed).style.opacity=""+(85-10*a)/100,Ie(t,2*a,i.height-4+2*a,i.width-4+2*a,i.height-4+2*a,this.seed).style.opacity=""+(85-10*a)/100,Ie(t,i.width-4+2*a,i.height-4+2*a,i.width-4+2*a,2*a,this.seed).style.opacity=""+(85-10*a)/100;const o=this.shadowRoot.getElementById("svgTD");if(o){for(;o.hasChildNodes();)o.removeChild(o.lastChild);const e=Math.max(1*this.tblColWidth,20),t=Math.max(.9*this.tblRowHeight,18),i=De(o,this.tblColWidth/2,this.tblRowHeight/2,e,t,this.seed);o.appendChild(i)}this.classList.add("wired-rendered")}setSelectedDate(e){if(this.selected=e,this.selected){const e=new Date(this.selected);this.firstOfMonthDate=new Date(e.getFullYear(),e.getMonth(),1),this.computeCalendar(),this.requestUpdate(),this.fireSelected()}}localizeCalendarHeaders(){if(!this.locale){const e=navigator;e.hasOwnProperty("systemLanguage")?this.locale=e.systemLanguage:e.hasOwnProperty("browserLanguage")?this.locale=e.browserLanguage:this.locale=(navigator.languages||["en"])[0]}const e=(this.locale||"").toLowerCase();if("en-us"!==e&&"en"!==e){const e=new Date,t=e.getUTCDay(),i=new Date(e.getTime()-864e5*t);for(let s=0;s<7;s++){const e=new Date(i);e.setDate(i.getDate()+s),this.weekdays_short[s]=e.toLocaleString(this.locale,{weekday:"short"})}e.setDate(1);for(let s=0;s<12;s++)e.setMonth(s),this.months[s]=e.toLocaleString(this.locale,{month:"long"})}}setInitialConditions(){let e;this.calendarRefSize=this.getCalendarSize(),this.selected?(e=new Date(this.selected),this.value={date:new Date(this.selected),text:this.selected}):e=new Date,this.firstOfMonthDate=new Date(e.getFullYear(),e.getMonth(),1),this.firstdate&&(this.fDate=new Date(this.firstdate)),this.lastdate&&(this.lDate=new Date(this.lastdate))}refreshSelection(){this.weeks.forEach((e=>e.forEach((e=>{e.selected=this.selected&&e.value===this.selected||!1})))),this.requestUpdate()}resized(){this.calendarRefSize=this.getCalendarSize(),this.computeCalendar(),this.refreshSelection()}getCalendarSize(){const e=this.getBoundingClientRect();return{width:e.width>180?e.width:320,height:e.height>180?e.height:320}}computeCellsizes(e,t){this.tblColWidth=e.width/7-2,this.tblHeadHeight=.25*e.height/2-2,this.tblRowHeight=.75*e.height/t-2}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}onItemClick(e){e.stopPropagation();const t=e.target;t&&t.hasAttribute("value")&&""!==t.getAttribute("value")&&(this.selected=t.getAttribute("value")||void 0,this.refreshSelection(),this.fireSelected())}fireSelected(){this.selected&&(this.value={date:new Date(this.selected),text:this.selected},ae(this,"selected",{selected:this.selected}))}computeCalendar(){this.monthYear=this.months[this.firstOfMonthDate.getMonth()]+" "+this.firstOfMonthDate.getFullYear();const e=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth(),1);let t=0-e.getDay();const i=Math.ceil((new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,0).getDate()-t)/7);this.weeks=[];for(let s=0;s<i;s++){this.weeks[s]=[];for(let i=0;i<7;i++){const r=new Date(e.getTime()+864e5*t),n=this.format(r);this.weeks[s][i]={value:n,text:r.getDate().toString(),selected:n===this.selected,dimmed:r.getMonth()!==e.getMonth(),disabled:this.isDateOutOfRange(r)},t++}}this.computeCellsizes(this.calendarRefSize,i)}onPrevClick(){void 0!==this.fDate&&new Date(this.fDate.getFullYear(),this.fDate.getMonth()-1,1).getMonth()===new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()-1,1).getMonth()||(this.firstOfMonthDate=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()-1,1),this.computeCalendar(),this.refreshSelection())}onNextClick(){void 0!==this.lDate&&new Date(this.lDate.getFullYear(),this.lDate.getMonth()+1,1).getMonth()===new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,1).getMonth()||(this.firstOfMonthDate=new Date(this.firstOfMonthDate.getFullYear(),this.firstOfMonthDate.getMonth()+1,1),this.computeCalendar(),this.refreshSelection())}isDateOutOfRange(e){return this.fDate&&this.lDate?e<this.fDate||this.lDate<e:this.fDate?e<this.fDate:!!this.lDate&&this.lDate<e}debounce(e,t,i,s){let r=0;return()=>{const n=arguments,o=i&&!r;clearTimeout(r),r=window.setTimeout((()=>{r=0,i||e.apply(s,n)}),t),o&&e.apply(s,n)}}},Ve([K({type:Number}),He("design:type",Object)],t.OI.prototype,"elevation",void 0),Ve([K({type:String}),He("design:type",String)],t.OI.prototype,"selected",void 0),Ve([K({type:String}),He("design:type",String)],t.OI.prototype,"firstdate",void 0),Ve([K({type:String}),He("design:type",String)],t.OI.prototype,"lastdate",void 0),Ve([K({type:String}),He("design:type",String)],t.OI.prototype,"locale",void 0),Ve([K({type:Boolean,reflect:!0}),He("design:type",Object)],t.OI.prototype,"disabled",void 0),Ve([K({type:Boolean,reflect:!0}),He("design:type",Object)],t.OI.prototype,"initials",void 0),Ve([K({type:Object}),He("design:type",Object)],t.OI.prototype,"value",void 0),Ve([K({type:Function}),He("design:type",Function)],t.OI.prototype,"format",void 0),t.OI=Ve([Y("wired-calendar")],t.OI);var Ue=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},We=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.Fb=class extends oe{constructor(){super(),this.elevation=1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return A`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s=t[0]-2*(i-1),r=t[1]-2*(i-1);if(this.fill&&this.fill.trim()){const t=Ae([[2,2],[s-4,2],[s-2,r-4],[2,r-4]],this.seed);t.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(t)}Ee(e,2,2,s-4,r-4,this.seed);for(let n=1;n<i;n++)Ie(e,2*n,r-4+2*n,s-4+2*n,r-4+2*n,this.seed).style.opacity=""+(85-10*n)/100,Ie(e,s-4+2*n,r-4+2*n,s-4+2*n,2*n,this.seed).style.opacity=""+(85-10*n)/100,Ie(e,2*n,r-4+2*n,s-4+2*n,r-4+2*n,this.seed).style.opacity=""+(85-10*n)/100,Ie(e,s-4+2*n,r-4+2*n,s-4+2*n,2*n,this.seed).style.opacity=""+(85-10*n)/100}},Ue([K({type:Number}),We("design:type",Object)],t.Fb.prototype,"elevation",void 0),Ue([K({type:String}),We("design:type",String)],t.Fb.prototype,"fill",void 0),t.Fb=Ue([Y("wired-card"),We("design:paramtypes",[])],t.Fb);var qe=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Fe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.YZ=class extends oe{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[ne,ie`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return A`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),ae(this,"change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){Ee(e,0,0,t[0],t[1],this.seed),this.svgCheck=Ne("g"),e.appendChild(this.svgCheck),Ie(this.svgCheck,.3*t[0],.4*t[1],.5*t[0],.7*t[1],this.seed),Ie(this.svgCheck,.5*t[0],.7*t[1],t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}},qe([K({type:Boolean}),Fe("design:type",Object)],t.YZ.prototype,"checked",void 0),qe([K({type:Boolean,reflect:!0}),Fe("design:type",Object)],t.YZ.prototype,"disabled",void 0),qe([K(),Fe("design:type",Object)],t.YZ.prototype,"focused",void 0),qe([J("input"),Fe("design:type",HTMLInputElement)],t.YZ.prototype,"input",void 0),t.YZ=qe([Y("wired-checkbox")],t.YZ);var Ye=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Ge=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.Vy=class extends re{constructor(){super(...arguments),this.disabled=!1,this.seed=le(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return ie`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return A`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",(()=>{this.cardShowing&&this.setCardShowing(!1)})),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0)}}))}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const i=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",""+i.width),t.setAttribute("height",""+i.height);const s=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=s.height+"px",Ee(t,0,0,s.width,s.height,this.seed);const r=s.width-4;Ee(t,r,0,34,s.height,this.seed);const n=Math.max(0,Math.abs((s.height-24)/2)),o=function(e,t,i){return $e(me(t,Me(i)),e,!0)}(t,[[r+8,5+n],[r+26,5+n],[r+17,n+Math.min(s.height,18)]],this.seed);if(o.style.fill="currentColor",o.style.pointerEvents=this.disabled?"none":"auto",o.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",""+this.cardShowing),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const i=e[t];"WIRED-ITEM"===i.tagName&&(i.setAttribute("role","option"),this.itemNodes.push(i))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let i=0;i<e.length;i++){const s=e[i];if("WIRED-ITEM"===s.tagName){const e=s.value||s.getAttribute("value")||"";if(this.selected&&e===this.selected){t=s;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=t?{value:t.value||"",text:t.textContent||""}:void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout((()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter((e=>e.nodeType===Node.ELEMENT_NODE)).forEach((e=>{const t=e;t.requestUpdate&&t.requestUpdate()}))}),10),this.setAttribute("aria-expanded",""+this.cardShowing))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout((()=>{this.setCardShowing(!1)}))}fireSelected(){ae(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}},Ye([K({type:Object}),Ge("design:type",Object)],t.Vy.prototype,"value",void 0),Ye([K({type:String,reflect:!0}),Ge("design:type",String)],t.Vy.prototype,"selected",void 0),Ye([K({type:Boolean,reflect:!0}),Ge("design:type",Object)],t.Vy.prototype,"disabled",void 0),Ye([J("svg"),Ge("design:type",SVGSVGElement)],t.Vy.prototype,"svg",void 0),Ye([J("#card"),Ge("design:type",HTMLDivElement)],t.Vy.prototype,"card",void 0),t.Vy=Ye([Y("wired-combo")],t.Vy);var Ke=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Je=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.S9=class extends re{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return ie`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return A`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}},Ke([K({type:Number}),Je("design:type",Object)],t.S9.prototype,"elevation",void 0),Ke([K({type:Boolean,reflect:!0}),Je("design:type",Object)],t.S9.prototype,"open",void 0),Ke([J("wired-card"),Je("design:type",t.Fb)],t.S9.prototype,"card",void 0),t.S9=Ke([Y("wired-dialog")],t.S9);var Qe=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};t.j8=class extends oe{constructor(){super(...arguments),this.elevation=1}static get styles(){return[ne,ie`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return A`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,6*t]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5);for(let s=0;s<i;s++)Ie(e,0,6*s+3,t[0],6*s+3,this.seed)}},Qe([K({type:Number}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],t.j8.prototype,"elevation",void 0),t.j8=Qe([Y("wired-divider")],t.j8);var Ze=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Xe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.DH=class extends oe{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return A`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const i=Math.min(t[0],t[1]),s=Le(i/2,i/2,i,i,this.seed);e.appendChild(s)}},Ze([K({type:Boolean,reflect:!0}),Xe("design:type",Object)],t.DH.prototype,"disabled",void 0),Ze([J("button"),Xe("design:type",HTMLButtonElement)],t.DH.prototype,"button",void 0),t.DH=Ze([Y("wired-fab")],t.DH);var et=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},tt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.GX=class extends oe{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return A`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const i=Math.min(t[0],t[1]);e.setAttribute("width",""+i),e.setAttribute("height",""+i),De(e,i/2,i/2,i,i,this.seed)}},et([K({type:Boolean,reflect:!0}),tt("design:type",Object)],t.GX.prototype,"disabled",void 0),et([J("button"),tt("design:type",HTMLButtonElement)],t.GX.prototype,"button",void 0),t.GX=et([Y("wired-icon-button")],t.GX);var it=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},st=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.Kq=class extends oe{constructor(){super(),this.elevation=1,this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return A`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s=t[0]-2*(i-1),r=t[1]-2*(i-1);Ee(e,2,2,s-4,r-4,this.seed);for(let n=1;n<i;n++)Ie(e,2*n,r-4+2*n,s-4+2*n,r-4+2*n,this.seed).style.opacity=""+(85-10*n)/100,Ie(e,s-4+2*n,r-4+2*n,s-4+2*n,2*n,this.seed).style.opacity=""+(85-10*n)/100,Ie(e,2*n,r-4+2*n,s-4+2*n,r-4+2*n,this.seed).style.opacity=""+(85-10*n)/100,Ie(e,s-4+2*n,r-4+2*n,s-4+2*n,2*n,this.seed).style.opacity=""+(85-10*n)/100}},it([K({type:Number}),st("design:type",Object)],t.Kq.prototype,"elevation",void 0),it([K({type:String}),st("design:type",String)],t.Kq.prototype,"src",void 0),t.Kq=it([Y("wired-image"),st("design:paramtypes",[])],t.Kq);var rt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},nt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.$j=class extends oe{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender(!0)})))}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return A`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t)return void(t.value=e)}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ee(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),ae(this,e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.observe&&this.resizeObserver.observe(this.textInput)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this.textInput)}},rt([K({type:Boolean,reflect:!0}),nt("design:type",Object)],t.$j.prototype,"disabled",void 0),rt([K({type:String}),nt("design:type",Object)],t.$j.prototype,"placeholder",void 0),rt([K({type:String}),nt("design:type",String)],t.$j.prototype,"name",void 0),rt([K({type:String}),nt("design:type",String)],t.$j.prototype,"min",void 0),rt([K({type:String}),nt("design:type",String)],t.$j.prototype,"max",void 0),rt([K({type:String}),nt("design:type",String)],t.$j.prototype,"step",void 0),rt([K({type:String}),nt("design:type",Object)],t.$j.prototype,"type",void 0),rt([K({type:String}),nt("design:type",Object)],t.$j.prototype,"autocomplete",void 0),rt([K({type:String}),nt("design:type",Object)],t.$j.prototype,"autocapitalize",void 0),rt([K({type:String}),nt("design:type",Object)],t.$j.prototype,"autocorrect",void 0),rt([K({type:Boolean}),nt("design:type",Object)],t.$j.prototype,"required",void 0),rt([K({type:Boolean}),nt("design:type",Object)],t.$j.prototype,"autofocus",void 0),rt([K({type:Boolean}),nt("design:type",Object)],t.$j.prototype,"readonly",void 0),rt([K({type:Number}),nt("design:type",Number)],t.$j.prototype,"minlength",void 0),rt([K({type:Number}),nt("design:type",Number)],t.$j.prototype,"maxlength",void 0),rt([K({type:Number}),nt("design:type",Number)],t.$j.prototype,"size",void 0),rt([J("input"),nt("design:type",HTMLInputElement)],t.$j.prototype,"textInput",void 0),t.$j=rt([Y("wired-input"),nt("design:paramtypes",[])],t.$j);var ot=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},at=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.IY=class extends oe{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[ne,ie`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return A`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const i=Ae([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(i)}},ot([K(),at("design:type",Object)],t.IY.prototype,"value",void 0),ot([K(),at("design:type",Object)],t.IY.prototype,"name",void 0),ot([K({type:Boolean}),at("design:type",Object)],t.IY.prototype,"selected",void 0),t.IY=ot([Y("wired-item")],t.IY);var lt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},dt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.uP=class extends oe{constructor(){super(...arguments),this.elevation=1}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return A`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,e.height+2*(t-1)]}return this.lastSize}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0],height:t[1]-2*(i-1)};for(let r=0;r<i;r++)Ie(e,0,s.height+2*r-2,s.width,s.height+2*r-2,this.seed),Ie(e,0,s.height+2*r-2,s.width,s.height+2*r-2,this.seed)}},lt([K({type:Number}),dt("design:type",Object)],t.uP.prototype,"elevation",void 0),lt([K({type:String}),dt("design:type",String)],t.uP.prototype,"href",void 0),lt([K({type:String}),dt("design:type",String)],t.uP.prototype,"target",void 0),lt([J("a"),dt("design:type",HTMLAnchorElement)],t.uP.prototype,"anchor",void 0),t.uP=lt([Y("wired-link")],t.uP);var ct=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},ht=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.y0=class extends oe{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[ne,ie`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return A`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const i=e[t];"WIRED-ITEM"===i.tagName&&(i.setAttribute("role","option"),this.itemNodes.push(i))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let i=0;i<e.length;i++){const s=e[i];if("WIRED-ITEM"===s.tagName){const e=s.value||"";if(this.selected&&e===this.selected){t=s;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=t?{value:t.value||"",text:t.textContent||""}:void 0}}fireSelected(){ae(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ee(e,0,0,t[0],t[1],this.seed)}},ct([K({type:Object}),ht("design:type",Object)],t.y0.prototype,"value",void 0),ct([K({type:String}),ht("design:type",String)],t.y0.prototype,"selected",void 0),ct([K({type:Boolean}),ht("design:type",Object)],t.y0.prototype,"horizontal",void 0),t.y0=ct([Y("wired-listbox")],t.y0);var pt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},ut=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.K3=class extends oe{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[ne,ie`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return A`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ee(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const i=t.width*Math.max(0,Math.min(e,100));this.progBox=Ae([[0,0],[i,0],[i,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}},pt([K({type:Number}),ut("design:type",Object)],t.K3.prototype,"value",void 0),pt([K({type:Number}),ut("design:type",Object)],t.K3.prototype,"min",void 0),pt([K({type:Number}),ut("design:type",Object)],t.K3.prototype,"max",void 0),pt([K({type:Boolean}),ut("design:type",Object)],t.K3.prototype,"percentage",void 0),t.K3=pt([Y("wired-progress")],t.K3);var ft=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},gt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.$b=class extends oe{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[ne,ie`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return A`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),ae(this,"change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){De(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=Ne("g"),e.appendChild(this.svgCheck);const i=Math.max(.6*t[0],5),s=Math.max(.6*t[1],5);De(this.svgCheck,t[0]/2,t[1]/2,i,s,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}},ft([K({type:Boolean}),gt("design:type",Object)],t.$b.prototype,"checked",void 0),ft([K({type:Boolean,reflect:!0}),gt("design:type",Object)],t.$b.prototype,"disabled",void 0),ft([K({type:String}),gt("design:type",String)],t.$b.prototype,"name",void 0),ft([K(),gt("design:type",Object)],t.$b.prototype,"focused",void 0),ft([J("input"),gt("design:type",HTMLInputElement)],t.$b.prototype,"input",void 0),t.$b=ft([Y("wired-radio")],t.$b);var vt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};t.Bu=class extends re{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return ie`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return A`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,i=e.target,s=i.name||"";t?(this.selected=t&&s||"",this.fireSelected()):i.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){const e=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],e&&e.length)for(let t=0;t<e.length;t++){const i=e[t];if("WIRED-RADIO"===i.tagName){this.radioNodes.push(i);const e=i.name||"";this.selected&&e===this.selected?i.checked=!0:i.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let t=0;t<e.length;t++)if(e[t].name===this.selected){i=t;break}i<0?t=e[0]:(i--,i<0&&(i=e.length-1),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let t=0;t<e.length;t++)if(e[t].name===this.selected){i=t;break}i<0?t=e[0]:(i++,i>=e.length&&(i=0),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){ae(this,"selected",{selected:this.selected})}},vt([K({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],t.Bu.prototype,"selected",void 0),t.Bu=vt([Y("wired-radio-group")],t.Bu);var yt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},bt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.nQ=class extends oe{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return A`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ee(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=Ne("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),De(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),Ie(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=Ne("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),Ie(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),Ie(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),ae(this,e.type,{sourceEvent:e})}},yt([K({type:Boolean,reflect:!0}),bt("design:type",Object)],t.nQ.prototype,"disabled",void 0),yt([K({type:String}),bt("design:type",Object)],t.nQ.prototype,"placeholder",void 0),yt([K({type:String}),bt("design:type",Object)],t.nQ.prototype,"autocomplete",void 0),yt([K({type:String}),bt("design:type",Object)],t.nQ.prototype,"autocorrect",void 0),yt([K({type:Boolean}),bt("design:type",Object)],t.nQ.prototype,"autofocus",void 0),yt([J("input"),bt("design:type",HTMLInputElement)],t.nQ.prototype,"textInput",void 0),t.nQ=yt([Y("wired-search-input")],t.nQ);var mt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},wt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.DN=class extends oe{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[ne,ie`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=""+e:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return A`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&ae(this,"change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const i=Math.round(t[1]/2);Ie(e,0,i,t[0],i,this.seed).classList.add("bar"),this.knob=De(e,10,i,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),i=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${i*(this.canvasWidth-20)}px)`)}}},mt([K({type:Number}),wt("design:type",Object)],t.DN.prototype,"min",void 0),mt([K({type:Number}),wt("design:type",Object)],t.DN.prototype,"max",void 0),mt([K({type:Number}),wt("design:type",Object)],t.DN.prototype,"step",void 0),mt([K({type:Boolean,reflect:!0}),wt("design:type",Object)],t.DN.prototype,"disabled",void 0),mt([J("input"),wt("design:type",HTMLInputElement)],t.DN.prototype,"input",void 0),t.DN=mt([Y("wired-slider")],t.DN);var xt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},kt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.q3=class extends oe{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return A`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){De(e,t[0]/2,t[1]/2,Math.floor(.8*t[0]),Math.floor(.8*t[1]),this.seed),this.knob=Le(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(360*this.value*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame((e=>this.tick(e)))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}},xt([K({type:Boolean}),kt("design:type",Object)],t.q3.prototype,"spinning",void 0),xt([K({type:Number}),kt("design:type",Object)],t.q3.prototype,"duration",void 0),t.q3=xt([Y("wired-spinner")],t.q3);var St=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Rt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.sG=class extends oe{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return A`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ee(e,2,2,t[0]-4,t[1]-4,this.seed)}},St([K({type:String}),Rt("design:type",Object)],t.sG.prototype,"name",void 0),St([K({type:String}),Rt("design:type",Object)],t.sG.prototype,"label",void 0),t.sG=St([Y("wired-tab"),Rt("design:paramtypes",[])],t.sG);var Ct=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Ot=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.me=class extends re{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[ne,ie`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return A`
    <div id="bar">
      ${this.pages.map((e=>A`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `))}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const i=e[t];if(i.nodeType===Node.ELEMENT_NODE&&"wired-tab"===i.tagName.toLowerCase()){const e=i;this.pages.push(e);const t=e.getAttribute("name")||"";t&&t.trim().split(" ").forEach((t=>{t&&this.pageMap.set(t,e)}))}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const i=this.pages[t];i===e?i.classList.remove("hidden"):i.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame((()=>requestAnimationFrame((()=>this.current.wiredRender()))))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}},Ct([K({type:String}),Ot("design:type",String)],t.me.prototype,"selected",void 0),Ct([J("slot"),Ot("design:type",HTMLSlotElement)],t.me.prototype,"slotElement",void 0),t.me=Ct([Y("wired-tabs")],t.me);var zt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},_t=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.Io=class extends oe{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return A`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t)return void(t.value=e)}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ee(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),ae(this,e.type,{sourceEvent:e})}},zt([K({type:Boolean,reflect:!0}),_t("design:type",Object)],t.Io.prototype,"disabled",void 0),zt([K({type:Number}),_t("design:type",Object)],t.Io.prototype,"rows",void 0),zt([K({type:Number}),_t("design:type",Object)],t.Io.prototype,"maxrows",void 0),zt([K({type:String}),_t("design:type",Object)],t.Io.prototype,"autocomplete",void 0),zt([K({type:Boolean}),_t("design:type",Object)],t.Io.prototype,"autofocus",void 0),zt([K({type:String}),_t("design:type",Object)],t.Io.prototype,"inputmode",void 0),zt([K({type:String}),_t("design:type",Object)],t.Io.prototype,"placeholder",void 0),zt([K({type:Boolean}),_t("design:type",Object)],t.Io.prototype,"required",void 0),zt([K({type:Boolean}),_t("design:type",Object)],t.Io.prototype,"readonly",void 0),zt([K({type:Number}),_t("design:type",Number)],t.Io.prototype,"minlength",void 0),zt([K({type:Number}),_t("design:type",Number)],t.Io.prototype,"maxlength",void 0),zt([J("textarea"),_t("design:type",HTMLTextAreaElement)],t.Io.prototype,"textareaInput",void 0),t.Io=zt([Y("wired-textarea")],t.Io);var jt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Mt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.jz=class extends oe{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[ne,ie`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return A`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),ae(this,"change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){Ee(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Ne("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const i=Le(16,16,32,32,this.seed);i.classList.add("knobfill"),this.knob.appendChild(i),De(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}},jt([K({type:Boolean}),Mt("design:type",Object)],t.jz.prototype,"checked",void 0),jt([K({type:Boolean,reflect:!0}),Mt("design:type",Object)],t.jz.prototype,"disabled",void 0),jt([J("input"),Mt("design:type",HTMLInputElement)],t.jz.prototype,"input",void 0),t.jz=jt([Y("wired-toggle")],t.jz);var Pt=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},Nt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};t.C8=class extends oe{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[ne,ie`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return A`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"\u25b6"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Ee(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60);return`${t}:${Math.round(e-60*t)}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=100*this.video.volume)}},Pt([K({type:String}),Nt("design:type",Object)],t.C8.prototype,"src",void 0),Pt([K({type:Boolean}),Nt("design:type",Object)],t.C8.prototype,"autoplay",void 0),Pt([K({type:Boolean}),Nt("design:type",Object)],t.C8.prototype,"loop",void 0),Pt([K({type:Boolean}),Nt("design:type",Object)],t.C8.prototype,"muted",void 0),Pt([K({type:Boolean}),Nt("design:type",Object)],t.C8.prototype,"playsinline",void 0),Pt([K(),Nt("design:type",Object)],t.C8.prototype,"playing",void 0),Pt([K(),Nt("design:type",Object)],t.C8.prototype,"timeDisplay",void 0),Pt([J("wired-progress"),Nt("design:type",t.K3)],t.C8.prototype,"progressBar",void 0),Pt([J("wired-slider"),Nt("design:type",t.DN)],t.C8.prototype,"slider",void 0),Pt([J("video"),Nt("design:type",HTMLVideoElement)],t.C8.prototype,"video",void 0),t.C8=Pt([Y("wired-video"),Nt("design:paramtypes",[])],t.C8)}}]);