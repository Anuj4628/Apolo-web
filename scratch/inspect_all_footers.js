const fs = require('fs');
const pages = ['index.html', 'about.html', 'certificate.html', 'contact.html', 'get-quote.html', 'materials.html', 'product-materials.html'];
pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const footerStart = content.indexOf('<footer');
  const footerEnd = content.indexOf('</footer>') + 9;
  const footerHtml = content.substring(footerStart, footerEnd);
  console.log(`\n=== ${p} ===`);
  const lines = footerHtml.split('\n');
  console.log('Total footer lines:', lines.length);
  // print last 30 lines
  console.log(lines.slice(-25).join('\n'));
});

