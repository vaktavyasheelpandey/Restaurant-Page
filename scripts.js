// Parallax effect for background images
window.addEventListener("scroll", function () {
    const parallaxElements = document.querySelectorAll(".bg-fixed");
  
    parallaxElements.forEach(function (element) {
      const scrollPosition = window.pageYOffset;
      element.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });
  });
  
  // Smooth Scroll for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  