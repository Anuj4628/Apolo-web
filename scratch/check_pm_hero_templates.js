const fs = require('fs');

const js = fs.readFileSync('product-materials.js', 'utf8');

const heroSnippets = [845, 1173, 1353, 1615, 1918, 2152];
const lines = js.split('\n');

heroSnippets.forEach(lineNum => {
  console.log(`\n=== Hero at line ${lineNum} ===`);
  console.log(lines.slice(lineNum - 5, lineNum + 40).join('\n'));
});

