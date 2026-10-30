const fs = require('fs');

const pages = ['index.html', 'about.html', 'certificate.html', 'contact.html', 'get-quote.html', 'materials.html', 'product-materials.html'];

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  const footerStart = html.indexOf('<footer');
  const footerEnd = html.indexOf('</footer>') + 9;
  const footerText = html.substring(footerStart, footerEnd);

  const openDivs = (footerText.match(/<div\b/g) || []).length;
  const closeDivs = (footerText.match(/<\/div>/g) || []).length;

  console.log(`${p}: <div count = ${openDivs}, </div> count = ${closeDivs} -> ${openDivs === closeDivs ? 'BALANCED' : 'UNBALANCED'}`);
});

