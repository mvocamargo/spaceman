"use strict";!function(){var e=void 0,t=document.body,n="menu-item-is-active",c=t.querySelector(".main-nav"),r=c.querySelector(".nav-btn"),i=c.querySelectorAll(".menu-item-has-children"),a=function(e){var t=e.getAttribute("aria-expanded");e.setAttribute("aria-expanded","false"==t?"true":"false")},o=function(){c.classList.toggle("main-nav-is-active"),a(r),t.classList.toggle("nav-hide-overflow"),c.contains(e)?c.removeChild(e):((e=document.createElement("div")).className="screen-cover",e.onclick=function(){},c.appendChild(e))};Array.prototype.forEach.call(["click","keyup"],function(i){t.addEventListener(i,function(t){var i=t.type,l=t.keyCode,u=t.target,s=c.querySelectorAll("."+n),d=function(e){e.classList.remove(n),a(e.querySelector("a"))};"click"==i&&(u!=r&&u!=e||o()),Array.prototype.forEach.call(s,function(t){if("click"==i&&!t.contains(u)){var n=c.contains(e),a=window.innerWidth,o=[c.querySelector(".menu"),e,r];o=-1==o.indexOf(u),(a>"992"||a<="992"&&o&&n)&&d(t)}"keyup"==i&&(27==l||9==l&&!t.contains(c.querySelector(":focus")))&&d(t)})})}),Array.prototype.forEach.call(i,function(e){return function(e){var t=e.querySelector("a");t.addEventListener("click",function(c){c.preventDefault(),e.classList.toggle(n),a(t)})}(e)})}();