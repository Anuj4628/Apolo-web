const { execSync } = require('child_process');
const origCss = execSync('git show HEAD:contact-rfq.css').toString('utf8');

const sIdx = origCss.indexOf('SECTION 1: CONTACT HERO');
console.log('Original Section 1 in contact-rfq.css:');
console.log(origCss.substring(sIdx, sIdx + 1200));

