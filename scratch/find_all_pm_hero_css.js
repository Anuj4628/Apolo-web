const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');
const pmHeroLines = [];
lines.forEach((l, i) => {
  if (l.includes('pm-hero') || l.includes('pm-showcase')) {
    pmHeroLines.push({ line: i + 1, text: l });
  }
});

console.log('Found occurrences:', pmHeroLines.length);
pmHeroLines.forEach(item => console.log(`${item.line}: ${item.text}`));

