const fs = require('fs');

const contactHtmlPath = 'contact.html';
let content = fs.readFileSync(contactHtmlPath, 'utf8');

// Find the start of the hero section: <!-- ============================================== \r?\n       1. CONTACT HERO
const startMarker = '  <!-- ==============================================\r\n       1. CONTACT HERO';
const altStartMarker = '  <!-- ==============================================\n       1. CONTACT HERO';

let startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
  startIndex = content.indexOf(altStartMarker);
}

// Find the end marker: right before <!-- ============================================== \r?\n       4. LOCATION & INQUIRY SECTION
const endMarker = '  <!-- ==============================================\r\n       4. LOCATION & INQUIRY SECTION';
const altEndMarker = '  <!-- ==============================================\n       4. LOCATION & INQUIRY SECTION';

let endIndex = content.indexOf(endMarker);
if (endIndex === -1) {
  endIndex = content.indexOf(altEndMarker);
}

console.log('startIndex:', startIndex);
console.log('endIndex:', endIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

const newHeroAndCards = `  <!-- ==============================================
       1. GET IN TOUCH HERO & WHITE CONTACT CARDS SECTION
       Brand-Orange Theme Background & Premium White Cards
       ============================================== -->
  <section class="contact-main-hero-section" id="contactInfoSection" aria-label="Get in Touch with Apollo Forge & Fitting">
    <div class="contact-main-container">

      <!-- Centered Header -->
      <div class="contact-main-header">
        <div class="contact-hero-eyebrow-badge">
          <span class="eyebrow-pulse-dot" aria-hidden="true"></span>
          <span>COMMUNICATION CHANNELS</span>
        </div>
        <h1 class="contact-hero-title">GET IN TOUCH</h1>
        <p class="contact-hero-description">
          Connect with Apollo Forge and Fitting for product enquiries, technical assistance, quotations and business collaborations.
        </p>
      </div>

      <!-- 5 Spacious White Contact Cards (Row 1: 3 Cards, Row 2: 2 Cards Centered) -->
      <div class="contact-cards-layout">
        
        <!-- ROW 1: 3 Cards -->
        <div class="contact-cards-row-top">

          <!-- CARD 1: CALL US -->
          <article class="contact-white-card" aria-label="Telephone Enquiries">
            <div class="card-icon-circle" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            
            <h3 class="white-card-title">Call Us</h3>
            <p class="white-card-desc">
              Connect with our team for product enquiries, availability and order-related assistance.
            </p>

            <div class="white-card-data-box">
              <!-- Number 1: Direct -->
              <div class="white-data-item">
                <div class="data-label-row">
                  <span class="data-sub-label">Direct Hotline</span>
                </div>
                <div class="data-val-row">
                  <a href="tel:+919987586677" class="data-val-link direct-highlight" id="cardTelMobile">+91 99875 86677 (Direct)</a>
                  <button type="button" class="contact-copy-btn" data-copy-target="cardTelMobile" aria-label="Copy Direct Telephone Number" title="Copy Number">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span class="copy-tooltip">Copy</span>
                  </button>
                </div>
              </div>

              <!-- Number 2: Office Landline 1 -->
              <div class="white-data-item">
                <div class="data-val-row">
                  <a href="tel:+912267521183" class="data-val-link" id="cardTel1">+91 22 6752 1183</a>
                  <button type="button" class="contact-copy-btn" data-copy-target="cardTel1" aria-label="Copy Telephone 1" title="Copy Number">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span class="copy-tooltip">Copy</span>
                  </button>
                </div>
              </div>

              <!-- Number 3: Office Landline 2 -->
              <div class="white-data-item">
                <div class="data-val-row">
                  <a href="tel:+912266541028" class="data-val-link" id="cardTel2">+91 22 6654 1028</a>
                  <button type="button" class="contact-copy-btn" data-copy-target="cardTel2" aria-label="Copy Telephone 2" title="Copy Number">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span class="copy-tooltip">Copy</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="white-card-action">
              <a href="tel:+919987586677" class="btn-white-card-primary" aria-label="Call Office Now">
                <span>Call Office Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          <!-- CARD 2: WHATSAPP SUPPORT -->
          <article class="contact-white-card" aria-label="WhatsApp Support">
            <div class="card-icon-circle whatsapp" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            
            <h3 class="white-card-title">WhatsApp Support</h3>
            <p class="white-card-desc">
              Get in touch with our team for technical discussions, quotations and quick assistance.
            </p>

            <div class="white-card-data-box">
              <div class="white-data-item">
                <div class="data-val-row">
                  <a href="https://wa.me/919987586677?text=Hello%20Apollo%20Forge%20%26%20Fitting%2C%20I%20have%20an%20enquiry%20regarding%20industrial%20piping%20materials." target="_blank" rel="noopener noreferrer" class="data-val-link whatsapp-highlight" id="cardWhatsApp">+91 99875 86677</a>
                  <button type="button" class="contact-copy-btn" data-copy-target="cardWhatsApp" aria-label="Copy WhatsApp Number" title="Copy Number">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span class="copy-tooltip">Copy</span>
                  </button>
                </div>
              </div>

              <!-- Active Status Badge -->
              <div class="status-indicator-pill">
                <span class="pulsing-green-dot" aria-hidden="true"></span>
                <span>Active Now for Direct Chat</span>
              </div>
            </div>

            <div class="white-card-action">
              <a href="https://wa.me/919987586677?text=Hello%20Apollo%20Forge%20%26%20Fitting%2C%20I%20have%20an%20enquiry%20regarding%20industrial%20piping%20materials." target="_blank" rel="noopener noreferrer" class="btn-white-card-primary" aria-label="Chat on WhatsApp">
                <span>Chat on WhatsApp</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          <!-- CARD 3: EMAIL ENQUIRIES -->
          <article class="contact-white-card" aria-label="Email Enquiries">
            <div class="card-icon-circle" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            
            <h3 class="white-card-title">Email Enquiries</h3>
            <p class="white-card-desc">
              Share your RFQs, technical specifications, tender documents and product requirements.
            </p>

            <div class="white-card-data-box">
              <div class="white-data-item">
                <div class="data-val-row">
                  <a href="mailto:apollo_forge@yahoo.com?subject=Enquiry%20-%20Apollo%20Forge%20%26%20Fitting" class="data-val-link email-highlight" id="cardEmail">apollo_forge@yahoo.com</a>
                  <button type="button" class="contact-copy-btn" data-copy-target="cardEmail" aria-label="Copy Email Address" title="Copy Email">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span class="copy-tooltip">Copy</span>
                  </button>
                </div>
              </div>

              <!-- Response Time Badge -->
              <div class="status-indicator-pill neutral">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Guaranteed &lt; 24h Response</span>
              </div>
            </div>

            <div class="white-card-action">
              <a href="mailto:apollo_forge@yahoo.com?subject=Enquiry%20-%20Apollo%20Forge%20%26%20Fitting" class="btn-white-card-primary" aria-label="Compose Email">
                <span>Compose Email</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>
        </div>

        <!-- ROW 2: 2 Cards (Centered & Sufficiently Wide) -->
        <div class="contact-cards-row-bottom">

          <!-- CARD 4: HEAD OFFICE -->
          <article class="contact-white-card wide-card" aria-label="Head Office Address">
            <div class="card-icon-circle" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            
            <h3 class="white-card-title">Head Office</h3>
            <p class="white-card-desc">
              Visit our corporate office for business discussions, consultations and enquiries.
            </p>

            <div class="white-card-data-box address-box">
              <div class="white-address-display">
                <span class="address-text-content" id="cardAddressText">Ground Floor, Shop 3, 14 Badsha Bldg, Falkland Rd, Khetwadi, Mumbai 400004</span>
                <button type="button" class="contact-copy-btn" data-copy-target="cardAddressText" aria-label="Copy Office Address" title="Copy Address">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span class="copy-tooltip">Copy</span>
                </button>
              </div>
            </div>

            <div class="white-card-action">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Ground+Floor,+Shop+No.+3,+14+Badsha+Building,+Falkland+Road,+6th+X+Lane,+Khetwadi,+Mumbai+-+400+004,+India" target="_blank" rel="noopener noreferrer" class="btn-white-card-primary" aria-label="Get Directions to Head Office">
                <span>Get Directions</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
              </a>
            </div>
          </article>

          <!-- CARD 5: BUSINESS HOURS -->
          <article class="contact-white-card wide-card" aria-label="Business Hours">
            <div class="card-icon-circle" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            
            <h3 class="white-card-title">Business Hours</h3>
            <p class="white-card-desc">
              Our working schedule for consultations, business enquiries and dispatch coordination.
            </p>

            <div class="white-card-data-box hours-box">
              <div class="hours-schedule-list">
                <div class="hours-row">
                  <span class="hours-day">Monday – Friday</span>
                  <span class="hours-time">9:30 AM – 7:00 PM</span>
                </div>
                <div class="hours-row">
                  <span class="hours-day">Saturday</span>
                  <span class="hours-time">9:30 AM – 6:00 PM</span>
                </div>
                <div class="hours-row highlight-sunday">
                  <span class="hours-day">Sunday</span>
                  <span class="hours-time">24/7 WhatsApp</span>
                </div>
              </div>

              <!-- Dynamic Open Status Badge -->
              <div class="status-indicator-pill open-badge" id="businessHoursStatusBadge">
                <span class="pulsing-green-dot" aria-hidden="true"></span>
                <span>Open Now (IST)</span>
              </div>
            </div>

            <div class="white-card-action">
              <a href="https://wa.me/919987586677?text=Hello%20Apollo%20Forge%20%26%20Fitting%2C%20I%20have%20an%20urgent%20inquiry." target="_blank" rel="noopener noreferrer" class="btn-white-card-primary" aria-label="Connect via WhatsApp">
                <span>Connect on WhatsApp</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>
        </div>

      </div>

    </div>
  </section>

`;

content = content.substring(0, startIndex) + newHeroAndCards + content.substring(endIndex);
fs.writeFileSync(contactHtmlPath, content, 'utf8');
console.log('Successfully updated contact.html!');

