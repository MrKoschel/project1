"use strict";

var hamburger = document.getElementsById("hamburger");
var sidebar = document.getElementsById("sidebar");
var mainSection = document.getElementsById("main-section");
var hideStatus = 0

hamburger.addEventListener("click", function() {
 if (hideStatus == 0) {
     hamburger.classList.remove("hamburger-hidden");
     sidebar.classList.remove("sidebar-hidden");
     mainSection.classList.remove("main-section-fs");
     hideStatus++
 }
    else {
    hamburger.classList.add("hamburger-hidden");
     sidebar.classList.add("sidebar-hidden");
     mainSection.classList.add("main-section-fs");
     hideStatus--
    }
});