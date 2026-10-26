import { CATALOG_PRODUCTS_DATA } from '../catalog-data.js';

// Configuration
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

const ALL_PRODUCT_PREFIXES = Object.keys(PRODUCT_SLUG_MAP).sort((a, b) => b.length - a.length);

const ALL_MATERIAL_SLUGS = [
  'stainless-steel',
  'carbon-steel',
  'alloy-steel',
  'high-alloy',
  'nickel',
  'titanium',
  'copper',
  'aluminium',
  'duplex',
  'super-duplex'
].sort((a, b) => b.length - a.length);

function parseFlatProductSlug(rawSlug) {
  let s = rawSlug.toLowerCase().trim();

  let locationKeyword = '';
  if (s.endsWith('-manufactured-in-mumbai')) {
    locationKeyword = 'manufactured-in-mumbai';
    s = s.slice(0, -'-manufactured-in-mumbai'.length);
  } else if (s.endsWith('-stockist-in-mumbai')) {
    locationKeyword = 'stockist-in-mumbai';
    s = s.slice(0, -'-stockist-in-mumbai'.length);
  }

  const extraKeywords = ['-supplier-in-mumbai', '-manufacturer-in-mumbai', '-exporter-in-mumbai', '-stockist-mumbai'];
  for (const ekw of extraKeywords) {
    if (s.endsWith(ekw)) {
      s = s.slice(0, -ekw.length);
      break;
    }
  }

  let matchedProductKey = null;
  for (const pKey of ALL_PRODUCT_PREFIXES) {
    if (s === pKey || s.startsWith(pKey + '-')) {
      matchedProductKey = pKey;
      break;
    }
  }

  if (!matchedProductKey) return null;

  const catalogProductSlug = PRODUCT_SLUG_MAP[matchedProductKey];
  const productObj = CATALOG_PRODUCTS_DATA.find(p => p.slug === catalogProductSlug);
  if (!productObj) return null;

  let rest = s.slice(matchedProductKey.length).replace(/^-+/, '');
  if (!rest) {
    return {
      view: 'product',
      productSlug: catalogProductSlug,
      canonicalUrl: buildProductUrl(catalogProductSlug)
    };
  }

  let matchedMaterialSlug = null;
  for (const mSlug of ALL_MATERIAL_SLUGS) {
    if (rest === mSlug || rest.startsWith(mSlug + '-')) {
      matchedMaterialSlug = mSlug;
      break;
    }
  }

  if (!matchedMaterialSlug) {
    return {
      view: 'product',
      productSlug: catalogProductSlug,
      canonicalUrl: buildProductUrl(catalogProductSlug)
    };
  }

  if (matchedMaterialSlug === 'super-duplex') matchedMaterialSlug = 'duplex';
  const matObj = (productObj.materials || []).find(m => m.slug === matchedMaterialSlug);
  rest = rest.slice(matchedMaterialSlug.length).replace(/^-+/, '');

  if (!rest) {
    return {
      view: 'material',
      productSlug: catalogProductSlug,
      materialSlug: matchedMaterialSlug,
      canonicalUrl: buildMaterialUrl(catalogProductSlug, matchedMaterialSlug)
    };
  }

  const availableTypes = productObj.types || [];
  const availableGrades = (matObj && matObj.grades) ? matObj.grades : [];
  const sortedGrades = [...availableGrades].sort((a, b) => b.slug.length - a.slug.length);

  let matchedGradeSlug = null;
  let restAfterGrade = rest;
  for (const g of sortedGrades) {
    if (rest === g.slug || rest.startsWith(g.slug + '-')) {
      matchedGradeSlug = g.slug;
      restAfterGrade = rest.slice(g.slug.length).replace(/^-+/, '');
      break;
    }
  }

  let matchedTypeSlug = null;
  if (restAfterGrade) {
    for (const t of availableTypes) {
      const typeSlugWithSuffix = buildTypeSlug(catalogProductSlug, t.slug);
      if (
        restAfterGrade === t.slug ||
        restAfterGrade === typeSlugWithSuffix ||
        restAfterGrade.replace(/-flanges$/, '') === t.slug ||
        restAfterGrade.replace(/-fittings$/, '') === t.slug
      ) {
        matchedTypeSlug = t.slug;
        break;
      }
    }
  }

  if (!matchedGradeSlug && !matchedTypeSlug) {
    for (const t of availableTypes) {
      const typeSlugWithSuffix = buildTypeSlug(catalogProductSlug, t.slug);
      if (
        rest === t.slug ||
        rest === typeSlugWithSuffix ||
        rest.replace(/-flanges$/, '') === t.slug ||
        rest.replace(/-fittings$/, '') === t.slug
      ) {
        matchedTypeSlug = t.slug;
        break;
      }
    }
  }

  if (matchedTypeSlug) {
    return {
      view: 'type',
      productSlug: catalogProductSlug,
      materialSlug: matchedMaterialSlug,
      typeSlug: matchedTypeSlug,
      gradeSlug: matchedGradeSlug,
      canonicalUrl: buildTypeUrl(catalogProductSlug, matchedMaterialSlug, matchedTypeSlug, matchedGradeSlug)
    };
  }

  if (matchedGradeSlug) {
    return {
      view: 'grade',
      productSlug: catalogProductSlug,
      materialSlug: matchedMaterialSlug,
      gradeSlug: matchedGradeSlug,
      canonicalUrl: buildGradeUrl(catalogProductSlug, matchedMaterialSlug, matchedGradeSlug)
    };
  }

  return {
    view: 'material',
    productSlug: catalogProductSlug,
    materialSlug: matchedMaterialSlug,
    canonicalUrl: buildMaterialUrl(catalogProductSlug, matchedMaterialSlug)
  };
}

// Test every product in the catalog!
let testsCount = 0;
let passCount = 0;

CATALOG_PRODUCTS_DATA.forEach(p => {
  // Test product URL
  const pUrl = buildProductUrl(p.slug);
  const pParsed = parseFlatProductSlug(pUrl.replace('/products/', ''));
  testsCount++;
  if (pParsed && pParsed.view === 'product' && pParsed.productSlug === p.slug && pParsed.canonicalUrl === pUrl) {
    passCount++;
  } else {
    console.error(`FAILED Product: ${p.slug} => ${JSON.stringify(pParsed)}`);
  }

  (p.materials || []).forEach(m => {
    // Test material URL
    const mUrl = buildMaterialUrl(p.slug, m.slug);
    const mParsed = parseFlatProductSlug(mUrl.replace('/products/', ''));
    testsCount++;
    if (mParsed && mParsed.view === 'material' && mParsed.productSlug === p.slug && mParsed.materialSlug === m.slug && mParsed.canonicalUrl === mUrl) {
      passCount++;
    } else {
      console.error(`FAILED Material: ${p.slug}/${m.slug} => ${JSON.stringify(mParsed)}`);
    }

    // Test grade URLs
    (m.grades || []).forEach(g => {
      const gUrl = buildGradeUrl(p.slug, m.slug, g.slug);
      const gParsed = parseFlatProductSlug(gUrl.replace('/products/', ''));
      testsCount++;
      if (gParsed && gParsed.view === 'grade' && gParsed.productSlug === p.slug && gParsed.materialSlug === m.slug && gParsed.gradeSlug === g.slug && gParsed.canonicalUrl === gUrl) {
        passCount++;
      } else {
        console.error(`FAILED Grade: ${p.slug}/${m.slug}/${g.slug} => ${JSON.stringify(gParsed)}`);
      }
    });
  });

  // Test type URLs
  (p.types || []).forEach(t => {
    const firstMat = p.materials[0];
    const tUrl = buildTypeUrl(p.slug, firstMat.slug, t.slug);
    const tParsed = parseFlatProductSlug(tUrl.replace('/products/', ''));
    testsCount++;
    if (tParsed && tParsed.view === 'type' && tParsed.productSlug === p.slug && tParsed.typeSlug === t.slug && tParsed.canonicalUrl === tUrl) {
      passCount++;
    } else {
      console.error(`FAILED Type: ${p.slug}/${firstMat.slug}/${t.slug} => ${JSON.stringify(tParsed)}`);
    }

    if (firstMat.grades && firstMat.grades.length > 0) {
      const firstGrade = firstMat.grades[0];
      const tgUrl = buildTypeUrl(p.slug, firstMat.slug, t.slug, firstGrade.slug);
      const tgParsed = parseFlatProductSlug(tgUrl.replace('/products/', ''));
      testsCount++;
      if (tgParsed && tgParsed.view === 'type' && tgParsed.productSlug === p.slug && tgParsed.typeSlug === t.slug && tgParsed.gradeSlug === firstGrade.slug && tgParsed.canonicalUrl === tgUrl) {
        passCount++;
      } else {
        console.error(`FAILED Type+Grade: ${p.slug}/${firstMat.slug}/${firstGrade.slug}/${t.slug} => ${JSON.stringify(tgParsed)}`);
      }
    }
  });
});

console.log(`\n=== RESULTS: Passed ${passCount} / ${testsCount} tests across the ENTIRE catalog! ===`);
