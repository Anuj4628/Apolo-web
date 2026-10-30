const fs = require('fs');

const contactHtml = fs.readFileSync('contact.html', 'utf8');
const contactJs = fs.readFileSync('contact-rfq.js', 'utf8');
const contactCss = fs.readFileSync('contact-rfq.css', 'utf8');

console.log('--- Checking contact-rfq.js getElementById calls ---');
const jsMatches = contactJs.match(/getElementById\(['"]([^'"]+)['"]\)/g) || [];
const jsIds = jsMatches.map(m => m.replace(/getElementById\(['"]([^'"]+)['"]\)/, '$1'));
const uniqueJsIds = [...new Set(jsIds)];

uniqueJsIds.forEach(id => {
  const inHtml = contactHtml.includes(`id="${id}"`) || contactHtml.includes(`id='${id}'`);
  console.log(`ID [${id}]: ${inHtml ? 'FOUND in HTML' : 'MISSING IN HTML'}`);
});

console.log('\n--- Checking 5 Contact Cards in contact.html ---');
const cards = [
  'CALL US',
  'WHATSAPP SUPPORT',
  'EMAIL ENQUIRIES',
  'HEAD OFFICE',
  'BUSINESS HOURS'
];
cards.forEach(c => {
  const found = contactHtml.toUpperCase().includes(c);
  console.log(`Card [${c}]: ${found ? 'FOUND' : 'MISSING'}`);
});

console.log('\n--- Checking CSS Rules in contact-rfq.css ---');
const cssClasses = [
  '.contact-page-wrapper',
  '.contact-main-hero-section',
  '.contact-cards-layout',
  '.contact-cards-row-top',
  '.contact-cards-row-bottom',
  '.contact-white-card',
  '.card-icon-circle',
  '.white-card-title',
  '.white-card-desc',
  '.white-card-data-box',
  '.btn-white-card-primary'
];
cssClasses.forEach(cls => {
  const found = contactCss.includes(cls);
  console.log(`CSS class [${cls}]: ${found ? 'FOUND' : 'MISSING'}`);
});

