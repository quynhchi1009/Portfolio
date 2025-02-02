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

// Check screen size and redirect logic
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname; // Current page path
  const is404Page = currentPage.includes("404.html");

  // Store the last visited page (other than 404) in localStorage
  if (!is404Page) {
    localStorage.setItem("lastVisitedPage", currentPage);
  }

  // Redirect to 404.html if the screen width is less than 1000px
  if (window.innerWidth < 1000 && !is404Page) {
    window.location.href = "404.html";
  }

  window.addEventListener("resize", () => {
    const lastVisitedPage =
      localStorage.getItem("lastVisitedPage") || "index.html";
    const isCurrentlyOn404 = window.location.pathname.includes("404.html");

    if (window.innerWidth < 1000 && !isCurrentlyOn404) {
      window.location.href = "404.html";
    } else if (window.innerWidth >= 1000 && isCurrentlyOn404) {
      window.location.href = lastVisitedPage;
    }
  });

  // Load navbar and footer dynamically
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

// Handle video playback based on visibility
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
