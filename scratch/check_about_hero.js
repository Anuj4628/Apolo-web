const fs = require('fs');

const aboutHtml = fs.readFileSync('about.html', 'utf8');
const heroStart = aboutHtml.indexOf('class="about-hero');
const heroEnd = aboutHtml.indexOf('</section>', heroStart) + 10;
console.log('--- About Us Hero Markup ---');
console.log(aboutHtml.substring(heroStart - 20, heroEnd));

