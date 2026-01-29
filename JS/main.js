const services = [
  "Graphic Designer",
  "Web Developer",
  "UI/UX Designer",
  "Brand Strategist",
  "Creative Thinker"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  const fullText = services[index];

  if (!isDeleting) {
    currentText = fullText.substring(0, charIndex++);
  } else {
    currentText = fullText.substring(0, charIndex--);
  }

  typingElement.textContent = currentText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === fullText.length + 1) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % services.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
