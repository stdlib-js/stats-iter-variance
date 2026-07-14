"use strict";var v=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var s=v(function(b,n){
var m=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/assert-is-number/dist').isPrimitive,t=require('@stdlib/stats-incr-variance/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function l(i,e){var r,a;if(!m(i))throw new TypeError(u('1LX3v',i));if(arguments.length>1){if(!o(e))throw new TypeError(u('1LX4A',e));r=t(e)}else r=t();for(;a=i.next(),!a.done;)typeof a.value=="number"?r(a.value):r(NaN);return r()}n.exports=l
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
