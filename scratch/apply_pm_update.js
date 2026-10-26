const fs = require('fs');

let code = fs.readFileSync('product-materials.js', 'utf8');

// 1. Replace IIFE header up to getProduct
const oldTop = `(function () {
  'use strict';

  // Product slug aliases for resilient routing
  const SLUG_ALIASES = {
    'body-fitting': 'forge-fittings',
    'body-fittings': 'forge-fittings',
    'forged-fittings': 'forge-fittings',
    'pipes': 'pipes-tubes',
    'tubes': 'pipes-tubes',
    'sheets': 'sheets-plates',
    'plates': 'sheets-plates',
    'rods': 'rods-bars',
    'bars': 'rods-bars',
    'dairy-pharma': 'dairy-pharma-fittings'
  };`;

const newTop = `(function () {
  'use strict';

  // =========================================================================
  // SEO URL CONFIGURATION & LOCATION KEYWORDS
  // Alternating manufactured-in-mumbai / stockist-in-mumbai across product families
  // =========================================================================
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

  function getProductKeyword(prodSlug) {
    const cfg = PRODUCT_CONFIG[prodSlug];
    return cfg ? cfg.keyword : 'manufactured-in-mumbai';
  }

  function getProductTitleWord(prodSlug) {
    const cfg = PRODUCT_CONFIG[prodSlug];
    return cfg ? cfg.titleWord : 'Manufactured in Mumbai';
  }

  function getProductCanonicalSlug(prodSlug) {
    const cfg = PRODUCT_CONFIG[prodSlug];
    return cfg ? cfg.canonical : prodSlug;
  }

  function buildTypeSlug(prodSlug, rawTypeSlug) {
    let slug = (rawTypeSlug || '').toLowerCase();
    if (prodSlug === 'flanges' && !slug.endsWith('-flanges') && !slug.endsWith('-flange')) {
      slug += '-flanges';
    }
    return slug;
  }

  // Flat SEO URL Builders
  function buildProductUrl(prodSlug) {
    const canon = getProductCanonicalSlug(prodSlug);
    const kw = getProductKeyword(prodSlug);
    return \`/products/\${canon}-\${kw}\`;
  }

  function buildMaterialUrl(prodSlug, matSlug) {
    const canon = getProductCanonicalSlug(prodSlug);
    const kw = getProductKeyword(prodSlug);
    return \`/products/\${canon}-\${matSlug}-\${kw}\`;
  }

  function buildGradeUrl(prodSlug, matSlug, gradeSlug) {
    const canon = getProductCanonicalSlug(prodSlug);
    const kw = getProductKeyword(prodSlug);
    return \`/products/\${canon}-\${matSlug}-\${gradeSlug}-\${kw}\`;
  }

  function buildTypeUrl(prodSlug, matSlug, typeSlug, gradeSlug) {
    const canon = getProductCanonicalSlug(prodSlug);
    const kw = getProductKeyword(prodSlug);
    const formattedType = buildTypeSlug(prodSlug, typeSlug);
    if (gradeSlug) {
      return \`/products/\${canon}-\${matSlug}-\${gradeSlug}-\${formattedType}-\${kw}\`;
    }
    return \`/products/\${canon}-\${matSlug}-\${formattedType}-\${kw}\`;
  }

  /**
   * Update page SEO metadata: title, meta description, canonical, OG tags & JSON-LD schema
   */
  function updatePageMetadata({ title, description, canonicalUrl, breadcrumbs = [] }) {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    const origin = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin !== 'null') ? window.location.origin : 'https://apolloforge.com';
    const fullCanonical = origin + (canonicalUrl || '');

    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', fullCanonical);

      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', fullCanonical);
    }

    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', title);
    }

    if (description) {
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', description);
    }

    // JSON-LD Structured Data Schema
    let schemaScript = document.getElementById('pmSchemaJsonLd');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'pmSchemaJsonLd';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "name": title ? title.split('|')[0].trim() : "Industrial Metal Product",
          "description": description || "",
          "url": fullCanonical,
          "brand": {
            "@type": "Brand",
            "name": "Apollo Forge & Fitting"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "Apollo Forge & Fitting",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressCountry": "IN"
            }
          }
        }
      ]
    };

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaData["@graph"].push({
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((bc, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": bc.label,
          "item": bc.url.startsWith('http') ? bc.url : (origin + (bc.url.startsWith('/') ? bc.url : '/' + bc.url))
        }))
      });
    }

    schemaScript.textContent = JSON.stringify(schemaData);
  }

  /**
   * Resilient Parser for Flat SEO Slugs:
   * PRODUCT-MATERIAL-GRADE-TYPE-LOCATION-KEYWORD
   */
  function parseFlatProductSlug(rawSlug) {
    if (!rawSlug) return null;
    let s = rawSlug.toLowerCase().trim();

    // Strip location keywords if present
    if (s.endsWith('-manufactured-in-mumbai')) {
      s = s.slice(0, -'-manufactured-in-mumbai'.length);
    } else if (s.endsWith('-stockist-in-mumbai')) {
      s = s.slice(0, -'-stockist-in-mumbai'.length);
    }

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

    // 2. Identify Material
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

    // 3. Match Grade / Type
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

  // Product slug aliases for resilient routing
  const SLUG_ALIASES = {
    'body-fitting': 'forge-fittings',
    'body-fittings': 'forge-fittings',
    'forged-fittings': 'forge-fittings',
    'pipes': 'pipes-tubes',
    'tubes': 'pipes-tubes',
    'sheets': 'sheets-plates',
    'plates': 'sheets-plates',
    'rods': 'rods-bars',
    'bars': 'rods-bars',
    'dairy-pharma': 'dairy-pharma-fittings'
  };`;

if (!code.includes(oldTop)) {
  console.error('Failed to locate oldTop in product-materials.js');
  process.exit(1);
}
code = code.replace(oldTop, newTop);

// 2. Replace parseCurrentRoute
const oldParseRoute = `  function parseCurrentRoute() {
    const path = window.location.pathname.replace(/\\/+$/, '') || '/';
    const searchParams = new URLSearchParams(window.location.search);

    // 1. Check Query Parameters fallback first if present
    const qProduct = searchParams.get('product');
    const qMaterial = searchParams.get('material');
    const qGrade = searchParams.get('grade');
    const qType = searchParams.get('type');
    const qView = searchParams.get('view');

    if (qProduct) {
      if (qGrade && qMaterial) {
        return { view: 'grade', productSlug: qProduct, materialSlug: qMaterial, gradeSlug: qGrade };
      }
      if (qType) {
        return { view: 'type', productSlug: qProduct, materialSlug: qMaterial || 'stainless-steel', typeSlug: qType };
      }
      if (qMaterial) {
        return { view: 'material', productSlug: qProduct, materialSlug: qMaterial };
      }
      return { view: 'product', productSlug: qProduct };
    }

    if (qMaterial) {
      return { view: 'material_detail', materialSlug: qMaterial };
    }

    if (qView === 'materials' || searchParams.has('materials')) {
      return { view: 'materials_hub' };
    }

    // 2. Parse Clean Pathname: /products/... or /materials/...
    const segments = path.split('/').filter(Boolean);

    // If pathname is /materials or materials.html
    if (segments.length > 0 && (segments[0] === 'materials' || segments[0] === 'materials.html')) {
      if (segments.length === 1) {
        return { view: 'materials_hub' };
      }
      return { view: 'material_detail', materialSlug: segments[1] };
    }

    // Check if on materials.html directly
    if (path.includes('materials.html')) {
      return { view: 'materials_hub' };
    }

    // If root or index or product-materials.html with no params, default to flanges
    if (segments.length === 0 || segments[0] === 'product-materials.html') {
      return { view: 'product', productSlug: 'flanges' };
    }

    if (segments[0] === 'products') {
      if (segments.length === 1) {
        return { view: 'product', productSlug: 'flanges' };
      }

      const productSlug = segments[1];

      // Format: /products/:product/grades/:grade
      if (segments.length >= 4 && segments[2] === 'grades') {
        return { view: 'grade', productSlug, materialSlug: 'stainless-steel', gradeSlug: segments[3] };
      }

      // Format: /products/:product/types/:type
      if (segments.length >= 4 && segments[2] === 'types') {
        return { view: 'type', productSlug, materialSlug: 'stainless-steel', typeSlug: segments[3] };
      }

      // Format: /products/:product/:material/grades/:grade
      if (segments.length >= 5 && segments[3] === 'grades') {
        return { view: 'grade', productSlug, materialSlug: segments[2], gradeSlug: segments[4] };
      }

      // Format: /products/:product/:material/types/:type
      if (segments.length >= 5 && segments[3] === 'types') {
        return { view: 'type', productSlug, materialSlug: segments[2], typeSlug: segments[4] };
      }

      // Format: /products/:product/:material
      if (segments.length === 3) {
        return { view: 'material', productSlug, materialSlug: segments[2] };
      }

      // Format: /products/:product
      return { view: 'product', productSlug };
    }

    // Default fallback
    return { view: 'product', productSlug: 'flanges' };
  }`;

const newParseRoute = `  function parseCurrentRoute() {
    const path = window.location.pathname.replace(/\\/+$/, '') || '/';
    const searchParams = new URLSearchParams(window.location.search);

    // 1. Check Query Parameters fallback first if present
    const qProduct = searchParams.get('product');
    const qMaterial = searchParams.get('material');
    const qGrade = searchParams.get('grade');
    const qType = searchParams.get('type');
    const qView = searchParams.get('view');

    if (qProduct) {
      const flatParsed = parseFlatProductSlug(qProduct);
      if (flatParsed) {
        return flatParsed;
      }
      if (qGrade && qMaterial) {
        return { view: 'grade', productSlug: qProduct, materialSlug: qMaterial, gradeSlug: qGrade, canonicalUrl: buildGradeUrl(qProduct, qMaterial, qGrade) };
      }
      if (qType) {
        return { view: 'type', productSlug: qProduct, materialSlug: qMaterial || 'stainless-steel', typeSlug: qType, canonicalUrl: buildTypeUrl(qProduct, qMaterial || 'stainless-steel', qType) };
      }
      if (qMaterial) {
        return { view: 'material', productSlug: qProduct, materialSlug: qMaterial, canonicalUrl: buildMaterialUrl(qProduct, qMaterial) };
      }
      return { view: 'product', productSlug: qProduct, canonicalUrl: buildProductUrl(qProduct) };
    }

    if (qMaterial) {
      return { view: 'material_detail', materialSlug: qMaterial };
    }

    if (qView === 'materials' || searchParams.has('materials')) {
      return { view: 'materials_hub' };
    }

    // 2. Parse Clean Pathname: /products/... or /materials/...
    const segments = path.split('/').filter(Boolean);

    // If pathname is /materials or materials.html
    if (segments.length > 0 && (segments[0] === 'materials' || segments[0] === 'materials.html')) {
      if (segments.length === 1) {
        return { view: 'materials_hub' };
      }
      return { view: 'material_detail', materialSlug: segments[1] };
    }

    if (path.includes('materials.html')) {
      return { view: 'materials_hub' };
    }

    // If root or index or product-materials.html with no params, default to flanges
    if (segments.length === 0 || segments[0] === 'product-materials.html') {
      return { view: 'product', productSlug: 'flanges', canonicalUrl: buildProductUrl('flanges') };
    }

    if (segments[0] === 'products') {
      if (segments.length === 1) {
        return { view: 'product', productSlug: 'flanges', canonicalUrl: buildProductUrl('flanges') };
      }

      // Flat slug (e.g. /products/flanges-manufactured-in-mumbai or /products/flanges-stainless-steel-310s-slip-on-flanges-manufactured-in-mumbai)
      if (segments.length === 2) {
        const flatParsed = parseFlatProductSlug(segments[1]);
        if (flatParsed) {
          if (flatParsed.canonicalUrl && window.location.pathname !== flatParsed.canonicalUrl && window.location.protocol.startsWith('http')) {
            window.history.replaceState(null, '', flatParsed.canonicalUrl);
          }
          return flatParsed;
        }
      }

      // Legacy slash URLs (e.g. /products/flanges/stainless-steel/grades/310s)
      const rawProd = segments[1];
      const prodSlug = PRODUCT_SLUG_MAP[rawProd] || rawProd;

      let legacyRoute = null;
      if (segments.length >= 4 && segments[2] === 'grades') {
        legacyRoute = { view: 'grade', productSlug: prodSlug, materialSlug: 'stainless-steel', gradeSlug: segments[3], canonicalUrl: buildGradeUrl(prodSlug, 'stainless-steel', segments[3]) };
      } else if (segments.length >= 4 && segments[2] === 'types') {
        legacyRoute = { view: 'type', productSlug: prodSlug, materialSlug: 'stainless-steel', typeSlug: segments[3], canonicalUrl: buildTypeUrl(prodSlug, 'stainless-steel', segments[3]) };
      } else if (segments.length >= 5 && segments[3] === 'grades') {
        legacyRoute = { view: 'grade', productSlug: prodSlug, materialSlug: segments[2], gradeSlug: segments[4], canonicalUrl: buildGradeUrl(prodSlug, segments[2], segments[4]) };
      } else if (segments.length >= 5 && segments[3] === 'types') {
        legacyRoute = { view: 'type', productSlug: prodSlug, materialSlug: segments[2], typeSlug: segments[4], canonicalUrl: buildTypeUrl(prodSlug, segments[2], segments[4]) };
      } else if (segments.length === 3) {
        legacyRoute = { view: 'material', productSlug: prodSlug, materialSlug: segments[2], canonicalUrl: buildMaterialUrl(prodSlug, segments[2]) };
      } else {
        legacyRoute = { view: 'product', productSlug: prodSlug, canonicalUrl: buildProductUrl(prodSlug) };
      }

      if (legacyRoute && legacyRoute.canonicalUrl && window.location.pathname !== legacyRoute.canonicalUrl && window.location.protocol.startsWith('http')) {
        window.history.replaceState(null, '', legacyRoute.canonicalUrl);
      }
      return legacyRoute;
    }

    return { view: 'product', productSlug: 'flanges', canonicalUrl: buildProductUrl('flanges') };
  }`;

if (!code.includes(oldParseRoute)) {
  console.error('Failed to locate oldParseRoute in product-materials.js');
  process.exit(1);
}
code = code.replace(oldParseRoute, newParseRoute);

// 3. Update renderProductSwitcherBar
code = code.replace(
  'href="/products/${p.slug}"',
  'href="${buildProductUrl(p.slug)}"'
);

// 4. Update renderProductView
const oldRenderProductViewTop = `  function renderProductView(product) {
    document.title = \`\${product.name} Industrial Manufacturing & Materials | Apollo Forge & Fitting\`;

    const breadcrumbs = [
      { label: 'Home', url: 'index.html' },
      { label: 'Products', url: '/products/flanges' },
      { label: product.name, url: \`/products/\${product.slug}\` }
    ];`;

const newRenderProductViewTop = `  function renderProductView(product) {
    const titleWord = getProductTitleWord(product.slug);
    const pageTitle = \`\${product.name} \${titleWord} | Apollo Forge & Fitting\`;
    const canonicalUrl = buildProductUrl(product.slug);

    const breadcrumbs = [
      { label: 'Home', url: 'index.html' },
      { label: 'Products', url: buildProductUrl('flanges') },
      { label: product.name, url: canonicalUrl }
    ];

    updatePageMetadata({
      title: pageTitle,
      description: \`Apollo Forge & Fitting is a leading industrial \${product.name.toLowerCase()} \${titleWord.toLowerCase()}, supplying certified components with comprehensive chemical and mechanical test certificates.\`,
      canonicalUrl: canonicalUrl,
      breadcrumbs: breadcrumbs
    });`;

if (!code.includes(oldRenderProductViewTop)) {
  console.error('Failed to locate oldRenderProductViewTop');
  process.exit(1);
}
code = code.replace(oldRenderProductViewTop, newRenderProductViewTop);

// Material cards link in renderProductView
code = code.replace(
  'const materialDetailUrl = `/products/${product.slug}/${m.slug}`;',
  'const materialDetailUrl = buildMaterialUrl(product.slug, m.slug);'
);

// 5. Update renderMaterialView
const oldRenderMaterialViewTop = `  function renderMaterialView(product, material) {
    document.title = \`\${material.name} \${product.suffix} | Apollo Forge & Fitting\`;

    const breadcrumbs = [
      { label: 'Home', url: 'index.html' },
      { label: 'Products', url: '/products/flanges' },
      { label: product.name, url: \`/products/\${product.slug}\` },
      { label: material.name, url: \`/products/\${product.slug}/\${material.slug}\` }
    ];`;

const newRenderMaterialViewTop = `  function renderMaterialView(product, material) {
    const titleWord = getProductTitleWord(product.slug);
    const pageTitle = \`\${material.name} \${product.suffix} \${titleWord} | Apollo Forge & Fitting\`;
    const canonicalUrl = buildMaterialUrl(product.slug, material.slug);

    const breadcrumbs = [
      { label: 'Home', url: 'index.html' },
      { label: 'Products', url: buildProductUrl('flanges') },
      { label: product.name, url: buildProductUrl(product.slug) },
      { label: material.name, url: canonicalUrl }
    ];

    updatePageMetadata({
      title: pageTitle,
      description: \`Explore certified \${material.name} \${product.suffix} \${titleWord.toLowerCase()} manufactured by Apollo Forge & Fitting, with complete heat coding and EN 10204 3.1 inspection certification.\`,
      canonicalUrl: canonicalUrl,
      breadcrumbs: breadcrumbs
    });`;

if (!code.includes(oldRenderMaterialViewTop)) {
  console.error('Failed to locate oldRenderMaterialViewTop');
  process.exit(1);
}
code = code.replace(oldRenderMaterialViewTop, newRenderMaterialViewTop);

// Sidebar links in renderMaterialView
code = code.replace(
  'href="/products/${product.slug}/${m.slug}"',
  'href="${buildMaterialUrl(product.slug, m.slug)}"'
);

// Mobile strip in renderMaterialView
code = code.replace(
  'href="/products/${product.slug}/${m.slug}"',
  'href="${buildMaterialUrl(product.slug, m.slug)}"'
);

// Grade chips in renderMaterialView
code = code.replace(
  'const gradeUrl = `/products/${product.slug}/${material.slug}/grades/${g.slug}`;',
  'const gradeUrl = buildGradeUrl(product.slug, material.slug, g.slug);'
);

// Type cards in renderMaterialView
code = code.replace(
  'const typeUrl = `/products/${product.slug}/${material.slug}/types/${t.slug}`;',
  'const typeUrl = buildTypeUrl(product.slug, material.slug, t.slug);'
);

// 6. Update renderGradeView
const oldRenderGradeViewTop = `  function renderGradeView(product, material, grade) {
    document.title = \`\${grade.name} \${material.name} \${product.suffix} Technical Specification | Apollo Forge & Fitting\`;

    const breadcrumbs = [
      { label: 'Home', url: 'index.html' },
      { label: 'Products', url: '/products/flanges' },
      { label: product.name, url: \`/products/\${product.slug}\` },
      { label: material.name, url: \`/products/\${product.slug}/\${material.slug}\` },
      { label: grade.name, url: \`/products/\${product.slug}/\${material.slug}/grades/\${grade.slug}\` }
    ];`;

const newRenderGradeViewTop = `  function renderGradeView(product, material, grade) {
    const titleWord = getProductTitleWord(product.slug);
    const pageTitle = \`Grade \${grade.name} \${material.name} \${product.suffix} \${titleWord} | Apollo Forge & Fitting\`;
    const canonicalUrl = buildGradeUrl(product.slug, material.slug, grade.slug);

    const breadcrumbs = [
      { label: 'Home', url: 'index.html' },
      { label: 'Products', url: buildProductUrl('flanges') },
      { label: product.name, url: buildProductUrl(product.slug) },
      { label: material.name, url: buildMaterialUrl(product.slug, material.slug) },
      { label: grade.name, url: canonicalUrl }
    ];

    updatePageMetadata({
      title: pageTitle,
      description: \`Grade \${grade.name} \${material.name} \${product.suffix} \${titleWord.toLowerCase()} technical specification, ASTM/ASME designations, mechanical properties, and pressure ratings.\`,
      canonicalUrl: canonicalUrl,
      breadcrumbs: breadcrumbs
    });`;

if (!code.includes(oldRenderGradeViewTop)) {
  console.error('Failed to locate oldRenderGradeViewTop');
  process.exit(1);
}
code = code.replace(oldRenderGradeViewTop, newRenderGradeViewTop);

// Related grades in renderGradeView
code = code.replace(
  'href="/products/${product.slug}/${material.slug}/grades/${rg.slug}"',
  'href="${buildGradeUrl(product.slug, material.slug, rg.slug)}"'
);

// Related types in renderGradeView
code = code.replace(
  'href="/products/${product.slug}/${material.slug}/types/${t.slug}"',
  'href="${buildTypeUrl(product.slug, material.slug, t.slug, grade.slug)}"'
);

// 7. Update renderTypeView
const oldRenderTypeViewTop = `  function renderTypeView(product, material, type) {
    document.title = \`\${type.name} - \${product.suffix} Engineering Specification | Apollo Forge & Fitting\`;

    const breadcrumbs = [
      { label: 'Home', url: 'index.html' },
      { label: 'Products', url: '/products/flanges' },
      { label: product.name, url: \`/products/\${product.slug}\` },
      { label: material.name, url: \`/products/\${product.slug}/\${material.slug}\` },
      { label: type.name, url: \`/products/\${product.slug}/\${material.slug}/types/\${type.slug}\` }
    ];`;

const newRenderTypeViewTop = `  function renderTypeView(product, material, type, grade = null) {
    const titleWord = getProductTitleWord(product.slug);
    const gradePrefix = grade ? \`\${grade.name} \` : '';
    const pageTitle = \`\${type.name} - \${gradePrefix}\${material.name} \${product.suffix} \${titleWord} | Apollo Forge & Fitting\`;
    const canonicalUrl = buildTypeUrl(product.slug, material.slug, type.slug, grade ? grade.slug : null);

    const breadcrumbs = [
      { label: 'Home', url: 'index.html' },
      { label: 'Products', url: buildProductUrl('flanges') },
      { label: product.name, url: buildProductUrl(product.slug) },
      { label: material.name, url: buildMaterialUrl(product.slug, material.slug) }
    ];
    if (grade) {
      breadcrumbs.push({ label: grade.name, url: buildGradeUrl(product.slug, material.slug, grade.slug) });
    }
    breadcrumbs.push({ label: type.name, url: canonicalUrl });

    updatePageMetadata({
      title: pageTitle,
      description: \`Engineering specification, standard dimensions, pressure ratings, and facing details for \${type.name} in \${gradePrefix}\${material.name} \${product.suffix} \${titleWord.toLowerCase()}.\`,
      canonicalUrl: canonicalUrl,
      breadcrumbs: breadcrumbs
    });`;

if (!code.includes(oldRenderTypeViewTop)) {
  console.error('Failed to locate oldRenderTypeViewTop');
  process.exit(1);
}
code = code.replace(oldRenderTypeViewTop, newRenderTypeViewTop);

// Supported materials chips in renderTypeView
code = code.replace(
  'href="/products/${product.slug}/${matObj.slug}/types/${type.slug}"',
  'href="${buildTypeUrl(product.slug, matObj.slug, type.slug, grade ? grade.slug : null)}"'
);

// Related types in renderTypeView
code = code.replace(
  '<a href="/products/${product.slug}/${material.slug}/types/${ot.slug}" class="pm-type-card">',
  '<a href="${buildTypeUrl(product.slug, material.slug, ot.slug, grade ? grade.slug : null)}" class="pm-type-card">'
);

// 8. Update renderMaterialDetailView
code = code.replace(
  'const productDetailUrl = `/products/${p.slug}/${material.catalogSlug}`;',
  'const productDetailUrl = buildMaterialUrl(p.slug, material.catalogSlug);'
);

// 9. Update renderApp call to renderTypeView with grade
const oldRenderAppType = `    if (route.view === 'type') {
      const type = getType(product, route.typeSlug);
      if (!type) {
        mount.innerHTML = renderNotFoundView(\`Product type "\${route.typeSlug}" is not listed for \${product.name}.\`);
        return;
      }
      mount.innerHTML = renderTypeView(product, material, type);
      return;
    }`;

const newRenderAppType = `    if (route.view === 'type') {
      const type = getType(product, route.typeSlug);
      if (!type) {
        mount.innerHTML = renderNotFoundView(\`Product type "\${route.typeSlug}" is not listed for \${product.name}.\`);
        return;
      }
      const grade = route.gradeSlug ? getGrade(material, route.gradeSlug) : null;
      mount.innerHTML = renderTypeView(product, material, type, grade);
      return;
    }`;

if (!code.includes(oldRenderAppType)) {
  console.error('Failed to locate oldRenderAppType');
  process.exit(1);
}
code = code.replace(oldRenderAppType, newRenderAppType);

fs.writeFileSync('product-materials.js', code, 'utf8');
console.log('Successfully updated product-materials.js!');
