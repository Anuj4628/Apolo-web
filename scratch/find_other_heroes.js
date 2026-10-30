const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
const lines = css.split('\n');

const otherHeroMatches = [];
lines.forEach((l, i) => {
  if ((l.includes('.hero') || l.includes('-hero')) && !l.includes('about-hero') && !l.includes('contact-hero') && !l.includes('cert-hero') && !l.includes('rfq-hero')) {
    otherHeroMatches.push({ line: i + 1, text: l.trim() });
  }
});

console.log('Other hero matches:', otherHeroMatches.length);
otherHeroMatches.forEach(m => console.log(`${m.line}: ${m.text}`));

