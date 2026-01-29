const services = [
    "Graphic Designer",
    "Web Developer",
    "Brand Designer",
    "Digital Marketer",
    "UI/UX Designer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (index === services.length) index = 0;

    currentText = services[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.slice(0, ++charIndex);
        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1500);
        }
    } else {
        typingElement.textContent = currentText.slice(0, --charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            index++;
        }
    }
    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
