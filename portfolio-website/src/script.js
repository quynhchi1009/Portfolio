/** @format */

// Select elements
const textSections = document.querySelectorAll(".portfolio__text");
const imageSections = document.querySelectorAll(".portfolio__image");

// Add scroll event listener
window.addEventListener("scroll", () => {
    textSections.forEach((text, index) => {
        const sectionTop = text.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            text.classList.add("portfolio__text--visible");
            imageSections[index].classList.add("portfolio__image--dimmed");
        } else {
            text.classList.remove("portfolio__text--visible");
            imageSections[index].classList.remove("portfolio__image--dimmed");
        }
    });
});
