(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{277:function(t,e,r){"use strict";r.r(e);var n={props:["pages"]},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed w-40 h-full overflow-auto bg-white"},[r("a",{staticClass:"p-2 text-white bg-black cursor-pointer",attrs:{href:"/"}},[t._v("Compare & Learn")]),t._v(" "),r("ul",{staticClass:"p-4"},t._l(t.pages,(function(e){return r("li",{key:e,staticClass:"text-xs list-disc"},[r("nuxt-link",{attrs:{to:{hash:"#"+e}}},[t._v(t._s(e))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,r){"use strict";var n=r(3),o=r(5),c=r(38),l=r(24),f=r(32),v=r(12),d=r(4),h=r(196),x=r(138),m=r(279),y=r(280),w=r(84),C=r(281),_=[],j=o(_.sort),A=o(_.push),k=d((function(){_.sort(void 0)})),D=d((function(){_.sort(null)})),P=x("sort"),O=!d((function(){if(w)return w<70;if(!(m&&m>3)){if(y)return!0;if(C)return C<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)_.push({k:t+r,v:e})}for(_.sort((function(a,b){return b.v-a.v})),r=0;r<_.length;r++)t=_[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:k||!D||!P||!O},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(O)return void 0===t?j(e):j(e,t);var r,n,o=[],d=f(e);for(n=0;n<d;n++)n in e&&A(o,e[n]);for(h(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t)),r=o.length,n=0;n<r;)e[n]=o[n++];for(;n<d;)delete e[n++];return e}})},279:function(t,e,r){var n=r(64).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},280:function(t,e,r){var n=r(64);t.exports=/MSIE|Trident/.test(n)},281:function(t,e,r){var n=r(64).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},305:function(t,e,r){"use strict";r.r(e);r(48),r(25),r(47),r(29),r(28),r(33),r(49),r(50),r(30);var n=r(86),o=r(9);r(51),r(85),r(278),r(15),r(52),r(65);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,f,v,d,h,x,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,o=t.error,e.next=3,r("ui-libraries/react").fetch().catch((function(t){console.log("asyncData -> err",t),o({statusCode:404,message:"Page not found"})}));case 3:return l=e.sent,console.log("asyncData -> javaPages",l),e.next=7,r("ui-libraries/vue").fetch().catch((function(t){console.log("asyncData -> err",t),o({statusCode:404,message:"Page not found"})}));case 7:f=e.sent,console.log("asyncData -> jsPages",f),v=[].concat(Object(n.a)(l),Object(n.a)(f)),console.log("asyncData -> pages",v),v.sort((function(t,e){return new Date(t.createdAt)-new Date(e.createdAt)})),console.log("asyncData -> pages",v),d=[],h=c(v);try{for(h.s();!(x=h.n()).done;)m=x.value,d.includes(m.slug)||d.push(m.slug)}catch(t){h.e(t)}finally{h.f()}return console.log("asyncData -> pages",d),l=l.reduce((function(t,e,r){return t[e.slug]=e,t}),{}),f=f.reduce((function(t,e,r){return t[e.slug]=e,t}),{}),e.abrupt("return",{javaPages:l,jsPages:f,pages:d});case 20:case"end":return e.stop()}}),e)})))()}},v=r(46),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Toc",{attrs:{pages:t.pages}}),t._v(" "),r("div",{staticClass:"max-w-5xl px-4 pt-4 pb-64 mx-auto prose-sm prose"},[t._m(0),t._v(" "),t._l(t.pages,(function(e){return r("div",{key:e,staticClass:"pb-8 border-b"},[r("div",{staticClass:"flex flex-row space-x-8 sm:space-x-32"},[t.javaPages[e]?r("nuxt-content",{staticClass:"flex-1 overflow-hidden",attrs:{document:t.javaPages[e]}}):r("div",{staticClass:"flex items-center justify-center flex-1 h-40"},[r("div",[t._v(" ")])]),t._v(" "),t.jsPages[e]?r("nuxt-content",{staticClass:"flex-1 overflow-hidden",attrs:{id:e,document:t.jsPages[e]}}):r("div",{staticClass:"flex items-center justify-center flex-1 h-40",attrs:{id:e}},[r("div",[t._v(" ")])])],1)])}))],2)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex"},[r("div",{staticClass:"w-full text-2xl font-bold text-center"},[t._v("React")]),t._v(" "),r("div",{staticClass:"w-full text-2xl font-bold text-center"},[t._v("Vue")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Toc:r(277).default})}}]);