const fs = require('fs');

const files = [
  'index.html',
  'about.html',
  'certificate.html',
  'contact.html',
  'get-quote.html',
  'materials.html',
  'product-materials.html'
];

const uniqueProductLinks = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/href="\/products\/[^"]*"/g) || [];
  matches.forEach(m => {
    const link = m.replace('href="', '').replace('"', '');
    uniqueProductLinks.add(link);
  });
});

console.log('Unique /products/... links across all HTML files:');
console.log(Array.from(uniqueProductLinks).sort());
