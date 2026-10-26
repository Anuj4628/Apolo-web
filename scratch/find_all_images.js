const fs = require('fs');
const path = require('path');

function getFiles(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, exts));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        results.push({
          rel: path.relative(process.cwd(), fullPath).replace(/\\/g, '/'),
          size: stat.size,
          name: file
        });
      }
    }
  });
  return results;
}

const images = getFiles('assets', ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg']);
console.log('Total images found in assets:', images.length);
images.forEach(img => {
  console.log(`${img.rel} (${Math.round(img.size / 1024)} KB)`);
});
