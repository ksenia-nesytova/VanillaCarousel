// slides
let slides = document.getElementsByClassName("carousel-item");
let totalSlides = slides.length;

let slidePosition = 0;


// buttons
let buttonPrev = document.getElementById("carousel-button-prev");
let buttonNext = document.getElementById("carousel-button-next");

// functions to switch slides
function nextSlide() {
    if(slidePosition === (totalSlides-1)) {
     slidePosition = 0;
  } else {
     slidePosition++;
  }
   slides[slidePosition].classList.add("carousel-item-visible");
}

function prevSlide() {
   slides[slidePosition].classList.remove("carousel-item-visible");
}


buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);
