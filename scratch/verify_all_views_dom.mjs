import { CATALOG_PRODUCTS_DATA } from '../catalog-data.js';

// Load product-materials.js logic in node simulation
// We can test that all render functions and URL builders return expected values and valid HTML
const PRODUCT_CONFIG = {
  'flanges': { keyword: 'manufactured-in-mumbai', canonical: 'flanges', titleWord: 'Manufactured in Mumbai', suffix: 'Flanges' },
  'pipes-tubes': { keyword: 'stockist-in-mumbai', canonical: 'pipes-tubes', titleWord: 'Stockist in Mumbai', suffix: 'Pipes & Tubes' },
  'butt-weld-fittings': { keyword: 'manufactured-in-mumbai', canonical: 'butt-weld-fittings', titleWord: 'Manufactured in Mumbai', suffix: 'Butt Weld Fittings' },
  'forge-fittings': { keyword: 'stockist-in-mumbai', canonical: 'forged-fittings', titleWord: 'Stockist in Mumbai', suffix: 'Forged Fittings' },
  'forged-fittings': { keyword: 'stockist-in-mumbai', canonical: 'forged-fittings', titleWord: 'Stockist in Mumbai', suffix: 'Forged Fittings' },
  'fasteners': { keyword: 'manufactured-in-mumbai', canonical: 'fasteners', titleWord: 'Manufactured in Mumbai', suffix: 'Fasteners' },
  'sheets-plates': { keyword: 'stockist-in-mumbai', canonical: 'sheets-plates', titleWord: 'Stockist in Mumbai', suffix: 'Sheets & Plates' },
  'rods-bars': { keyword: 'manufactured-in-mumbai', canonical: 'rods-bars', titleWord: 'Manufactured in Mumbai', suffix: 'Rods & Bars' },
  'dairy-pharma-fittings': { keyword: 'stockist-in-mumbai', canonical: 'dairy-pharma-fittings', titleWord: 'Stockist in Mumbai', suffix: 'Dairy & Pharma Fittings' },
  'flat-bars': { keyword: 'manufactured-in-mumbai', canonical: 'flat-bars', titleWord: 'Manufactured in Mumbai', suffix: 'Flat Bars' },
  'circle': { keyword: 'stockist-in-mumbai', canonical: 'circle', titleWord: 'Stockist in Mumbai', suffix: 'Circle' }
};

console.log('=== VERIFYING FINAL URL MAPPINGS ===');
Object.keys(PRODUCT_CONFIG).forEach(prodKey => {
  const cfg = PRODUCT_CONFIG[prodKey];
  console.log(`Product: "${prodKey}"`);
  console.log(`  -> Canonical Slug: "${cfg.canonical}"`);
  console.log(`  -> Location Keyword: "${cfg.keyword}"`);
  console.log(`  -> Base URL: /products/${cfg.canonical}-${cfg.keyword}`);
  console.log(`  -> Material URL: /products/${cfg.canonical}-stainless-steel-${cfg.keyword}`);
  console.log(`  -> Grade URL: /products/${cfg.canonical}-stainless-steel-304-${cfg.keyword}`);
  if (prodKey === 'flanges') {
    console.log(`  -> Type URL: /products/${cfg.canonical}-stainless-steel-310s-slip-on-flanges-${cfg.keyword}`);
  }
});
