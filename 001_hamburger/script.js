"use strict";

window.onload = function() {
  var hamburger = document.querySelector("div.hamburger");
  var nav       = document.querySelector("nav");

  // hamburger.onclick = function(e) {
  //   hamburger.classList.toggle("close");
  //   nav.classList.toggle("open");
  // };

  var toggleClass = function(element, className) {
    if (!element || !className) return;

    var classList = element.className.split(" ");
    var classNameIndex = classList.indexOf(className);

    if (classNameIndex < 0) {
      classList.push(className);
    } else {
      classList.splice(classNameIndex, 1);
    }

    element.className = classList.join(" ");
  }

  hamburger.addEventListener("click", function() {
    toggleClass(hamburger, "close");
    toggleClass(nav, "open");
  });
};
