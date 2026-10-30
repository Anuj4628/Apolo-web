const { execSync } = require('child_process');
const originalContact = execSync('git show HEAD:contact.html').toString('utf8');
const start = originalContact.indexOf('id="contactHeroSection"');
const secStart = originalContact.lastIndexOf('<section', start);
const secEnd = originalContact.indexOf('</section>', start) + 10;
console.log('--- ORIGINAL HERO SECTION ---');
console.log(originalContact.substring(secStart, secEnd));

