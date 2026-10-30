const fs = require('fs');

const js = fs.readFileSync('product-materials.js', 'utf8');
const bIdx = js.indexOf('function renderBreadcrumbs');
console.log(js.substring(bIdx, bIdx + 600));

const css = fs.readFileSync('style.css', 'utf8');
const bCssIdx = css.indexOf('.pm-breadcrumb');
console.log(css.substring(bCssIdx, bCssIdx + 600));

