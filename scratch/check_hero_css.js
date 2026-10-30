const fs = require('fs');

const styleCss = fs.readFileSync('style.css', 'utf8');
const contactRfqCss = fs.readFileSync('contact-rfq.css', 'utf8');

console.log('style.css has .contact-hero-section:', styleCss.includes('.contact-hero-section'));
console.log('contact-rfq.css has .contact-hero-section:', contactRfqCss.includes('.contact-hero-section'));

if (styleCss.includes('.contact-hero-section')) {
  const idx = styleCss.indexOf('.contact-hero-section');
  console.log('style.css preview:');
  console.log(styleCss.substring(idx, idx + 500));
}

