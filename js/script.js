// =============================================
// TWENTY TWO CREATIONS — Main JS
// =============================================

// --- TYPING EFFECT ---
const services = [
  "Graphic Designer",
  "Web Developer",
  "UI/UX Designer",
  "Brand Strategist",
  "Creative Thinker"
];
let idx = 0, charIdx = 0, isDeleting = false;
const typingEl = document.getElementById("typing");

function typeEffect() {
  const full = services[idx];
  typingEl.textContent = isDeleting
    ? full.substring(0, --charIdx)
    : full.substring(0, ++charIdx);

  let speed = isDeleting ? 50 : 100;
  if (!isDeleting && charIdx === full.length) { speed = 1800; isDeleting = true; }
  else if (isDeleting && charIdx === 0) { isDeleting = false; idx = (idx + 1) % services.length; speed = 400; }
  setTimeout(typeEffect, speed);
}
typeEffect();

// --- PAGE LOADER ---
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => { loader.style.display = "none"; }, 600);
  }, 1800);
});

// --- SCROLL REVEAL ---
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
      // Animate skill bars when about section reveals
      el.querySelectorAll(".skill-fill").forEach(bar => {
        bar.style.width = bar.dataset.width + "%";
      });
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// --- ACTIVE NAV HIGHLIGHT ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function updateActiveNav() {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

// --- STICKY HEADER SHRINK ---
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
});

// --- HAMBURGER MOBILE NAV ---
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

document.querySelectorAll(".mob-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
  });
});

// --- CLOSE MOBILE NAV ON OUTSIDE CLICK ---
document.addEventListener("click", (e) => {
  if (!header.contains(e.target) && !mobileNav.contains(e.target)) {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
  }
});
