const fs = require('fs');

// 1. Update style.css
let css = fs.readFileSync('style.css', 'utf8');

// Update .apollo-footer padding-bottom from 32px to 0
css = css.replace(
  /\.apollo-footer\s*\{([^}]+)padding:\s*clamp\(68px,\s*6\.5vw,\s*92px\)\s*0\s*32px;([^}]+)\}/,
  (match, p1, p2) => {
    return `.apollo-footer {${p1}padding: clamp(68px, 6.5vw, 92px) 0 0;${p2}}`;
  }
);

// If the regex didn't catch it, let's do a direct replacement of the padding line
css = css.replace(
  'padding: clamp(68px, 6.5vw, 92px) 0 32px;',
  'padding: clamp(68px, 6.5vw, 92px) 0 0;'
);

// Update .footer-bottom-bar styles block
const oldBottomBarBlock = `/* Bottom Bar */
.footer-bottom-bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  gap: 16px;
}

.footer-bottom-left {
  text-align: left;
}

.footer-bottom-center {
  text-align: center;
  white-space: nowrap;
}

.footer-bottom-right {
  text-align: right;
  padding-right: 0;
}

.footer-bottom-tagline {
  white-space: nowrap;
}

.footer-bottom-left p,
.footer-bottom-center p,
.footer-bottom-right p {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: #1A222C;
  font-weight: 600;
  margin: 0;
}

.sunmarg-link {
  color: var(--apollo-orange, #FF5A00);
  text-decoration: none;
  font-weight: 800;
  margin-left: 4px;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.sunmarg-link:hover {
  color: #10141A;
  text-decoration: underline;
}

@media (max-width: 900px) {
  .footer-bottom-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }

  .footer-bottom-left,
  .footer-bottom-center,
  .footer-bottom-right {
    text-align: center;
    padding-right: 0;
  }
}`;

const newBottomBarBlock = `/* Bottom Bar - Clearly Darker Industrial Grey Strip */
.footer-bottom-bar {
  width: 100%;
  background-color: #171E28; /* Clearly darker grey than #9A9B99 */
  border-top: 1px solid rgba(0, 0, 0, 0.35);
  padding: 18px 0;
  position: relative;
  z-index: 2;
}

.footer-bottom-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  width: 100%;
}

/* Fallback if markup doesn't use .footer-bottom-inner */
.footer-bottom-bar:not(:has(.footer-bottom-inner)) {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
}

.footer-bottom-left {
  text-align: left;
}

.footer-bottom-center {
  text-align: center;
  white-space: nowrap;
}

.footer-bottom-right {
  text-align: right;
  padding-right: 0;
}

.footer-bottom-tagline {
  white-space: nowrap;
}

.footer-bottom-left p,
.footer-bottom-center p,
.footer-bottom-right p {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: #E2E8F0; /* High-contrast clean light text against dark grey */
  font-weight: 550;
  margin: 0;
}

.footer-bottom-left p span,
.footer-bottom-center p span {
  color: #CBD5E1;
}

.sunmarg-link {
  color: var(--apollo-orange, #FF5A00);
  text-decoration: none;
  font-weight: 800;
  margin-left: 4px;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.sunmarg-link:hover {
  color: #FFFFFF;
  text-decoration: underline;
}

@media (max-width: 900px) {
  .footer-bottom-inner,
  .footer-bottom-bar:not(:has(.footer-bottom-inner)),
  .footer-bottom-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }

  .footer-bottom-left,
  .footer-bottom-center,
  .footer-bottom-right {
    text-align: center;
    padding-right: 0;
  }
}`;

// Normalize line breaks before replacing
const normalize = str => str.replace(/\r\n/g, '\n');
let normCss = normalize(css);
let normOld = normalize(oldBottomBarBlock);
let normNew = normalize(newBottomBarBlock);

if (normCss.includes(normOld)) {
  normCss = normCss.replace(normOld, normNew);
  console.log('Successfully replaced footer-bottom-bar block in style.css');
} else {
  console.log('Exact block not found, searching for partial match...');
  const idx = normCss.indexOf('/* Bottom Bar */\n.footer-bottom-bar {');
  if (idx !== -1) {
    const endIdx = normCss.indexOf('/* ==========================================================================\n   FLOATING WHATSAPP', idx);
    if (endIdx !== -1) {
      normCss = normCss.substring(0, idx) + normNew + '\n\n' + normCss.substring(endIdx);
      console.log('Replaced by range in style.css');
    }
  }
}

// Also update line 5834 media query to include .footer-bottom-inner
normCss = normCss.replace(
  /\.footer-bottom-bar\s*\{\s*flex-direction:\s*column;\s*text-align:\s*center;\s*gap:\s*10px;\s*\}/,
  `.footer-bottom-inner,
  .footer-bottom-bar {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }`
);

fs.writeFileSync('style.css', normCss, 'utf8');
console.log('Updated style.css successfully!');

// 2. Update all 7 HTML pages to place footer-bottom-bar cleanly outside footer-container
const pages = ['index.html', 'about.html', 'certificate.html', 'contact.html', 'get-quote.html', 'materials.html', 'product-materials.html'];

pages.forEach(page => {
  let html = fs.readFileSync(page, 'utf8');
  let normHtml = normalize(html);

  // We want to replace:
  //       <!-- Bottom Copyright & Developer Credit Row ... -->
  //       <div class="footer-bottom-bar">
  //         ...
  //       </div>
  //     </div>
  //   </footer>
  //
  // With:
  //     </div> <!-- Closes footer-container -->
  //
  //     <!-- Bottom Copyright & Developer Credit Row -->
  //     <div class="footer-bottom-bar">
  //       <div class="footer-container">
  //         <div class="footer-bottom-inner">
  //           ...
  //         </div>
  //       </div>
  //     </div>
  //   </footer>

  const bottomPattern = /([ \t]*)<!--\s*(?:Bottom\s+)?Copyright\s*&(?:\s*amp;)?\s*Developer\s*Credit\s*Row[^\n]*-->\s*<div class="footer-bottom-bar">([\s\S]*?)<\/div>\s*<\/div>\s*<\/footer>/i;

  const match = normHtml.match(bottomPattern);
  if (match) {
    const indent = match[1];
    const innerContent = match[2];
    const replacement = `    </div>

    <!-- Bottom Copyright & Developer Credit Row - Darker Grey Strip -->
    <div class="footer-bottom-bar">
      <div class="footer-container">
        <div class="footer-bottom-inner">${innerContent}        </div>
      </div>
    </div>
  </footer>`;
    normHtml = normHtml.replace(match[0], replacement);
    fs.writeFileSync(page, normHtml, 'utf8');
    console.log(`Updated footer markup in ${page}`);
  } else {
    console.log(`Pattern not matched in ${page}, checking alternate...`);
  }
});

