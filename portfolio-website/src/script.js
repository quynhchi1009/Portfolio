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

document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("nav").innerHTML = data;
    });

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video");

  function checkVisibility() {
    videos.forEach((video) => {
      const rect = video.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility();
});
