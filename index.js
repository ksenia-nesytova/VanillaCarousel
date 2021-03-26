// slides
const slides = document.getElementsByClassName("carousel-item");
let totalSlides = slides.length;

let slidePosition = 0;


// buttons
const buttonPrev = document.getElementById("carousel-button-prev");
const buttonNext = document.getElementById("carousel-button-next");


function hideAllSlides() {
    for(slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

autoCarousel();

// Auto slideshow
function autoCarousel() {
  // for(let i = 0; i < totalSlides; i++) {
  //   slides[i].classList.add("carousel-item-hidden");
    hideAllSlides();


  slides[slidePosition].classList.add("carousel-item-visible");
  slidePosition++;
  setTimeout(autoCarousel, 2000);
}


// functions to switch slides
function nextSlide() {
    hideAllSlides();

    if(slidePosition === (totalSlides-1)) {
     slidePosition = 0;
  } else {
     slidePosition++;
  }
   slides[slidePosition].classList.add("carousel-item-visible");
}

function prevSlide() {
  hideAllSlides();

    if(slidePosition === 0) {
     slidePosition = totalSlides-1;
  } else {
     slidePosition--;
  }
   slides[slidePosition].classList.add("carousel-item-visible");
}


buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);
