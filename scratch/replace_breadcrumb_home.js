const fs = require('fs');

let code = fs.readFileSync('product-materials.js', 'utf8');
code = code.split("url: 'index.html'").join("url: '/'");
fs.writeFileSync('product-materials.js', code, 'utf8');
console.log('Successfully updated breadcrumb Home links in product-materials.js');
