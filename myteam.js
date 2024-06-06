document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector("nav");
    var hamburger = document.querySelector(".hamburger");
    var close = document.querySelector(".close");
  
    hamburger.addEventListener("click", function() {
      nav.classList.add("open");
    });
  
    close.addEventListener("click", function() {
      nav.classList.remove("open");
    });
  });