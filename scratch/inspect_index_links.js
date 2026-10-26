const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const lines = indexHtml.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('/products')) {
    console.log(`L${idx + 1}: ${line.trim()}`);
  }
});
