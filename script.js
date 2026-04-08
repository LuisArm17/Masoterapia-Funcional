/* ============================================
   FMT · script.js
   Smooth scroll · Nav state · Reveal on scroll
   ============================================ */

(function () {
  'use strict';

  /* ── NAV: Add .scrolled class on scroll ── */
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // Run on init

  /* ── REVEAL ON SCROLL ─────────────────── */
  const revealEls = document.querySelectorAll(
    '.value__card, .schedule__card, .diff-stat, .section-header, .differential__text, .blocks'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ── STAGGERED CARD REVEAL ────────────── */
  const cardGroups = [
    document.querySelectorAll('.value__card'),
    document.querySelectorAll('.schedule__card'),
    document.querySelectorAll('.diff-stat'),
  ];

  cardGroups.forEach(group => {
    group.forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  /* ── SMOOTH ANCHOR SCROLL ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
