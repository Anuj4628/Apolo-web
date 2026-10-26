const fs = require('fs');

const testImages = [
  'assets/flanges/grades/ss-flanges.jpg',
  'assets/flanges/grades/carbon-steel-flanges.jpg',
  'assets/flanges/grades/alloy-steel-flanges.jpg',
  'assets/flanges/grades/ss-304-304l-flanges.jpg',
  'assets/flanges/grades/ss-316-316l-316h-flanges.jpg',
  'assets/flanges/grades/ss-310-310s-flanges.jpg',
  'assets/New Product img/flanges/ss-flanges.jpg',
  'assets/New Product img/flanges/cs-flanges.jpg',
  'assets/New Product img/flanges/titanium-flanges.jpg',
  'assets/New Product img/flanges/inconel-flanges.jpg',
  'assets/New Product img/flanges/copper-nickel-flanges.jpg',
  'assets/Product Images/Flanges/alloy steel.jpg',
  'assets/Product Images/Flanges/carbon.png',
  'assets/Product Images/Flanges/stainless steel.avif',
  'assets/Product Images/Flanges/duplex.jpg',
  'assets/Product Images/Flanges/super duplex.jpg',
  'assets/Product Images/Flanges/titanium.jpg',
  'assets/Product Images/Flanges/copper-nickel.jpg',
  'assets/Product Images/Flanges/nikle.jpg',
  'assets/Product Images/Forged Fittings/stainles steel.jpg',
  'assets/Product Images/Forged Fittings/carbon.avif',
  'assets/Product Images/Forged Fittings/alloy steel.jpg',
  'assets/Product Images/Forged Fittings/duplex.jpg',
  'assets/Product Images/Forged Fittings/titainium.jpg',
  'assets/Product Images/Butt weld fit/duplex.jpeg',
  'assets/Product Images/Butt weld fit/nikle.jpg',
  'assets/Product Images/Butt weld fit/super duplex.jpeg',
  'assets/Product Images/Butt weld fit/titainium.webp'
];

testImages.forEach(img => {
  const exists = fs.existsSync(img);
  const size = exists ? fs.statSync(img).size : 0;
  console.log(`${exists ? 'EXISTS' : 'MISSING'}: ${img} (${Math.round(size / 1024)} KB)`);
});
