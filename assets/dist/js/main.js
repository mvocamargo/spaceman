!function(){"use strict";function e(){r.classList.toggle("hide-overflow"),r.contains(c)?r.removeChild(c):((c=document.createElement("div")).className="screen-cover",r.appendChild(c))}function t(){o.classList.toggle("main-nav-is-active"),e()}function n(e){e.querySelector("a").addEventListener("click",function(t){if(t.preventDefault(),window.innerWidth>992){var n=o.querySelector(".sub-menu").querySelector("."+s);n&&!1===n.contains(e)&&(n.classList.remove(s),n.querySelector("a").setAttribute("aria-expanded","false"))}e.classList.toggle(s),"false"===this.getAttribute("aria-expanded")?this.setAttribute("aria-expanded","true"):this.setAttribute("aria-expanded","false")})}function i(e,t){var n;for(n=0;n<t;n+=1)e=e.parentElement;return e}var c,s="menu-item-is-active",a="menu-item-has-children",r=document.body,l=r.querySelector(".nav-btn"),o=r.querySelector(".main-nav"),u=r.querySelectorAll("."+a);Array.prototype.forEach.call(["click","keyup","keydown"],function(e){r.addEventListener(e,function(e){var n,r,u,d=e.target,f=e.keyCode,v=e.type,y=o.querySelector(":focus"),m=o.querySelectorAll("."+s);"click"===v&&(d!==l&&d!==c||t()),Array.prototype.forEach.call(m,function(e){"click"===v&&window.innerWidth>992&&(e.contains(d)||(e.classList.remove(s),e.querySelector("a").setAttribute("aria-expanded","false"))),"keyup"===v&&(27===f||9===f&&!e.contains(y))&&e.classList.remove(s)}),y&&"keydown"===v&&(r=i(y,1),(u=i(y,2)).classList.contains("menu")&&r.classList.contains(a)&&(38===f&&r.classList.contains(s)&&(e.preventDefault(),y.click()),40===f&&(e.preventDefault(),r.classList.contains(s)?(y=r.querySelector(".sub-menu a")).focus():y.click())),u.classList.contains("sub-menu")&&(n=function(){(y=i(y,3).querySelector("a")).click(),y.focus()},37===f&&(r.classList.contains(s)?y.click():n()),38===f&&(r.classList.contains(s)&&y.click(),null!==r.previousElementSibling?r.previousElementSibling.querySelector("a").focus():i(y,3).classList.contains(s)&&n()),39===f&&(e.preventDefault(),r.classList.contains(a)&&(y.click(),(y=y.nextElementSibling.querySelector("a")).focus())),40===f&&(e.preventDefault(),r.classList.contains(s)&&y.click(),null!==r.nextElementSibling&&r.nextElementSibling.querySelector("a").focus())))})}),Array.prototype.forEach.call(u,function(e){n(e)}),window.addEventListener("resize",function(){var t=r.contains(c),n=window.innerWidth;o.classList.contains("main-nav-is-active")&&(!t&&n<=992||t&&n>992)&&e()})}();