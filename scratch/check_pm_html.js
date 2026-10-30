const fs = require('fs');

['product-materials.html', 'materials.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} ===`);
  const heroMatch = html.match(/<section[^>]*class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<\/section>/i);
  if (heroMatch) {
    console.log(heroMatch[0].substring(0, 1000));
  } else {
    console.log('No section with hero in class found. Searching for pm-hero:');
    const pmMatch = html.match(/class="[^"]*pm-hero[^"]*"/);
    console.log(pmMatch);
  }
});

