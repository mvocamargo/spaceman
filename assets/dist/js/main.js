!function(){"use strict";function e(){l.classList.toggle("hide-overflow"),l.contains(s)?l.removeChild(s):((s=document.createElement("div")).className="screen-cover",l.appendChild(s))}function t(){o.classList.toggle("main-nav-is-active"),e()}function n(e){e.querySelector("a").addEventListener("click",function(t){if(t.preventDefault(),window.innerWidth>992){var n=o.querySelector(".sub-menu").querySelector("."+c);n&&!1===n.contains(e)&&(n.classList.remove(c),n.querySelector("a").setAttribute("aria-expanded","false"))}e.classList.toggle(c),"false"===this.getAttribute("aria-expanded")?this.setAttribute("aria-expanded","true"):this.setAttribute("aria-expanded","false")})}function i(e,t){var n;for(n=0;n<t;n+=1)e=e.parentElement;return e}var s,c="menu-item-is-active",a="menu-item-has-children",l=document.body,r=l.querySelector(".nav-btn"),o=l.querySelector(".main-nav"),u=l.querySelectorAll("."+a);Array.prototype.forEach.call(["click","keyup","keydown"],function(e){l.addEventListener(e,function(e){var n,l,u,d=e.target,f=e.keyCode,v=e.type,m=o.querySelector(":focus"),y=o.querySelectorAll("."+c);"click"===v&&(d!==r&&d!==s||t()),Array.prototype.forEach.call(y,function(e){"click"===v&&window.innerWidth>992&&(e.contains(d)||(e.classList.remove(c),e.querySelector("a").setAttribute("aria-expanded","false"))),"keyup"===v&&(27===f||9===f&&!e.contains(m))&&e.classList.remove(c)}),m&&"keydown"===v&&(l=i(m,1),(u=i(m,2)).classList.contains("menu")&&l.classList.contains(a)&&(38===f&&l.classList.contains(c)&&(e.preventDefault(),m.click()),40===f&&(e.preventDefault(),l.classList.contains(c)?(m=l.querySelector(".sub-menu a")).focus():m.click())),u.classList.contains("sub-menu")&&(n=function(){(m=i(m,3).querySelector("a")).click(),m.focus()},37===f&&(l.classList.contains(c)?m.click():i(u,2).classList.contains("menu")||n()),38===f&&(l.classList.contains(c)&&m.click(),null!==l.previousElementSibling?l.previousElementSibling.querySelector("a").focus():i(m,3).classList.contains(c)&&!i(u,2).classList.contains("sub-menu")&&n()),39===f&&(e.preventDefault(),l.classList.contains(a)&&!l.classList.contains(c)?m.click():null!==m.nextElementSibling&&(m=m.nextElementSibling.querySelector("a")).focus()),40===f&&(e.preventDefault(),null!==l.nextElementSibling&&(l.classList.contains(c)&&m.click(),l.nextElementSibling.querySelector("a").focus()))))})}),Array.prototype.forEach.call(u,function(e){n(e)}),window.addEventListener("resize",function(){var t=l.contains(s),n=window.innerWidth;o.classList.contains("main-nav-is-active")&&(!t&&n<=992||t&&n>992)&&e()})}();