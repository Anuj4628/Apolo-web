const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  const bottomIdx = footerMatch[0].indexOf('footer-bottom');
  console.log(footerMatch[0].substring(bottomIdx - 50));
}

