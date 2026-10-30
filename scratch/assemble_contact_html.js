const fs = require('fs');
const { execSync } = require('child_process');

const origContact = execSync('git show HEAD:contact.html').toString('utf8');
const currentContact = fs.readFileSync('contact.html', 'utf8');

// 1. Get header from current contact.html (has proper navbar with updated logo size)
const navEndIdx = currentContact.indexOf('</header>') + 9;
const topHtml = currentContact.substring(0, navEndIdx).replace('class="contact-page-wrapper"', 'class="light-industrial-theme"');

// 2. Extract original Hero Section from git
const heroStart = origContact.indexOf('<section class="contact-hero-section"');
const heroEnd = origContact.indexOf('</section>', heroStart) + 10;
const originalHeroSection = origContact.substring(heroStart, heroEnd);

// 3. Build Section 2: Get in Touch Section with 5 Medium-Sized Balanced Cards
const getInTouchSection = `
  <!-- ==============================================
       SECTION 2: GET IN TOUCH (EXCLUSIVE ORANGE THEME)
       Medium-Sized Balanced White Contact Cards
       ============================================== -->
  <section class="contact-get-in-touch-section" id="contactInfoSection" aria-label="Get in Touch with Apollo Forge &amp; Fitting">
    <div class="contact-cards-container">

      <!-- Centered Header -->
      <div class="contact-get-in-touch-header">
        <div class="get-in-touch-eyebrow">
          <span class="eyebrow-pulse-dot" aria-hidden="true"></span>
          <span>COMMUNICATION CHANNELS</span>
        </div>
        <h2 class="get-in-touch-title">GET IN TOUCH</h2>
        <p class="get-in-touch-desc">
          Connect with Apollo Forge and Fitting for product enquiries, technical assistance, quotations and business collaborations.
        </p>
      </div>

      <!-- 5 Medium-Sized Balanced White Contact Cards Grid -->
      <div class="contact-cards-grid">

        <!-- CARD 1: CALL US (Compact) -->
        <article class="contact-white-card card-call" aria-label="Telephone Enquiries">
          <div class="card-icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          
          <h3 class="white-card-title">Call Us</h3>
          <p class="white-card-desc">
            Product enquiries, availability and order assistance.
          </p>

          <div class="white-card-data-box">
            <div class="white-data-item">
              <span class="data-sub-label">Direct Hotline</span>
              <div class="data-val-row">
                <a href="tel:+919987586677" class="data-val-link direct-highlight" id="cardTelMobile">+91 99875 86677 (Direct)</a>
                <button type="button" class="contact-copy-btn" data-copy-target="cardTelMobile" aria-label="Copy Direct Telephone Number" title="Copy Number">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span class="copy-tooltip">Copy</span>
                </button>
              </div>
            </div>

            <div class="white-data-item">
              <span class="data-sub-label">Office Desk 1</span>
              <div class="data-val-row">
                <a href="tel:+912267521183" class="data-val-link" id="cardTel1">+91 22 6752 1183</a>
                <button type="button" class="contact-copy-btn" data-copy-target="cardTel1" aria-label="Copy Telephone 1" title="Copy Number">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span class="copy-tooltip">Copy</span>
                </button>
              </div>
            </div>

            <div class="white-data-item">
              <span class="data-sub-label">Office Desk 2</span>
              <div class="data-val-row">
                <a href="tel:+912266541028" class="data-val-link" id="cardTel2">+91 22 6654 1028</a>
                <button type="button" class="contact-copy-btn" data-copy-target="cardTel2" aria-label="Copy Telephone 2" title="Copy Number">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </article>

        <!-- CARD 2: WHATSAPP SUPPORT (Compact) -->
        <article class="contact-white-card card-whatsapp" aria-label="WhatsApp Support">
          <div class="card-icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          
          <h3 class="white-card-title">WhatsApp Support</h3>
          <p class="white-card-desc">
            Direct chat for drawings, specs and instant quotes.
          </p>

          <div class="white-card-data-box">
            <div class="white-data-item">
              <span class="data-sub-label">Instant Messaging Hotline</span>
              <div class="data-val-row">
                <a href="https://wa.me/919987586677?text=Hello%20Apollo%20Forge%20%26%20Fitting%2C%20I%20have%20an%20enquiry." target="_blank" rel="noopener noreferrer" class="data-val-link whatsapp-highlight" id="cardWhatsApp">+91 99875 86677</a>
                <button type="button" class="contact-copy-btn" data-copy-target="cardWhatsApp" aria-label="Copy WhatsApp Number" title="Copy Number">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span class="copy-tooltip">Copy</span>
                </button>
              </div>
            </div>

            <div class="status-indicator-pill active-badge">
              <span class="pulsing-green-dot" aria-hidden="true"></span>
              <span>Active Now &bull; Typical reply &lt; 15 mins</span>
            </div>
          </div>

          <div class="white-card-action">
            <a href="https://wa.me/919987586677?text=Hello%20Apollo%20Forge%20%26%20Fitting%2C%20I%20have%20an%20enquiry." target="_blank" rel="noopener noreferrer" class="btn-white-card-primary" aria-label="Chat on WhatsApp">
              <span>Chat on WhatsApp</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </article>

        <!-- CARD 3: EMAIL ENQUIRIES (Compact) -->
        <article class="contact-white-card card-email" aria-label="Email Inquiries">
          <div class="card-icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          
          <h3 class="white-card-title">Email Enquiries</h3>
          <p class="white-card-desc">
            Technical tenders, POs, mill certificates and formal RFQs.
          </p>

          <div class="white-card-data-box">
            <div class="white-data-item">
              <span class="data-sub-label">Official Inquiries Inbox</span>
              <div class="data-val-row">
                <a href="mailto:apollo_forge@yahoo.com?subject=Industrial%20Inquiry%20-%20Apollo%20Forge%20%26%20Fitting" class="data-val-link email-highlight" id="cardEmail">apollo_forge@yahoo.com</a>
                <button type="button" class="contact-copy-btn" data-copy-target="cardEmail" aria-label="Copy Email Address" title="Copy Email">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span class="copy-tooltip">Copy</span>
                </button>
              </div>
            </div>

            <div class="status-indicator-pill response-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 14 14"></polyline>
              </svg>
              <span>Guaranteed &lt; 24h Response</span>
            </div>
          </div>

          <div class="white-card-action">
            <a href="mailto:apollo_forge@yahoo.com?subject=Industrial%20Inquiry%20-%20Apollo%20Forge%20%26%20Fitting" class="btn-white-card-primary" aria-label="Compose Email to Apollo">
              <span>Compose Email</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </article>

        <!-- CARD 4: HEAD OFFICE (Wider) -->
        <article class="contact-white-card card-office" aria-label="Head Office Address">
          <div class="card-icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          
          <h3 class="white-card-title">Head Office</h3>
          <p class="white-card-desc">
            Visit our corporate office for business discussions and consultations.
          </p>

          <div class="white-card-data-box address-box">
            <span class="data-sub-label">Mumbai Headquarters</span>
            <div class="white-address-display">
              <span class="address-text-content" id="cardAddressText">Ground Floor, Shop 3, 14 Badsha Bldg, Falkland Rd, Khetwadi, Mumbai 400004</span>
              <button type="button" class="contact-copy-btn" data-copy-target="cardAddressText" aria-label="Copy Office Address" title="Copy Address">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span class="copy-tooltip">Copy</span>
              </button>
            </div>
          </div>

          <div class="white-card-action">
            <a href="https://www.google.com/maps/dir/?api=1&amp;destination=Ground+Floor,+Shop+No.+3,+14+Badsha+Building,+Falkland+Road,+6th+X+Lane,+Khetwadi,+Mumbai+-+400+004,+India" target="_blank" rel="noopener noreferrer" class="btn-white-card-primary" aria-label="Get Directions to Head Office">
              <span>Get Directions</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
            </a>
          </div>
        </article>

        <!-- CARD 5: BUSINESS HOURS (Wider) -->
        <article class="contact-white-card card-hours" aria-label="Business Hours">
          <div class="card-icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          
          <h3 class="white-card-title">Business Hours</h3>
          <p class="white-card-desc">
            Consultations, order processing and dispatch coordination.
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </article>

      </div>

    </div>
  </section>
`;

// 4. Extract Section 3 (Map & Inquiry) and the rest from current contact.html
const dualStart = currentContact.indexOf('<section class="contact-dual-section"');
const dualAndRest = currentContact.substring(dualStart);

// 5. Combine everything
const completeNewContactHtml = topHtml + '\n\n' + originalHeroSection + '\n\n' + getInTouchSection + '\n\n' + dualAndRest;

fs.writeFileSync('contact.html', completeNewContactHtml, 'utf8');
console.log('Successfully wrote updated contact.html!');

