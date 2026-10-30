const fs = require('fs');

console.log('--- materials.html ---');
console.log(fs.readFileSync('materials.html', 'utf8').substring(0, 800));

console.log('--- product-materials.html ---');
console.log(fs.readFileSync('product-materials.html', 'utf8').substring(0, 800));

