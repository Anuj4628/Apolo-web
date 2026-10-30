const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const heroIdx = html.indexOf('hero');
console.log('Hero idx:', heroIdx);

// Search for slider or slides
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('slide') || l.includes('hero-slider') || l.includes('manufactur') || l.includes('slide-manufacturing')) {
    console.log(i + 1, l.trim());
  }
});

