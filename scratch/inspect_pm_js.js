const fs = require('fs');

const js = fs.readFileSync('product-materials.js', 'utf8');
const lines = js.split('\n');
console.log('product-materials.js total lines:', lines.length);

lines.forEach((l, i) => {
  if (l.includes('pm-hero-section') || l.includes('renderHero') || l.includes('hero') || l.includes('renderProduct') || l.includes('renderMaterial')) {
    console.log(i + 1, l.substring(0, 100));
  }
});

