const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');
const heroMatches = [];
lines.forEach((l, i) => {
  if (l.includes('.about-hero') || l.includes('about-hero-tech-grid')) {
    heroMatches.push(i + 1);
  }
});
console.log('About hero rule line numbers:', heroMatches);
if (heroMatches.length > 0) {
  const start = Math.max(0, heroMatches[0] - 5);
  const end = Math.min(lines.length, heroMatches[heroMatches.length - 1] + 60);
  console.log(lines.slice(start, end).join('\n'));
}

