const fs = require('fs');
const path = require('path');

function getJpegDimensions(buffer) {
  let i = 2;
  while (i < buffer.length) {
    if (buffer[i] === 0xFF && (buffer[i+1] === 0xC0 || buffer[i+1] === 0xC2)) {
      const height = buffer.readUInt16BE(i + 5);
      const width = buffer.readUInt16BE(i + 7);
      return { width, height };
    }
    i++;
  }
  return null;
}

function getPngDimensions(buffer) {
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

function checkDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) {
      checkDir(full);
    } else {
      const buf = fs.readFileSync(full);
      let dims = null;
      if (f.name.endsWith('.jpg') || f.name.endsWith('.jpeg')) dims = getJpegDimensions(buf);
      else if (f.name.endsWith('.png')) dims = getPngDimensions(buf);
      console.log(`${full} | ${buf.length} bytes | ${dims ? dims.width + 'x' + dims.height : 'unknown'}`);
    }
  }
}

console.log('--- assets/grades images/flanges ---');
checkDir('assets/grades images/flanges');

console.log('\n--- assets/flanges/grades ---');
checkDir('assets/flanges/grades');
