const fs = require('fs');

const path = 'about.html';
let content = fs.readFileSync(path, 'utf8');

const target = '    <section class="about-hero" id="aboutHero" aria-label="Apollo Forge &amp; Fittings Hero">\r\n      <div class="about-hero-split-container">';
const replacement = '    <section class="about-hero" id="aboutHero" aria-label="Apollo Forge &amp; Fittings Hero">\r\n      <div class="about-hero-tech-grid" aria-hidden="true"></div>\r\n      <div class="about-hero-split-container">';

if (!content.includes(target)) {
  console.error('Target not found in about.html');
  process.exit(1);
}

content = content.replace(target, replacement);
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated about.html!');

