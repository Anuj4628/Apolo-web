import { CATALOG_PRODUCTS_DATA } from '../catalog-data.js';

// Same config & functions
const PRODUCT_CONFIG = {
  'flanges': { keyword: 'manufactured-in-mumbai', canonical: 'flanges', suffix: 'flanges' },
  'pipes-tubes': { keyword: 'stockist-in-mumbai', canonical: 'pipes-tubes', suffix: 'pipes-tubes' },
  'butt-weld-fittings': { keyword: 'manufactured-in-mumbai', canonical: 'butt-weld-fittings', suffix: 'butt-weld-fittings' },
  'forge-fittings': { keyword: 'stockist-in-mumbai', canonical: 'forged-fittings', suffix: 'forged-fittings' },
  'forged-fittings': { keyword: 'stockist-in-mumbai', canonical: 'forged-fittings', suffix: 'forged-fittings' },
  'fasteners': { keyword: 'manufactured-in-mumbai', canonical: 'fasteners', suffix: 'fasteners' },
  'sheets-plates': { keyword: 'stockist-in-mumbai', canonical: 'sheets-plates', suffix: 'sheets-plates' },
  'rods-bars': { keyword: 'manufactured-in-mumbai', canonical: 'rods-bars', suffix: 'rods-bars' },
  'dairy-pharma-fittings': { keyword: 'stockist-in-mumbai', canonical: 'dairy-pharma-fittings', suffix: 'dairy-pharma-fittings' },
  'flat-bars': { keyword: 'manufactured-in-mumbai', canonical: 'flat-bars', suffix: 'flat-bars' },
  'circle': { keyword: 'stockist-in-mumbai', canonical: 'circle', suffix: 'circle' }
};

const PRODUCT_SLUG_MAP = {
  'forged-fittings': 'forge-fittings',
  'forge-fittings': 'forge-fittings',
  'body-fitting': 'forge-fittings',
  'body-fittings': 'forge-fittings',
  'flanges': 'flanges',
  'pipes-tubes': 'pipes-tubes',
  'pipes': 'pipes-tubes',
  'tubes': 'pipes-tubes',
  'butt-weld-fittings': 'butt-weld-fittings',
  'buttweld-fittings': 'butt-weld-fittings',
  'fasteners': 'fasteners',
  'sheets-plates': 'sheets-plates',
  'sheets': 'sheets-plates',
  'plates': 'sheets-plates',
  'rods-bars': 'rods-bars',
  'rods': 'rods-bars',
  'bars': 'rods-bars',
  'dairy-pharma-fittings': 'dairy-pharma-fittings',
  'dairy-pharma': 'dairy-pharma-fittings',
  'flat-bars': 'flat-bars',
  'circle': 'circle'
};

function getProductKeyword(prodSlug) {
  const cfg = PRODUCT_CONFIG[prodSlug];
  return cfg ? cfg.keyword : 'manufactured-in-mumbai';
}

function getProductCanonicalSlug(prodSlug) {
  const cfg = PRODUCT_CONFIG[prodSlug];
  return cfg ? cfg.canonical : prodSlug;
}

function buildTypeSlug(prodSlug, rawTypeSlug) {
  let slug = rawTypeSlug.toLowerCase();
  if (prodSlug === 'flanges' && !slug.endsWith('-flanges') && !slug.endsWith('-flange')) {
    slug += '-flanges';
  }
  return slug;
}

function buildProductUrl(prodSlug) {
  const canon = getProductCanonicalSlug(prodSlug);
  const kw = getProductKeyword(prodSlug);
  return `/products/${canon}-${kw}`;
}

function buildMaterialUrl(prodSlug, matSlug) {
  const canon = getProductCanonicalSlug(prodSlug);
  const kw = getProductKeyword(prodSlug);
  return `/products/${canon}-${matSlug}-${kw}`;
}

function buildGradeUrl(prodSlug, matSlug, gradeSlug) {
  const canon = getProductCanonicalSlug(prodSlug);
  const kw = getProductKeyword(prodSlug);
  return `/products/${canon}-${matSlug}-${gradeSlug}-${kw}`;
}

function buildTypeUrl(prodSlug, matSlug, typeSlug, gradeSlug) {
  const canon = getProductCanonicalSlug(prodSlug);
  const kw = getProductKeyword(prodSlug);
  const formattedType = buildTypeSlug(prodSlug, typeSlug);
  if (gradeSlug) {
    return `/products/${canon}-${matSlug}-${gradeSlug}-${formattedType}-${kw}`;
  }
  return `/products/${canon}-${matSlug}-${formattedType}-${kw}`;
}

function parseLegacyOrSlashRoute(pathname) {
  const segments = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  if (segments[0] !== 'products') return null;

  if (segments.length === 1) {
    return { view: 'product', productSlug: 'flanges', canonicalUrl: buildProductUrl('flanges') };
  }

  // If segments.length === 2: could be flat or single segment
  if (segments.length === 2) {
    const raw = segments[1];
    // if raw is just "flanges" or "pipes-tubes"
    if (PRODUCT_SLUG_MAP[raw]) {
      const catalogSlug = PRODUCT_SLUG_MAP[raw];
      return { view: 'product', productSlug: catalogSlug, canonicalUrl: buildProductUrl(catalogSlug) };
    }
  }

  const rawProd = segments[1];
  const prodSlug = PRODUCT_SLUG_MAP[rawProd] || rawProd;

  // Format: /products/:product/grades/:grade
  if (segments.length >= 4 && segments[2] === 'grades') {
    return {
      view: 'grade',
      productSlug: prodSlug,
      materialSlug: 'stainless-steel',
      gradeSlug: segments[3],
      canonicalUrl: buildGradeUrl(prodSlug, 'stainless-steel', segments[3])
    };
  }

  // Format: /products/:product/types/:type
  if (segments.length >= 4 && segments[2] === 'types') {
    return {
      view: 'type',
      productSlug: prodSlug,
      materialSlug: 'stainless-steel',
      typeSlug: segments[3],
      canonicalUrl: buildTypeUrl(prodSlug, 'stainless-steel', segments[3])
    };
  }

  // Format: /products/:product/:material/grades/:grade
  if (segments.length >= 5 && segments[3] === 'grades') {
    return {
      view: 'grade',
      productSlug: prodSlug,
      materialSlug: segments[2],
      gradeSlug: segments[4],
      canonicalUrl: buildGradeUrl(prodSlug, segments[2], segments[4])
    };
  }

  // Format: /products/:product/:material/types/:type
  if (segments.length >= 5 && segments[3] === 'types') {
    return {
      view: 'type',
      productSlug: prodSlug,
      materialSlug: segments[2],
      typeSlug: segments[4],
      canonicalUrl: buildTypeUrl(prodSlug, segments[2], segments[4])
    };
  }

  // Format: /products/:product/:material
  if (segments.length === 3) {
    return {
      view: 'material',
      productSlug: prodSlug,
      materialSlug: segments[2],
      canonicalUrl: buildMaterialUrl(prodSlug, segments[2])
    };
  }

  return {
    view: 'product',
    productSlug: prodSlug,
    canonicalUrl: buildProductUrl(prodSlug)
  };
}

console.log('Legacy Slash URLs to New Flat URLs:');
const legacyCases = [
  '/products/flanges',
  '/products/flanges/stainless-steel',
  '/products/flanges/stainless-steel/grades/310s',
  '/products/flanges/stainless-steel/types/slip-on',
  '/products/pipes-tubes',
  '/products/pipes-tubes/stainless-steel',
  '/products/pipes-tubes/stainless-steel/grades/304',
  '/products/forge-fittings',
  '/products/forge-fittings/carbon-steel',
  '/products/forge-fittings/carbon-steel/grades/a105'
];

legacyCases.forEach(lc => {
  const res = parseLegacyOrSlashRoute(lc);
  console.log(`${lc} => ${res ? res.canonicalUrl : 'null'}`);
});
