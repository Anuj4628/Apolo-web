const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const p1 = html.indexOf('id="productMarqueeSection"');
const p2 = html.indexOf('id="productsSection"');
const section = html.substring(p1, p2);

const groups = section.split('<div class="marquee-group');
console.log('Number of marquee groups (including header split):', groups.length);

const group1 = groups[1];
const cardRegex = /<div class="marquee-card">([\s\S]*?)<\/div>\s*<\/div>/g;
let m;
let i = 0;
while ((m = cardRegex.exec(group1)) !== null) {
  i++;
  const c = m[1];
  const tagM = c.match(/class="marquee-card-tag">([^<]+)/);
  const nameM = c.match(/class="marquee-card-name">([^<]+)/);
  const srcM = c.match(/src="([^"]+)"/);
  console.log(`${i}. [${tagM ? tagM[1].trim() : ''}] "${nameM ? nameM[1].trim() : ''}" -> ${srcM ? srcM[1] : ''}`);
}
