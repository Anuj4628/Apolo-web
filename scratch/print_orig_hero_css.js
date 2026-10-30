const { execSync } = require('child_process');
const origCss = execSync('git show HEAD:contact-rfq.css').toString('utf8');

const lines = origCss.split('\n');
console.log(lines.slice(0, 195).join('\n'));

