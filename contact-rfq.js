/**
 * APOLLO FORGE & FITTING — CONTACT & RFQ CONTROLLER
 * Comprehensive interaction for:
 * - Live IST Business Hours Status
 * - Clean Clipboard Copy with Tooltip
 * - RFQ Form Validation & File Preview
 * - WhatsApp & Email Structured RFQ Dispatch
 */

(function () {
  'use strict';

  /**
   * 1. Live IST Business Hours Calculator
   * Monday - Saturday: 9:30 AM to 7:00 PM IST (UTC+5:30)
   * Sunday: Closed (Emergency WhatsApp Active)
   */
  function initLiveBusinessHours() {
    const statusBadge = document.getElementById('businessHoursStatusBadge');
    if (!statusBadge) return;

    function checkHours() {
      // Calculate current IST time
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istOffsetMs = 5.5 * 60 * 60 * 1000;
      const istDate = new Date(utcTime + istOffsetMs);

      const day = istDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentMinuteOfDay = hours * 60 + minutes;

      const openMinute = 9 * 60 + 30; // 9:30 AM
      const closeMinute = 19 * 60; // 7:00 PM

      const isOpen = day >= 1 && day <= 6 && currentMinuteOfDay >= openMinute && currentMinuteOfDay < closeMinute;

      if (isOpen) {
        statusBadge.className = 'contact-card-badge';
        statusBadge.innerHTML = '<span class="contact-card-badge-dot"></span> Open Now (IST)';
      } else {
        statusBadge.className = 'contact-card-badge is-closed';
        statusBadge.innerHTML = '<span class="contact-card-badge-dot"></span> Closed (Opens 9:30 AM IST)';
      }
    }

    checkHours();
    setInterval(checkHours, 60000);
  }

  /**
   * 2. Copy to Clipboard Controller
   */
  function initContactCopyButtons() {
    const copyBtns = document.querySelectorAll('.contact-copy-btn');
    if (!copyBtns.length) return;

    copyBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let textToCopy = btn.getAttribute('data-copy-val') || '';
        const targetId = btn.getAttribute('data-copy-target');

        if (!textToCopy && targetId) {
          const el = document.getElementById(targetId);
          if (el) textToCopy = el.innerText.trim();
        }

        if (!textToCopy) return;

        const tooltip = btn.querySelector('.copy-tooltip');

        function onCopied() {
          btn.classList.add('is-copied');
          if (tooltip) tooltip.textContent = 'Copied ✓';
          setTimeout(function () {
            btn.classList.remove('is-copied');
            if (tooltip) tooltip.textContent = 'Copy';
          }, 2000);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(onCopied).catch(function () {
            fallbackCopy(textToCopy, onCopied);
          });
        } else {
          fallbackCopy(textToCopy, onCopied);
        }
      });
    });

    function fallbackCopy(text, cb) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
        cb();
      } catch (err) {
        console.error('Copy fallback failed', err);
      }
      document.body.removeChild(ta);
    }
  }

  /**
   * 3. RFQ Form & Confirmation Modal Controller
   */
  function initRfqForm() {
    const form = document.getElementById('rfqForm');
    const modal = document.getElementById('rfqSuccessModal');
    const modalCloseBtn = document.getElementById('rfqModalCloseBtn');
    const modalBackdrop = document.getElementById('rfqModalBackdrop');
    const editBtn = document.getElementById('rfqEditBtn');
    const copySummaryBtn = document.getElementById('rfqCopySummaryBtn');

    // File input handling
    const fileInput = document.getElementById('rfqFile');
    const fileChosenName = document.getElementById('rfqFileChosenName');
    if (fileInput && fileChosenName) {
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length > 0) {
          fileChosenName.textContent = '✓ Selected: ' + fileInput.files[0].name;
        } else {
          fileChosenName.textContent = '';
        }
      });
    }

    if (!form || !modal) return;

    // Field references
    const fullNameInput = document.getElementById('rfqFullName');
    const companyInput = document.getElementById('rfqCompany');
    const emailInput = document.getElementById('rfqEmail');
    const phoneInput = document.getElementById('rfqPhone');
    const countryInput = document.getElementById('rfqCountry');
    const cityInput = document.getElementById('rfqCity');
    const productCategorySelect = document.getElementById('rfqProductCategory');
    const materialSelect = document.getElementById('rfqMaterial');
    const gradeInput = document.getElementById('rfqGrade');
    const quantityInput = document.getElementById('rfqQuantity');
    const unitSelect = document.getElementById('rfqUnit');
    const deliveryDateInput = document.getElementById('rfqDeliveryDate');
    const requirementTextarea = document.getElementById('rfqRequirement');

    // Modal elements
    const summaryBox = document.getElementById('rfqSummaryText');
    const waBtn = document.getElementById('rfqWhatsAppBtn');
    const emailBtn = document.getElementById('rfqEmailBtn');

    let currentPreparedData = null;

    function validateField(input, isRequired, validatorFn) {
      if (!input) return true;
      const val = input.value.trim();
      let isValid = true;

      if (isRequired && !val) {
        isValid = false;
      } else if (val && validatorFn && !validatorFn(val)) {
        isValid = false;
      }

      input.classList.toggle('has-error', !isValid);
      return isValid;
    }

    function isEmailValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isPhoneValid(phone) {
      // Must contain at least 7 digits
      const digits = phone.replace(/\D/g, '');
      return digits.length >= 7;
    }

    // Clear error on input
    [fullNameInput, emailInput, phoneInput, productCategorySelect, requirementTextarea].forEach(function (el) {
      if (el) {
        el.addEventListener('input', function () {
          el.classList.remove('has-error');
        });
        el.addEventListener('change', function () {
          el.classList.remove('has-error');
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameOk = validateField(fullNameInput, true);
      const emailOk = validateField(emailInput, true, isEmailValid);
      const phoneOk = validateField(phoneInput, true, isPhoneValid);
      const prodOk = validateField(productCategorySelect, true);
      const reqOk = validateField(requirementTextarea, true);

      if (!nameOk || !emailOk || !phoneOk || !prodOk || !reqOk) {
        const firstError = form.querySelector('.has-error');
        if (firstError) {
          firstError.focus();
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Gather Form Data
      const data = {
        name: fullNameInput.value.trim(),
        company: companyInput ? companyInput.value.trim() : '',
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        country: countryInput ? countryInput.value.trim() : 'India',
        city: cityInput ? cityInput.value.trim() : '',
        product: productCategorySelect.value,
        material: materialSelect ? materialSelect.value : '',
        grade: gradeInput ? gradeInput.value.trim() : '',
        quantity: quantityInput ? quantityInput.value.trim() : '',
        unit: unitSelect ? unitSelect.value : 'Pieces (Pcs)',
        deliveryDate: deliveryDateInput ? deliveryDateInput.value : '',
        notes: requirementTextarea ? requirementTextarea.value.trim() : '',
        fileName: fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0].name : ''
      };

      currentPreparedData = data;

      // Construct readable preview summary
      let previewText = `APOLLO FORGE & FITTING — RFQ SUMMARY\n`;
      previewText += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      previewText += `Customer: ${data.name}${data.company ? ' (' + data.company + ')' : ''}\n`;
      previewText += `Contact:  ${data.phone} | ${data.email}\n`;
      if (data.city || data.country) {
        previewText += `Location: ${[data.city, data.country].filter(Boolean).join(', ')}\n`;
      }
      previewText += `\nSPECIFICATION:\n`;
      previewText += `• Product:   ${data.product}\n`;
      if (data.material) previewText += `• Material:  ${data.material}\n`;
      if (data.grade) previewText += `• Grade/Std: ${data.grade}\n`;
      if (data.quantity) previewText += `• Quantity:  ${data.quantity} ${data.unit}\n`;
      if (data.deliveryDate) previewText += `• Target Delivery: ${data.deliveryDate}\n`;
      if (data.fileName) previewText += `• Attached Spec:  ${data.fileName}\n`;
      if (data.notes) {
        previewText += `\nADDITIONAL REQUIREMENTS:\n${data.notes}\n`;
      }

      if (summaryBox) {
        summaryBox.textContent = previewText;
      }

      // 1. Build WhatsApp Pre-filled URL
      let waMessage = `*APOLLO FORGE & FITTING — NEW RFQ INQUIRY*\n`;
      waMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
      waMessage += `*Full Name:* ${data.name}\n`;
      if (data.company) waMessage += `*Company:* ${data.company}\n`;
      waMessage += `*Phone:* ${data.phone}\n`;
      waMessage += `*Email:* ${data.email}\n`;
      if (data.city || data.country) {
        waMessage += `*Location:* ${[data.city, data.country].filter(Boolean).join(', ')}\n`;
      }
      waMessage += `\n*REQUIREMENT:*\n`;
      waMessage += `*Product:* ${data.product}\n`;
      if (data.material) waMessage += `*Material:* ${data.material}\n`;
      if (data.grade) waMessage += `*Grade/Spec:* ${data.grade}\n`;
      if (data.quantity) waMessage += `*Quantity:* ${data.quantity} ${data.unit}\n`;
      if (data.deliveryDate) waMessage += `*Target Date:* ${data.deliveryDate}\n`;
      if (data.fileName) waMessage += `*Attached File:* ${data.fileName}\n`;
      if (data.notes) waMessage += `\n*Details / Specs:*\n${data.notes}\n`;

      const waUrl = `https://wa.me/919987586677?text=${encodeURIComponent(waMessage)}`;
      if (waBtn) {
        waBtn.setAttribute('href', waUrl);
      }

      // 2. Build Email Pre-filled mailto URL
      const emailSubject = `RFQ / Technical Enquiry — ${data.product} — ${data.company || data.name}`;
      let emailBody = `Dear Apollo Forge & Fitting Sales & Technical Team,\n\n`;
      emailBody += `Please provide a commercial and technical quotation based on the following requirement:\n\n`;
      emailBody += `CONTACT DETAILS:\n`;
      emailBody += `Name:    ${data.name}\n`;
      if (data.company) emailBody += `Company: ${data.company}\n`;
      emailBody += `Email:   ${data.email}\n`;
      emailBody += `Phone:   ${data.phone}\n`;
      emailBody += `Address: ${[data.city, data.country].filter(Boolean).join(', ')}\n\n`;
      emailBody += `TECHNICAL SPECIFICATIONS:\n`;
      emailBody += `Product:             ${data.product}\n`;
      emailBody += `Material Family:     ${data.material || 'To be recommended'}\n`;
      emailBody += `Grade/Specification: ${data.grade || 'Standard Mill Spec'}\n`;
      emailBody += `Quantity:            ${data.quantity ? data.quantity + ' ' + data.unit : 'Bulk Requirement'}\n`;
      if (data.deliveryDate) emailBody += `Required Delivery:   ${data.deliveryDate}\n`;
      if (data.fileName) emailBody += `Specification File:  ${data.fileName} (Attached in this thread)\n`;
      if (data.notes) {
        emailBody += `\nADDITIONAL SCOPE & TOLERANCES:\n${data.notes}\n`;
      }
      emailBody += `\nPlease include MTC compliance EN 10204 3.1 and delivery timelines to our destination.\n\n`;
      emailBody += `Best regards,\n${data.name}\n${data.company || ''}`;

      const emailUrl = `mailto:apollo_forge@yahoo.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      if (emailBtn) {
        emailBtn.setAttribute('href', emailUrl);
      }

      // Open Modal
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });

    function closeModal() {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', function (e) {
        if (e.target === modalBackdrop) closeModal();
      });
    }
    if (editBtn) editBtn.addEventListener('click', closeModal);

    // Escape key closes modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeModal();
      }
    });

    // Copy Summary Button
    if (copySummaryBtn && summaryBox) {
      copySummaryBtn.addEventListener('click', function () {
        const text = summaryBox.textContent;
        navigator.clipboard.writeText(text).then(function () {
          const originalText = copySummaryBtn.textContent;
          copySummaryBtn.textContent = 'Copied to Clipboard ✓';
          setTimeout(function () {
            copySummaryBtn.textContent = originalText;
          }, 2000);
        });
      });
    }

    // Auto-fill product/material from URL parameters if present (e.g. /get-quote?product=flanges&material=stainless-steel)
    const urlParams = new URLSearchParams(window.location.search);
    const paramProduct = urlParams.get('product');
    const paramMaterial = urlParams.get('material');

    if (paramProduct && productCategorySelect) {
      for (let i = 0; i < productCategorySelect.options.length; i++) {
        if (productCategorySelect.options[i].value.toLowerCase().includes(paramProduct.toLowerCase().replace(/-/g, ' '))) {
          productCategorySelect.selectedIndex = i;
          break;
        }
      }
    }

    if (paramMaterial && materialSelect) {
      for (let j = 0; j < materialSelect.options.length; j++) {
        if (materialSelect.options[j].value.toLowerCase().includes(paramMaterial.toLowerCase().replace(/-/g, ' '))) {
          materialSelect.selectedIndex = j;
          break;
        }
      }
    }
  }

  // Auto-init on DOM ready
  function init() {
    initLiveBusinessHours();
    initContactCopyButtons();
    initRfqForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
