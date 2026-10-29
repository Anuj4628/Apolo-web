const fs = require('fs');

const contactHtmlPath = 'contact.html';
let content = fs.readFileSync(contactHtmlPath, 'utf8');

const startMarker = '<!-- ==============================================\r\n       4. LOCATION & GOOGLE MAPS SECTION';
const endMarker = '<!-- ==============================================\r\n       RFQ CONFIRMATION MODAL';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in contact.html');
  process.exit(1);
}

const replacement = `<!-- ==============================================
       4. LOCATION & INQUIRY SECTION (Side-by-Side Two-Column)
       Left: Office Location & Google Maps | Right: Inquiry Form
       ============================================== -->
  <section class="contact-dual-section" id="locationSection" aria-label="Apollo Location and Inquiry Desk">
    <div class="contact-dual-container">
      
      <div class="contact-dual-grid">
        <!-- LEFT COLUMN: OUR LOCATION -->
        <div class="contact-dual-col contact-location-col">
          <div class="contact-location-card">
            <!-- Header -->
            <div class="contact-col-header">
              <div class="contact-col-eyebrow">
                <span class="col-eyebrow-bar" aria-hidden="true"></span>
                <span>PHYSICAL HEADQUARTERS</span>
              </div>
              <h2 class="contact-col-title">OUR LOCATION</h2>
              <p class="contact-col-subtitle">
                Visit Apollo Forge and Fitting or plan your route to our office in Mumbai's metal &amp; engineering district.
              </p>
            </div>

            <!-- Business Office Address Details -->
            <div class="contact-location-address-box">
              <div class="location-address-row">
                <div class="location-icon-pin" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="location-address-text">
                  <span class="location-brand-title">Apollo Forge and Fitting</span>
                  <p class="location-address-line">
                    Ground Floor, Shop No. 3, 14 Badsha Building, Falkland Road, 6th X Lane, Khetwadi, Mumbai - 400 004, India.
                  </p>
                </div>
              </div>

              <!-- Action & Hours Bar -->
              <div class="location-actions-bar">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Ground+Floor,+Shop+No.+3,+14+Badsha+Building,+Falkland+Road,+6th+X+Lane,+Khetwadi,+Mumbai+-+400+004,+India" target="_blank" rel="noopener noreferrer" class="btn-location-directions" aria-label="Get Directions to Apollo Forge and Fitting on Google Maps">
                  <span>GET DIRECTIONS</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                </a>
                <div class="location-timing-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Mon–Sat: 9:30 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

            <!-- Embedded Functional Google Map -->
            <div class="contact-map-embed-wrapper">
              <iframe
                class="contact-map-iframe-element"
                title="Apollo Forge &amp; Fitting Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.578619623637!2d72.8214154!3d18.9610636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6c039987f1%3A0x6b107e3a241477ea!2sFalkland%20Rd%2C%20Khetwadi%2C%20Mumbai%2C%20Maharashtra%20400004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: INQUIRY FORM -->
        <div class="contact-dual-col contact-form-col" id="rfqSection">
          <div class="contact-inquiry-card">
            <!-- Header -->
            <div class="contact-col-header">
              <div class="contact-col-eyebrow">
                <span class="col-eyebrow-bar" aria-hidden="true"></span>
                <span>RAPID COMMERCIAL QUOTATION</span>
              </div>
              <h2 class="contact-col-title">SEND AN INQUIRY</h2>
              <p class="contact-col-subtitle">
                Submit your product specifications, piping dimensions, and material requirements for a formal quotation within 24 hours.
              </p>
            </div>

            <!-- Estimating Desk Bar -->
            <div class="rfq-panel-header-bar">
              <div class="rfq-panel-status">
                <span class="rfq-pulse-indicator" aria-hidden="true"></span>
                <span>ESTIMATING DESK ACTIVE</span>
                <span class="rfq-panel-status-sep" aria-hidden="true">|</span>
                <span class="rfq-panel-status-sub">MUMBAI WORKS &amp; EXPORT SALES</span>
              </div>
              <div class="rfq-panel-turnaround">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>AVG. TURNAROUND: <strong>2–4 HOURS</strong></span>
              </div>
            </div>

            <!-- Form -->
            <form id="rfqForm" novalidate>
              <div class="rfq-grid-2" style="margin-bottom: 18px;">
                <!-- Name * -->
                <div class="rfq-form-group">
                  <label for="rfqFullName" class="rfq-label">
                    <span>Full Name</span>
                    <span class="rfq-required">*</span>
                  </label>
                  <input type="text" id="rfqFullName" class="rfq-input" placeholder="Your full name" required />
                  <span class="rfq-error-msg">Please enter your name.</span>
                </div>

                <!-- Email * -->
                <div class="rfq-form-group">
                  <label for="rfqEmail" class="rfq-label">
                    <span>Email Address</span>
                    <span class="rfq-required">*</span>
                  </label>
                  <input type="email" id="rfqEmail" class="rfq-input" placeholder="name@company.com" required />
                  <span class="rfq-error-msg">Please enter a valid email address.</span>
                </div>

                <!-- Phone Number * -->
                <div class="rfq-form-group">
                  <label for="rfqPhone" class="rfq-label">
                    <span>Phone / WhatsApp</span>
                    <span class="rfq-required">*</span>
                  </label>
                  <input type="tel" id="rfqPhone" class="rfq-input" placeholder="+91 98765 43210" required />
                  <span class="rfq-error-msg">Please enter your phone number.</span>
                </div>

                <!-- Company Name (optional) -->
                <div class="rfq-form-group">
                  <label for="rfqCompany" class="rfq-label">
                    <span>Company Name</span>
                    <span class="rfq-optional-tag">(optional)</span>
                  </label>
                  <input type="text" id="rfqCompany" class="rfq-input" placeholder="Company or organization" />
                </div>
              </div>

              <!-- Product / Material Family * -->
              <div class="rfq-form-group" style="margin-bottom: 18px;">
                <label for="rfqProductCategory" class="rfq-label">
                  <span>Product or Material Family</span>
                  <span class="rfq-required">*</span>
                </label>
                <div class="rfq-select-wrap">
                  <select id="rfqProductCategory" class="rfq-select" required>
                    <option value="" disabled selected>Select product or material family</option>
                    <optgroup label="Industrial Piping Products">
                      <option value="Flanges">Flanges (WNRF, Blind, Slip-On, Socket Weld, Lap Joint, Threaded)</option>
                      <option value="Forge Fittings">Forge Fittings (Elbows, Tees, Unions, Couplings, Plugs)</option>
                      <option value="Butt Weld Fittings">Butt Weld Fittings (Elbows, Reducers, Tees, Caps)</option>
                      <option value="Fasteners">Fasteners (High Tensile Studs, Heavy Hex Nuts, Bolts)</option>
                      <option value="Pipes & Tubes">Pipes &amp; Tubes (Seamless &amp; Welded Industrial Piping)</option>
                      <option value="Sheets & Plates">Sheets &amp; Plates (Hot/Cold Rolled, Boiler Quality)</option>
                      <option value="Rods & Bars">Rods &amp; Bars (Round, Hex, Square, Shafts)</option>
                      <option value="Dairy & Pharma Fittings">Dairy &amp; Pharma Fittings (Sanitary Triclover, Ferrule Sets)</option>
                      <option value="Flat Bars">Flat Bars</option>
                      <option value="Circle">Circle (Cut Pieces &amp; Blanks)</option>
                    </optgroup>
                    <optgroup label="Material Families">
                      <option value="Stainless Steel">Stainless Steel (304, 304L, 316, 316L, 321, 347, 904L)</option>
                      <option value="Carbon Steel">Carbon Steel (ASTM A105, A234 WPB, A350 LF2)</option>
                      <option value="Alloy Steel">Alloy Steel (ASTM A182 F11, F22, F5, F9, F91)</option>
                      <option value="High Alloy Steel">High Alloy Steel (17-4PH, SMO 254, Nitronic 50/60)</option>
                      <option value="Nickel Alloys">Nickel Alloys (Inconel 600/625/718, Monel 400, Hastelloy C276)</option>
                      <option value="Copper / Titanium / Aluminium">Copper, Cupro Nickel, Titanium Gr 2/5, Aluminium Alloys</option>
                      <option value="Duplex & Super Duplex">Duplex &amp; Super Duplex (UNS S31803 / S32205 / S32750 / 2205 / 2507)</option>
                    </optgroup>
                  </select>
                  <svg class="rfq-select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
                <span class="rfq-error-msg">Please select a product or material.</span>
              </div>

              <!-- Component Specification / Grade (optional) -->
              <div class="rfq-form-group" style="margin-bottom: 18px;">
                <label for="rfqGrade" class="rfq-label">
                  <span>Component Specification / Grade</span>
                  <span class="rfq-optional-tag">(optional)</span>
                </label>
                <input type="text" id="rfqGrade" class="rfq-input" placeholder="e.g. ASTM A105, SS 316L, Class 3000, SCH 40, DIN / EN standard" />
              </div>

              <!-- Requirement / Message * -->
              <div class="rfq-form-group" style="margin-bottom: 22px;">
                <label for="rfqRequirement" class="rfq-label">
                  <span>Requirement / Message</span>
                  <span class="rfq-required">*</span>
                </label>
                <textarea
                  id="rfqRequirement"
                  class="rfq-textarea rfq-large-textarea"
                  style="min-height: 120px;"
                  placeholder="Please enter technical requirements, specifications, dimensions, tolerances, quantity &amp; delivery timeline..."
                  required
                ></textarea>
                <span class="rfq-error-msg">Please describe your requirement or specifications.</span>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn-clean-rfq-submit" id="rfqSubmitBtn">
                <span>SEND INQUIRY</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <!-- Security & Compliance Assurance Line -->
              <div class="rfq-security-strip">
                <div class="rfq-security-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <span>Strict NDA &amp; Technical IP Protection</span>
                </div>
                <span class="rfq-security-dot" aria-hidden="true">•</span>
                <div class="rfq-security-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>EN 10204 3.1 &amp; MTC Traceability</span>
                </div>
                <span class="rfq-security-dot" aria-hidden="true">•</span>
                <div class="rfq-security-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  <span>Instant WhatsApp &amp; Email Dispatch</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </section>

  `;

// Normalize replacement to CRLF
const crlfReplacement = replacement.replace(/\r?\n/g, '\r\n');

const newContent = content.substring(0, startIndex) + crlfReplacement + content.substring(endIndex);
fs.writeFileSync(contactHtmlPath, newContent, 'utf8');
console.log('Successfully updated contact.html!');

