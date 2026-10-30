const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');

console.log(lines.slice(5270, 5360).join('\n'));
console.log('--- NEXT CHUNK ---');
console.log(lines.slice(5360, 5460).join('\n'));
console.log('--- NEXT CHUNK ---');
console.log(lines.slice(5460, 5580).join('\n'));

