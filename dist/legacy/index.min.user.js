// ==UserScript==
// @author          Oleg Valter <oleg.a.valter@gmail.com>
// @description     Teaching SE's character counter how to count
// @grant           none
// @homepage        https://github.com/userscripters/unicode-char-counter#readme
// @match           https://*.askubuntu.com/questions/*
// @match           https://*.mathoverflow.net/questions/*
// @match           https://*.serverfault.com/questions/*
// @match           https://*.stackapps.com/questions/*
// @match           https://*.stackexchange.com/questions/*
// @match           https://*.stackoverflow.com/questions/*
// @name            unicode-char-counter
// @namespace       userscripters
// @run-at          document-start
// @source          git+https://github.com/userscripters/unicode-char-counter.git
// @supportURL      https://github.com/userscripters/unicode-char-counter/issues
// @version         0.2.0
// ==/UserScript==

"use strict";var __values=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return{value:(t=t&&n>=t.length?void 0:t)&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,a,o=r.call(t),i=[];try{for(;(void 0===e||0<e--)&&!(n=o.next()).done;)i.push(n.value)}catch(t){a={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i},__spreadArray=this&&this.__spreadArray||function(t,e){for(var r=0,n=e.length,a=t.length;r<n;r++,a++)t[a]=e[r];return t};!function(t,e){t.addEventListener("load",function(){var o=e.createElement("div");o.classList.add("flex--item","ta-right","mr0","fs-caption","mt4","cool");var t={warm:.4,hot:.6,supernova:.8,"fc-red-400":1},i=Object.entries(t),l=Object.keys(t);e.addEventListener("input",function(t){var e=t.target;if("title"===e.id){t=null===(r=e.closest(".js-stacks-validation"))||void 0===r?void 0:r.querySelector(".text-counter");if(t){t.classList.contains("d-none")||(t.classList.add("d-none"),t.after(o));var r=e.dataset.maxLength,e=e.value,n=+(void 0===r?"0":r),a=function(t){var e,r,n=0,a=/[\ufe00-\ufe0F]/,o=!1;try{for(var i=__values(t),l=i.next();!l.done;l=i.next()){var s=l.value;o?o=!1:a.test(s)||(8205!==s.codePointAt(0)?n+=1:o=!0)}}catch(t){e={error:t}}finally{try{l&&!l.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return n}(e),r=e.length,e=n-a,r=n-r;if(!t.textContent)return o.textContent="";t=r==e?"and":"but",e=0<=e?e+" char"+(1!=e?"s":""):"over by "+Math.abs(e),r=0<=r?r+" left":"is over by "+Math.abs(r);o.textContent=e+" (of "+n+") left ("+t+" SE thinks "+r+")";t=i.filter(function(t){t=__read(t,2),t[0],t=t[1];return n*t<a}),r=__read(t.reduce(function(t,e){return t[1]<e[1]?e:t},["cool",0]),1)[0],t=o.classList;t.remove.apply(t,__spreadArray([],__read(l))),t.add(r)}}})})}(window,document);