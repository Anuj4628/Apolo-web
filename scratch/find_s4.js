const fs = require('fs');

const css = fs.readFileSync('contact-rfq.css', 'utf8');
const s4Idx = css.indexOf('/* ==========================================================================\n   SECTION 4: UNIFIED LOCATION & INQUIRY SECTION');
const altS4Idx = css.indexOf('SECTION 4: UNIFIED LOCATION & INQUIRY SECTION');

console.log('s4Idx:', s4Idx, 'altS4Idx:', altS4Idx);

