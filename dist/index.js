"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=v(function(b,n){
var m=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/assert-is-number/dist').isPrimitive,t=require('@stdlib/stats-incr-variance/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function l(r,e){var i,a;if(!m(r))throw new TypeError(u('1LX3v',r));if(arguments.length>1){if(!o(e))throw new TypeError(u('1LX4A',e));i=t(e)}else i=t();for(;a=r.next(),!a.done;)typeof a.value=="number"?i(a.value):i(NaN);return i()}n.exports=l
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
