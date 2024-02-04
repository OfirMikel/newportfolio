function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth)
  );
}

function lineStyleActive(line, text) {
  line.style.width = "120px";
  line.style.backgroundColor = "rgba(255, 255, 255, 1)";
  text.style.color = "rgba(255, 255, 255, 1)";
  text.style.fontWeight = "500";
}

function lineStyleDeactivate(line, text) {
  line.style.width = "60px";
  line.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  text.style.color = "rgba(255, 255, 255, 0.3)";
  text.style.fontWeight = "300";
}

function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * progress);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

function navigateTo(url) {
  window.open(url, "_blank");
}

var about = document.getElementById("about");
var projects = document.getElementById("projects");

var aboutSlider = document.getElementById("about-slider-line");
var aboutSliderText = document.getElementById("about-slider");

var projectsSlider = document.getElementById("projects-slider-line");
var projectsSliderText = document.getElementById("projects-slider");

var projects = document.getElementById("projects");
var about = document.getElementById("about");

window.addEventListener("scroll", function () {
  if (isElementInViewport(about)) {
    lineStyleActive(aboutSlider, aboutSliderText);
    lineStyleDeactivate(projectsSlider, projectsSliderText);
  } else {
    lineStyleDeactivate(aboutSlider, aboutSliderText);
    lineStyleActive(projectsSlider, projectsSliderText);
  }
});

if (isElementInViewport(about)) {
  lineStyleActive(aboutSlider, aboutSliderText);
  lineStyleDeactivate(projectsSlider, projectsSliderText);
} else {
  lineStyleDeactivate(aboutSlider, aboutSliderText);
  lineStyleActive(projectsSlider, projectsSliderText);
}

projectsSliderText.addEventListener("click", function () {
  smoothScrollTo(projects.offsetTop, 500);
});

aboutSliderText.addEventListener("click", function () {
  smoothScrollTo(about.offsetTop - 120, 500);
});

document.getElementById("equity-group").addEventListener("click", function () {
  navigateTo("https://ofirmikel.github.io/Equity-Group/");
});

document.getElementById("old-portfolio").addEventListener("click", function () {
  navigateTo("https://ofirmikel.github.io/Portfolio/");
});

document.getElementById("card-wfs").addEventListener("click", function () {
  navigateTo("https://github.com/OfirMikel/WFS-Demonstration");
});

document.getElementById("ball-movement").addEventListener("click", function () {
  navigateTo("https://github.com/OfirMikel/Ball-Movment");
});

document.getElementById("assembler").addEventListener("click", function () {
  navigateTo("https://github.com/OfirMikel/Assembler");
});

document.getElementById("miluin").addEventListener("click", function () {
  navigateTo("https://github.com/OfirMikel/Milu-In-App");
});

document.getElementById("simon").addEventListener("click", function () {
  navigateTo("https://github.com/OfirMikel/Simon-Game");
});

document.getElementById("billiard").addEventListener("click", function () {
  navigateTo("https://github.com/OfirMikel/Billiard-App");
});
