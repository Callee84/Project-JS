document.addEventListener("DOMContentLoaded", function(){
    
    let house = 50
    
    let industry = 100

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "house") {
                console.log("House")
            } else if (this.getAttribute("data-type") === "industry") {
                console.log("Industry")
            }
            else if (this.getAttribute("data-type") === "appartment") {
                alert(`Right... You accually need to own the building in order to put up solar panels. Please contact your landlord.`)
                throw `Sorry, we don't do appartments`;
                console.log("Appartment")
            }
        })
    }
})



/**
 * calculating price for solar panels
 */


/**
 * Pop- up window for contact information
 */

// Create reference to button and popup element

const button = document.querySelector("#pop-button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

// Click event listener to show popup

button.addEventListener("click", () => {
  // Change the CSS display property to 'block'
  popup.style.display = "block";
});

// Click event listener to hide popup
close.addEventListener("click", () => {
  // Chnage the CSS display property to 'none'
  popup.style.display = "none";
});

// Close popup when clicking outside the element
// popup.addEventListener("click", () => {
//   popup.style.display = "none";
// });

/**
 * Slidesshow aninmation
 * change img every 4 seconds
 */

let slideImg = 0;
showImg();

function showImg() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot"); 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideImg++;
    if (slideImg > slides.length) {slideImg = 6}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideImg-1].style.display = "block";
    dots[slideImg-1].className += "active";
    setTimeout(showImg, 4000);
}
