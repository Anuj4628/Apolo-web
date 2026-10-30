const { execSync } = require('child_process');
const origCss = execSync('git show HEAD:contact-rfq.css').toString('utf8');

const lines = origCss.split('\n');
lines.forEach((l, i) => {
  if (l.includes('SECTION') || l.includes('contact-hero') || l.includes('contact-info')) {
    console.log(i + 1, l);
  }
});

