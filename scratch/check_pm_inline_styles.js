const fs = require('fs');

const js = fs.readFileSync('product-materials.js', 'utf8');

const matches = [];
const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('style="') && (l.includes('background') || l.includes('color'))) {
    matches.push({ line: i + 1, text: l.trim() });
  }
});

console.log('Inline style matches in product-materials.js:', matches.length);
matches.forEach(m => console.log(`${m.line}: ${m.text}`));

