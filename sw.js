if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-58dda7d9"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"ff14840b52ecf8d96b94ae7ac4bf2ba7"},{url:"assets/claim-h-GLfBXj.js",revision:null},{url:"assets/claim-jkMOmlP0.js",revision:null},{url:"assets/Erc1155-VDVadBVO.js",revision:null},{url:"assets/Erc721-ZXi07Shj.js",revision:null},{url:"assets/index-DOadFpXY.css",revision:null},{url:"assets/index-IB-Kt2VP.js",revision:null},{url:"assets/index-IuekBrYr.js",revision:null},{url:"assets/index-jpH-EJbe.js",revision:null},{url:"assets/index-Rl7J-w4t.js",revision:null},{url:"assets/index-SrIv5t3a.js",revision:null},{url:"assets/index-svoc5ZGU.js",revision:null},{url:"assets/index-TEFf3_6H.js",revision:null},{url:"assets/index-WwTfy8xG.js",revision:null},{url:"assets/index-YkxFzRUu.js",revision:null},{url:"assets/index-Z2K450sh.js",revision:null},{url:"assets/MediaBoard-vbKrU01M.js",revision:null},{url:"assets/MediaBoard.codes-OfwQwX0w.js",revision:null},{url:"assets/socialbtn-sLOI19cF.js",revision:null},{url:"assets/socialbtn-vMBXfRhG.js",revision:null},{url:"assets/vendor-od9KRoES.js",revision:null},{url:"index.html",revision:"ff14840b52ecf8d96b94ae7ac4bf2ba7"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"407d17fe60539618b25b5cd70931f9f1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
