const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const logoImg = document.querySelector('.hero-logo img');
const logoFallback = document.querySelector('.logo-fallback');

if (logoImg && logoFallback) {
  logoImg.addEventListener('load', () => {
    logoFallback.style.display = 'none';
  });

  logoImg.addEventListener('error', () => {
    logoImg.style.display = 'none';
    logoFallback.style.display = 'block';
  });
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.14 }
);

reveals.forEach((item) => observer.observe(item));
