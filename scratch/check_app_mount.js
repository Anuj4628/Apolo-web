const fs = require('fs');

const content = fs.readFileSync('product-materials.html', 'utf8');
const appIdx = content.indexOf('id="app"');
console.log(content.substring(appIdx - 100, appIdx + 400));

