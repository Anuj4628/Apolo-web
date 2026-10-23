/**
 * APOLLO FORGE AND FITTING - Hero Slider Controller
 * Features:
 * - 4 Cinematic Industrial Slides with Ken Burns image drift and staggered typography entrance
 * - Continuous 5.5-second autoplay that NEVER pauses on hover (strictly per specification)
 * - Dynamic 01 / 04 counter and synchronized thin orange duration progress bar
 * - Interactive slide pills and next/previous arrow navigation
 */

(function () {
  'use strict';

  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    const SLIDE_DURATION = 5500; // 5.5 seconds per slide
    const TOTAL_SLIDES = slides.length;
    const currentNumEl = document.getElementById('slideCurrentNum');
    const progressFillEl = document.getElementById('slideProgressFill');
    const pills = document.querySelectorAll('.slide-pill');
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');

    let currentSlideIndex = 0;
    let slideStartTime = Date.now();
    let animationFrameId = null;

    function formatIndex(idx) {
      return String(idx + 1).padStart(2, '0');
    }

    function goToSlide(targetIndex) {
      const newIndex = (targetIndex + TOTAL_SLIDES) % TOTAL_SLIDES;
      if (newIndex === currentSlideIndex && slides[currentSlideIndex].classList.contains('active')) {
        return;
      }

      slides.forEach((slide) => {
        slide.classList.remove('active');
      });

      currentSlideIndex = newIndex;
      const activeSlide = slides[currentSlideIndex];
      if (activeSlide) {
        activeSlide.classList.add('active');
      }

      if (currentNumEl) {
        currentNumEl.textContent = formatIndex(currentSlideIndex);
      }

      pills.forEach((pill, idx) => {
        const isActive = idx === currentSlideIndex;
        pill.classList.toggle('active', isActive);
        pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      slideStartTime = Date.now();
      if (progressFillEl) {
        progressFillEl.style.width = '0%';
      }
    }

    function nextSlide() {
      goToSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentSlideIndex - 1);
    }

    function tickSlider() {
      const elapsed = Date.now() - slideStartTime;
      const progress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);

      if (progressFillEl) {
        progressFillEl.style.width = progress + '%';
      }

      if (elapsed >= SLIDE_DURATION) {
        nextSlide();
      }

      animationFrameId = requestAnimationFrame(tickSlider);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        nextSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        prevSlide();
      });
    }

    pills.forEach((pill) => {
      pill.addEventListener('click', function (e) {
        e.preventDefault();
        const target = parseInt(this.getAttribute('data-target-slide'), 10);
        if (!isNaN(target)) {
          goToSlide(target);
        }
      });
    });

    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    });

    slideStartTime = Date.now();
    animationFrameId = requestAnimationFrame(tickSlider);
    goToSlide(0);
  }

  initHeroSlider();

  // Note: Hover pause is intentionally OMITTED per strict requirement:
  // "The slider MUST continue changing even when the mouse cursor is over the hero section. Do NOT pause autoplay on hover."

  // =========================================================================
  // WHY CHOOSE US - Premium Industrial 3D Tilt Controller
  // =========================================================================
  function initWhyCardsTilt() {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Only apply on fine pointer devices (desktops/laptops with mouse/trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cards = document.querySelectorAll('.why-card[data-tilt]');
    if (!cards.length) return;

    const MAX_ROTATION_DEG = 4; // strictly between 3-5 degrees per specification

    cards.forEach((card) => {
      let rect = null;
      let rafId = null;
      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;
      let isHovered = false;

      function updateCardTransform() {
        if (!isHovered) {
          // Smooth return to resting state
          currentRotX += (0 - currentRotX) * 0.18;
          currentRotY += (0 - currentRotY) * 0.18;

          if (Math.abs(currentRotX) < 0.04 && Math.abs(currentRotY) < 0.04) {
            currentRotX = 0;
            currentRotY = 0;
            card.style.transform = '';
            rafId = null;
            return;
          }
        } else {
          // Smoothly interpolate towards target tilt
          currentRotX += (targetRotX - currentRotX) * 0.22;
          currentRotY += (targetRotY - currentRotY) * 0.22;
        }

        const elevateY = isHovered ? -5 : 0;
        card.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateY(${elevateY}px)`;
        rafId = requestAnimationFrame(updateCardTransform);
      }

      card.addEventListener('pointerenter', function (e) {
        rect = card.getBoundingClientRect();
        isHovered = true;
        if (!rafId) {
          rafId = requestAnimationFrame(updateCardTransform);
        }
      });

      card.addEventListener('pointermove', function (e) {
        if (!rect) {
          rect = card.getBoundingClientRect();
        }

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables for the subtle cursor-following spotlight reflection
        card.style.setProperty('--spotlight-x', `${x}px`);
        card.style.setProperty('--spotlight-y', `${y}px`);

        // Compute normalized coordinates (-1 to 1) from the card center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const normX = Math.max(-1, Math.min(1, (x - centerX) / centerX));
        const normY = Math.max(-1, Math.min(1, (y - centerY) / centerY));

        // Subtle tilt: tilting towards the mouse
        targetRotX = -normY * MAX_ROTATION_DEG;
        targetRotY = normX * MAX_ROTATION_DEG;

        if (!rafId) {
          rafId = requestAnimationFrame(updateCardTransform);
        }
      });

      card.addEventListener('pointerleave', function () {
        isHovered = false;
        rect = null;
        targetRotX = 0;
        targetRotY = 0;
      });
    });
  }

  /**
   * Value Added Services - Interactive 3D Flip Cards Controller
   * Provides:
   * - Mobile / touch tap-to-flip interaction
   * - Tap again to return to front
   * - Keyboard accessibility (Enter and Space key support)
   * - Desktop hover reset on pointerleave
   */
  function initVasFlipCards() {
    const flippers = document.querySelectorAll('.vas-card-flipper');
    if (!flippers.length) return;

    flippers.forEach(function (card) {
      // Click / Tap event (handles mobile touch and mouse click)
      card.addEventListener('click', function (e) {
        card.classList.toggle('is-flipped');
      });

      // Keyboard accessible flip
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.classList.toggle('is-flipped');
        }
      });

      // On desktop mouse leave, remove flipped state so hover resets naturally
      card.addEventListener('pointerleave', function () {
        if (window.matchMedia('(hover: hover)').matches) {
          card.classList.remove('is-flipped');
        }
      });
    });
  }

  /**
   * Industries We Serve - Interactive 3D Flip Cards Controller
   * Provides:
   * - Touch / click tap-to-flip interaction with support for link navigation
   * - Keyboard accessibility (Enter and Space key support to flip)
   * - Synchronized ARIA attributes for screen readers
   * - Desktop hover reset on pointerleave
   */
  function initIndustryFlipCards() {
    const cards = document.querySelectorAll('.industry-flip-card');
    if (!cards.length) return;

    cards.forEach(function (card) {
      const backFace = card.querySelector('.industry-card-back');

      function toggleFlip() {
        const isFlipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-expanded', isFlipped ? 'true' : 'false');
        if (backFace) {
          backFace.setAttribute('aria-hidden', isFlipped ? 'false' : 'true');
        }
      }

      // Tap / Click handling (for touch devices and clicks)
      card.addEventListener('click', function (e) {
        // If clicking on an anchor tag or button inside the card, allow natural navigation
        if (e.target.closest('a') || e.target.closest('button')) {
          return;
        }
        toggleFlip();
      });

      // Keyboard support: Enter or Space flips the card
      card.addEventListener('keydown', function (e) {
        if (e.target.closest('a') || e.target.closest('button')) {
          return;
        }
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip();
        }
      });

      // Desktop mouse leave resets flip state so hover flows naturally
      card.addEventListener('pointerleave', function () {
        if (window.matchMedia('(hover: hover)').matches) {
          card.classList.remove('is-flipped');
          card.setAttribute('aria-expanded', 'false');
          if (backFace) {
            backFace.setAttribute('aria-hidden', 'true');
          }
        }
      });
    });
  }

  /**
   * Global Export Destinations - Real-Time Country Filter
   */
  function initHomeCountrySearch() {
    const searchInput = document.getElementById('homeCountrySearch');
    const clearBtn = document.getElementById('homeClearSearchBtn');
    const grid = document.getElementById('homeCountryGrid');
    const noMatch = document.getElementById('exportNoMatch');
    const resetBtn = document.getElementById('exportResetSearchBtn');

    if (!searchInput || !grid) return;

    const cards = grid.querySelectorAll('.export-country-card');

    function filterCountries() {
      const q = searchInput.value.trim().toLowerCase();
      let matchCount = 0;

      cards.forEach(function (card) {
        const country = (card.getAttribute('data-country') || '').toLowerCase();
        const isMatch = !q || country.includes(q);
        card.style.display = isMatch ? 'flex' : 'none';
        if (isMatch) matchCount++;
      });

      if (clearBtn) {
        clearBtn.style.display = q ? 'inline-flex' : 'none';
      }

      if (noMatch) {
        noMatch.style.display = matchCount === 0 ? 'block' : 'none';
      }
    }

    searchInput.addEventListener('input', filterCountries);

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.focus();
        filterCountries();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.focus();
        filterCountries();
      });
    }
  }

  /**
   * Sticky Navbar Scroll Elevation & Mobile Menu Controller
   */
  function initStickyNavbar() {
    const header = document.getElementById('apolloHeader');
    const getQuoteBtn = document.getElementById('getQuoteBtn');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileNavDrawer');

    if (header) {
      const handleScroll = function () {
        if (window.scrollY > 15) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    // Note: Per requirements, About Us, Products, Materials, Certificates, Contact,
    // and Get Quote remain visible but non-clickable for now. Only Home is functional.

    if (mobileBtn && drawer) {
      function closeDrawer() {
        drawer.classList.remove('is-open');
        mobileBtn.classList.remove('is-active');
        mobileBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      }

      mobileBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = drawer.classList.toggle('is-open');
        mobileBtn.classList.toggle('is-active', isOpen);
        mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      });

      // Close drawer on link click
      drawer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          closeDrawer();
        });
      });

      // Close drawer on outside click
      document.addEventListener('click', function (e) {
        if (drawer.classList.contains('is-open') && !drawer.contains(e.target) && !mobileBtn.contains(e.target)) {
          closeDrawer();
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
          closeDrawer();
          mobileBtn.focus();
        }
      });

      // Close automatically on desktop resize (> 1024px)
      window.addEventListener('resize', function () {
        if (window.innerWidth > 1024 && drawer.classList.contains('is-open')) {
          closeDrawer();
        }
      });
    }
  }

  /**
   * Footer Contact Copy to Clipboard Controller
   */
  function initFooterCopyButtons() {
    const copyBtns = document.querySelectorAll('.f-copy-btn');
    if (!copyBtns.length) return;

    copyBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = btn.getAttribute('data-copy-target');
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        const textToCopy = targetEl.innerText.trim();
        const tooltip = btn.querySelector('.copy-tooltip');

        function showCopiedFeedback() {
          btn.classList.add('is-copied');
          if (tooltip) tooltip.textContent = 'Copied!';
          setTimeout(function () {
            btn.classList.remove('is-copied');
            if (tooltip) tooltip.textContent = 'Copy';
          }, 2000);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(showCopiedFeedback).catch(function () {
            fallbackCopy(textToCopy, showCopiedFeedback);
          });
        } else {
          fallbackCopy(textToCopy, showCopiedFeedback);
        }
      });
    });

    function fallbackCopy(text, callback) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        callback();
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }
  }

  /**
   * Dynamic Current Year in Footer
   */
  function initCurrentYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /**
   * Industrial Product Showcase Marquee Controller
   * - Hidden when visitor is at the top of the page viewing the Hero Section
   * - Revealed smoothly when visitor scrolls down past the Hero Section
   * - Hidden again when visitor scrolls back to the top
   * - Seamless 60FPS scroll performance with requestAnimationFrame throttling
   */
  function initProductMarquee() {
    const marquee = document.getElementById('productMarqueeSection');
    const hero = document.getElementById('heroSection');
    if (!marquee) return;

    let ticking = false;

    function updateMarqueeVisibility() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // When at top of page (scrollY < 90), marquee remains hidden
      if (scrollY < 90) {
        marquee.classList.remove('is-visible');
        ticking = false;
        return;
      }

      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        // Calculate the height of the hero currently visible inside the viewport
        const visibleHeroHeight = Math.max(0, Math.min(heroRect.bottom, viewportHeight) - Math.max(heroRect.top, 0));

        // If Hero Section is occupying more than 65% of viewport and is at the top, consider visitor viewing hero
        if (visibleHeroHeight / viewportHeight > 0.65 && heroRect.top >= -60) {
          marquee.classList.remove('is-visible');
          ticking = false;
          return;
        }
      }

      // Visitor has scrolled down and Hero is no longer the main visible area
      marquee.classList.add('is-visible');
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateMarqueeVisibility);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check
    updateMarqueeVisibility();
  }

  // Initialize Interactive Features
  function initApp() {
    initStickyNavbar();
    initProductMarquee();
    initWhyCardsTilt();
    initVasFlipCards();
    initIndustryFlipCards();
    initHomeCountrySearch();
    initFooterCopyButtons();
    initCurrentYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
