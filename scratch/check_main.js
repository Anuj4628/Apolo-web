const fs = require('fs');

const content = fs.readFileSync('product-materials.html', 'utf8');
const mainIdx = content.indexOf('<main');
const mainEnd = content.indexOf('</main>') + 7;
console.log(content.substring(mainIdx, mainEnd));

