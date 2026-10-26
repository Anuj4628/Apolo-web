const fs = require('fs');

const pmJs = fs.readFileSync('product-materials.js', 'utf8');
const lines = pmJs.split('\n');
console.log('Total lines in product-materials.js:', lines.length);

const hits = [];
lines.forEach((line, i) => {
  if (line.includes('products/') || line.includes('/products') || line.includes('url:') || line.includes('href') || line.includes('navigate(')) {
    hits.push(`${i + 1}: ${line.trim()}`);
  }
});
console.log('Matches in product-materials.js:');
console.log(hits.slice(0, 50).join('\n'));
if (hits.length > 50) {
  console.log(`... and ${hits.length - 50} more`);
}
