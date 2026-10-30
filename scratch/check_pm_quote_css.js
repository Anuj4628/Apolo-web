const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');

lines.forEach((l, i) => {
  if (l.includes('pm-quote') || l.includes('pm-main-content')) {
    console.log(i + 1, l);
  }
});

