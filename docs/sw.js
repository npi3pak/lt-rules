if(!self.define){let n,e={};const s=(s,r)=>(s=new URL(s+".js",r).href,e[s]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=s,n.onload=e,document.head.appendChild(n)}else n=s,importScripts(s),e()})).then((()=>{let n=e[s];if(!n)throw new Error(`Module ${s} didn’t register its module`);return n})));self.define=(r,i)=>{const l=n||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=n=>s(n,l),t={module:{uri:l},exports:o,require:u};e[l]=Promise.all(r.map((n=>t[n]||u(n)))).then((n=>(i(...n),o)))}}define(["./workbox-7cfec069"],(function(n){"use strict";self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"icons/android-chrome-192x192.png",revision:null},{url:"icons/android-chrome-512x512.png",revision:null},{url:"icons/android-maskable-192x192.png",revision:null},{url:"icons/android-maskable-512x512.png",revision:null},{url:"icons/apple-touch-icon.png",revision:null},{url:"icons/favicon-16x16.png",revision:null},{url:"icons/favicon-32x32.png",revision:null},{url:"icons/favicon.ico",revision:null},{url:"icons/mstile-150x150.png",revision:null},{url:"index-DiwrgTda.css",revision:null},{url:"index-DYNyZ94V.js",revision:null},{url:"index.html",revision:null},{url:"manifest.webmanifest",revision:null},{url:"react-CHdo91hT.svg",revision:null},{url:"registerSW.js",revision:null},{url:"screenshots/narrow.png",revision:null},{url:"screenshots/pwa_narrow_example.png",revision:null},{url:"screenshots/screenshot1.png",revision:null},{url:"screenshots/screenshot2.png",revision:null},{url:"screenshots/screenshot3.png",revision:null},{url:"screenshots/screenshot4.png",revision:null},{url:"screenshots/screenshot5.png",revision:null},{url:"screenshots/screenshot6.png",revision:null},{url:"screenshots/screenshot7.png",revision:null},{url:"vite.svg",revision:null},{url:"manifest.webmanifest",revision:"b3d347012924f46eb836df03bb1492de"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html")))}));
