"use strict";(self.webpackChunkportal_template=self.webpackChunkportal_template||[]).push([[651],{57785:function(e,t,n){var r=n(22468);Object.defineProperty(t,"XJ",{enumerable:!0,get:function(){return a(r).default}});var o=n(23791);function a(e){return e&&e.__esModule?e:{default:e}}},23791:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(3013),c=(r=a)&&r.__esModule?r:{default:r};var l=c.default.createContext({}),i=l.Provider,p=l.Consumer;t.withMDXComponents=function(e){return function(t){return c.default.createElement(p,null,(function(n){return c.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return c.default.createElement(i,{value:e.components},e.children)}},22468:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3013),l=(r=c)&&r.__esModule?r:{default:r},i=n(23791);function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return p(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,a=void 0===r?{}:r,c=e.children,i=e.components,p=void 0===i?{}:i,u=e.Layout,m=e.layoutProps,f=p[n+"."+t]||p[t]||s[t]||t;return u?l.default.createElement(u,o({components:p},m),l.default.createElement(f,a,c)):l.default.createElement(f,a,c)}}]),t}(c.Component);t.default=(0,i.withMDXComponents)(m)},12594:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(26402),o=n(3013),a=n(57785),c=n(76975);function l(){var e=o.useState(0),t=e[0],n=e[1];return o.createElement("div",{style:{border:"1px solid red",padding:"10px"}},o.createElement("div",{style:{fontSize:"18px",marginBottom:"10px"}},"Clicks: ",o.createElement("strong",null,t)),o.createElement("button",{onClick:function(){return n(t+1)}}," Click "))}var i={},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=c.P3,n}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t={wrapper:o.Fragment};return o.createElement(a.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,e),components:t},o.createElement(a.XJ,{name:"h1",components:t,props:{style:{position:"relative"}}},o.createElement(a.XJ,{name:"a",components:t,parentName:"h1",props:{href:"#creating-react-components","aria-label":"creating react components permalink",className:"anchor before"}},o.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},o.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),o.createElement(a.XJ,{name:"div",components:t,parentName:"h1",props:{className:"hidden-anchor",id:"creating-react-components"}}),"Creating React components"),o.createElement(a.XJ,{name:"p",components:t},"This page describes developing React components for ",o.createElement(a.XJ,{name:"strong",components:t,parentName:"p"},"Redocly Portal"),"."),o.createElement(a.XJ,{name:"hr",components:t}),o.createElement(a.XJ,{name:"h2",components:t,props:{style:{position:"relative"}}},o.createElement(a.XJ,{name:"a",components:t,parentName:"h2",props:{href:"#component-example","aria-label":"component example permalink",className:"anchor before"}},o.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},o.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),o.createElement(a.XJ,{name:"div",components:t,parentName:"h2",props:{className:"hidden-anchor",id:"component-example"}}),"Component example"),o.createElement(l,null),o.createElement(a.XJ,{name:"p",components:t},"TBD"))},t}(o.Component);p.isMDXComponent=!0}}]);