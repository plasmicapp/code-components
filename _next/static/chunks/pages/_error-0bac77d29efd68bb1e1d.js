(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{4434:function(e,t,n){"use strict";var r=n(2553),i=n(2012),l=n(9807),a=n(7690),o=n(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}var c=n(2426);t.__esModule=!0,t.default=void 0;var s=c(n(7294)),f=c(n(7947)),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){l(n,e);var t=u(n);function n(){return r(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:g.error},s.default.createElement(f.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:g.h1},e):null,s.default.createElement("div",{style:g.desc},s.default.createElement("h2",{style:g.h2},t,"."))))}}]),n}(s.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},4977:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(4434)}])}},function(e){e.O(0,[774,351],(function(){return t=4977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);