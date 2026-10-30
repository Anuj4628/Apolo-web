const { execSync } = require('child_process');
const origCss = execSync('git show HEAD:contact-rfq.css').toString('utf8');

const s4Idx = origCss.indexOf('SECTION 4: UNIFIED LOCATION & INQUIRY SECTION');
const start = origCss.lastIndexOf('/*', s4Idx);
console.log('Original Section 4 to end length:', origCss.length - start);
console.log('Original Section 4 start snippet:');
console.log(origCss.substring(start, start + 600));

