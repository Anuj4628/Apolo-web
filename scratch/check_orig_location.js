const { execSync } = require('child_process');
const orig = execSync('git show HEAD:contact.html').toString('utf8');

const sIdx = orig.indexOf('id="locationSection"');
console.log('Location section in orig:');
console.log(orig.substring(sIdx - 60, sIdx + 1200));

