const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');

const start = html.indexOf('<section class="contact-main-hero-section"');
const end = html.indexOf('</section>', start) + 10;
console.log(html.substring(start, end));

