const { execSync } = require('child_process');
const origCss = execSync('git show HEAD:contact-rfq.css').toString('utf8');

const sIdx = origCss.indexOf('SECTION 1: CONTACT HERO');
const endIdx = origCss.indexOf('SECTION 2: 5 COMPACT', sIdx);
console.log(origCss.substring(sIdx, endIdx));

