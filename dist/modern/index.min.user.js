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

"use strict";((t,e)=>{t.addEventListener("load",()=>{const i=e.createElement("div");i.classList.add("flex--item","ta-right","mr0","fs-caption","mt4","cool");var t={warm:.4,hot:.6,supernova:.8,"fc-red-400":1};const d=Object.entries(t),l=Object.keys(t);e.addEventListener("input",({target:t})=>{if("title"===t.id){const s=null==(e=t.closest(".js-stacks-validation"))?void 0:e.querySelector(".text-counter");if(s){s.classList.contains("d-none")||(s.classList.add("d-none"),s.after(i));var{dataset:{maxLength:e="0"},value:t}=t;const o=+e,a=(t=>{let e=0;const n=/[\ufe00-\ufe0F]/;let s=!1;for(const o of t)s?s=!1:n.test(o)||(8205===o.codePointAt(0)?s=!0:e+=1);return e})(t);var e=t.length,t=o-a,e=o-e,n=s["textContent"];if(!n)return i.textContent="";n=e==t?"and":"but",t=0<=t?t+" char"+(1!=t?"s":""):"over by "+Math.abs(t),e=0<=e?e+" left":"is over by "+Math.abs(e);i.textContent=t+` (of ${o}) left (${n} SE thinks ${e})`;const r=d.filter(([,t])=>o*t<a);var[t]=r.reduce((t,e)=>t[1]<e[1]?e:t,["cool",0]);const c=i["classList"];c.remove(...l),c.add(t)}}})})})(window,document);