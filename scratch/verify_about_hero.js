const fs = require('fs');

let passes = [];
let errors = [];

function assert(condition, message) {
  if (!condition) {
    errors.push('FAIL: ' + message);
  } else {
    passes.push('PASS: ' + message);
  }
}

// 1. Verify about.html
const aboutHtml = fs.readFileSync('about.html', 'utf8');

assert(aboutHtml.includes('class="about-hero"'), 'about.html contains about-hero');
assert(aboutHtml.includes('class="about-hero-tech-grid"'), 'about.html contains about-hero-tech-grid');
assert(aboutHtml.includes('ABOUT APOLLO FORGE &amp; FITTINGS'), 'about.html preserves badge text');
assert(aboutHtml.includes('FORGED WITH <span class="hero-text-accent">PRECISION.</span>'), 'about.html preserves heading first line');
assert(aboutHtml.includes('BUILT FOR <span class="hero-text-accent">INDUSTRY.</span>'), 'about.html preserves heading second line');
assert(aboutHtml.includes('Apollo Forge &amp; Fittings is a trusted manufacturer'), 'about.html preserves description text');
assert(aboutHtml.includes('EXPLORE OUR STORY'), 'about.html preserves primary button text');
assert(aboutHtml.includes('CORE EXPERTISE'), 'about.html preserves secondary button text');
assert(aboutHtml.includes('ISO 9001:2015</span> CERTIFIED'), 'about.html preserves credibility text');
assert(aboutHtml.includes('assets/images/about/about-hero-aff.jpg'), 'about.html preserves right-side image source');
assert(aboutHtml.includes('MUMBAI HEAVY FORGING &amp; MACHINING'), 'about.html preserves image badge');
assert(aboutHtml.includes('FORGED FITTINGS (3000# – 9000#)'), 'about.html preserves bottom bar specs');

// 2. Verify style.css
const styleCss = fs.readFileSync('style.css', 'utf8');

// Check .about-hero
const heroMatch = styleCss.match(/\.about-hero\s*\{([^}]+)\}/);
assert(heroMatch, 'style.css contains .about-hero definition');
if (heroMatch) {
  const body = heroMatch[1];
  assert(body.includes('#D5DCE2'), '.about-hero uses light cool grey #D5DCE2');
  assert(!body.includes('#0F1216'), '.about-hero removed old dark navy/black #0F1216 background');
  assert(!body.includes('radial-gradient'), '.about-hero removed dark radial gradient');
}

// Check .about-hero-tech-grid
const techGridMatch = styleCss.match(/\.about-hero-tech-grid\s*\{([^}]+)\}/);
assert(techGridMatch, 'style.css contains .about-hero-tech-grid definition');
if (techGridMatch) {
  const body = techGridMatch[1];
  assert(body.includes('linear-gradient'), 'tech grid includes linear-gradient grid lines');
  assert(body.includes('repeating-linear-gradient(45deg'), 'tech grid includes 45deg diagonal lines');
  assert(body.includes('40px 40px'), 'tech grid includes 40px grid sizing');
}

// Check Typography
const headingMatch = styleCss.match(/\.about-hero-heading\s*\{([^}]+)\}/);
assert(headingMatch, 'style.css contains .about-hero-heading');
if (headingMatch) {
  const body = headingMatch[1];
  assert(body.includes('#101419'), 'Heading uses deep charcoal / near-black #101419');
  assert(body.includes('text-shadow: none'), 'Heading removed dark text-shadow');
}

const descMatch = styleCss.match(/\.about-hero-desc\s*\{([^}]+)\}/);
assert(descMatch, 'style.css contains .about-hero-desc');
if (descMatch) {
  const body = descMatch[1];
  assert(body.includes('#1A212B'), 'Description uses dark charcoal #1A212B');
}

const badgeMatch = styleCss.match(/\.about-hero-badge\s*\{([^}]+)\}/);
assert(badgeMatch, 'style.css contains .about-hero-badge');
if (badgeMatch) {
  const body = badgeMatch[1];
  assert(body.includes('#101419'), 'Badge uses dark text #101419');
  assert(!body.includes('#FFA375'), 'Badge removed old white/light peach text');
}

const secBtnMatch = styleCss.match(/\.btn-hero-secondary\s*\{([^}]+)\}/);
assert(secBtnMatch, 'style.css contains .btn-hero-secondary');
if (secBtnMatch) {
  const body = secBtnMatch[1];
  assert(body.includes('background-color: #FFFFFF') || body.includes('background: #FFFFFF'), 'Secondary button has white background');
  assert(body.includes('#0F1216'), 'Secondary button has dark text');
  assert(body.includes('#1E293B'), 'Secondary button has dark charcoal border');
}

const standardsMatch = styleCss.match(/\.about-hero-standards-tag\s*\{([^}]+)\}/);
assert(standardsMatch, 'style.css contains .about-hero-standards-tag');
if (standardsMatch) {
  const body = standardsMatch[1];
  assert(body.includes('#334155'), 'Standards tag uses readable dark slate #334155');
}

const bottomBarMatch = styleCss.match(/\.about-hero-bottom-bar\s*\{([^}]+)\}/);
assert(bottomBarMatch, 'style.css contains .about-hero-bottom-bar');
if (bottomBarMatch) {
  const body = bottomBarMatch[1];
  assert(!body.includes('#0C1017') && !body.includes('rgba(12, 16, 22'), 'Bottom bar removed dark navy background');
}

const bottomItemMatch = styleCss.match(/\.about-hero-spec-item\s*\{([^}]+)\}/);
assert(bottomItemMatch, 'style.css contains .about-hero-spec-item');
if (bottomItemMatch) {
  const body = bottomItemMatch[1];
  assert(body.includes('#1E293B'), 'Bottom bar item uses dark charcoal text #1E293B');
}

console.log('--- VERIFICATION RESULTS ---');
passes.forEach(p => console.log(p));
if (errors.length > 0) {
  console.log('\n--- ERRORS ---');
  errors.forEach(e => console.error(e));
  process.exit(1);
} else {
  console.log(`\nALL ${passes.length} CHECKS PASSED!`);
}

