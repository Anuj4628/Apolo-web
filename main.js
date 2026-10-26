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
   * Why Choose Us - Interactive 3D Flip Cards Controller
   */
  function initWhyFlipCards() {
    const cards = document.querySelectorAll('.why-flip-card');
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('a') || e.target.closest('button')) return;
        card.classList.toggle('is-flipped');
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.classList.toggle('is-flipped');
        }
      });

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

    // Active state indicator for Get Quote button
    const currentPath = (window.location.pathname || '').toLowerCase();
    if (currentPath.includes('get-quote') || currentPath.includes('rfq')) {
      if (getQuoteBtn) getQuoteBtn.classList.add('is-active');
    }

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
   * Product Mega-Menu Dropdown Controller
   * - Desktop: Smooth hover & focus transitions with debounce grace period
   * - Desktop: Smart boundary clamping to prevent laptop viewport overflow
   * - Desktop: Full keyboard accessibility (Enter/Space, Escape, Arrow navigation)
   * - Mobile: Accordion tap toggle inside navigation drawer
   */
  /**
   * MEGA DROPDOWN CONTROLLER (Product & Material)
   * - Desktop: Smooth hover & focus transitions with debounce grace period
   * - Desktop: Smart boundary clamping to prevent laptop viewport overflow
   * - Desktop: Full keyboard accessibility (Enter/Space, Escape, Arrow navigation)
   * - Mobile: Accordion tap toggle inside navigation drawer
   */
  function setupMegaDropdown(options) {
    const navItem = document.getElementById(options.navItemId);
    const trigger = document.getElementById(options.triggerId);
    const dropdown = document.getElementById(options.dropdownId);
    const mobileToggle = document.getElementById(options.mobileToggleId);
    const mobileMenu = document.getElementById(options.mobileMenuId);

    // Desktop hover & keyboard behavior
    if (navItem && trigger && dropdown) {
      let closeTimeout = null;

      function openMenu() {
        if (closeTimeout) {
          clearTimeout(closeTimeout);
          closeTimeout = null;
        }
        navItem.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        clampDropdownPosition();
      }

      function closeMenu() {
        if (closeTimeout) clearTimeout(closeTimeout);
        closeTimeout = setTimeout(function () {
          navItem.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          dropdown.style.left = '';
          dropdown.style.transform = '';
        }, 120); // 120ms grace window for smooth diagonal mouse movement
      }

      function clampDropdownPosition() {
        if (window.innerWidth <= 1024) return;
        dropdown.style.left = '50%';
        dropdown.style.transform = 'translateX(-50%)';

        const rect = dropdown.getBoundingClientRect();
        const padding = 16;
        const viewportWidth = window.innerWidth;

        if (rect.left < padding) {
          const shift = padding - rect.left;
          dropdown.style.transform = `translateX(calc(-50% + ${shift}px))`;
        } else if (rect.right > viewportWidth - padding) {
          const shift = rect.right - (viewportWidth - padding);
          dropdown.style.transform = `translateX(calc(-50% - ${shift}px))`;
        }
      }

      navItem.addEventListener('mouseenter', openMenu);
      navItem.addEventListener('mouseleave', closeMenu);

      // Keyboard support on trigger
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
          e.preventDefault();
          if (navItem.classList.contains('is-open') && (e.key === 'Enter' || e.key === ' ')) {
            closeMenu();
          } else {
            openMenu();
            const firstLink = dropdown.querySelector('.product-item-link');
            if (firstLink) firstLink.focus();
          }
        } else if (e.key === 'Escape') {
          navItem.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });

      // Escape key to close from inside dropdown
      dropdown.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          navItem.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!navItem.contains(e.target)) {
          navItem.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });

      window.addEventListener('resize', function () {
        if (navItem.classList.contains('is-open')) {
          clampDropdownPosition();
        }
      });
    }

    // Mobile drawer accordion toggle
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = mobileMenu.classList.toggle('is-open');
        mobileToggle.classList.toggle('is-expanded', isOpen);
        mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  }

  function initNavDropdowns() {
    setupMegaDropdown({
      navItemId: 'navProductItem',
      triggerId: 'productNavTrigger',
      dropdownId: 'productMegaDropdown',
      mobileToggleId: 'mobileProductToggle',
      mobileMenuId: 'mobileProductMenu'
    });

    setupMegaDropdown({
      navItemId: 'navMaterialItem',
      triggerId: 'materialNavTrigger',
      dropdownId: 'materialMegaDropdown',
      mobileToggleId: 'mobileMaterialToggle',
      mobileMenuId: 'mobileMaterialMenu'
    });

    setupMegaDropdown({
      navItemId: 'navCertificateItem',
      triggerId: 'certificateNavTrigger',
      dropdownId: 'certificateDropdown',
      mobileToggleId: 'mobileCertToggle',
      mobileMenuId: 'mobileCertMenu'
    });
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

  // Home Page Product Cards Click Navigation
  function initProductCardsNavigation() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const link = card.querySelector('.explore-btn');
      if (link) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          if (e.target.closest('a') || e.target.closest('button')) return;
          const href = link.getAttribute('href');
          if (href) window.location.href = href;
        });
      }
    });
  }

  // Certificate Lightbox & Zoom Viewer Controller
  function initCertificateLightbox() {
    const modal = document.getElementById('certLightboxModal');
    if (!modal) return;

    const img = modal.querySelector('#lightboxImg');
    const titleEl = modal.querySelector('#lightboxTitle');
    const badgeEl = modal.querySelector('#lightboxBadge');
    const downloadBtn = modal.querySelector('#lightboxDownload');
    const closeBtn = modal.querySelector('#lightboxClose');
    const prevBtn = modal.querySelector('#lightboxPrev');
    const nextBtn = modal.querySelector('#lightboxNext');
    const zoomInBtn = modal.querySelector('#lightboxZoomIn');
    const zoomOutBtn = modal.querySelector('#lightboxZoomOut');
    const zoomResetBtn = modal.querySelector('#lightboxZoomReset');
    const imgWrapper = modal.querySelector('#lightboxImgWrapper');

    const certCards = document.querySelectorAll('.cert-card[data-cert-src]');
    if (!certCards.length) return;

    const certData = Array.from(certCards).map(card => ({
      src: card.getAttribute('data-cert-src'),
      title: card.getAttribute('data-cert-title') || 'Certificate',
      badge: card.getAttribute('data-cert-badge') || 'CERTIFIED',
      download: card.getAttribute('data-cert-download') || card.getAttribute('data-cert-src')
    }));

    let currentIndex = 0;
    let zoomLevel = 1;
    let isDragging = false;
    let startX = 0, startY = 0, translateX = 0, translateY = 0;

    function updateTransform() {
      if (img) {
        img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`;
      }
    }

    function resetZoom() {
      zoomLevel = 1;
      translateX = 0;
      translateY = 0;
      updateTransform();
    }

    function showCert(index) {
      if (index < 0) index = certData.length - 1;
      if (index >= certData.length) index = 0;
      currentIndex = index;

      const cert = certData[currentIndex];
      if (img) {
        img.src = cert.src;
        img.alt = cert.title;
      }
      if (titleEl) titleEl.textContent = cert.title;
      if (badgeEl) badgeEl.textContent = cert.badge;
      if (downloadBtn) {
        downloadBtn.href = cert.download;
        downloadBtn.setAttribute('download', '');
      }
      resetZoom();
    }

    function openModal(index) {
      showCert(index);
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      resetZoom();
    }

    certCards.forEach((card, idx) => {
      const viewBtn = card.querySelector('.btn-cert-view');
      const frame = card.querySelector('.cert-preview-frame');

      if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
          e.preventDefault();
          openModal(idx);
        });
      }
      if (frame) {
        frame.addEventListener('click', (e) => {
          e.preventDefault();
          openModal(idx);
        });
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showCert(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showCert(currentIndex + 1);
      });
    }

    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        zoomLevel = Math.min(zoomLevel + 0.35, 3.5);
        updateTransform();
      });
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        zoomLevel = Math.max(zoomLevel - 0.35, 0.7);
        updateTransform();
      });
    }

    if (zoomResetBtn) {
      zoomResetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resetZoom();
      });
    }

    // Drag / Pan when zoomed
    if (imgWrapper) {
      imgWrapper.addEventListener('mousedown', (e) => {
        if (zoomLevel <= 1) return;
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });
    }

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lightbox-body')) {
        closeModal();
      }
    });

    // Keyboard navigation: Escape to close, Left/Right arrows to navigate
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('is-active')) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        showCert(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        showCert(currentIndex + 1);
      }
    });
  }

  /**
   * Smart Link Navigation
   * Ensures that /get-quote, /certificate, /contact, /materials, and /products/... work across all static and dev environments
   */
  function initSmartLinkNavigation() {
    const isFileProtocol = window.location.protocol === 'file:';

    document.addEventListener('click', function (e) {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('#')
      ) {
        return;
      }

      if (isFileProtocol) {
        if (href === '/get-quote' || href === '/get-quote/' || href === '/rfq') {
          e.preventDefault();
          window.location.href = 'get-quote.html';
        } else if (href === '/certificate' || href.startsWith('/certificate')) {
          e.preventDefault();
          const hash = href.includes('#') ? href.slice(href.indexOf('#')) : '';
          window.location.href = 'certificate.html' + hash;
        } else if (href === '/contact' || href.startsWith('/contact')) {
          e.preventDefault();
          window.location.href = 'contact.html';
        } else if (href === '/materials' || href.startsWith('/materials')) {
          e.preventDefault();
          const segs = href.split('/').filter(Boolean);
          if (segs.length > 1) {
            window.location.href = 'product-materials.html?material=' + encodeURIComponent(segs[1]);
          } else {
            window.location.href = 'materials.html';
          }
        } else if (href.startsWith('/products/')) {
          e.preventDefault();
          const slug = href.replace('/products/', '');
          window.location.href = 'product-materials.html?product=' + encodeURIComponent(slug);
        }
      }
    });
  }

  // Initialize Interactive Features
  function initApp() {
    initStickyNavbar();
    initNavDropdowns();
    initSmartLinkNavigation();
    initProductMarquee();
    initProductCardsNavigation();
    initWhyCardsTilt();
    initWhyFlipCards();
    initVasFlipCards();
    initIndustryFlipCards();
    initHomeCountrySearch();
    initFooterCopyButtons();
    initCurrentYear();
    initCertificateLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
