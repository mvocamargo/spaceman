$(function(){"use strict";function i(){t.toggleClass("main-nav-is-active"),c.toggleClass("hide-overflow"),n.toggleClass("hide")}var n=$(".screen-cover"),t=$(".main-nav"),e=$(".nav-btn"),c=$("html"),s=$(".menu-item-has-children");s.each(function(){$("a:first",this).click(function(i){i.preventDefault()}),$(this).click(function(){window.innerWidth<=992&&($(this).toggleClass("menu-item-is-active"),$("ul",this).children().click(function(i){i.stopPropagation()}))})}),e.on("click",i),t.on("swipeleft",i),n.on("swipeleft click",i)});