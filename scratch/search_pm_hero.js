const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.js') || f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('pm-hero-section') || content.includes('hero-section')) {
    console.log(f, 'contains pm-hero-section:', content.includes('pm-hero-section'), 'hero-section:', content.includes('hero-section'));
  }
});

