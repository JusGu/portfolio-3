!function(){"use strict";const e=e=>"language"===e.className.substring(0,8);(()=>{const t=document.getElementsByTagName("pre");if(!t)return;for(const n of t)e(n)&&(n.innerHTML=`<div class="copy">copy</div>${n.innerHTML}`);new ClipboardJS(".copy",{target:e=>e.nextElementSibling}).on("success",(e=>{e.trigger.textContent="copied!",setTimeout((()=>{e.clearSelection(),e.trigger.textContent="copy"}),2e3)}))})()}();