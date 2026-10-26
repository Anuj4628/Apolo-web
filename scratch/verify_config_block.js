const fs = require('fs');

let content = fs.readFileSync('product-materials.js', 'utf8');

// 1. Helper block to insert at top of IIFE
const configBlock = `  // =========================================================================
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
`;

console.log('Prepared config block.');
