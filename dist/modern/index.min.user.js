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
// @name            Unicode Char Counter
// @namespace       userscripters
// @run-at          document-start
// @source          git+https://github.com/userscripters/unicode-char-counter.git
// @supportURL      https://github.com/userscripters/unicode-char-counter/issues
// @version         0.2.0
// ==/UserScript==

"use strict";((t,e)=>{t.addEventListener("load",()=>{const i=e.createElement("div");i.classList.add("flex--item","ta-right","mr0","fs-caption","mt4","cool");var t={warm:.4,hot:.6,supernova:.8,"fc-red-400":1};const d=Object.entries(t),l=Object.keys(t);e.addEventListener("input",({target:t})=>{if("title"===t.id){const s=null===(n=t.closest(".js-stacks-validation"))||void 0===n?void 0:n.querySelector(".text-counter");if(s){s.classList.contains("d-none")||(s.classList.add("d-none"),s.after(i));var{dataset:{maxLength:e="0"},value:n}=t;const o=+e,a=(t=>{let e=0;const n=/[\ufe00-\ufe0F]/;let s=!1;for(const o of t)s?s=!1:n.test(o)||(8205!==o.codePointAt(0)?e+=1:s=!0);return e})(n);var t=n.length,e=o-a,n=o-t,t=s["textContent"];if(!t)return i.textContent="";t=n==e?"and":"but",e=0<=e?`${e} char${1!=e?"s":""}`:`over by ${Math.abs(e)}`,n=0<=n?`${n} left`:`is over by ${Math.abs(n)}`;i.textContent=`${e} (of ${o}) left (${t} SE thinks ${n})`;const r=d.filter(([,t])=>o*t<a);var[n]=r.reduce((t,e)=>t[1]<e[1]?e:t,["cool",0]);const c=i["classList"];c.remove(...l),c.add(n)}}})})})(window,document);