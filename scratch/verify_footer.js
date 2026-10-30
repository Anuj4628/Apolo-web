const fs = require('fs');

const pages = [
  'index.html',
  'about.html',
  'certificate.html',
  'contact.html',
  'get-quote.html',
  'materials.html',
  'product-materials.html'
];

let passes = [];
let errors = [];

function assert(cond, msg) {
  if (cond) passes.push('PASS: ' + msg);
  else errors.push('FAIL: ' + msg);
}

// Check style.css
const styleCss = fs.readFileSync('style.css', 'utf8');
const footerMatch = styleCss.match(/\.apollo-footer\s*\{([^}]+)\}/);
assert(footerMatch, '.apollo-footer found in style.css');
if (footerMatch) {
  const body = footerMatch[1];
  assert(body.includes('#9A9B99'), '.apollo-footer background-color is set to #9A9B99');
  assert(!body.includes('#0C1017'), '.apollo-footer removed old dark #0C1017 background');
}

// Check that each page has the footer and links to style.css
pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  assert(content.includes('class="apollo-footer"'), `${p} contains apollo-footer`);
  assert(content.includes('style.css'), `${p} links to style.css`);
});

// Output
console.log('--- VERIFICATION RESULTS ---');
passes.forEach(p => console.log(p));
if (errors.length > 0) {
  console.log('\n--- ERRORS ---');
  errors.forEach(e => console.error(e));
  process.exit(1);
} else {
  console.log(`\nALL ${passes.length} CHECKS PASSED!`);
}

