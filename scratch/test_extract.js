const fs = require('fs');
const { execSync } = require('child_process');

const origContact = execSync('git show HEAD:contact.html').toString('utf8');

// Extract original navbar & head
const headAndNavEnd = origContact.indexOf('<!-- ==============================================');
const navStart = origContact.indexOf('<header class="apollo-header"');
const navEnd = origContact.indexOf('</header>') + 9;

// Extract original hero section
const heroStart = origContact.indexOf('<section class="contact-hero-section"');
const heroEnd = origContact.indexOf('</section>', heroStart) + 10;
const originalHeroSection = origContact.substring(heroStart, heroEnd);

console.log('Original Hero extracted successfully. Length:', originalHeroSection.length);

// Extract current dual section (Location & RFQ) and everything following from current contact.html
const currentContact = fs.readFileSync('contact.html', 'utf8');
const dualStart = currentContact.indexOf('<section class="contact-dual-section"');

if (dualStart === -1) {
  console.error('dualStart not found in current contact.html');
  process.exit(1);
}

const dualAndRest = currentContact.substring(dualStart);
console.log('Dual section and rest extracted successfully. Length:', dualAndRest.length);

