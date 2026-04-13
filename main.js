// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Close menu on outside click
document.addEventListener('click', e => {
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Photo carousels
function initCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return null;

  const track   = carousel.querySelector('.carousel-track');
  const slides  = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const dotsEl  = carousel.querySelector('.carousel-dots');
  const btnPrev = carousel.querySelector('.carousel-btn-prev');
  const btnNext = carousel.querySelector('.carousel-btn-next');

  let current = 0;

  const dots = slides.map((_, i) => {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Go to image ${i + 1}`);
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
    return d;
  });

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext.addEventListener('click', () => goTo(current + 1));

  return { prev: () => goTo(current - 1), next: () => goTo(current + 1) };
}

const farmCarousel   = initCarousel('gallery-carousel');
const familyCarousel = initCarousel('family-carousel');

// Keyboard nav follows the last-clicked carousel
let activeCarousel = farmCarousel;
['gallery-carousel', 'family-carousel'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', () => {
    activeCarousel = id === 'family-carousel' ? familyCarousel : farmCarousel;
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  activeCarousel && activeCarousel.prev();
  if (e.key === 'ArrowRight') activeCarousel && activeCarousel.next();
});

// Simple form submission feedback
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Formspree handles the POST; after submit the page will redirect
    // unless you use their AJAX endpoint. This just prevents double-submit.
  });
}
