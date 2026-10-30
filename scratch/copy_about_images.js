const fs = require('fs');
const path = require('path');

const src1 = 'C:/Users/anujm/.gemini/antigravity/brain/e8b43bac-630f-4722-b2d4-12befa86d873/.user_uploaded/media_1793355965651_364b146a.jpg';
const dest1 = path.join(__dirname, '..', 'assets', 'images', 'about', 'about-hero-aff.jpg');

const src2 = 'C:/Users/anujm/.gemini/antigravity/brain/e8b43bac-630f-4722-b2d4-12befa86d873/.user_uploaded/media_1793356053601_6237557d.jpg';
const dest2 = path.join(__dirname, '..', 'assets', 'images', 'about', 'about-forging-facility.jpg');

fs.copyFileSync(src1, dest1);
console.log('Copied image 1 to:', dest1, 'Size:', fs.statSync(dest1).size);

fs.copyFileSync(src2, dest2);
console.log('Copied image 2 to:', dest2, 'Size:', fs.statSync(dest2).size);

