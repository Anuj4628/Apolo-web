const fs = require('fs');

let html = fs.readFileSync('product-materials.html', 'utf8');

html = html.replace('href="index.html"', 'href="/"');
html = html.replace('href="about.html"', 'href="/about.html"');
html = html.replace('href="index.html"', 'href="/"'); // brand link
html = html.replace('href="about.html"', 'href="/about.html"'); // mobile nav

fs.writeFileSync('product-materials.html', html, 'utf8');
console.log('Fixed root links in product-materials.html');
