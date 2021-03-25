let carouselItem = document.getElementsByClassName("carousel-item");
let buttonPrev = document.getElementById("carousel-button-prev");
let buttonNext = document.getElementById("carousel-button-next");

buttonNext.addEventListener('click', function(event){
    for(let counter = 0; counter < carouselItem.length; conter++) {
    // carouselItem[counter--].classList.remove("carousel-item-visible");
    carouselItem[counter].className += "carousel-item-visible";
    }
})
