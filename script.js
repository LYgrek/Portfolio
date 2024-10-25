
let currentSlide = 0
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (slides.length > 0 && index !== null) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }
}

let nextSlide = document.getElementById("nextSlide")
if (nextSlide) {
    nextSlide.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

}

let prevSlide = document.getElementById("prevSlide")
if (prevSlide) {
    prevSlide.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
}

showSlide(currentSlide);

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
