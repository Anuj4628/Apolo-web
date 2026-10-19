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
})();
