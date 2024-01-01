// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-variance@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,i){var m,a;if(!e(n))throw new TypeError(s("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(arguments.length>1){if(!t(i))throw new TypeError(s("invalid argument. Second argument must be a number. Value: `%s`.",i));m=r(i)}else m=r();for(;!(a=n.next()).done;)"number"==typeof a.value?m(a.value):m(NaN);return m()}export{n as default};
//# sourceMappingURL=index.mjs.map
