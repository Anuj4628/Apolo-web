const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const pMatch = indexHtml.match(/<section[^>]*id="[^"]*product[^"]*"[^>]*>/gi);
console.log('index.html product sections:', pMatch);
const mMatch = indexHtml.match(/<section[^>]*id="[^"]*material[^"]*"[^>]*>/gi);
console.log('index.html material sections:', mMatch);

