const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
        results.push(path.relative(process.cwd(), fullPath).replace(/\\/g, '/'));
      }
    }
  });
  return results;
}

const all = getFiles('assets');

console.log('--- ALL FORGED FITTINGS ASSETS ---');
all.filter(f => /forg|socket|thread|elbow|tee/i.test(f)).forEach(f => console.log(f));
