const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const fIdx = html.indexOf('class="apollo-footer"');
const col3Idx = html.indexOf('Contact Details', fIdx);
console.log(html.substring(col3Idx - 100, col3Idx + 1200));

