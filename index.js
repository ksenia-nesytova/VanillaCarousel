// slides
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;

let slidePosition = 0;


const dots = document.getElementsByClassName("dots");
const singleDots = document.getElementsByClassName("dot");


// AUTOGENERATING DOTS FOR EACH SLIDE
function generateDots() {
    for(let i = 0; i < totalSlides; i++) {
      let dot = document.createElement("span");
      dot.className = "dot";
      dots[0].appendChild(dot);
      dot.id = i;
    }
  }

generateDots();

// switching slides using DOTS
function clearActiveDots() {
  for(dot of singleDots) {
    dot.classList.remove("dot--active")
  }
}

function changeActiveDot() {
  clearActiveDots();
  let activeDot = document.getElementById(slidePosition);
  activeDot.classList.add("dot--active");
}

//
// function manualSwitch(i) {
//   // for(let i = 0; i <= singleDots.length; i++) {
//   //   let chosenDot = dots.querySelectorAll("#" + i);
//   // }
//   slidePosition = i;
// }
// Array.from(dots).forEach(dot => dot.addEventListener("click", manualSwitch()))
//
//
// // function pickSlide() {
// //   if(chosenDot !== slidePosition) {
// //
// //   }
// // }
// //
// //
// // manualSwitch();


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
    changeActiveDot()
    if(slidePosition === (totalSlides-1)) {
     slidePosition = 0;
  } else {
     slidePosition++;
  }
   slides[slidePosition].classList.add("carousel-item--visible");
}

function prevSlide() {
    hideAllSlides();
    changeActiveDot()

    if(slidePosition === 0) {
     slidePosition = totalSlides-1;
  } else {
     slidePosition--;
  }
   slides[slidePosition].classList.add("carousel-item--visible");
}

// AUTO SLIDESHOW
function autoCarousel() {
    changeActiveDot()
    nextSlide()
    // hideAllSlides();
    //
    // if(slidePosition === (totalSlides-1)) {
    //  slidePosition = 0;} else {
    //    slidePosition++;
    //  }
    // slides[slidePosition].classList.add("carousel-item-visible");
    setTimeout(autoCarousel, 3000);
}


autoCarousel();

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);
