const fs = require('fs');

const path = 'style.css';
let content = fs.readFileSync(path, 'utf8');

const startMarker = '/* ==========================================================================\n   COMPLETE PROFESSIONAL FOOTER\n   Industrial Dark Charcoal (#0C1017) with Apollo Orange & Crisp Surfaces\n   ========================================================================== */';
const endMarker = '.sunmarg-link:hover {\n  color: #FFFFFF;\n  text-decoration: underline;\n}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in style.css. startIndex:', startIndex, 'endIndex:', endIndex);
  process.exit(1);
}

const replacement = `/* ==========================================================================
   COMPLETE PROFESSIONAL FOOTER
   Premium Medium Dark Industrial Grey (#9A9B99) with Signature Apollo Orange Accents
   ========================================================================== */

.apollo-footer {
  position: relative;
  width: 100%;
  background-color: #9A9B99;
  color: #121820;
  padding: clamp(68px, 6.5vw, 92px) 0 32px;
  border-top: 3px solid var(--apollo-orange, #FF5A00);
  overflow: hidden;
}

.footer-container {
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding: 0 clamp(20px, 3.5vw, 56px);
}

.footer-grid,
.footer-main-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 1.35fr 1.15fr;
  gap: clamp(28px, 3vw, 48px);
  margin-bottom: clamp(48px, 4.5vw, 68px);
}

/* Titles */
.footer-col-title {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 850;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #10141A;
  margin: 0 0 12px;
}

.footer-col-title-bar {
  width: 36px;
  height: 3px;
  background-color: var(--apollo-orange, #FF5A00);
  border-radius: 2px;
  margin-bottom: 22px;
}

/* Column 1: Company */
.footer-logo-card,
.footer-logo-wrapper {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 10px 18px;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 18px;
  max-width: 320px;
}

.footer-brand-logo,
.footer-brand-img,
.footer-logo-img {
  height: clamp(64px, 5.2vw, 78px);
  width: auto;
  max-width: 100%;
  aspect-ratio: 1024 / 416;
  object-fit: contain;
  display: block;
}

.footer-iso-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.65);
  border: 1.5px solid var(--apollo-orange, #FF5A00);
  border-radius: 4px;
  padding: 4px 10px;
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.08em;
  color: #10141A;
  margin-bottom: 16px;
}

.footer-company-desc {
  font-family: var(--font-body);
  font-size: 14px;
  color: #1A222C;
  font-weight: 500;
  line-height: 1.65;
  margin: 0 0 20px;
}

.footer-materials-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.f-mat-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: #FFFFFF;
  background: #171E28;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 3px 8px;
  border-radius: 4px;
}

/* Column 2: Quick Links */
.footer-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 14.5px;
  font-weight: 600;
  color: #10141A;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-link::before {
  content: "›";
  color: var(--apollo-orange, #FF5A00);
  font-size: 18px;
  line-height: 1;
  font-weight: 800;
  transition: transform 0.2s ease;
}

.footer-link:hover {
  color: var(--apollo-orange, #FF5A00);
  transform: translateX(4px);
}

.footer-link:hover::before {
  transform: translateX(2px);
}

/* Column 3: Contact Details */
.footer-contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  position: relative;
}

.f-contact-icon {
  width: 34px;
  height: 34px;
  border-radius: 6px;
  background: #171E28;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: var(--apollo-orange, #FF5A00);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.f-icon-whatsapp {
  color: #25D366;
  background: #171E28;
  border-color: rgba(37, 211, 102, 0.4);
}

.f-contact-body {
  flex-grow: 1;
}

.f-contact-label {
  display: block;
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2D3748;
  margin-bottom: 3px;
}

.f-contact-text {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: #10141A;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
}

.f-phone-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
}

.f-phone-row:last-child {
  margin-bottom: 0;
}

.f-contact-link {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: #10141A;
  text-decoration: none;
  transition: color 0.2s ease;
}

.f-contact-link:hover {
  color: var(--apollo-orange, #FF5A00);
}

/* Copy Button */
.f-copy-btn {
  background: #171E28;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #CBD5E1;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.f-copy-btn:hover {
  background: var(--apollo-orange, #FF5A00);
  border-color: var(--apollo-orange, #FF5A00);
  color: #FFFFFF;
}

.copy-tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #17181C;
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-size: 10px;
  font-weight: 750;
  padding: 3px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.f-copy-btn:hover .copy-tooltip {
  opacity: 1;
}

.f-copy-btn.is-copied {
  background: #10B981 !important;
  border-color: #10B981 !important;
  color: #FFFFFF !important;
}

.f-copy-btn.is-copied .copy-tooltip {
  opacity: 1;
  background: #10B981;
}

/* Column 4: Visit Office */
.footer-office-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #171E28;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px 10px;
  margin-bottom: 14px;
}

.office-city-tag {
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.08em;
  color: var(--apollo-orange, #FF5A00);
}

.office-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 6px #10B981;
}

.office-status-text {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #E2E8F0;
  font-weight: 600;
}

.footer-office-location {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: #10141A;
  font-weight: 550;
  line-height: 1.55;
  margin: 0 0 16px;
}

.btn-footer-directions {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #171E28;
  color: #FFFFFF;
  border: 1.5px solid var(--apollo-orange, #FF5A00);
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.22s ease;
}

.btn-footer-directions:hover {
  background: var(--apollo-orange, #FF5A00);
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(255, 90, 0, 0.35);
}

.footer-map-container {
  width: 100%;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.18);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

.footer-map-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Bottom Bar */
.footer-bottom-bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  gap: 16px;
}

.footer-bottom-left {
  text-align: left;
}

.footer-bottom-center {
  text-align: center;
  white-space: nowrap;
}

.footer-bottom-right {
  text-align: right;
  padding-right: 0;
}

.footer-bottom-tagline {
  white-space: nowrap;
}

.footer-bottom-left p,
.footer-bottom-center p,
.footer-bottom-right p {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: #1A222C;
  font-weight: 600;
  margin: 0;
}

.sunmarg-link {
  color: var(--apollo-orange, #FF5A00);
  text-decoration: none;
  font-weight: 800;
  margin-left: 4px;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.sunmarg-link:hover {
  color: #10141A;
  text-decoration: underline;
}`;

content = content.substring(0, startIndex) + replacement + content.substring(endIndex + endMarker.length);
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated footer in style.css!');

