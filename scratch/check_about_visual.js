const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const fIdx = css.indexOf('.hero-visual-frame');
console.log(css.substring(fIdx - 50, fIdx + 1200));

