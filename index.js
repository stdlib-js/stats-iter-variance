// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).itervariance=r()}(this,(function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,y,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,o,c,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=A.exec(e);i;)(r=e.slice(n,A.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=A.lastIndex,i=A.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function C(e){var r,t,i;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return T.apply(null,t)}var R,O=Object.prototype,N=O.toString,P=O.__defineGetter__,Z=O.__defineSetter__,L=O.__lookupGetter__,W=O.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var G=R;function X(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return B&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=M()?function(e){var r,t,i,n,a;if(null==e)return z.call(e);t=e[D],a=D,r=null!=(n=e)&&H.call(n,a);try{e[D]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[D]=t:delete e[D],i}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var Y=M();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return U(e)||ee(e)}function te(){return new Function("return this;")()}X(re,"isPrimitive",U),X(re,"isObject",ee);var ie="object"==typeof self?self:null,ne="object"==typeof window?window:null,ae="object"==typeof global?global:null,oe="object"==typeof globalThis?globalThis:null;var ce=function(e){if(arguments.length){if(!U(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(oe)return oe;if(ie)return ie;if(ne)return ne;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ce.document&&ce.document.childNodes,le=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;X(pe,"REGEXP",ue);var fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function ge(e){return null!==e&&"object"==typeof e}function de(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=ue.exec(i.toString()))return r[1]}return ge(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}X(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!fe(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(ge));var he="function"==typeof e||"object"==typeof le||"function"==typeof se?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?de(e).toLowerCase():r};function we(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&function(e){return"function"===he(e)}(e.next)}var be="function"==typeof Object.defineProperty?Object.defineProperty:null;var ve=Object.defineProperty;function ye(e){return"number"==typeof e}function me(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ee(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+me(n):me(n)+e,i&&(e="-"+e)),e}var _e=String.prototype.toLowerCase,xe=String.prototype.toUpperCase;function ke(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ye(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ee(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ee(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===xe.call(e.specifier)?xe.call(t):_e.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Se(e){return"string"==typeof e}var je=Math.abs,Ve=String.prototype.toLowerCase,Te=String.prototype.toUpperCase,Ae=String.prototype.replace,$e=/e\+(\d)$/,Fe=/e-(\d)$/,Ie=/^(\d+)$/,Ce=/^(\d+)e/,Re=/\.0$/,Oe=/\.0*e/,Ne=/(\..*[^0])0*e/;function Pe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ye(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":je(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ae.call(t,Ne,"$1e"),t=Ae.call(t,Oe,"e"),t=Ae.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ae.call(t,$e,"e+0$1"),t=Ae.call(t,Fe,"e-0$1"),e.alternate&&(t=Ae.call(t,Ie,"$1."),t=Ae.call(t,Ce,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Te.call(e.specifier)?Te.call(t):Ve.call(t)}function Ze(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Le(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ze(i):Ze(i)+e}var We=String.fromCharCode,Ge=isNaN,Xe=Array.isArray;function Ue(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Be(e){var r,t,i,n,a,o,c,s,l;if(!Xe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Se(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ue(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ge(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ge(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ke(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ge(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ge(a)?String(i.arg):We(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Pe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ee(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Le(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function He(e){var r,t,i,n;for(t=[],n=0,i=Me.exec(e);i;)(r=e.slice(n,Me.lastIndex-i[0].length)).length&&t.push(r),t.push(ze(i)),n=Me.lastIndex,i=Me.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function qe(e){return"string"==typeof e}function De(e){var r,t,i;if(!qe(e))throw new TypeError(De("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=He(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Be.apply(null,t)}var Je,Ke=Object.prototype,Qe=Ke.toString,Ye=Ke.__defineGetter__,er=Ke.__defineSetter__,rr=Ke.__lookupGetter__,tr=Ke.__lookupSetter__;Je=function(){try{return be({},"x",{}),!0}catch(e){return!1}}()?ve:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Qe.call(e))throw new TypeError(De("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Qe.call(t))throw new TypeError(De("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(rr.call(e,r)||tr.call(e,r)?(i=e.__proto__,e.__proto__=Ke,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ye&&Ye.call(e,r,t.get),o&&er&&er.call(e,r,t.set),e};var ir=Je;function nr(e,r,t){ir(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ar(e){return"number"==typeof e}var or=Number,cr=or.prototype.toString;var sr=M();function lr(e){return"object"==typeof e&&(e instanceof or||(sr?function(e){try{return cr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function pr(e){return ar(e)||lr(e)}function ur(e){return e!=e}function fr(e){return"number"==typeof e}function gr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function dr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+gr(n):gr(n)+e,i&&(e="-"+e)),e}nr(pr,"isPrimitive",ar),nr(pr,"isObject",lr);var hr=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function br(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!fr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=dr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=dr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===wr.call(e.specifier)?wr.call(t):hr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function vr(e){return"string"==typeof e}var yr=Math.abs,mr=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,_r=String.prototype.replace,xr=/e\+(\d)$/,kr=/e-(\d)$/,Sr=/^(\d+)$/,jr=/^(\d+)e/,Vr=/\.0$/,Tr=/\.0*e/,Ar=/(\..*[^0])0*e/;function $r(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!fr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":yr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=_r.call(t,Ar,"$1e"),t=_r.call(t,Tr,"e"),t=_r.call(t,Vr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_r.call(t,xr,"e+0$1"),t=_r.call(t,kr,"e-0$1"),e.alternate&&(t=_r.call(t,Sr,"$1."),t=_r.call(t,jr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Er.call(e.specifier)?Er.call(t):mr.call(t)}function Fr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ir(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Fr(i):Fr(i)+e}var Cr=String.fromCharCode,Rr=isNaN,Or=Array.isArray;function Nr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Pr(e){var r,t,i,n,a,o,c,s,l;if(!Or(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(vr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Nr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Rr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Rr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=br(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Rr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Rr(a)?String(i.arg):Cr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=$r(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=dr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ir(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Zr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Lr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Wr(e){var r,t,i,n;for(t=[],n=0,i=Zr.exec(e);i;)(r=e.slice(n,Zr.lastIndex-i[0].length)).length&&t.push(r),t.push(Lr(i)),n=Zr.lastIndex,i=Zr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Gr(e){return"string"==typeof e}function Xr(e){var r,t,i;if(!Gr(e))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Wr(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Pr.apply(null,t)}function Ur(e){var r,t,i,n;if(i=0,n=0,arguments.length){if(!ar(e))throw new TypeError(Xr("invalid argument. Must provide a number. Value: `%s`.",e));return t=e,o}return t=0,a;function a(e){return 0===arguments.length?0===n?null:1===n?ur(i)?NaN:0:i/(n-1):(i+=(r=e-t)*(e-(t+=r/(n+=1))),n<2?ur(i)?NaN:0:i/(n-1))}function o(e){return 0===arguments.length?0===n?null:i/n:(i+=(r=e-t)*r)/(n+=1)}}function Br(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}return function(e,r){var t,i;if(!we(e))throw new TypeError(Br("1LX3v,IA",e));if(arguments.length>1){if(!ar(r))throw new TypeError(Br("1LX4A,Hr",r));t=Ur(r)}else t=Ur();for(;!(i=e.next()).done;)"number"==typeof i.value?t(i.value):t(NaN);return t()}}));
//# sourceMappingURL=index.js.map
