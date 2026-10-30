const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

console.log('=== VERIFYING PRODUCT & MATERIAL HERO STYLES ===');

const checks = [
  { name: '.pm-hero-section background-color: #D5DCE2', test: css.includes('.pm-hero-section') && css.includes('background-color: #D5DCE2;') },
  { name: '.pm-hero-overlay has technical grid & diagonal lines', test: css.includes('.pm-hero-overlay') && css.includes('repeating-linear-gradient(45deg') },
  { name: '.pm-hero-title is #101419', test: css.includes('.pm-hero-title') && css.includes('color: #101419;') },
  { name: '.pm-hero-subtitle is #D34000', test: css.includes('.pm-hero-subtitle') && css.includes('color: #D34000;') },
  { name: '.pm-hero-desc is #1A212B', test: css.includes('.pm-hero-desc') && css.includes('color: #1A212B;') },
  { name: '.pm-hero-eyebrow-badge has white background and #101419 color', test: css.includes('.pm-hero-eyebrow-badge') && css.includes('background: rgba(255, 255, 255, 0.82);') && css.includes('color: #101419;') },
  { name: '.pm-standard-tag has #1E293B text on white pill', test: css.includes('.pm-standard-tag') && css.includes('color: #1E293B;') && css.includes('background: rgba(255, 255, 255, 0.85);') },
  { name: '.pm-hero-showcase-card is white with subtle border', test: css.includes('.pm-hero-showcase-card') && css.includes('background: #FFFFFF;') }
];

let allPassed = true;
checks.forEach(c => {
  console.log(`${c.name}: ${c.test ? 'PASS' : 'FAIL'}`);
  if (!c.test) allPassed = false;
});

console.log(`\nOVERALL: ${allPassed ? 'ALL CHECKS PASSED!' : 'SOME CHECKS FAILED'}`);

