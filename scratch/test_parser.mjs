import { CATALOG_PRODUCTS_DATA } from '../catalog-data.js';
import { MATERIALS_MASTER_DATA } from '../materials-data.js';

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

// Known product slugs sorted by length descending
const ALL_PRODUCT_PREFIXES = Object.keys(PRODUCT_SLUG_MAP).sort((a, b) => b.length - a.length);

// Known material slugs
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

  // Strip location keywords if present
  let locationKeyword = '';
  if (s.endsWith('-manufactured-in-mumbai')) {
    locationKeyword = 'manufactured-in-mumbai';
    s = s.slice(0, -'-manufactured-in-mumbai'.length);
  } else if (s.endsWith('-stockist-in-mumbai')) {
    locationKeyword = 'stockist-in-mumbai';
    s = s.slice(0, -'-stockist-in-mumbai'.length);
  }

  // Also support any old leftover keywords if crawled
  const extraKeywords = ['-supplier-in-mumbai', '-manufacturer-in-mumbai', '-exporter-in-mumbai', '-stockist-mumbai'];
  for (const ekw of extraKeywords) {
    if (s.endsWith(ekw)) {
      s = s.slice(0, -ekw.length);
      break;
    }
  }

  // 1. Identify Product
  let matchedProductKey = null;
  for (const pKey of ALL_PRODUCT_PREFIXES) {
    if (s === pKey || s.startsWith(pKey + '-')) {
      matchedProductKey = pKey;
      break;
    }
  }

  if (!matchedProductKey) {
    return null;
  }

  const catalogProductSlug = PRODUCT_SLUG_MAP[matchedProductKey];
  const productObj = CATALOG_PRODUCTS_DATA.find(p => p.slug === catalogProductSlug);
  if (!productObj) {
    return { view: 'product', productSlug: catalogProductSlug, isRedirectNeeded: false };
  }

  let rest = s.slice(matchedProductKey.length).replace(/^-+/, '');
  if (!rest) {
    // Exactly matches product
    const canonUrl = buildProductUrl(catalogProductSlug);
    const isRedirect = (rawSlug !== `${getProductCanonicalSlug(catalogProductSlug)}-${getProductKeyword(catalogProductSlug)}`);
    return { view: 'product', productSlug: catalogProductSlug, canonicalUrl: canonUrl, isRedirectNeeded: isRedirect };
  }

  // 2. Identify Material
  let matchedMaterialSlug = null;
  for (const mSlug of ALL_MATERIAL_SLUGS) {
    if (rest === mSlug || rest.startsWith(mSlug + '-')) {
      matchedMaterialSlug = mSlug;
      break;
    }
  }

  if (!matchedMaterialSlug) {
    // Check if rest matches a type or grade directly
    return { view: 'product', productSlug: catalogProductSlug };
  }

  // Normalize material slug (e.g. super-duplex -> duplex)
  if (matchedMaterialSlug === 'super-duplex') matchedMaterialSlug = 'duplex';
  const matObj = (productObj.materials || []).find(m => m.slug === matchedMaterialSlug);
  rest = rest.slice(matchedMaterialSlug.length).replace(/^-+/, '');

  if (!rest) {
    // Product + Material
    const canonUrl = buildMaterialUrl(catalogProductSlug, matchedMaterialSlug);
    return {
      view: 'material',
      productSlug: catalogProductSlug,
      materialSlug: matchedMaterialSlug,
      canonicalUrl: canonUrl
    };
  }

  // 3. We have rest after Material. Could be Grade, Type, or Grade + Type!
  // Check available types for this product
  const availableTypes = productObj.types || [];
  // Check available grades for this material
  const availableGrades = (matObj && matObj.grades) ? matObj.grades : [];

  // Sort grades by length descending to match e.g. 304l before 304, a350-lf2 before a350
  const sortedGrades = [...availableGrades].sort((a, b) => b.slug.length - a.slug.length);

  // Check if rest starts with a grade
  let matchedGradeSlug = null;
  let restAfterGrade = rest;
  for (const g of sortedGrades) {
    if (rest === g.slug || rest.startsWith(g.slug + '-')) {
      matchedGradeSlug = g.slug;
      restAfterGrade = rest.slice(g.slug.length).replace(/^-+/, '');
      break;
    }
  }

  // If there is restAfterGrade, check if it matches a type
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

  // If no grade was matched initially, check if rest is purely a type
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

  // Now resolve view
  if (matchedTypeSlug) {
    const canonUrl = buildTypeUrl(catalogProductSlug, matchedMaterialSlug, matchedTypeSlug, matchedGradeSlug);
    return {
      view: 'type',
      productSlug: catalogProductSlug,
      materialSlug: matchedMaterialSlug,
      typeSlug: matchedTypeSlug,
      gradeSlug: matchedGradeSlug,
      canonicalUrl: canonUrl
    };
  }

  if (matchedGradeSlug) {
    const canonUrl = buildGradeUrl(catalogProductSlug, matchedMaterialSlug, matchedGradeSlug);
    return {
      view: 'grade',
      productSlug: catalogProductSlug,
      materialSlug: matchedMaterialSlug,
      gradeSlug: matchedGradeSlug,
      canonicalUrl: canonUrl
    };
  }

  // Fallback to material
  return {
    view: 'material',
    productSlug: catalogProductSlug,
    materialSlug: matchedMaterialSlug,
    canonicalUrl: buildMaterialUrl(catalogProductSlug, matchedMaterialSlug)
  };
}

// TEST PARSER ON TEST CASES
const testCases = [
  'flanges-manufactured-in-mumbai',
  'pipes-tubes-stockist-in-mumbai',
  'butt-weld-fittings-manufactured-in-mumbai',
  'forged-fittings-stockist-in-mumbai',
  'flanges-stainless-steel-manufactured-in-mumbai',
  'pipes-tubes-stainless-steel-stockist-in-mumbai',
  'flanges-stainless-steel-304-manufactured-in-mumbai',
  'flanges-stainless-steel-310s-manufactured-in-mumbai',
  'pipes-tubes-stainless-steel-304-stockist-in-mumbai',
  'flanges-stainless-steel-310s-slip-on-flanges-manufactured-in-mumbai',
  'flanges-stainless-steel-310s-weld-neck-flanges-manufactured-in-mumbai',
  'flanges-stainless-steel-316-blind-flanges-manufactured-in-mumbai',
  'flanges-stainless-steel-slip-on-flanges-manufactured-in-mumbai',
  'forged-fittings-carbon-steel-a105-manufactured-in-mumbai',
  // Old URLs without mumbai
  'flanges',
  'pipes-tubes',
  'flanges-stainless-steel',
  'flanges-stainless-steel-310s'
];

console.log('\n--- PARSING TEST CASES ---');
testCases.forEach(tc => {
  const res = parseFlatProductSlug(tc);
  console.log(`Input: "${tc}"`);
  console.log(`  -> view: ${res ? res.view : 'null'}, prod: ${res ? res.productSlug : ''}, mat: ${res ? res.materialSlug : ''}, grade: ${res ? res.gradeSlug : ''}, type: ${res ? res.typeSlug : ''}`);
  console.log(`  -> canonical: ${res ? res.canonicalUrl : ''}`);
});
