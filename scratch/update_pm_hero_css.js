const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const oldBlock = `/* Hero Section */
.pm-hero-section {
  position: relative;
  background:
    radial-gradient(circle at 85% 20%, rgba(255, 90, 0, 0.22) 0%, transparent 45%),
    linear-gradient(135deg, #0F1318 0%, #161B22 55%, #1D232C 100%);
  padding: clamp(56px, 6vw, 84px) 0 clamp(44px, 5vw, 68px);
  border-bottom: 3.5px solid var(--apollo-orange);
  overflow: hidden;
}

.pm-hero-overlay {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 90, 0, 0.12) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  opacity: 0.6;
}

.pm-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
  position: relative;
  z-index: 2;
}

.pm-hero-content {
  position: relative;
}

.pm-hero-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 11.5px;
  font-weight: 850;
  letter-spacing: 0.1em;
  color: var(--apollo-orange);
  background: rgba(255, 90, 0, 0.12);
  border: 1px solid rgba(255, 90, 0, 0.35);
  padding: 5px 14px;
  border-radius: 4px;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.pm-badge-dot {
  width: 7px;
  height: 7px;
  background-color: var(--apollo-orange);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--apollo-orange);
}

.pm-hero-title {
  font-family: var(--font-heading);
  font-size: clamp(36px, 4.2vw, 60px);
  font-weight: 900;
  letter-spacing: 0.02em;
  line-height: 1.05;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0 0 8px;
}

.pm-hero-subtitle {
  font-family: var(--font-heading);
  font-size: clamp(15px, 1.3vw, 20px);
  font-weight: 800;
  letter-spacing: 0.06em;
  color: var(--apollo-orange);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.pm-hero-divider {
  width: 68px;
  height: 3.5px;
  background: var(--apollo-orange);
  border-radius: 2px;
  margin-bottom: 18px;
}

.pm-hero-desc {
  font-family: var(--font-body);
  font-size: clamp(14.5px, 1.1vw, 16px);
  color: #CBD5E1;
  line-height: 1.65;
  max-width: 720px;
  margin: 0 0 24px;
}

.pm-hero-standards-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

/* Dedicated Product Hero Showcase Card */
.pm-hero-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.pm-hero-showcase-card {
  position: relative;
  width: 100%;
  max-width: 580px;
  background: linear-gradient(145deg, rgba(23, 29, 38, 0.95) 0%, rgba(15, 19, 25, 0.98) 100%);
  border: 1.5px solid rgba(255, 90, 0, 0.4);
  border-radius: 16px;
  padding: clamp(14px, 1.8vw, 20px);
  box-shadow:
    0 24px 50px -12px rgba(0, 0, 0, 0.55),
    0 0 35px -8px rgba(255, 90, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
}

.pm-showcase-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(255, 90, 0, 0.25) 0%, transparent 70%);
  filter: blur(28px);
  pointer-events: none;
}

.pm-showcase-media {
  position: relative;
  z-index: 2;
  width: 100%;
  height: clamp(280px, 30vw, 380px);
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid rgba(226, 232, 240, 0.95);
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.04), 0 8px 24px -4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  margin-bottom: 14px;
  overflow: hidden;
}

.pm-showcase-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 8px 18px rgba(15, 23, 42, 0.1));
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.pm-hero-showcase-card:hover .pm-showcase-img {
  transform: scale(1.03);
}

.pm-showcase-tag {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(10, 13, 18, 0.85);
  border: 1px solid rgba(255, 90, 0, 0.35);
  border-radius: 999px;
  padding: 6px 14px;
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.08em;
  color: #F8FAFC;
  text-transform: uppercase;
}

.pm-showcase-dot {
  width: 6px;
  height: 6px;
  background-color: var(--apollo-orange);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--apollo-orange);
}

.pm-standard-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: #94A3B8;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 5px 12px;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.pm-standard-tag span {
  color: var(--apollo-orange);
  margin-right: 4px;
  font-weight: 800;
}`;

const newBlock = `/* ==========================================================================
   PRODUCT & MATERIAL HERO SECTIONS (MATCHING ABOUT US HERO GREY THEME)
   Exact cool industrial grey #D5DCE2 with fine engineering grid & diagonal lines
   ========================================================================== */

.pm-hero-section {
  position: relative;
  width: 100%;
  background-color: #D5DCE2;
  background-image: none;
  padding: clamp(56px, 6vw, 84px) 0 clamp(44px, 5vw, 68px);
  border-bottom: 1px solid rgba(17, 24, 39, 0.12);
  overflow: hidden;
}

/* Subtle Technical Grid & Diagonal Engineering Texture (Identical to About Us Hero) */
.pm-hero-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(17, 24, 39, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(17, 24, 39, 0.035) 1px, transparent 1px),
    repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(255, 255, 255, 0.18) 24px, rgba(255, 255, 255, 0.18) 25px);
  background-size: 40px 40px, 40px 40px, auto;
  pointer-events: none;
  opacity: 1;
  z-index: 1;
}

.pm-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
  position: relative;
  z-index: 2;
}

.pm-hero-content {
  position: relative;
}

/* Eyebrow Badge matching About Hero Badge */
.pm-hero-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 11.5px;
  font-weight: 850;
  letter-spacing: 0.1em;
  color: #101419;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(15, 23, 42, 0.14);
  padding: 5px 14px;
  border-radius: 4px;
  margin-bottom: 16px;
  text-transform: uppercase;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.pm-badge-dot {
  width: 7px;
  height: 7px;
  background-color: var(--apollo-orange, #FF5A00);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(255, 90, 0, 0.5);
}

/* Main Heading: High-Contrast Crisp Charcoal #101419 */
.pm-hero-title {
  font-family: var(--font-heading);
  font-size: clamp(34px, 4.2vw, 58px);
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1.08;
  color: #101419;
  text-transform: uppercase;
  margin: 0 0 8px;
  text-shadow: none;
}

/* Subtitle: High-Contrast Deep Orange */
.pm-hero-subtitle {
  font-family: var(--font-heading);
  font-size: clamp(15px, 1.3vw, 19px);
  font-weight: 850;
  letter-spacing: 0.05em;
  color: #D34000;
  text-transform: uppercase;
  margin-bottom: 16px;
}

/* Accent Divider */
.pm-hero-divider {
  width: 48px;
  height: 3.5px;
  background: var(--apollo-orange, #FF5A00);
  border-radius: 2px;
  margin-bottom: 18px;
}

/* Description: Crisp Dark Charcoal #1A212B */
.pm-hero-desc {
  font-family: var(--font-body);
  font-size: clamp(14.5px, 1.1vw, 16px);
  color: #1A212B;
  line-height: 1.68;
  max-width: 720px;
  margin: 0 0 24px;
  font-weight: 450;
}

.pm-hero-standards-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

/* Standards Tags (High-Contrast Clean White Pills) */
.pm-standard-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 750;
  color: #1E293B;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(15, 23, 42, 0.14);
  padding: 5px 12px;
  border-radius: 4px;
  letter-spacing: 0.05em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.pm-standard-tag span {
  color: #D34000;
  margin-right: 4px;
  font-weight: 850;
}

/* Dedicated Product Hero Showcase Card matching About Visual Frame */
.pm-hero-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.pm-hero-showcase-card {
  position: relative;
  width: 100%;
  max-width: 580px;
  background: #FFFFFF;
  border: 1.5px solid rgba(17, 24, 39, 0.12);
  border-radius: 16px;
  padding: clamp(14px, 1.8vw, 20px);
  box-shadow:
    0 16px 36px rgba(15, 23, 42, 0.1),
    0 4px 12px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pm-hero-showcase-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 20px 42px rgba(15, 23, 42, 0.14),
    0 6px 16px rgba(15, 23, 42, 0.06);
}

.pm-showcase-glow {
  display: none;
}

.pm-showcase-media {
  position: relative;
  z-index: 2;
  width: 100%;
  height: clamp(280px, 30vw, 380px);
  background: #F8FAFC;
  border-radius: 12px;
  border: 1px solid rgba(226, 232, 240, 0.95);
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  margin-bottom: 14px;
  overflow: hidden;
}

.pm-showcase-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 6px 14px rgba(15, 23, 42, 0.08));
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.pm-hero-showcase-card:hover .pm-showcase-img {
  transform: scale(1.03);
}

.pm-showcase-tag {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(12, 16, 22, 0.88);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 6px 14px;
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.08em;
  color: #FFFFFF;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
}

.pm-showcase-dot {
  width: 6px;
  height: 6px;
  background-color: var(--apollo-orange, #FF5A00);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--apollo-orange, #FF5A00);
}`;

const normalize = s => s.replace(/\r\n/g, '\n');
const normCss = normalize(css);
const normOld = normalize(oldBlock);
const normNew = normalize(newBlock);

if (normCss.includes(normOld)) {
  const result = normCss.replace(normOld, normNew);
  fs.writeFileSync('style.css', result, 'utf8');
  console.log('Successfully updated .pm-hero-section in style.css!');
} else {
  console.error('Could not find exact old block in style.css!');
  process.exit(1);
}

