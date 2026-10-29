const fs = require('fs');
const path = require('path');

let errors = [];
let passes = [];

function assert(condition, message) {
  if (!condition) {
    errors.push('FAIL: ' + message);
  } else {
    passes.push('PASS: ' + message);
  }
}

// 1. Verify CTA solid background in style.css
const styleCss = fs.readFileSync('style.css', 'utf8');
const ctaSectionMatch = styleCss.match(/\.apollo-cta-section\s*\{([^}]+)\}/);
assert(ctaSectionMatch, 'Found .apollo-cta-section in style.css');
if (ctaSectionMatch) {
  const ctaBody = ctaSectionMatch[1];
  assert(ctaBody.includes('background-image: none'), 'CTA section has background-image: none');
  assert(!ctaBody.includes('#CD3800'), 'CTA section removed #CD3800 dark gradient stop');
  assert(!ctaBody.includes('linear-gradient'), 'CTA section removed linear-gradient');
  assert(ctaBody.includes('var(--apollo-orange'), 'CTA section uses var(--apollo-orange)');
}

// 2. Verify Materials Page Spacing
assert(styleCss.includes('.page-materials .pm-quote-section'), 'style.css has scoped .page-materials .pm-quote-section rule');
assert(styleCss.includes('padding-bottom: clamp(68px'), 'style.css has generous gap above footer for materials page');

const materialsHtml = fs.readFileSync('materials.html', 'utf8');
assert(materialsHtml.includes('page-materials'), 'materials.html has page-materials body class');
assert(materialsHtml.includes('materials-page-main'), 'materials.html has materials-page-main class');

const pmJs = fs.readFileSync('product-materials.js', 'utf8');
assert(pmJs.includes('pm-quote-section'), 'product-materials.js wraps quote banner in pm-quote-section');

// 3. Verify Contact Page Location Left, Inquiry Form Right
const contactHtml = fs.readFileSync('contact.html', 'utf8');
assert(contactHtml.includes('class="contact-dual-section"'), 'contact.html has contact-dual-section');
assert(contactHtml.includes('id="locationSection"'), 'contact.html has id="locationSection"');
assert(contactHtml.includes('id="rfqSection"'), 'contact.html has id="rfqSection"');
assert(contactHtml.includes('OUR LOCATION'), 'contact.html has OUR LOCATION heading');
assert(contactHtml.includes('SEND AN INQUIRY'), 'contact.html has SEND AN INQUIRY heading');
assert(contactHtml.includes('Ground Floor, Shop No. 3, 14 Badsha Building'), 'contact.html preserves exact office address');
assert(contactHtml.includes('https://www.google.com/maps/dir/?api=1&destination='), 'contact.html has functional Get Directions link');
assert(contactHtml.includes('contact-map-iframe-element'), 'contact.html has embedded Google Maps iframe');
assert(contactHtml.includes('id="rfqForm"'), 'contact.html preserves rfqForm id');
assert(contactHtml.includes('id="rfqFullName"'), 'contact.html preserves rfqFullName');
assert(contactHtml.includes('id="rfqEmail"'), 'contact.html preserves rfqEmail');
assert(contactHtml.includes('id="rfqPhone"'), 'contact.html preserves rfqPhone');
assert(contactHtml.includes('id="rfqCompany"'), 'contact.html preserves rfqCompany');
assert(contactHtml.includes('id="rfqProductCategory"'), 'contact.html preserves rfqProductCategory');
assert(contactHtml.includes('id="rfqGrade"'), 'contact.html preserves rfqGrade');
assert(contactHtml.includes('id="rfqRequirement"'), 'contact.html preserves rfqRequirement');
assert(contactHtml.includes('id="rfqSubmitBtn"'), 'contact.html preserves rfqSubmitBtn');
assert(contactHtml.includes('id="rfqSuccessModal"'), 'contact.html preserves rfqSuccessModal');

// 4. Verify CTA banner across pages
const pages = ['index.html', 'about.html', 'certificate.html', 'contact.html'];
pages.forEach(p => {
  const pageContent = fs.readFileSync(p, 'utf8');
  assert(pageContent.includes('apollo-cta-section'), `${p} includes apollo-cta-section`);
});

// Output results
console.log('--- TEST RESULTS ---');
passes.forEach(p => console.log(p));
if (errors.length > 0) {
  console.log('\n--- ERRORS ---');
  errors.forEach(e => console.error(e));
  process.exit(1);
} else {
  console.log(`\nALL ${passes.length} CHECKS PASSED!`);
}

