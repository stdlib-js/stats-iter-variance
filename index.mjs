// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-variance@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(i,n){var o,m;if(!e(i))throw new TypeError(s("1LX3v",i));if(arguments.length>1){if(!r(n))throw new TypeError(s("1LX4A",n));o=t(n)}else o=t();for(;!(m=i.next()).done;)"number"==typeof m.value?o(m.value):o(NaN);return o()}export{i as default};
//# sourceMappingURL=index.mjs.map
