(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{277:function(t,e,n){"use strict";n.r(e);var r={props:["pages"]},o=n(46),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed w-40 p-4 bg-white"},[n("ul",t._l(t.pages,(function(e){return n("li",{key:e,staticClass:"text-xs list-disc"},[n("nuxt-link",{attrs:{to:{hash:"#"+e}}},[t._v(t._s(e))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";var r=n(3),o=n(5),c=n(38),l=n(24),f=n(32),d=n(12),v=n(4),h=n(196),m=n(138),x=n(279),y=n(280),w=n(84),j=n(281),C=[],_=o(C.sort),A=o(C.push),D=v((function(){C.sort(void 0)})),k=v((function(){C.sort(null)})),P=m("sort"),O=!v((function(){if(w)return w<70;if(!(x&&x>3)){if(y)return!0;if(j)return j<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)C.push({k:t+n,v:e})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)t=C[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:D||!k||!P||!O},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(O)return void 0===t?_(e):_(e,t);var n,r,o=[],v=f(e);for(r=0;r<v;r++)r in e&&A(o,e[r]);for(h(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:d(e)>d(n)?1:-1}}(t)),n=o.length,r=0;r<n;)e[r]=o[r++];for(;r<v;)delete e[r++];return e}})},279:function(t,e,n){var r=n(64).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},280:function(t,e,n){var r=n(64);t.exports=/MSIE|Trident/.test(r)},281:function(t,e,n){var r=n(64).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},305:function(t,e,n){"use strict";n.r(e);n(48),n(25),n(47),n(29),n(28),n(33),n(49),n(50),n(30);var r=n(86),o=n(9);n(51),n(85),n(278),n(15),n(52),n(65);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,f,d,v,h,m,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,o=t.error,e.next=3,n("computer-science/paradigms/object").fetch().catch((function(t){console.log("asyncData -> err",t),o({statusCode:404,message:"Page not found"})}));case 3:return l=e.sent,console.log("asyncData -> javaPages",l),e.next=7,n("computer-science/paradigms/functional").fetch().catch((function(t){console.log("asyncData -> err",t),o({statusCode:404,message:"Page not found"})}));case 7:f=e.sent,console.log("asyncData -> jsPages",f),d=[].concat(Object(r.a)(l),Object(r.a)(f)),console.log("asyncData -> pages",d),d.sort((function(t,e){return new Date(t.createdAt)-new Date(e.createdAt)})),console.log("asyncData -> pages",d),v=[],h=c(d);try{for(h.s();!(m=h.n()).done;)x=m.value,v.includes(x.slug)||v.push(x.slug)}catch(t){h.e(t)}finally{h.f()}return console.log("asyncData -> pages",v),l=l.reduce((function(t,e,n){return t[e.slug]=e,t}),{}),f=f.reduce((function(t,e,n){return t[e.slug]=e,t}),{}),e.abrupt("return",{javaPages:l,jsPages:f,pages:v});case 20:case"end":return e.stop()}}),e)})))()}},d=n(46),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Toc",{attrs:{pages:t.pages}}),t._v(" "),n("div",{staticClass:"max-w-5xl px-4 pt-4 pb-64 mx-auto prose-sm prose"},[t._m(0),t._v(" "),t._l(t.pages,(function(e){return n("div",{key:e,staticClass:"pb-8 border-b"},[n("div",{staticClass:"flex flex-row space-x-8 sm:space-x-32"},[t.javaPages[e]?n("nuxt-content",{staticClass:"flex-1 overflow-hidden",attrs:{id:e,document:t.javaPages[e]}}):n("div",{staticClass:"flex items-center justify-center flex-1 h-40",attrs:{id:e}},[n("div",[t._v(" ")])]),t._v(" "),t.jsPages[e]?n("nuxt-content",{staticClass:"flex-1 overflow-hidden",attrs:{document:t.jsPages[e]}}):n("div",{staticClass:"flex items-center justify-center flex-1 h-40"},[n("div",[t._v(" ")])])],1)])}))],2)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"w-full text-2xl font-bold text-center"},[t._v("Object")]),t._v(" "),n("div",{staticClass:"w-full text-2xl font-bold text-center"},[t._v("Functional")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Toc:n(277).default})}}]);