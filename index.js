// slides
const slides = document.getElementsByClassName("carousel-item");
let totalSlides = slides.length;

let slidePosition = 0;


let dots = document.getElementsByClassName("dots");

// AUTOGENERATING DOTS FOR EACH SLIDE
function generateDots() {
  for(slide of slides) {
    let dot = document.createElement("span");
    dot.className = "dot";

    dots[0].appendChild(dot);
  }
}

generateDots();

// dot.classList.add("dot--active"_

//  function manualSwitch() {
//    for(dot of dots) {
//     dots.addEventListener("click", console.log("click"))
//   }
// }

// manualSwitch();
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


// functions to switch slides
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

autoCarousel();

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);
