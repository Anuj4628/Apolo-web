const fs = require('fs');
const { execSync } = require('child_process');

const origCss = execSync('git show HEAD:contact-rfq.css').toString('utf8');

// 1. Part 1: Original Hero Section (lines 1 to Section 2 in orig)
const s2Idx = origCss.indexOf('SECTION 2: CONTACT INFORMATION');
const heroCss = origCss.substring(0, origCss.lastIndexOf('/*', s2Idx));

// 2. Part 2: Section 2 Get in Touch with Exclusive Brand-Orange Theme & Medium-Sized Balanced Cards
const getInTouchCss = `
/* ==========================================================================
   SECTION 2: GET IN TOUCH (EXCLUSIVE BRAND-ORANGE THEME)
   Medium-Sized Balanced White Contact Cards (3 Compact Top, 2 Wider Bottom)
   ========================================================================== */

.contact-get-in-touch-section {
  position: relative;
  background-color: #E64500;
  background: linear-gradient(135deg, #FF6600 0%, #F55200 45%, #D83E00 100%);
  padding: clamp(52px, 5.2vw, 76px) 0 clamp(58px, 5.8vw, 84px);
  overflow: hidden;
}

/* Subtle Technical Grid Texture Overlay */
.contact-get-in-touch-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  opacity: 0.9;
}

.contact-cards-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 clamp(20px, 3.2vw, 36px);
}

/* Centered Header */
.contact-get-in-touch-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto clamp(36px, 4vw, 52px);
}

.get-in-touch-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 30px;
  padding: 5px 16px;
  color: #FFFFFF;
  font-family: var(--font-heading, sans-serif);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.eyebrow-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #FFFFFF;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
}

.get-in-touch-title {
  font-family: var(--font-heading, sans-serif);
  font-size: clamp(34px, 3.8vw, 48px);
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 1.1;
  margin: 0 0 12px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
}

.get-in-touch-desc {
  font-family: var(--font-body, sans-serif);
  font-size: clamp(14.5px, 1.1vw, 16.5px);
  color: rgba(255, 255, 255, 0.94);
  line-height: 1.6;
  margin: 0 auto;
  max-width: 680px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

/* 6-Column Grid Layout: 3 Compact Cards (Row 1), 2 Wider Cards (Row 2) */
.contact-cards-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 22px;
  align-items: stretch;
}

/* Row 1: 3 Compact Cards (span 2 each) */
.contact-white-card.card-call,
.contact-white-card.card-whatsapp,
.contact-white-card.card-email {
  grid-column: span 2;
}

/* Row 2: 2 Wider Cards (span 3 each) */
.contact-white-card.card-office,
.contact-white-card.card-hours {
  grid-column: span 3;
}

/* Medium-Sized Balanced White Card */
.contact-white-card {
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  padding: 24px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  overflow: hidden;
}

.contact-white-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #CD3800 0%, #F45108 50%, #FF5A00 100%);
  opacity: 0;
  transition: opacity 0.22s ease;
}

.contact-white-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.16), 0 6px 12px -2px rgba(0, 0, 0, 0.08);
  border-color: rgba(255, 90, 0, 0.3);
}

.contact-white-card:hover::before {
  opacity: 1;
}

/* Circular Orange Icon */
.card-icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6600 0%, #E64500 100%);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(230, 69, 0, 0.28);
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.contact-white-card:hover .card-icon-circle {
  transform: scale(1.06);
}

/* Typography */
.white-card-title {
  font-family: var(--font-heading, sans-serif);
  font-size: 17px;
  font-weight: 850;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #0F172A;
  margin: 0 0 6px;
  line-height: 1.2;
}

.white-card-desc {
  font-family: var(--font-body, sans-serif);
  font-size: 13px;
  color: #64748B;
  line-height: 1.45;
  margin: 0 0 14px;
  max-width: 100%;
}

/* Card Data Box (Medium, Clean, High-Contrast) */
.white-card-data-box {
  width: 100%;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 12px 14px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Data Items inside box */
.white-data-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  width: 100%;
}

.white-data-item:last-child {
  margin-bottom: 0;
}

.data-sub-label {
  font-family: var(--font-heading, sans-serif);
  font-size: 10.5px;
  font-weight: 800;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 2px;
}

.data-val-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
}

.data-val-link {
  font-family: var(--font-heading, sans-serif);
  font-size: 13.5px;
  font-weight: 750;
  color: #0F172A;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.18s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.data-val-link:hover {
  color: #E64500;
}

.data-val-link.direct-highlight {
  color: #D64000;
  font-weight: 850;
}

.data-val-link.whatsapp-highlight {
  font-size: 15px;
  font-weight: 850;
  color: #059669;
}

.data-val-link.email-highlight {
  font-size: 13.5px;
  font-weight: 750;
  color: #0284C7;
  word-break: break-all;
}

/* Copy Button */
.contact-copy-btn {
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  color: #64748B;
  width: 26px;
  height: 26px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.18s ease;
  position: relative;
}

.contact-copy-btn:hover {
  background: #E64500;
  color: #FFFFFF;
  border-color: #E64500;
  transform: scale(1.08);
}

.contact-copy-btn.copied {
  background: #10B981 !important;
  color: #FFFFFF !important;
  border-color: #10B981 !important;
}

.copy-tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #0F172A;
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: all 0.18s ease;
  z-index: 10;
}

.contact-copy-btn:hover .copy-tooltip,
.contact-copy-btn.copied .copy-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* Status Indicators */
.status-indicator-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 20px;
  font-family: var(--font-heading, sans-serif);
  font-size: 11px;
  font-weight: 800;
  margin-top: 6px;
  width: 100%;
}

.active-badge {
  background: #ECFDF5;
  color: #047857;
  border: 1px solid #A7F3D0;
}

.pulsing-green-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10B981;
  box-shadow: 0 0 6px #10B981;
}

.response-badge {
  background: #F0F9FF;
  color: #0369A1;
  border: 1px solid #BAE6FD;
}

.open-badge {
  background: #ECFDF5;
  color: #047857;
  border: 1px solid #A7F3D0;
}

/* Address Card Display */
.address-box {
  text-align: left;
}

.white-address-display {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.address-text-content {
  font-family: var(--font-body, sans-serif);
  font-size: 13px;
  font-weight: 600;
  color: #1E293B;
  line-height: 1.5;
}

/* Schedule List */
.hours-schedule-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 6px;
}

.hours-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12.5px;
  font-family: var(--font-body, sans-serif);
  color: #334155;
  padding: 3px 0;
  border-bottom: 1px solid #F1F5F9;
}

.hours-row:last-child {
  border-bottom: none;
}

.hours-day {
  font-weight: 600;
  color: #1E293B;
}

.hours-time {
  font-family: var(--font-mono, monospace);
  font-weight: 700;
  color: #0F172A;
}

.hours-row.highlight-sunday .hours-time {
  color: #D64000;
  font-weight: 800;
}

/* Action Button */
.white-card-action {
  width: 100%;
  margin-top: auto;
}

.btn-white-card-primary {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(90deg, #CD3800 0%, #F45108 50%, #FF5A00 100%);
  color: #FFFFFF;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: var(--font-heading, sans-serif);
  font-size: 12.5px;
  font-weight: 850;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 3px 12px rgba(205, 56, 0, 0.28);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  border: none;
  cursor: pointer;
}

.btn-white-card-primary:hover {
  background: #0F172A;
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.25);
}

.btn-white-card-primary:active {
  transform: translateY(0);
}

/* Responsive Grid Rules */
@media (max-width: 1024px) {
  .contact-white-card.card-call,
  .contact-white-card.card-whatsapp {
    grid-column: span 3;
  }
  .contact-white-card.card-email {
    grid-column: span 6;
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
  }
  .contact-white-card.card-office,
  .contact-white-card.card-hours {
    grid-column: span 3;
  }
}

@media (max-width: 768px) {
  .contact-get-in-touch-section {
    padding: 44px 0 56px;
  }
  .contact-cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .contact-white-card.card-call,
  .contact-white-card.card-whatsapp,
  .contact-white-card.card-email,
  .contact-white-card.card-office,
  .contact-white-card.card-hours {
    grid-column: span 1;
    max-width: 100%;
  }
  .contact-white-card {
    padding: 20px 16px 18px;
    border-radius: 14px;
  }
  .card-icon-circle {
    width: 44px;
    height: 44px;
    margin-bottom: 10px;
  }
}
`;

// 3. Part 3: Section 4 to end from origCss, ensuring pure WHITE background for .contact-dual-section
const s4Start = origCss.indexOf('SECTION 4: UNIFIED LOCATION & INQUIRY SECTION');
let remainingCss = origCss.substring(origCss.lastIndexOf('/*', s4Start));

// Ensure .contact-dual-section has pure WHITE background
remainingCss = remainingCss.replace(
  /\.contact-dual-section\s*\{[^}]+\}/,
  `.contact-dual-section {
  padding: clamp(64px, 6vw, 96px) 0;
  background-color: #FFFFFF;
  border-bottom: 1px solid var(--steel-light-300, #E2E8F0);
  position: relative;
}`
);

// Ensure mid-page CTA has reversed dark-to-light orange gradient
remainingCss = remainingCss.replace(
  /\.contact-mid-cta-section\s*\{[^}]+\}/,
  `.contact-mid-cta-section {
  padding: 72px 0;
  background-color: #CD3800;
  background: linear-gradient(90deg, #CD3800 0%, #F45108 50%, #FF5A00 100%);
  color: #FFFFFF;
  border-top: 3px solid rgba(255, 255, 255, 0.25);
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}`
);

// Combine all 3 parts
const completeCss = heroCss + '\n\n' + getInTouchCss + '\n\n' + remainingCss;

fs.writeFileSync('contact-rfq.css', completeCss, 'utf8');
console.log('Successfully wrote updated contact-rfq.css!');

