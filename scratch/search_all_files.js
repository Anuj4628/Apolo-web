const fs = require('fs');
const path = require('path');

const filesToSearch = [
  'index.html',
  'about.html',
  'contact.html',
  'certificate.html',
  'get-quote.html',
  'materials.html',
  'product-materials.html',
  'main.js',
  'catalog-data.js',
  'materials-data.js',
  'vite.config.js'
];

filesToSearch.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const fileHits = [];
  lines.forEach((line, i) => {
    if (line.includes('/products') || line.includes('products/') || line.includes('product-materials')) {
      fileHits.push(`  L${i + 1}: ${line.trim()}`);
    }
  });
  if (fileHits.length > 0) {
    console.log(`\n=== ${file} (${fileHits.length} occurrences) ===`);
    console.log(fileHits.slice(0, 15).join('\n'));
    if (fileHits.length > 15) {
      console.log(`  ... and ${fileHits.length - 15} more`);
    }
  }
});
