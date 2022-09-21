document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "house") {
                console.log("House")
            } else if (this.getAttribute("data-type") === "estate") {
                console.log("Estate")
            }
            else if (this.getAttribute("data-type") === "appartment") {
                console.log("Appartment")
            }
        }    
        )
    }

}
)