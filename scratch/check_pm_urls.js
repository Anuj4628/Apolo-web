const fs = require('fs');

const code = fs.readFileSync('product-materials.js', 'utf8');
const lines = code.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('/products/')) {
    console.log(`L${idx + 1}: ${line.trim()}`);
  }
});
