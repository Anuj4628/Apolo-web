const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');

const sIdx = html.indexOf('contact-dual-section');
console.log('Location and RFQ in current contact.html:');
console.log(html.substring(sIdx - 30, sIdx + 700));

