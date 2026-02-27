const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const logoImg = document.querySelector(".hero-logo img");
const logoFallback = document.querySelector(".logo-fallback");

if (logoImg && logoFallback) {
  logoImg.addEventListener("load", () => {
    logoFallback.style.display = "none";
  });

  logoImg.addEventListener("error", () => {
    logoFallback.style.display = "block";
  });
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});
