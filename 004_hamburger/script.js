"use strict";

window.onload = function() {
  var hamburger = document.querySelector("div.wrapper > div");

  hamburger.onclick = function(e) {
    if (hamburger.classList.item(0) == null) {
      hamburger.classList.add("close");
    } else {
      hamburger.classList.toggle("close");
      hamburger.classList.toggle("open");
    }
  };
};
