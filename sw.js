if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-58dda7d9"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"eaedeac391e953987e44c79c64386106"},{url:"assets/ccip-VMt7LlKu-fw9ZvVPu.js",revision:null},{url:"assets/ccip-VMt7LlKu-k50vLhxX.js",revision:null},{url:"assets/claim-6yMbb5rj.js",revision:null},{url:"assets/claim-t6vC04rU.js",revision:null},{url:"assets/dialog-wA6-WnZY.js",revision:null},{url:"assets/dialog-WZXmRGhJ.js",revision:null},{url:"assets/Erc1155-VDVadBVO.js",revision:null},{url:"assets/Erc721-ZXi07Shj.js",revision:null},{url:"assets/index-__g3T8tB.js",revision:null},{url:"assets/index-0YanR0Ar.js",revision:null},{url:"assets/index-2GLdkUvQ.js",revision:null},{url:"assets/index-3zRQO7VL.js",revision:null},{url:"assets/index-5cLTwBu3.js",revision:null},{url:"assets/index-5GzvNu9-.css",revision:null},{url:"assets/index-5ny4yCAI.js",revision:null},{url:"assets/index-8NbYaI8g.js",revision:null},{url:"assets/index-B08Pv_E4.js",revision:null},{url:"assets/index-byxJ2OCn.js",revision:null},{url:"assets/index-D33sSvDr.js",revision:null},{url:"assets/index-dwoVmmDg.js",revision:null},{url:"assets/index-IAXPKp8b--p_X_J7V.js",revision:null},{url:"assets/index-IAXPKp8b-yHuUxnEl.js",revision:null},{url:"assets/index-ifgnO_nn.js",revision:null},{url:"assets/index-lhf9DBej.js",revision:null},{url:"assets/index-OtaWhOsa.js",revision:null},{url:"assets/index-Pf0epCBj--SS_QJFX.js",revision:null},{url:"assets/index-Pf0epCBj-YrptGbii.js",revision:null},{url:"assets/index-Qc3FUYcE.js",revision:null},{url:"assets/index-skZeKQO1.js",revision:null},{url:"assets/index-TX5gPbF8.js",revision:null},{url:"assets/index-VX7OL20Q-5lPWeZ9a.js",revision:null},{url:"assets/index-VX7OL20Q-xm3_N1Ux.js",revision:null},{url:"assets/index-YZw6TJPB.js",revision:null},{url:"assets/index.es-HxVGjw7q-CZTz_deM.js",revision:null},{url:"assets/index.es-HxVGjw7q-p-ybDul4.js",revision:null},{url:"assets/MediaBoard-vbKrU01M.js",revision:null},{url:"assets/MediaBoard.codes-OfwQwX0w.js",revision:null},{url:"assets/Reward-ZFxlKvKD.js",revision:null},{url:"assets/Reward.codes-XPXQPciS.js",revision:null},{url:"assets/socialbtn-3fGdHvo-.js",revision:null},{url:"assets/socialbtn-hmkncqKv.js",revision:null},{url:"assets/vendor-2IPsi7QR.js",revision:null},{url:"assets/vendor-sWZXFYo9.js",revision:null},{url:"index.html",revision:"eaedeac391e953987e44c79c64386106"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"407d17fe60539618b25b5cd70931f9f1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
