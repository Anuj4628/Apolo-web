const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const pmHeroIdx = css.indexOf('.pm-hero-section');
console.log(css.substring(pmHeroIdx + 2000, pmHeroIdx + 5000));

