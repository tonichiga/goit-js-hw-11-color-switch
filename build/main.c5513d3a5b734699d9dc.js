(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("RtS0"),n("Muwe"),n("aZFp"),n("3dw1"),n("4SRy");var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={startBtnRef:document.querySelector('button[data-action="start"]'),stopBtnRef:document.querySelector('button[data-action="stop"]'),bodyRef:document.querySelector("body")},l=null;a.startBtnRef.addEventListener("click",(function(t){var e="";if(null===l){a.startBtnRef.disabled=!0,a.stopBtnRef.disabled=!1;l=setInterval((function(){var t;o.forEach((function(t,n,a){var l,r;n===(l=0,r=o.length-1,Math.floor(Math.random()*(r-l+1)+l))&&(e=t)})),t=e,a.bodyRef.style.backgroundColor=t.split(" ")}),1e3)}else null!==l&&(console.log(l),console.log("ОТКАЗ"))})),a.stopBtnRef.addEventListener("click",(function(t){clearInterval(l),l=null,a.startBtnRef.disabled=!1,a.stopBtnRef.disabled=!0}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c5513d3a5b734699d9dc.js.map