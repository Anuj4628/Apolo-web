const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const col3Idx = html.indexOf('Contact Details');
console.log(html.substring(col3Idx + 700, col3Idx + 2200));

