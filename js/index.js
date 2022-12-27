"use strict";
// Touch detection
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (isMobile.any()) {
    document.querySelector("body").classList.add("_mobile");
}
else {
    document.querySelector("body").classList.add("_desk");
}
// const first: any = document.querySelector(".first");
// // set height of 
// first.style.height = `${window.innerHeight}px`;
// Mouse move
document.addEventListener("mousemove", function (event) {
    document.querySelector(".first__paral_top").style.transform = "translate(".concat(event.clientX / 15 + 'px', ", ").concat(event.clientY / 15 + 'px', ")");
    document.querySelector(".first__paral_bot").style.transform = "translate(-".concat(event.clientX / 15 + 'px', ", -").concat(event.clientY / 15 + 'px', ")");
});
// Contact PopUp
var contactPopup = document.querySelector(".contact-popup");
var firstButton = document.querySelector(".first__button");
var backPopup = document.querySelector(".contact-popup__back");
var crossPopup = document.querySelectorAll(".contact-popup__cross");
firstButton.addEventListener("click", function () { document.querySelector("body").classList.toggle("_scrollDisable"); contactPopup.classList.toggle("contact-popup_active"); backPopup.classList.toggle("contact-popup__back_active"); });
crossPopup.forEach(function (el) {
    el.addEventListener("click", function () {
        contactPopup.classList.toggle("contact-popup_active");
        backPopup.classList.toggle("contact-popup__back_active");
        document.querySelector("body").classList.toggle("_scrollDisable");
    });
});
//  Contacts
// lightTheme
// const lightSwitch = document.querySelector(".header__el_switch");
// lightSwitch.addEventListener("click", () => { document.querySelector("body").classList.toggle("_white");  })
// Works__ref
document.querySelector(".works__ref").addEventListener("click", function (event) { console.log("dsf"); window.scroll(0, window.innerHeight - 200); });
// Works
// const workCardButton = document.querySelector(".works__button");
// workCardButton.addEventListener("click", () => { document.querySelector('.works-popup_1').classList.toggle("works-popup_1_active"); document.querySelector(".header").style.display = "none"; })
// const workPopUpCross = document.querySelector(".works-popup__black_cross");
// workPopUpCross.addEventListener("click", () => {  document.querySelectorAll(".works-popup").forEach((value, index) => { value.classList.remove("works-popup_1_active"); document.querySelector(".header").style.display = "block";}) } )
var cards = document.querySelectorAll(".works__card");
cards[1].addEventListener("click", function () { window.location = "https://bolotny.com"; });
