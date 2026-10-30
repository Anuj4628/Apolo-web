const fs = require('fs');

const html = fs.readFileSync('contact.html', 'utf8');
const css = fs.readFileSync('contact-rfq.css', 'utf8');

console.log('=== VERIFYING SECTION ORDER IN contact.html ===');
const heroPos = html.indexOf('id="contactHeroSection"');
const touchPos = html.indexOf('id="contactInfoSection"');
const dualPos = html.indexOf('id="locationSection"');
const rfqPos = html.indexOf('id="rfqSection"');

console.log('Hero Section pos:', heroPos);
console.log('Get in Touch Section pos:', touchPos);
console.log('Map (Location) Section pos:', dualPos);
console.log('Inquiry (RFQ) Section pos:', rfqPos);

if (heroPos < touchPos && touchPos < dualPos && dualPos <= rfqPos) {
  console.log('PASS: Exact section order confirmed (Hero -> Get in Touch -> Map -> Inquiry)!');
} else {
  console.error('FAIL: Section order is incorrect!');
}

console.log('\n=== VERIFYING BACKGROUNDS ===');
console.log('Body does NOT have orange wrapper:', !html.includes('contact-page-wrapper'));
console.log('Get in Touch has orange gradient:', css.includes('.contact-get-in-touch-section') && css.includes('linear-gradient(135deg, #FF6600 0%, #F55200 45%, #D83E00 100%)'));
console.log('Dual Section has white background:', css.includes('.contact-dual-section') && css.includes('background-color: #FFFFFF'));

console.log('\n=== VERIFYING 5 CARDS IN contact.html ===');
const cards = ['card-call', 'card-whatsapp', 'card-email', 'card-office', 'card-hours'];
cards.forEach(c => {
  console.log(`Card [${c}]: ${html.includes(c) ? 'FOUND' : 'MISSING'}`);
});

