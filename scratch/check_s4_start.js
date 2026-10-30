const fs = require('fs');

const css = fs.readFileSync('contact-rfq.css', 'utf8');
const altS4Idx = css.indexOf('SECTION 4: UNIFIED LOCATION & INQUIRY SECTION');
const start = css.lastIndexOf('/*', altS4Idx);
console.log(css.substring(start, start + 800));

