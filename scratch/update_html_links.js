const fs = require('fs');

const linkReplacements = [
  // Flanges (manufactured-in-mumbai)
  { from: 'href="/products/flanges"', to: 'href="/products/flanges-manufactured-in-mumbai"' },
  // Forged Fittings (stockist-in-mumbai)
  { from: 'href="/products/forge-fittings"', to: 'href="/products/forged-fittings-stockist-in-mumbai"' },
  { from: 'href="/products/forged-fittings"', to: 'href="/products/forged-fittings-stockist-in-mumbai"' },
  // Butt Weld Fittings (manufactured-in-mumbai)
  { from: 'href="/products/butt-weld-fittings"', to: 'href="/products/butt-weld-fittings-manufactured-in-mumbai"' },
  // Fasteners (manufactured-in-mumbai)
  { from: 'href="/products/fasteners"', to: 'href="/products/fasteners-manufactured-in-mumbai"' },
  // Pipes & Tubes (stockist-in-mumbai)
  { from: 'href="/products/pipes-tubes"', to: 'href="/products/pipes-tubes-stockist-in-mumbai"' },
  // Sheets & Plates (stockist-in-mumbai)
  { from: 'href="/products/sheets-plates"', to: 'href="/products/sheets-plates-stockist-in-mumbai"' },
  // Rods & Bars (manufactured-in-mumbai)
  { from: 'href="/products/rods-bars"', to: 'href="/products/rods-bars-manufactured-in-mumbai"' },
  // Dairy & Pharma Fittings (stockist-in-mumbai)
  { from: 'href="/products/dairy-pharma-fittings"', to: 'href="/products/dairy-pharma-fittings-stockist-in-mumbai"' },
  // Flat Bars (manufactured-in-mumbai)
  { from: 'href="/products/flat-bars"', to: 'href="/products/flat-bars-manufactured-in-mumbai"' },
  // Circle (stockist-in-mumbai)
  { from: 'href="/products/circle"', to: 'href="/products/circle-stockist-in-mumbai"' }
];

const htmlFiles = [
  'index.html',
  'about.html',
  'certificate.html',
  'contact.html',
  'get-quote.html',
  'materials.html',
  'product-materials.html'
];

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let count = 0;
  linkReplacements.forEach(r => {
    const occurrences = content.split(r.from).length - 1;
    if (occurrences > 0) {
      count += occurrences;
      content = content.split(r.from).join(r.to);
    }
  });
  console.log(`${file}: replaced ${count} links`);
  fs.writeFileSync(file, content, 'utf8');
});

console.log('HTML files update complete.');
