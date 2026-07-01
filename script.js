const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentSlide = 0;

function updateCarousel() {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;

}

nextButton.addEventListener("click", () => {

    if (currentSlide < slides.length - 1) {

        currentSlide++;

        updateCarousel();

    }

});

prevButton.addEventListener("click", () => {

    if (currentSlide > 0) {

        currentSlide--; 

        updateCarousel();

    }

});

updateCarousel();