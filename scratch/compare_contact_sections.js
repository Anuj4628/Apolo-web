const fs = require('fs');
const { execSync } = require('child_process');

const cur = fs.readFileSync('contact.html', 'utf8');
const orig = execSync('git show HEAD:contact.html').toString('utf8');

function getSections(html) {
  const matches = html.match(/<section[^>]*id="([^"]+)"[^>]*>/g) || [];
  return matches;
}

console.log('Current contact.html sections:');
console.log(getSections(cur));

console.log('\nOriginal HEAD contact.html sections:');
console.log(getSections(orig));

