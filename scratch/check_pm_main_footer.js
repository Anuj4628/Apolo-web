const fs = require('fs');

const html = fs.readFileSync('product-materials.html', 'utf8');
const mainIdx = html.indexOf('</main>');
console.log(html.substring(mainIdx - 100, mainIdx + 300));

