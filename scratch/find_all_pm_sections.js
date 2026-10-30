const fs = require('fs');

const js = fs.readFileSync('product-materials.js', 'utf8');

// Find all <section tags
const sections = js.match(/<section[^>]*>/g) || [];
console.log('All <section> tags in product-materials.js:');
sections.forEach(s => console.log(s));

