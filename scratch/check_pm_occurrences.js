const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

const classes = [
  '.pm-hero-section',
  '.pm-hero-overlay',
  '.pm-hero-title',
  '.pm-hero-subtitle',
  '.pm-hero-desc',
  '.pm-hero-eyebrow-badge',
  '.pm-standard-tag',
  '.pm-hero-showcase-card',
  '.pm-showcase-media',
  '.pm-showcase-tag'
];

classes.forEach(c => {
  const matches = (css.match(new RegExp('\\' + c, 'g')) || []).length;
  console.log(`${c}: ${matches} occurrences`);
});

