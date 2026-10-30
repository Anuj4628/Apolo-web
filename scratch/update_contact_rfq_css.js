const fs = require('fs');

const cssPath = 'contact-rfq.css';
let content = fs.readFileSync(cssPath, 'utf8');

// Find start of Section 4
const section4Marker = '/* ==========================================================================\r\n   SECTION 4: UNIFIED LOCATION & INQUIRY SECTION';
const altSection4Marker = '/* ==========================================================================\n   SECTION 4: UNIFIED LOCATION & INQUIRY SECTION';

let s4Index = content.indexOf(section4Marker);
if (s4Index === -1) {
  s4Index = content.indexOf(altSection4Marker);
}

if (s4Index === -1) {
  console.error('Section 4 marker not found!');
  process.exit(1);
}

const newTopCss = `/* ==========================================================================
   APOLLO FORGE & FITTING — REDESIGNED CONTACT SYSTEM
   Sophisticated Brand-Orange Background & Premium White Cards Layout
   ========================================================================== */

/* 1. Global Page Background Theme */
body.contact-page-wrapper {
  background: linear-gradient(180deg, #FF6600 0%, #F55200 35%, #E64500 70%, #D83E00 100%);
  background-attachment: fixed;
  color: #0F172A;
  min-height: 100vh;
}

/* 2. Main Hero & Contact Cards Section */
.contact-main-hero-section {
  position: relative;
  width: 100%;
  background: transparent;
  padding: clamp(60px, 6vw, 96px) 0 clamp(72px, 7vw, 108px);
  overflow: hidden;
}

/* Subtle Industrial Precision Grid Overlay */
.contact-main-hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 38px 38px;
  pointer-events: none;
  opacity: 0.85;
}

.contact-main-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 clamp(20px, 3.2vw, 44px);
}

/* Centered Hero Header */
.contact-main-header {
  text-align: center;
  max-width: 840px;
  margin: 0 auto clamp(42px, 5vw, 64px);
}

.contact-hero-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 30px;
  padding: 6px 18px;
  color: #FFFFFF;
  font-family: var(--font-heading, sans-serif);
  font-size: 11.5px;
  font-weight: 850;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 18px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.eyebrow-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.95);
}

.contact-hero-title {
  font-family: var(--font-heading, sans-serif);
  font-size: clamp(38px, 4.4vw, 58px);
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 1.1;
  margin: 0 0 16px;
  text-shadow: 0 3px 16px rgba(0, 0, 0, 0.2);
}

.contact-hero-description {
  font-family: var(--font-body, sans-serif);
  font-size: clamp(16px, 1.2vw, 18.5px);
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.65;
  margin: 0 auto;
  max-width: 700px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

/* 3. Cards Layout Grid System */
.contact-cards-layout {
  width: 100%;
}

/* Row 1: 3 Columns on Desktop */
.contact-cards-row-top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 2.5vw, 32px);
  margin-bottom: clamp(24px, 2.5vw, 32px);
  align-items: stretch;
}

/* Row 2: 2 Centered Cards (Sufficiently Wide) */
.contact-cards-row-bottom {
  display: grid;
  grid-template-columns: repeat(2, minmax(360px, 560px));
  justify-content: center;
  gap: clamp(24px, 2.5vw, 32px);
  align-items: stretch;
}

/* 4. Premium White Contact Card */
.contact-white-card {
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  padding: clamp(34px, 3.2vw, 44px) clamp(26px, 2.6vw, 36px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.12), 0 20px 45px -10px rgba(0, 0, 0, 0.16);
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease;
  position: relative;
  overflow: hidden;
}

.contact-white-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #CD3800 0%, #F45108 50%, #FF5A00 100%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.contact-white-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 45px -8px rgba(0, 0, 0, 0.2), 0 35px 70px -15px rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 90, 0, 0.35);
}

.contact-white-card:hover::before {
  opacity: 1;
}

/* Circular Orange Icon Container Near Top Center */
.card-icon-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6200 0%, #E64500 100%);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 8px 22px rgba(230, 69, 0, 0.32);
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease;
  flex-shrink: 0;
}

.contact-white-card:hover .card-icon-circle {
  transform: scale(1.08) rotate(2deg);
  box-shadow: 0 12px 28px rgba(230, 69, 0, 0.45);
}

/* Card Heading & Description */
.white-card-title {
  font-family: var(--font-heading, sans-serif);
  font-size: clamp(23px, 1.8vw, 26px);
  font-weight: 850;
  color: #0F172A;
  margin: 0 0 10px;
  letter-spacing: -0.01em;
}

.white-card-desc {
  font-family: var(--font-body, sans-serif);
  font-size: 14.5px;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 22px;
  max-width: 380px;
  min-height: 46px;
}

/* Data Information Box inside Card */
.white-card-data-box {
  width: 100%;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.white-card-data-box.hours-box,
.white-card-data-box.address-box {
  padding: 18px 20px;
}

.white-data-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.data-sub-label {
  font-family: var(--font-heading, sans-serif);
  font-size: 10.5px;
  font-weight: 800;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: left;
}

.data-val-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.data-val-link {
  font-family: var(--font-mono, monospace);
  font-size: 14.5px;
  font-weight: 700;
  color: #1E293B;
  text-decoration: none;
  transition: color 0.18s ease;
  white-space: nowrap;
}

.data-val-link:hover {
  color: #E64500;
}

.data-val-link.direct-highlight {
  color: #D64000;
  font-weight: 800;
  font-size: 15.5px;
}

.data-val-link.whatsapp-highlight {
  color: #0F172A;
  font-size: 17px;
  font-weight: 850;
}

.data-val-link.email-highlight {
  color: #D64000;
  font-size: 15px;
  font-weight: 750;
  word-break: break-all;
}

/* Copy Button */
.contact-copy-btn {
  background: #EDF2F7;
  border: 1px solid #CBD5E1;
  color: #475569;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.18s ease;
  flex-shrink: 0;
}

.contact-copy-btn:hover {
  background: #E64500;
  border-color: #E64500;
  color: #FFFFFF;
  transform: translateY(-1px);
}

.copy-tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #0F172A;
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: all 0.18s ease;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.contact-copy-btn:hover .copy-tooltip {
  opacity: 1;
  visibility: visible;
}

/* Status Indicator Badges */
.status-indicator-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-family: var(--font-heading, sans-serif);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 6px 12px;
  border-radius: 20px;
  background: #DCFCE7;
  color: #15803D;
  border: 1px solid #BBF7D0;
  margin-top: 4px;
}

.status-indicator-pill.neutral {
  background: #F1F5F9;
  color: #475569;
  border-color: #E2E8F0;
}

.pulsing-green-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #22C55E;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  animation: pulseGreen 2s infinite;
}

@keyframes pulseGreen {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
  70% { box-shadow: 0 0 0 7px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

/* Address Data Box */
.white-address-display {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  text-align: left;
}

.address-text-content {
  font-family: var(--font-body, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: #1E293B;
  line-height: 1.55;
  flex: 1;
}

/* Hours Schedule Box */
.hours-schedule-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  margin-bottom: 8px;
}

.hours-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13.5px;
  font-family: var(--font-body, sans-serif);
  color: #334155;
  padding: 4px 0;
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

/* Card Action Button (Full-width, prominent, bottom aligned) */
.white-card-action {
  width: 100%;
  margin-top: auto;
}

.btn-white-card-primary {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  background: linear-gradient(90deg, #CD3800 0%, #F45108 50%, #FF5A00 100%);
  color: #FFFFFF;
  padding: 13px 22px;
  border-radius: 10px;
  font-family: var(--font-heading, sans-serif);
  font-size: 14px;
  font-weight: 850;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(205, 56, 0, 0.32);
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  border: none;
  cursor: pointer;
}

.btn-white-card-primary:hover {
  background: #0F172A;
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.28);
}

.btn-white-card-primary:active {
  transform: translateY(0);
}

/* Responsive Grid Rules */
@media (max-width: 1100px) {
  .contact-cards-row-top {
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-cards-row-top > article:nth-child(3) {
    grid-column: span 2;
    max-width: 560px;
    margin: 0 auto;
    width: 100%;
  }
  .contact-cards-row-bottom {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .contact-main-hero-section {
    padding: 48px 0 64px;
  }
  .contact-cards-row-top,
  .contact-cards-row-bottom {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .contact-cards-row-top > article:nth-child(3) {
    grid-column: span 1;
    max-width: 100%;
  }
  .contact-white-card {
    padding: 28px 20px;
    border-radius: 18px;
  }
  .card-icon-circle {
    width: 62px;
    height: 62px;
    margin-bottom: 16px;
  }
  .white-card-desc {
    min-height: auto;
    margin-bottom: 18px;
  }
  .data-val-link {
    font-size: 13.5px;
  }
}

`;

// Also update Section 4 (.contact-dual-section) and Section 6 (.contact-why-section) to sit cleanly on orange background
let remainingCss = content.substring(s4Index);

// Make .contact-dual-section transparent
remainingCss = remainingCss.replace(
  /\.contact-dual-section\s*\{[^}]+\}/,
  `.contact-dual-section {
  padding: clamp(64px, 6vw, 96px) 0;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
}`
);

// Make .contact-why-section transparent and polish cards & headings
remainingCss = remainingCss.replace(
  /\.contact-why-section\s*\{[^}]+\}/,
  `.contact-why-section {
  padding: 100px 0;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}`
);

// Polish .contact-why-section header to be white on orange
if (!remainingCss.includes('.contact-why-section .contact-section-title')) {
  remainingCss += `

/* Why Contact Section Header Contrast on Orange Canvas */
.contact-why-section .contact-section-eyebrow {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 5px 16px;
  letter-spacing: 0.16em;
}

.contact-why-section .contact-section-title {
  color: #FFFFFF;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.contact-why-section .contact-section-subtitle {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

/* Why Contact White Cards */
.contact-why-card {
  background: #FFFFFF !important;
  border: 1px solid rgba(15, 23, 42, 0.1) !important;
  border-radius: 18px !important;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12) !important;
}

.contact-why-card-title {
  color: #0F172A !important;
}

.contact-why-card-desc {
  color: #475569 !important;
}

.contact-why-card-icon {
  background: linear-gradient(135deg, #FF6600 0%, #E64500 100%) !important;
  color: #FFFFFF !important;
}

.contact-why-tag {
  color: #E64500 !important;
  background: rgba(230, 69, 0, 0.08) !important;
  border: 1px solid rgba(230, 69, 0, 0.2) !important;
}

.contact-why-arrow-indicator {
  color: #E64500 !important;
}

.contact-why-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 45px -8px rgba(0, 0, 0, 0.22) !important;
  border-color: rgba(255, 90, 0, 0.35) !important;
}
`;
}

const finalCss = newTopCss + remainingCss;
fs.writeFileSync(cssPath, finalCss, 'utf8');
console.log('Successfully updated contact-rfq.css!');

