// ==UserScript==
// @author          Oleg Valter <oleg.a.valter@gmail.com>
// @description     Teaching SE's character counter how to count
// @grant           none
// @homepage        https://github.com/userscripters/unicode-char-counter#readme
// @match           https://*.stackexchange.com/questions/*
// @match           https://askubuntu.com/questions/*
// @match           https://es.meta.stackoverflow.com/questions/*
// @match           https://es.stackoverflow.com/questions/*
// @match           https://ja.meta.stackoverflow.com/questions/*
// @match           https://ja.stackoverflow.com/questions/*
// @match           https://mathoverflow.net/questions/*
// @match           https://meta.askubuntu.com/questions/*
// @match           https://meta.mathoverflow.net/questions/*
// @match           https://meta.serverfault.com/questions/*
// @match           https://meta.stackoverflow.com/questions/*
// @match           https://meta.superuser.com/questions/*
// @match           https://pt.meta.stackoverflow.com/questions/*
// @match           https://pt.stackoverflow.com/questions/*
// @match           https://ru.meta.stackoverflow.com/questions/*
// @match           https://ru.stackoverflow.com/questions/*
// @match           https://serverfault.com/questions/*
// @match           https://stackapps.com/questions/*
// @match           https://stackoverflow.com/questions/*
// @match           https://superuser.com/questions/*
// @name            Unicode Char Counter
// @namespace       userscripters
// @run-at          document-start
// @source          git+https://github.com/userscripters/unicode-char-counter.git
// @supportURL      https://github.com/userscripters/unicode-char-counter/issues
// @version         0.2.0
// ==/UserScript==

"use strict";var __values=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return{value:(t=t&&n>=t.length?void 0:t)&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,a,o=r.call(t),i=[];try{for(;(void 0===e||0<e--)&&!(n=o.next()).done;)i.push(n.value)}catch(t){a={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i},__spreadArray=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,a=0,o=e.length;a<o;a++)!n&&a in e||((n=n||Array.prototype.slice.call(e,0,a))[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))};!function(t,e){t.addEventListener("load",function(){var o=e.createElement("div"),t=(o.classList.add("flex--item","ta-right","mr0","fs-caption","mt4","cool"),{warm:.4,hot:.6,supernova:.8,"fc-red-400":1}),i=Object.entries(t),c=Object.keys(t);e.addEventListener("input",function(t){t=t.target;if("title"===t.id){var e=null==(e=t.closest(".js-stacks-validation"))?void 0:e.querySelector(".text-counter");if(e){e.classList.contains("d-none")||(e.classList.add("d-none"),e.after(o));var r=t.dataset.maxLength,t=t.value,n=+(void 0===r?"0":r),a=function(t){var e,r,n=0,a=/[\ufe00-\ufe0F]/,o=!1;try{for(var i=__values(t),c=i.next();!c.done;c=i.next()){var l=c.value;o?o=!1:a.test(l)||(8205===l.codePointAt(0)?o=!0:n+=1)}}catch(t){e={error:t}}finally{try{c&&!c.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return n}(t),r=t.length,t=n-a,r=n-r;if(!e.textContent)return o.textContent="";e=r==t?"and":"but",t=0<=t?"".concat(t," char").concat(1!=t?"s":""):"over by ".concat(Math.abs(t)),r=0<=r?"".concat(r," left"):"is over by ".concat(Math.abs(r)),t=(o.textContent="".concat(t," (of ").concat(n,") left (").concat(e," SE thinks ").concat(r,")"),i.filter(function(t){t=__read(t,2),t[0],t=t[1];return n*t<a})),e=__read(t.reduce(function(t,e){return t[1]<e[1]?e:t},["cool",0]),1)[0],r=o.classList;r.remove.apply(r,__spreadArray([],__read(c),!1)),r.add(e)}}})})}(window,document);