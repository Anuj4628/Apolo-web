const fs = require('fs');

['product-materials.html', 'materials.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} (length: ${content.length}) ===`);
  const lines = content.split('\n');
  lines.slice(0, 50).forEach((l, i) => console.log(i + 1, l));
});

