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

  // Constants
  const SLIDE_DURATION = 5500; // 5.5 seconds per slide
  const TOTAL_SLIDES = 4;

  // DOM Elements
  const slides = document.querySelectorAll('.hero-slide');
  const currentNumEl = document.getElementById('slideCurrentNum');
  const progressFillEl = document.getElementById('slideProgressFill');
  const pills = document.querySelectorAll('.slide-pill');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');

  let currentSlideIndex = 0;
  let slideStartTime = Date.now();
  let animationFrameId = null;

  /**
   * Format single digit to 2 digits (e.g. 1 -> "01")
   */
  function formatIndex(idx) {
    return String(idx + 1).padStart(2, '0');
  }

  /**
   * Switch to a specific slide index
   */
  function goToSlide(targetIndex) {
    // Wrap index safely within 0 .. TOTAL_SLIDES - 1
    const newIndex = (targetIndex + TOTAL_SLIDES) % TOTAL_SLIDES;
    if (newIndex === currentSlideIndex && slides[currentSlideIndex].classList.contains('active')) {
      return;
    }

    // Deactivate all slides
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    // Update active slide
    currentSlideIndex = newIndex;
    const activeSlide = slides[currentSlideIndex];
    if (activeSlide) {
      activeSlide.classList.add('active');
    }

    // Update Counter Display (01 / 04)
    if (currentNumEl) {
      currentNumEl.textContent = formatIndex(currentSlideIndex);
    }

    // Update Pill Indicators
    pills.forEach((pill, idx) => {
      const isActive = idx === currentSlideIndex;
      pill.classList.toggle('active', isActive);
      pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Reset slide timer and progress fill
    slideStartTime = Date.now();
    if (progressFillEl) {
      progressFillEl.style.width = '0%';
    }
  }

  /**
   * Move to next slide
   */
  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  /**
   * Move to previous slide
   */
  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  /**
   * Continuous animation loop via requestAnimationFrame:
   * - Computes real-time elapsed percentage for the progress bar
   * - Automatically triggers next slide when duration elapses
   * - Does NOT pause on hover or any cursor interaction
   */
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

  // =========================================================================
  // Event Listeners for Controls
  // =========================================================================

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

  // Keyboard navigation for accessibility (Left / Right Arrow)
  window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  // Start Autoplay Loop immediately
  slideStartTime = Date.now();
  animationFrameId = requestAnimationFrame(tickSlider);

  // Initialize first slide view
  goToSlide(0);

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

  // Initialize 3D Card Tilt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhyCardsTilt);
  } else {
    initWhyCardsTilt();
  }
})();
