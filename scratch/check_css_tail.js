const fs = require('fs');

const css = fs.readFileSync('contact-rfq.css', 'utf8');
console.log(css.substring(css.length - 1200));

