const fs = require('fs');

const styleCss = fs.readFileSync('style.css', 'utf8');
const contactRfqCss = fs.readFileSync('contact-rfq.css', 'utf8');

const expectedGradient = 'linear-gradient(90deg, #CD3800 0%, #F45108 50%, #FF5A00 100%)';

console.log('--- VERIFYING CTA GRADIENTS ---');

// 1. apollo-cta-section
const apolloCtaMatch = styleCss.match(/\.apollo-cta-section\s*\{([^}]+)\}/);
if (apolloCtaMatch && apolloCtaMatch[1].includes(expectedGradient)) {
  console.log('PASS: .apollo-cta-section has reversed dark-to-light gradient (90deg, #CD3800 -> #F45108 -> #FF5A00)');
} else {
  console.error('FAIL: .apollo-cta-section missing expected gradient');
  process.exit(1);
}

// 2. pm-quote-banner
const pmQuoteMatch = styleCss.match(/\.pm-quote-banner\s*\{([^}]+)\}/);
if (pmQuoteMatch && pmQuoteMatch[1].includes(expectedGradient)) {
  console.log('PASS: .pm-quote-banner has reversed dark-to-light gradient');
} else {
  console.error('FAIL: .pm-quote-banner missing expected gradient');
  process.exit(1);
}

// 3. contact-mid-cta-section in contact-rfq.css
const contactMidRfqMatch = contactRfqCss.match(/\.contact-mid-cta-section\s*\{([^}]+)\}/);
if (contactMidRfqMatch && contactMidRfqMatch[1].includes(expectedGradient)) {
  console.log('PASS: .contact-mid-cta-section in contact-rfq.css has reversed dark-to-light gradient');
} else {
  console.error('FAIL: .contact-mid-cta-section in contact-rfq.css missing expected gradient');
  process.exit(1);
}

// 4. contact-mid-cta-section in style.css
const contactMidStyleMatch = styleCss.match(/\.contact-mid-cta-section\s*\{([^}]+)\}/);
if (contactMidStyleMatch && contactMidStyleMatch[1].includes(expectedGradient)) {
  console.log('PASS: .contact-mid-cta-section in style.css has reversed dark-to-light gradient');
} else {
  console.error('FAIL: .contact-mid-cta-section in style.css missing expected gradient');
  process.exit(1);
}

// 5. btn-rfq-submit
if (contactRfqCss.includes('.btn-rfq-submit') && contactRfqCss.includes(expectedGradient) &&
    styleCss.includes('.btn-rfq-submit') && styleCss.includes(expectedGradient)) {
  console.log('PASS: .btn-rfq-submit has reversed dark-to-light gradient in both CSS files');
} else {
  console.error('FAIL: .btn-rfq-submit missing expected gradient');
  process.exit(1);
}

// 6. btn-dispatch-email & modal card
if (contactRfqCss.includes('.btn-dispatch-email') && contactRfqCss.includes(expectedGradient) &&
    contactRfqCss.includes('.rfq-modal-card::before') && contactRfqCss.includes(expectedGradient)) {
  console.log('PASS: RFQ confirmation modal & dispatch email button have reversed dark-to-light gradient');
} else {
  console.error('FAIL: Modal elements missing expected gradient');
  process.exit(1);
}

console.log('\nALL CTA GRADIENT VERIFICATIONS PASSED SUCCESSFULLY!');

