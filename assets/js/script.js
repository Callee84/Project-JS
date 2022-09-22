

document.addEventListener("DOMContentLoaded", function(){
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
            }
        })
    }
})

/**
 * calulation for prices
 * there is different prices depending on property
 */

function calculatePrice() {
    let userAnswer = document.getElementById("size-house"),value;
   console.log("price")
}

/**
 * Pop- up window for contact information
 */

let popup = document.getElementById("pop-up")

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}