parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VaXK":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(r){h=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),u=new G(n||[]);return i(a,"_invoke",{value:N(t,r,u)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",w={};function b(){}function g(){}function x(){}var E={};h(E,c,function(){return this});var L=Object.getPrototypeOf,k=L&&L(L(T([])));k&&k!==o&&a.call(k,c)&&(E=k);var I=x.prototype=b.prototype=Object.create(E);function j(t){["next","throw","return"].forEach(function(e){h(t,e,function(t){return this._invoke(e,t)})})}function O(e,r){function n(o,i,u,c){var s=l(e[o],e,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==t(h)&&a.call(h,"__await")?r.resolve(h.__await).then(function(t){n("next",t,u,c)},function(t){n("throw",t,u,c)}):r.resolve(h).then(function(t){f.value=t,u(f)},function(t){return n("throw",t,u,c)})}c(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r(function(r,o){n(t,e,r,o)})}return o=o?o.then(a,a):a()}})}function N(t,e,n){var o=y;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=_(u,n);if(c){if(c===w)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=l(t,e,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===w)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var a=l(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,w;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,w):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,w)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=x,i(I,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:g,configurable:!0}),g.displayName=h(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,f,"GeneratorFunction")),t.prototype=Object.create(I),t},n.awrap=function(t){return{__await:t}},j(O.prototype),h(O.prototype,s,function(){return this}),n.AsyncIterator=O,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new O(p(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(I),h(I,f,"Generator"),h(I,c,function(){return this}),h(I,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),w}},n}function r(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise(function(o,a){var i=t.apply(e,n);function u(t){r(i,o,a,u,c,"next",t)}function c(t){r(i,o,a,u,c,"throw",t)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.central=a,exports.db1=u,exports.db2=s,exports.db3=h,exports.vault=l;var o=function(t){return new Promise(function(e){return setTimeout(e,t)})};function a(t){return i.apply(this,arguments)}function i(){return(i=n(e().mark(function t(r){var n;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("number"==typeof r){t.next=2;break}throw new Error("Invalid Input -- Not a Number");case 2:if(!(r<1||r>10)){t.next=4;break}throw new Error("Invalid Input -- Out of Range");case 4:return t.next=6,o(100);case 6:return n="db1",r>4&&(n="db2"),r>7&&(n="db3"),t.abrupt("return",n);case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}function u(t){return c.apply(this,arguments)}function c(){return(c=n(e().mark(function t(r){var n,o;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("number"==typeof r){t.next=2;break}throw new Error("Invalid Input -- Not a Number");case 2:if(!(r<1||r>4)){t.next=4;break}throw new Error("Invalid Input -- Out of Range");case 4:return t.next=6,fetch("https://jsonplaceholder.typicode.com/users/".concat(r));case 6:return n=t.sent,t.next=9,n.json();case 9:return o=t.sent,t.abrupt("return",{username:o.username,website:o.website,company:o.company});case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=n(e().mark(function t(r){var n,o;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("number"==typeof r){t.next=2;break}throw new Error("Invalid Input -- Not a Number");case 2:if(!(r<5||r>7)){t.next=4;break}throw new Error("Invalid Input -- Out of Range");case 4:return t.next=6,fetch("https://jsonplaceholder.typicode.com/users/".concat(r));case 6:return n=t.sent,t.next=9,n.json();case 9:return o=t.sent,t.abrupt("return",{username:o.username,website:o.website,company:o.company});case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function h(t){return p.apply(this,arguments)}function p(){return(p=n(e().mark(function t(r){var n,o;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("number"==typeof r){t.next=2;break}throw new Error("Invalid Input -- Not a Number");case 2:if(!(r<8||r>10)){t.next=4;break}throw new Error("Invalid Input -- Out of Range");case 4:return t.next=6,fetch("https://jsonplaceholder.typicode.com/users/".concat(r));case 6:return n=t.sent,t.next=9,n.json();case 9:return o=t.sent,t.abrupt("return",{username:o.username,website:o.website,company:o.company});case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function l(t){return y.apply(this,arguments)}function y(){return(y=n(e().mark(function t(r){var n,o;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("number"==typeof r){t.next=2;break}throw new Error("Invalid Input -- Not a Number");case 2:if(!(r<1||r>10)){t.next=4;break}throw new Error("Invalid Input -- Out of Range");case 4:return t.next=6,fetch("https://jsonplaceholder.typicode.com/users/".concat(r));case 6:return n=t.sent,t.next=9,n.json();case 9:return o=t.sent,t.abrupt("return",{name:o.name,email:o.email,address:o.address,phone:o.phone});case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}
},{}],"H99C":[function(require,module,exports) {
"use strict";var s=require("./databases.js");function a(a){s.db1,s.db2,s.db3}
},{"./databases.js":"VaXK"}]},{},["H99C"], null)
//# sourceMappingURL=/src.d2c9a773.js.map