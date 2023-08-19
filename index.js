// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).itervariance=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&c&&c.call(t,e,r.set),t};var a=r;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var e,r,n,o,u;if(null==t)return v.call(t);r=t[m],u=m,e=null!=(o=t)&&d.call(o,u);try{t[m]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[m]=r:delete t[m],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function w(t){return y(t)||h(t)}function S(){return new Function("return this;")()}p(w,"isPrimitive",y),p(w,"isObject",h);var E="object"==typeof self?self:null,A="object"==typeof window?window:null,O="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(A)return A;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),N=T.document&&T.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",B);var L=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function V(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=B.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!L(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var k="function"==typeof t||"object"==typeof P||"function"==typeof N?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};function G(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&function(t){return"function"===k(t)}(t.next)}function I(t){return"number"==typeof t}var M=Number,X=M.prototype.toString;var F=s();function R(t){return"object"==typeof t&&(t instanceof M||(F?function(t){try{return X.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function U(t){return I(t)||R(t)}function H(t){return t!=t}function q(t){var e,r,n,o;if(n=0,o=0,arguments.length){if(!I(t))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+t+"`.");return r=t,i}return r=0,u;function u(t){return 0===arguments.length?0===o?null:1===o?H(n)?NaN:0:n/(o-1):(n+=(e=t-r)*(t-(r+=e/(o+=1))),o<2?H(n)?NaN:0:n/(o-1))}function i(t){return 0===arguments.length?0===o?null:n/o:(n+=(e=t-r)*e)/(o+=1)}}function z(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return p(U,"isPrimitive",I),p(U,"isObject",R),function(t,e){var r,n;if(!G(t))throw new TypeError(z("1LX3v,IA",t));if(arguments.length>1){if(!I(e))throw new TypeError(z("1LX4A,Hr",e));r=q(e)}else r=q();for(;!(n=t.next()).done;)"number"==typeof n.value?r(n.value):r(NaN);return r()}}));
//# sourceMappingURL=index.js.map
