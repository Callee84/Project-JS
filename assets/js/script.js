/**
 * Fade in when scrolling down on page
 */

const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	entry.target.classList.remove('section__hidden');
	observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.2,
});
allSections.forEach(function(section) {
	sectionObserver.observe(section);
	section.classList.add('section__hidden');
});

/**
 * Pop- up window for contact information
 */

const button = document.querySelector("#pop-button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  
  popup.style.display = "none";
});


/**
 * Slidesshow aninmation
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
    if (slideImg > slides.length) {slideImg = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideImg-1].style.display = "block";
    dots[slideImg-1].className += " active";
    setTimeout(showImg, 4000);
}

let sendBtn = document.querySelector("send");
sendBtn.addEventListener("click", () => {
  alert(`Thank you for reaching out. We'll get back to you as soon as possible.`)
});
