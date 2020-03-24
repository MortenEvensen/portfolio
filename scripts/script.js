/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("overlay-menu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("overlay-menu").style.width = "0%";
}



/* Open and close fullscreen size windows on index page */
var leftStyle = document.querySelector(".left");
var leftResult = getComputedStyle(leftStyle);
var leftImage = document.querySelector(".coding-image")
var imagewrap = document.querySelector(".firstcontentwrap")
var imageWrapResult = getComputedStyle(imagewrap)
//console.log(imagewrap.style.width)

var header = document.querySelector(".header");
var headerResult = getComputedStyle(header);
var webHeader = document.querySelector(".web");
var musicHeader = document.querySelector(".music");


leftStyle.addEventListener("click", function() {
    if (leftResult.flex === "1 1 0%" && rightResult.flex === "1 1 0%" || leftStyle.classList.contains("flex") === false) {
        rightStyle.style.flex = 0;
        rightStyle.style.width = 0;
        imagewrap.style.height = "140vh"
        imagewrap.style.margin = "-40vh 0 0 0"
        header.style.margin = "40vh 0 0 0"
        webHeader.style.top = "60vh"
        leftStyle.classList.add("flex")
        musicHeader.style.display = "none"
    } else if (rightResult.flex === "0 1 0%" && leftResult.flex === "1 1 0%" || leftStyle.classList.contains("flex") === true) {
        rightStyle.style.flex = 1;
        rightStyle.style.width = "100%";
        imagewrap.style.height = "100vh";
        imagewrap.style.margin = "0 0 0 0"
        header.style.margin = 0;
        webHeader.style.top = "100px";
        leftStyle.classList.remove("flex")
        musicHeader.style.display = "block"
    }
})

var rightStyle = document.querySelector(".right");
var rightResult = getComputedStyle(rightStyle);

rightStyle.addEventListener("click", function() {
    if (rightResult.flex === "1 1 0%"   && leftResult.flex === "1 1 0%" || rightStyle.classList.contains("flex") === false) {
        leftStyle.style.flex = 0;
        leftStyle.style.width = 0; 
        imagewrap.style.height = "140vh"
        imagewrap.style.margin = "-40vh 0 0 0"
        header.style.margin = "40vh 0 0 0"
         musicHeader.style.top = "60vh"
        rightStyle.classList.add("flex")
        webHeader.style.display = "none"
    } else if (rightResult.flex === "1 1 0%" && leftResult.flex === "0 1 0%" || rightStyle.classList.contains("flex") === true) {
        leftStyle.style.flex = 1;
        leftStyle.style.width = "100%";
         imagewrap.style.height = "100vh";
        imagewrap.style.margin = "0 0 0 0"
         header.style.margin = 0
        musicHeader.style.top = "100px"
        rightStyle.classList.remove("flex")
        webHeader.style.display = "block"
    }
})

