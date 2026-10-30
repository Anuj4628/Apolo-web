const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const pmHeroIdx = css.indexOf('.pm-hero-section');
console.log(css.substring(pmHeroIdx, pmHeroIdx + 3000));

