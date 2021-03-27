// slides
const slides = document.getElementsByClassName("carousel-item");
let totalSlides = slides.length;

let slidePosition = 0;


let dots = document.getElementsByClassName("dots");
let singleDots = document.getElementsByClassName("dot")


// AUTOGENERATING DOTS FOR EACH SLIDE
function generateDots() {
  for(slide of slides) {
    let dot = document.createElement("span");
    dot.className = "dot";

    dots[0].appendChild(dot);
  }
}

generateDots();

// switching slides using DOTS
function clearActiveDots() {
  for(dot of singleDots) {
    dot.classList.remove("dot--active")
  }
}

 function manualSwitch() {
   clearActiveDots();
   for(dot of singleDots) {
    dot.addEventListener("click", function(){ dot.classList.add("dot--active")})
  }
}

manualSwitch();
// carouselItem[slidePosition].classList.add("carousel-item--visible")


// buttons
const buttonPrev = document.getElementById("carousel-button--prev");
const buttonNext = document.getElementById("carousel-button--next");


function hideAllSlides() {
    for(slide of slides) {
        slide.classList.remove("carousel-item--visible")
        slide.classList.add("carousel-item--hidden")
    }
}


// buttons to manually switch slides
function nextSlide() {
    hideAllSlides();

    if(slidePosition === (totalSlides-1)) {
     slidePosition = 0;
  } else {
     slidePosition++;
  }
   slides[slidePosition].classList.add("carousel-item--visible");
}

function prevSlide() {
  hideAllSlides();

    if(slidePosition === 0) {
     slidePosition = totalSlides-1;
  } else {
     slidePosition--;
  }
   slides[slidePosition].classList.add("carousel-item--visible");
}

// AUTO SLIDESHOW
function autoCarousel() {
    nextSlide()
    // hideAllSlides();
    //
    // if(slidePosition === (totalSlides-1)) {
    //  slidePosition = 0;} else {
    //    slidePosition++;
    //  }
    // slides[slidePosition].classList.add("carousel-item-visible");
    setTimeout(autoCarousel, 2000);
}


autoCarousel();

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);
