/**
 * APOLLO FORGE & FITTING — INDUSTRIAL CATALOG SYSTEM
 * Product -> Material -> Grade / Type -> Technical Detail System
 * Scalable data-driven router and view rendering engine
 */

import { CATALOG_PRODUCTS_DATA } from './catalog-data.js';
import { MATERIALS_MASTER_DATA, MATERIAL_SLUG_ALIASES, getMaterialMaster } from './materials-data.js';

(function () {
  'use strict';

  function normalizeAssetUrl(url) {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//') || url.startsWith('data:')) {
      return url;
    }
    return url.startsWith('/') ? url : '/' + url;
  }

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
  };

  /**
   * Resolve product object by slug
   */
  function getProduct(slug) {
    if (!slug) return CATALOG_PRODUCTS_DATA[0];
    const normalized = SLUG_ALIASES[slug.toLowerCase()] || slug.toLowerCase();
    return CATALOG_PRODUCTS_DATA.find(p => p.slug === normalized) || null;
  }

  /**
   * Resolve material object within product
   */
  function getMaterial(product, materialSlug) {
    if (!product || !product.materials) return null;
    if (!materialSlug) return product.materials[0];
    const norm = materialSlug.toLowerCase().trim();
    const master = getMaterialMaster(norm);
    const catalogSlug = master ? master.catalogSlug : norm;
    return product.materials.find(m => m.slug === norm || m.slug === catalogSlug) || null;
  }

  /**
   * Resolve grade object within material
   */
  function getGrade(material, gradeSlug) {
    if (!material || !material.grades) return null;
    const norm = gradeSlug.toLowerCase();
    return material.grades.find(g => g.slug.toLowerCase() === norm || g.name.toLowerCase() === norm) || null;
  }

  /**
   * Resolve type object within product
   */
  function getType(product, typeSlug) {
    if (!product || !product.types) return null;
    const norm = typeSlug.toLowerCase();
    return product.types.find(t => t.slug.toLowerCase() === norm) || null;
  }

  /**
   * Get all products available for a given material slug
   */
  function getAvailableProductsForMaterial(materialSlug) {
    const master = getMaterialMaster(materialSlug);
    if (!master) return [];
    const catalogSlug = master.catalogSlug;
    const directSlug = master.slug;

    return CATALOG_PRODUCTS_DATA.filter(prod => {
      return prod.materials && prod.materials.some(m => m.slug === catalogSlug || m.slug === directSlug);
    }).map(prod => {
      const matEntry = prod.materials.find(m => m.slug === catalogSlug || m.slug === directSlug);
      return {
        product: prod,
        materialEntry: matEntry
      };
    });
  }

  /**
   * Parse the current URL and return route params
   */
  function parseCurrentRoute() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
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
  }

  /**
   * Synchronize active classes on desktop navigation
   */
  function updateNavActiveState(route) {
    const isMaterialRoute = route.view === 'materials_hub' || route.view === 'material_detail';
    const navProductItem = document.getElementById('navProductItem');
    const navMaterialItem = document.getElementById('navMaterialItem');
    const productNavTrigger = document.getElementById('productNavTrigger');
    const materialNavTrigger = document.getElementById('materialNavTrigger');

    if (isMaterialRoute) {
      if (navMaterialItem) navMaterialItem.classList.add('is-active');
      if (materialNavTrigger) {
        materialNavTrigger.classList.add('is-active');
        materialNavTrigger.setAttribute('aria-current', 'page');
      }
      if (navProductItem) navProductItem.classList.remove('is-active');
      if (productNavTrigger) {
        productNavTrigger.classList.remove('is-active');
        productNavTrigger.removeAttribute('aria-current');
      }
    } else {
      if (navProductItem) navProductItem.classList.add('is-active');
      if (productNavTrigger) {
        productNavTrigger.classList.add('is-active');
        productNavTrigger.setAttribute('aria-current', 'page');
      }
      if (navMaterialItem) navMaterialItem.classList.remove('is-active');
      if (materialNavTrigger) {
        materialNavTrigger.classList.remove('is-active');
        materialNavTrigger.removeAttribute('aria-current');
      }
    }
  }

  /**
   * Clean navigation helper
   */
  function navigate(url, replace = false) {
    if (replace) {
      window.history.replaceState(null, '', url);
    } else {
      window.history.pushState(null, '', url);
    }
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Global click interceptor for catalog links
   */
  function initLinkInterception() {
    document.addEventListener('click', (e) => {
      // Don't intercept ctrl/cmd clicks or non-primary clicks
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Handle mailto, tel, external, or hash links naturally
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#')) {
        return;
      }

      // Intercept /products/..., /materials/..., product-materials.html..., materials.html...
      if (
        href.startsWith('/products') ||
        href.startsWith('products/') ||
        href.startsWith('/materials') ||
        href.startsWith('materials/') ||
        href.startsWith('product-materials.html') ||
        href.startsWith('materials.html')
      ) {
        e.preventDefault();
        navigate(href.startsWith('/') ? href : '/' + href);
      }
    });
  }

  // =========================================================================
  // BREADCRUMB BUILDER
  // =========================================================================
  function renderBreadcrumbs(items) {
    const listHtml = items.map((item, idx) => {
      const isLast = idx === items.length - 1;
      if (isLast) {
        return `
          <li class="pm-breadcrumb-item">
            <span class="pm-breadcrumb-current" aria-current="page">${escapeHtml(item.label)}</span>
          </li>
        `;
      }
      return `
        <li class="pm-breadcrumb-item">
          <a href="${item.url}" class="pm-breadcrumb-link">${escapeHtml(item.label)}</a>
          <span class="pm-breadcrumb-sep" aria-hidden="true">/</span>
        </li>
      `;
    }).join('');

    return `
      <nav class="pm-breadcrumb-section" aria-label="Breadcrumb">
        <div class="pm-container">
          <ol class="pm-breadcrumb-list">
            ${listHtml}
          </ol>
        </div>
      </nav>
    `;
  }

  // =========================================================================
  // PRODUCT QUICK SWITCHER BAR
  // =========================================================================
  function renderProductSwitcher(activeProductSlug) {
    const pillsHtml = CATALOG_PRODUCTS_DATA.map(p => {
      const isActive = p.slug === activeProductSlug;
      return `
        <a 
          href="${buildProductUrl(p.slug)}" 
          class="pm-switcher-pill ${isActive ? 'is-active' : ''}" 
          role="tab" 
          aria-selected="${isActive ? 'true' : 'false'}"
        >
          <span>${escapeHtml(p.name)}</span>
        </a>
      `;
    }).join('');

    return `
      <nav class="pm-switcher-bar" aria-label="Switch Product Line">
        <div class="pm-container">
          <div class="pm-switcher-track">
            <span class="pm-switcher-label">PRODUCT LINE:</span>
            <div class="pm-switcher-pills-list" role="tablist">
              ${pillsHtml}
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  // =========================================================================
  // QUOTE CTA BANNER COMPONENT
  // =========================================================================
  function renderQuoteBanner(productName, contextSubject) {
    const subject = encodeURIComponent(`Inquiry for ${contextSubject || productName} - Apollo Forge & Fitting`);
    return `
      <section class="pm-container pm-quote-section" aria-label="Request Quote Section">
        <div class="pm-quote-banner">
          <div class="pm-quote-banner-glow" aria-hidden="true"></div>
          <div class="pm-quote-banner-content">
            <div class="pm-quote-banner-eyebrow">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>TECHNICAL INQUIRY &amp; PROCUREMENT</span>
            </div>
            <h2 class="pm-quote-banner-title">Need Certified ${escapeHtml(productName)} for Your Application?</h2>
            <p class="pm-quote-banner-desc">
              Our engineering metallurgists and export specialists provide certified material test reports (EN 10204 3.1), custom dimensional manufacturing, and rapid global logistics support.
            </p>
          </div>
          <a href="/get-quote?product=${encodeURIComponent(productName)}" class="btn-apollo-quote-solid" aria-label="Request a quote">
            <span>Request a Quote</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </section>
    `;
  }

  // =========================================================================
  // REUSABLE CARD IMAGE CONFIGURATION SYSTEM
  // =========================================================================
  const CARD_IMAGE_CONFIG = {
    default: { fit: 'contain', position: 'center', scale: 1.0, transformOrigin: 'center' },
    flanges: { fit: 'contain', position: 'center', scale: 1.05, transformOrigin: 'center' },
    'forge-fittings': { fit: 'contain', position: 'center', scale: 1.04, transformOrigin: 'center' },
    'butt-weld-fittings': { fit: 'contain', position: 'center', scale: 1.04, transformOrigin: 'center' },
    fasteners: { fit: 'contain', position: 'center', scale: 1.08, transformOrigin: 'center' },
    'pipes-tubes': { fit: 'contain', position: 'center', scale: 1.02, transformOrigin: 'center' },
    'sheets-plates': { fit: 'contain', position: 'center', scale: 1.03, transformOrigin: 'center' },
    'rods-bars': { fit: 'contain', position: 'center', scale: 1.05, transformOrigin: 'center' },
    'dairy-pharma-fittings': { fit: 'contain', position: 'center', scale: 1.04, transformOrigin: 'center' },
    'flat-bars': { fit: 'contain', position: 'center', scale: 1.03, transformOrigin: 'center' },
    circle: { fit: 'contain', position: 'center', scale: 1.06, transformOrigin: 'center' }
  };

  function getCardImageStyle(productSlug, itemSlug) {
    const key = (productSlug && CARD_IMAGE_CONFIG[productSlug]) ? productSlug : 'default';
    const cfg = { ...CARD_IMAGE_CONFIG.default, ...(CARD_IMAGE_CONFIG[key] || {}) };
    const styles = [];
    if (cfg.fit) styles.push(`object-fit: ${cfg.fit};`);
    if (cfg.position) styles.push(`object-position: ${cfg.position};`);
    if (cfg.scale && cfg.scale !== 1.0) styles.push(`transform: scale(${cfg.scale});`);
    if (cfg.transformOrigin) styles.push(`transform-origin: ${cfg.transformOrigin};`);
    return styles.join(' ');
  }

  // =========================================================================
  // VIEW 1: PRODUCT GATEWAY PAGE
  // =========================================================================
  function renderProductView(product) {
    const titleWord = getProductTitleWord(product.slug);
    const pageTitle = `${product.name} ${titleWord} | Apollo Forge & Fitting`;
    const canonicalUrl = buildProductUrl(product.slug);

    const breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Products', url: buildProductUrl('flanges') },
      { label: product.name, url: canonicalUrl }
    ];

    updatePageMetadata({
      title: pageTitle,
      description: `Apollo Forge & Fitting is a leading industrial ${product.name.toLowerCase()} ${titleWord.toLowerCase()}, supplying certified components with comprehensive chemical and mechanical test certificates.`,
      canonicalUrl: canonicalUrl,
      breadcrumbs: breadcrumbs
    });

    // 4 Highlights
    const highlightsHtml = (product.overview && product.overview.highlights ? product.overview.highlights : []).map(h => `
      <div class="pm-highlight-card">
        <h3 class="pm-highlight-title">${escapeHtml(h.title)}</h3>
        <p class="pm-highlight-desc">${escapeHtml(h.desc)}</p>
      </div>
    `).join('');

    // 9 Material Cards
    const cardsHtml = product.materials.map(m => {
      const materialDetailUrl = buildMaterialUrl(product.slug, m.slug);
      const imgStyle = getCardImageStyle(product.slug, m.slug);
      const masterMat = getMaterialMaster(m.slug);
      const matName = masterMat ? masterMat.name : m.name;
      return `
        <article class="material-card" data-material-slug="${m.slug}">
          <div class="material-card-media">
            <div class="material-card-badge">
              <span class="badge-num">${m.number}</span>
              <span class="badge-sep">/</span>
              <span>09</span>
            </div>
            <img 
              src="${normalizeAssetUrl(m.image)}" 
              alt="Apollo ${escapeHtml(matName)} ${escapeHtml(product.suffix)}" 
              class="material-card-img" 
              style="${imgStyle}"
              loading="lazy"
              onerror="this.onerror=null; this.src='${normalizeAssetUrl(product.heroImage)}';"
            />
          </div>
          <div class="material-card-content">
            <div class="material-card-eyebrow">GRADE FAMILY ${m.number}</div>
            <h3 class="material-card-title">${escapeHtml(matName)} ${escapeHtml(product.suffix)}</h3>
            <p class="material-card-desc">${escapeHtml(m.description)}</p>
            <div class="material-card-footer">
              <a href="${materialDetailUrl}" class="btn-apollo-quote-solid" style="padding: 9px 18px; font-size: 12px; width: 100%; justify-content: center;">
                <span>Explore ${escapeHtml(matName)}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    return `
      ${renderBreadcrumbs(breadcrumbs)}

      <!-- PRODUCT HERO -->
      <section class="pm-hero-section" aria-label="${escapeHtml(product.title)} Header">
        <div class="pm-hero-overlay" aria-hidden="true"></div>
        <div class="pm-container">
          <div class="pm-hero-grid">
            <div class="pm-hero-content">
              <div class="pm-hero-eyebrow-badge">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>APOLLO INDUSTRIAL PRODUCT CATALOG</span>
              </div>
              <h1 class="pm-hero-title">${escapeHtml(product.title)}</h1>
              <div class="pm-hero-subtitle">${escapeHtml(product.eyebrow)}</div>
              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-hero-desc">${escapeHtml(product.description)}</p>
              <div class="pm-hero-standards-bar">
                <div class="pm-standard-tag"><span>ISO 9001:2015</span> CERTIFIED</div>
                <div class="pm-standard-tag"><span>ASME / ASTM</span> COMPLIANT</div>
                <div class="pm-standard-tag"><span>100% HEAT</span> TRACEABILITY</div>
                <div class="pm-standard-tag"><span>EN 10204 3.1</span> INSPECTION</div>
              </div>
            </div>

            <div class="pm-hero-showcase">
              <div class="pm-hero-showcase-card">
                <div class="pm-showcase-glow" aria-hidden="true"></div>
                <div class="pm-showcase-media">
                  <img 
                    src="${normalizeAssetUrl(product.heroImage)}" 
                    alt="Apollo ${escapeHtml(product.name)} Industrial Engineering Showcase" 
                    class="pm-showcase-img"
                    loading="eager"
                  />
                </div>
                <div class="pm-showcase-tag">
                  <span class="pm-showcase-dot" aria-hidden="true"></span>
                  <span>${escapeHtml(product.heroTag)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${renderProductSwitcher(product.slug)}

      <!-- PRODUCT OVERVIEW -->
      <section class="pm-overview-section" aria-label="Product Overview">
        <div class="pm-container">
          <div class="pm-block-header">
            <div class="pm-block-eyebrow">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>ENGINEERING OVERVIEW</span>
            </div>
            <h2 class="pm-block-title">${escapeHtml(product.name)} — Overview &amp; Manufacturing Scope</h2>
            <div class="pm-hero-divider" aria-hidden="true"></div>
          </div>
          <p class="pm-overview-lead">${escapeHtml(product.overview && product.overview.lead ? product.overview.lead : product.description)}</p>
          <div class="pm-highlights-grid">
            ${highlightsHtml}
          </div>
        </div>
      </section>

      <!-- EXPLORE MATERIALS (9 METALLURGICAL FAMILIES) -->
      <section class="pm-materials-section" aria-label="Explore Materials">
        <div class="pm-container">
          <div class="pm-section-intro">
            <div class="pm-intro-eyebrow">
              <span class="pm-intro-dot" aria-hidden="true"></span>
              <span>METALLURGICAL SELECTION</span>
            </div>
            <h2 class="pm-intro-title">EXPLORE MATERIALS FOR ${escapeHtml(product.title)}</h2>
            <div class="pm-intro-orange-bar" aria-hidden="true"></div>
            <p class="pm-intro-desc">
              Apollo Forge &amp; Fittings engineers and supplies ${escapeHtml(product.name.toLowerCase())} across 9 certified material families, supporting high pressure, elevated temperature, cryogenic service, and aggressive corrosive chemical environments.
            </p>
          </div>

          <div class="pm-cards-grid">
            ${cardsHtml}
          </div>
        </div>
      </section>

      ${renderQuoteBanner(product.name, product.title)}
    `;
  }

  // =========================================================================
  // VIEW 2: MATERIAL DETAIL PAGE
  // =========================================================================
  function renderMaterialView(product, material) {
    const titleWord = getProductTitleWord(product.slug);
    const pageTitle = `${material.name} ${product.suffix} ${titleWord} | Apollo Forge & Fitting`;
    const canonicalUrl = buildMaterialUrl(product.slug, material.slug);

    const breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Products', url: buildProductUrl('flanges') },
      { label: product.name, url: buildProductUrl(product.slug) },
      { label: material.name, url: canonicalUrl }
    ];

    updatePageMetadata({
      title: pageTitle,
      description: `Explore certified ${material.name} ${product.suffix} ${titleWord.toLowerCase()} manufactured by Apollo Forge & Fitting, with complete heat coding and EN 10204 3.1 inspection certification.`,
      canonicalUrl: canonicalUrl,
      breadcrumbs: breadcrumbs
    });

    const masterMat = getMaterialMaster(material.slug);
    const masterMatSlug = masterMat ? masterMat.slug : material.slug;
    const crossCatalogBarHtml = `
      <div class="pm-cross-catalog-bar">
        <p class="pm-cross-catalog-text">
          Viewing <strong>${escapeHtml(material.name)}</strong> specification for <strong>${escapeHtml(product.name)}</strong>. 
          Looking for other components manufactured in this metallurgy?
        </p>
        <a href="/materials/${masterMatSlug}" class="pm-cross-catalog-link">
          <span>Browse All ${escapeHtml(material.name)} Products</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    `;

    // Sticky Sidebar Links (Lateral Navigation across all 9 materials)
    const sidebarItemsHtml = product.materials.map(m => {
      const isActive = m.slug === material.slug;
      return `
        <li class="pm-sidebar-item">
          <a 
            href="${buildMaterialUrl(product.slug, m.slug)}" 
            class="pm-sidebar-link ${isActive ? 'is-active' : ''}"
            aria-current="${isActive ? 'page' : 'false'}"
          >
            <span>${escapeHtml(m.name)}</span>
            <span class="pm-sidebar-badge">${m.number}</span>
          </a>
        </li>
      `;
    }).join('');

    // Mobile Horizontal Material Selector Strip
    const mobileStripHtml = product.materials.map(m => {
      const isActive = m.slug === material.slug;
      return `
        <a 
          href="${buildMaterialUrl(product.slug, m.slug)}" 
          class="pm-mobile-material-chip ${isActive ? 'is-active' : ''}"
        >
          ${escapeHtml(m.name)}
        </a>
      `;
    }).join('');

    // Available Grades Section (Conditional: Only rendered if verified grades exist)
    let gradesSectionHtml = '';
    if (material.grades && material.grades.length > 0) {
      const gradeChipsHtml = material.grades.map(g => {
        const gradeUrl = buildGradeUrl(product.slug, material.slug, g.slug);
        const miniSub = g.designation && g.designation.uns ? g.designation.uns : g.name;
        return `
          <a href="${gradeUrl}" class="pm-grade-chip" title="View technical specification for ${escapeHtml(g.name)}">
            <span class="pm-grade-chip-name">${escapeHtml(g.name)}</span>
            <span class="pm-grade-chip-sub">${escapeHtml(miniSub)}</span>
          </a>
        `;
      }).join('');

      gradesSectionHtml = `
        <section class="pm-catalog-block" aria-label="Available Grades">
          <div class="pm-block-header">
            <div class="pm-block-eyebrow">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>VERIFIED METALLURGY</span>
            </div>
            <h2 class="pm-block-title">Available Grades in ${escapeHtml(material.name)}</h2>
            <div class="pm-hero-divider" aria-hidden="true"></div>
            <p class="pm-block-sub">
              Select a verified ASTM / ASME grade chip below to review comprehensive mechanical properties, chemical designations, and testing specifications.
            </p>
          </div>
          <div class="pm-grades-grid">
            ${gradeChipsHtml}
          </div>
        </section>
      `;
    }

    // Types of [Product] Section (STRICTLY CONDITIONAL)
    let typesSectionHtml = '';
    if (product.hasTypes && product.types && product.types.length > 0) {
      const typeCardsHtml = product.types.map(t => {
        const typeUrl = buildTypeUrl(product.slug, material.slug, t.slug);
        const typeImgStyle = getCardImageStyle(product.slug, t.slug);
        return `
          <a href="${typeUrl}" class="pm-type-card" aria-label="Explore ${escapeHtml(t.name)}">
            <div class="pm-type-card-media">
              <img 
                src="${normalizeAssetUrl(t.image)}" 
                alt="Apollo ${escapeHtml(t.name)} in ${escapeHtml(material.name)}" 
                class="pm-type-card-img" 
                style="${typeImgStyle}"
                loading="lazy"
                onerror="this.onerror=null; this.src='${normalizeAssetUrl(material.image)}';"
              />
            </div>
            <div class="pm-type-card-footer">
              <span class="pm-type-card-name">${escapeHtml(t.name)}</span>
              <svg class="pm-type-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        `;
      }).join('');

      typesSectionHtml = `
        <section class="pm-catalog-block" aria-label="Types of ${escapeHtml(product.name)}">
          <div class="pm-block-header">
            <div class="pm-block-eyebrow">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>INDUSTRIAL CONFIGURATIONS</span>
            </div>
            <h2 class="pm-block-title">Types of ${escapeHtml(product.name)} in ${escapeHtml(material.name)}</h2>
            <div class="pm-hero-divider" aria-hidden="true"></div>
            <p class="pm-block-sub">
              Precision engineered mechanical configurations manufactured in certified ${escapeHtml(material.name)} with full dimensional tolerance compliance.
            </p>
          </div>
          <div class="pm-types-grid">
            ${typeCardsHtml}
          </div>
        </section>
      `;
    }

    // Technical Specifications Table
    const techTableHtml = `
      <section class="pm-catalog-block" aria-label="Technical Specifications">
        <div class="pm-block-header">
          <div class="pm-block-eyebrow">
            <span class="pm-badge-dot" aria-hidden="true"></span>
            <span>MANUFACTURING SCOPE</span>
          </div>
          <h2 class="pm-block-title">Technical Specifications &amp; Standards</h2>
          <div class="pm-hero-divider" aria-hidden="true"></div>
          <p class="pm-block-sub">
            Verified manufacturing parameters for ${escapeHtml(material.name)} ${escapeHtml(product.suffix)} supplied by Apollo Forge &amp; Fitting.
          </p>
        </div>
        <div class="pm-tech-table-wrapper">
          <table class="pm-tech-table">
            <thead>
              <tr>
                <th style="width: 30%;">SPECIFICATION PARAMETER</th>
                <th>APOLLO CERTIFIED VALUE &amp; SCOPE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-param">Material Family</td>
                <td><strong>${escapeHtml(material.name)}</strong></td>
              </tr>
              <tr>
                <td class="td-param">Product Line</td>
                <td>${escapeHtml(product.name)} (${escapeHtml(product.suffix)})</td>
              </tr>
              <tr>
                <td class="td-param">Governing Standards</td>
                <td>${escapeHtml(material.applicableStandards || 'ASME, ASTM, DIN, EN, ISO, BS, MSS')}</td>
              </tr>
              <tr>
                <td class="td-param">Standard Size Range</td>
                <td>${escapeHtml(material.sizeRange || '1/2" NB to 60" NB')}</td>
              </tr>
              <tr>
                <td class="td-param">Pressure Rating Scope</td>
                <td>${escapeHtml(material.pressureClasses || 'ASME Class 150# to 2500# / PN6 to PN400')}</td>
              </tr>
              <tr>
                <td class="td-param">Quality &amp; Testing</td>
                <td>100% PMI Spectro Analysis, Ultrasonic Testing, Hydrostatic Pressure Testing, Dimensional Inspection, Hardness Verification</td>
              </tr>
              <tr>
                <td class="td-param">Material Test Certificate</td>
                <td>Certified EN 10204 Type 3.1 MTC issued with complete melt heat chemical analysis and tensile/yield/impact test results</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `;

    // Realistic Industrial Applications
    const appsHtml = `
      <section class="pm-catalog-block" aria-label="Industrial Applications">
        <div class="pm-block-header">
          <div class="pm-block-eyebrow">
            <span class="pm-badge-dot" aria-hidden="true"></span>
            <span>SECTOR UTILIZATION</span>
          </div>
          <h2 class="pm-block-title">Typical Industrial Applications</h2>
          <div class="pm-hero-divider" aria-hidden="true"></div>
          <p class="pm-block-sub">
            Primary global engineering sectors specifying ${escapeHtml(material.name)} ${escapeHtml(product.suffix)} for severe operational conditions.
          </p>
        </div>
        <div class="pm-apps-grid">
          <span class="pm-app-tag">Oil &amp; Gas Refineries</span>
          <span class="pm-app-tag">Offshore Platforms &amp; Subsea</span>
          <span class="pm-app-tag">Chemical &amp; Petrochemical Plants</span>
          <span class="pm-app-tag">Power Generation (Nuclear &amp; Thermal)</span>
          <span class="pm-app-tag">Marine &amp; Naval Shipbuilding</span>
          <span class="pm-app-tag">Fertilizer &amp; Desalination Facilities</span>
          <span class="pm-app-tag">Cryogenic Gas Storage</span>
          <span class="pm-app-tag">High-Pressure Pipeline Loops</span>
        </div>
      </section>
    `;

    return `
      ${renderBreadcrumbs(breadcrumbs)}

      <!-- MATERIAL HERO -->
      <section class="pm-hero-section" aria-label="${escapeHtml(material.name)} ${escapeHtml(product.suffix)} Header">
        <div class="pm-hero-overlay" aria-hidden="true"></div>
        <div class="pm-container">
          <div class="pm-hero-grid">
            <div class="pm-hero-content">
              <div class="pm-hero-eyebrow-badge">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>METALLURGICAL SPECIFICATION</span>
              </div>
              <h1 class="pm-hero-title">${escapeHtml(material.name)} ${escapeHtml(product.suffix)}</h1>
              <div class="pm-hero-subtitle">ENGINEERED HIGH-INTEGRITY METALLURGY</div>
              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-hero-desc">${escapeHtml(material.description)}</p>
              <div class="pm-hero-standards-bar">
                <div class="pm-standard-tag"><span>STANDARDS:</span> ${escapeHtml(material.applicableStandards || 'ASME / ASTM')}</div>
                <div class="pm-standard-tag"><span>SIZES:</span> ${escapeHtml(material.sizeRange || '1/2" - 60"')}</div>
                <div class="pm-standard-tag"><span>RATINGS:</span> ${escapeHtml(material.pressureClasses || '150# - 2500#')}</div>
              </div>
            </div>

            <div class="pm-hero-showcase">
              <div class="pm-hero-showcase-card">
                <div class="pm-showcase-glow" aria-hidden="true"></div>
                <div class="pm-showcase-media">
                  <img 
                    src="${normalizeAssetUrl(material.image)}" 
                    alt="Apollo ${escapeHtml(material.name)} ${escapeHtml(product.suffix)} Showcase" 
                    class="pm-showcase-img"
                    loading="eager"
                    onerror="this.onerror=null; this.src='${normalizeAssetUrl(product.heroImage)}';"
                  />
                </div>
                <div class="pm-showcase-tag">
                  <span class="pm-showcase-dot" aria-hidden="true"></span>
                  <span>CERTIFIED ${escapeHtml(material.name.toUpperCase())} ${escapeHtml(product.suffix.toUpperCase())}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MOBILE LATERAL SELECTOR STRIP -->
      <div class="pm-mobile-materials-strip">
        <div class="pm-container">
          <div class="pm-mobile-materials-track">
            ${mobileStripHtml}
          </div>
        </div>
      </div>

      <!-- MAIN 2-COLUMN CATALOG LAYOUT: STICKY SIDEBAR + CONTENT -->
      <div class="pm-container">
        <div class="pm-material-layout">
          <!-- STICKY DESKTOP LATERAL SIDEBAR -->
          <aside class="pm-material-sidebar" aria-label="Materials Selector">
            <div class="pm-sidebar-header">
              <h3 class="pm-sidebar-title">
                <span>MATERIALS</span>
                <span style="color: var(--apollo-orange); font-size: 11px;">09 TOTAL</span>
              </h3>
            </div>
            <ul class="pm-sidebar-list">
              ${sidebarItemsHtml}
            </ul>
          </aside>

          <!-- MAIN CONTENT COLUMN -->
          <div class="pm-material-main">
            ${crossCatalogBarHtml}
            ${gradesSectionHtml}
            ${typesSectionHtml}
            ${techTableHtml}
            ${appsHtml}
          </div>
        </div>
      </div>

      ${renderQuoteBanner(`${material.name} ${product.suffix}`, `${material.name} ${product.suffix}`)}
    `;
  }

  // =========================================================================
  // VIEW 3: GRADE DETAIL PAGE
  // =========================================================================
  function renderGradeView(product, material, grade) {
    const titleWord = getProductTitleWord(product.slug);
    const pageTitle = `Grade ${grade.name} ${material.name} ${product.suffix} ${titleWord} | Apollo Forge & Fitting`;
    const canonicalUrl = buildGradeUrl(product.slug, material.slug, grade.slug);

    const breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Products', url: buildProductUrl('flanges') },
      { label: product.name, url: buildProductUrl(product.slug) },
      { label: material.name, url: buildMaterialUrl(product.slug, material.slug) },
      { label: grade.name, url: canonicalUrl }
    ];

    updatePageMetadata({
      title: pageTitle,
      description: `Grade ${grade.name} ${material.name} ${product.suffix} ${titleWord.toLowerCase()} technical specification, ASTM/ASME designations, mechanical properties, and pressure ratings.`,
      canonicalUrl: canonicalUrl,
      breadcrumbs: breadcrumbs
    });

    // Designation Badges (ASTM, ASME, UNS, EN)
    const desig = grade.designation || {};
    const desigBadgesHtml = [
      { std: 'ASTM', val: desig.astm },
      { std: 'ASME', val: desig.asme },
      { std: 'UNS', val: desig.uns },
      { std: 'EN', val: desig.en }
    ].filter(d => d.val).map(d => `
      <div class="pm-designation-badge">
        <span class="pm-desig-std">${escapeHtml(d.std)}</span>
        <span class="pm-desig-val">${escapeHtml(d.val)}</span>
      </div>
    `).join('');

    // Characteristics Cards
    const charHtml = (grade.characteristics || []).map(c => `
      <div class="pm-char-card">
        ${escapeHtml(c)}
      </div>
    `).join('');

    // Applications Tags
    const appsHtml = (grade.applications || []).map(a => `
      <span class="pm-app-tag">${escapeHtml(a)}</span>
    `).join('');

    // Standards Tags
    const stdsHtml = (grade.standards || []).map(s => `
      <div class="pm-standard-tag" style="color: #334155; background: #F1F5F9; border-color: #CBD5E1;">
        <span>${escapeHtml(s)}</span>
      </div>
    `).join('');

    // Related Grades in same material
    const relatedGrades = (material.grades || []).filter(g => g.slug !== grade.slug);
    const relatedGradesHtml = relatedGrades.map(rg => `
      <a href="${buildGradeUrl(product.slug, material.slug, rg.slug)}" class="pm-grade-chip">
        <span class="pm-grade-chip-name">${escapeHtml(rg.name)}</span>
        <span class="pm-grade-chip-sub">${escapeHtml(rg.designation && rg.designation.uns ? rg.designation.uns : rg.name)}</span>
      </a>
    `).join('');

    // Related Types (if product has types)
    let relatedTypesBlockHtml = '';
    if (product.hasTypes && product.types && product.types.length > 0) {
      const typeChipsHtml = product.types.map(t => `
        <a href="${buildTypeUrl(product.slug, material.slug, t.slug, grade.slug)}" class="pm-grade-chip" style="border-radius: 4px;">
          <span class="pm-grade-chip-name" style="font-size: 13.5px;">${escapeHtml(t.name)}</span>
        </a>
      `).join('');

      relatedTypesBlockHtml = `
        <section class="pm-catalog-block" aria-label="Available Configurations">
          <div class="pm-block-header">
            <div class="pm-block-eyebrow">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>AVAILABLE PRODUCT TYPES</span>
            </div>
            <h2 class="pm-block-title">Available ${escapeHtml(product.name)} Types in Grade ${escapeHtml(grade.name)}</h2>
            <div class="pm-hero-divider" aria-hidden="true"></div>
            <p class="pm-block-sub">Select an industrial configuration to review specific dimensional geometries in ${escapeHtml(grade.name)}.</p>
          </div>
          <div class="pm-grades-grid">
            ${typeChipsHtml}
          </div>
        </section>
      `;
    }

    const specs = grade.specs || {};

    return `
      ${renderBreadcrumbs(breadcrumbs)}

      <!-- GRADE HERO -->
      <section class="pm-hero-section" aria-label="Grade ${escapeHtml(grade.name)} Header">
        <div class="pm-hero-overlay" aria-hidden="true"></div>
        <div class="pm-container">
          <div class="pm-hero-grid">
            <div class="pm-hero-content">
              <div class="pm-hero-eyebrow-badge">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>GRADE DATASHEET &amp; METALLURGY</span>
              </div>
              <h1 class="pm-hero-title">${escapeHtml(grade.name)} ${escapeHtml(material.name)} ${escapeHtml(product.suffix)}</h1>
              <div class="pm-hero-subtitle">${escapeHtml(grade.fullName || grade.name)}</div>
              
              <div class="pm-designation-strip">
                ${desigBadgesHtml}
              </div>

              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-hero-desc">${escapeHtml(grade.description)}</p>
              
              <div class="pm-hero-standards-bar">
                <div class="pm-standard-tag"><span>MATERIAL:</span> ${escapeHtml(material.name)}</div>
                <div class="pm-standard-tag"><span>CATEGORY:</span> ${escapeHtml(product.name)}</div>
                <div class="pm-standard-tag"><span>HEAT CODED:</span> 100% TRACEABLE</div>
              </div>
            </div>

            <div class="pm-hero-showcase">
              <div class="pm-hero-showcase-card">
                <div class="pm-showcase-glow" aria-hidden="true"></div>
                <div class="pm-showcase-media">
                  <img 
                    src="${normalizeAssetUrl(grade.image || material.image)}" 
                    alt="Apollo Grade ${escapeHtml(grade.name)} ${escapeHtml(product.suffix)} Showcase" 
                    class="pm-showcase-img"
                    loading="eager"
                    onerror="this.onerror=null; this.src='${normalizeAssetUrl(material.image)}';"
                  />
                </div>
                <div class="pm-showcase-tag">
                  <span class="pm-showcase-dot" aria-hidden="true"></span>
                  <span>GRADE ${escapeHtml(grade.name)} / ${escapeHtml(desig.uns || desig.astm || 'CERTIFIED')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GRADE TECHNICAL BODY -->
      <div class="pm-container" style="padding-top: clamp(48px, 5vw, 68px);">
        <div class="pm-material-main">
          
          <!-- KEY CHARACTERISTICS -->
          <section class="pm-catalog-block" aria-label="Key Metallurgical Characteristics">
            <div class="pm-block-header">
              <div class="pm-block-eyebrow">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>METALLURGICAL ATTRIBUTES</span>
              </div>
              <h2 class="pm-block-title">Key Engineering Characteristics</h2>
              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-block-sub">Verified mechanical and corrosion properties for ${escapeHtml(grade.name)} in ${escapeHtml(product.name.toLowerCase())} service.</p>
            </div>
            <div class="pm-char-grid">
              ${charHtml}
            </div>
          </section>

          <!-- TECHNICAL SPECIFICATIONS TABLE -->
          <section class="pm-catalog-block" aria-label="Technical Specifications Table">
            <div class="pm-block-header">
              <div class="pm-block-eyebrow">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>MECHANICAL &amp; THERMAL LIMITS</span>
              </div>
              <h2 class="pm-block-title">Technical Specifications &amp; Mechanical Limits</h2>
              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-block-sub">Guaranteed minimum properties verified under ASTM / ASME material test conditions.</p>
            </div>
            <div class="pm-tech-table-wrapper">
              <table class="pm-tech-table">
                <thead>
                  <tr>
                    <th style="width: 32%;">ENGINEERING PROPERTY</th>
                    <th>SPECIFIED VALUE / PROTOCOL</th>
                  </tr>
                </thead>
                <tbody>
                  ${specs.tensileStrength ? `
                    <tr>
                      <td class="td-param">Tensile Strength (Rm)</td>
                      <td><strong>${escapeHtml(specs.tensileStrength)}</strong></td>
                    </tr>
                  ` : ''}
                  ${specs.yieldStrength ? `
                    <tr>
                      <td class="td-param">Yield Strength (0.2% Offset)</td>
                      <td><strong>${escapeHtml(specs.yieldStrength)}</strong></td>
                    </tr>
                  ` : ''}
                  ${specs.elongation ? `
                    <tr>
                      <td class="td-param">Elongation in 2" (50mm)</td>
                      <td>${escapeHtml(specs.elongation)}</td>
                    </tr>
                  ` : ''}
                  ${specs.hardness ? `
                    <tr>
                      <td class="td-param">Hardness (HBW / HRB)</td>
                      <td>${escapeHtml(specs.hardness)}</td>
                    </tr>
                  ` : ''}
                  ${specs.heatTreatment ? `
                    <tr>
                      <td class="td-param">Heat Treatment Condition</td>
                      <td>${escapeHtml(specs.heatTreatment)}</td>
                    </tr>
                  ` : ''}
                  ${specs.inspection ? `
                    <tr>
                      <td class="td-param">Inspection &amp; MTC</td>
                      <td>${escapeHtml(specs.inspection)}</td>
                    </tr>
                  ` : ''}
                </tbody>
              </table>
            </div>
          </section>

          <!-- APPLICABLE STANDARDS -->
          <section class="pm-catalog-block" aria-label="Applicable Standards">
            <div class="pm-block-header">
              <div class="pm-block-eyebrow">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>COMPLIANCE CODES</span>
              </div>
              <h2 class="pm-block-title">Applicable Standards &amp; Codes</h2>
              <div class="pm-hero-divider" aria-hidden="true"></div>
            </div>
            <div class="pm-hero-standards-bar" style="gap: 10px;">
              ${stdsHtml}
            </div>
          </section>

          <!-- INDUSTRIAL APPLICATIONS -->
          <section class="pm-catalog-block" aria-label="Typical Industrial Applications">
            <div class="pm-block-header">
              <div class="pm-block-eyebrow">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>OPERATIONAL SUITABILITY</span>
              </div>
              <h2 class="pm-block-title">Recommended Applications for Grade ${escapeHtml(grade.name)}</h2>
              <div class="pm-hero-divider" aria-hidden="true"></div>
            </div>
            <div class="pm-apps-grid">
              ${appsHtml}
            </div>
          </section>

          <!-- RELATED GRADES -->
          ${relatedGrades.length > 0 ? `
            <section class="pm-catalog-block" aria-label="Related Grades">
              <div class="pm-block-header">
                <div class="pm-block-eyebrow">
                  <span class="pm-badge-dot" aria-hidden="true"></span>
                  <span>SIBLING METALLURGY</span>
                </div>
                <h2 class="pm-block-title">Related Grades in ${escapeHtml(material.name)}</h2>
                <div class="pm-hero-divider" aria-hidden="true"></div>
                <p class="pm-block-sub">Compare with other certified metallurgical variants in the ${escapeHtml(material.name)} family.</p>
              </div>
              <div class="pm-grades-grid">
                ${relatedGradesHtml}
              </div>
            </section>
          ` : ''}

          <!-- RELATED TYPES -->
          ${relatedTypesBlockHtml}

        </div>
      </div>

      ${renderQuoteBanner(`Grade ${grade.name} ${product.suffix}`, `${grade.name} ${material.name} ${product.suffix}`)}
    `;
  }

  // =========================================================================
  // VIEW 4: TYPE DETAIL PAGE
  // =========================================================================
  function renderTypeView(product, material, type, grade = null) {
    const titleWord = getProductTitleWord(product.slug);
    const gradePrefix = grade ? `${grade.name} ` : '';
    const pageTitle = `${type.name} - ${gradePrefix}${material.name} ${product.suffix} ${titleWord} | Apollo Forge & Fitting`;
    const canonicalUrl = buildTypeUrl(product.slug, material.slug, type.slug, grade ? grade.slug : null);

    const breadcrumbs = [
      { label: 'Home', url: '/' },
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
      description: `Engineering specification, standard dimensions, pressure ratings, and facing details for ${type.name} in ${gradePrefix}${material.name} ${product.suffix} ${titleWord.toLowerCase()}.`,
      canonicalUrl: canonicalUrl,
      breadcrumbs: breadcrumbs
    });

    // Supported Materials chips for this type
    const supportedMaterialsHtml = (type.materialsSupported || []).map(matSlug => {
      const matObj = product.materials.find(m => m.slug === matSlug);
      if (!matObj) return '';
      const isActive = matObj.slug === material.slug;
      return `
        <a 
          href="${buildTypeUrl(product.slug, matObj.slug, type.slug, grade ? grade.slug : null)}" 
          class="pm-grade-chip ${isActive ? 'is-active' : ''}"
          style="${isActive ? 'background: var(--apollo-orange); border-color: var(--apollo-orange);' : ''}"
        >
          <span class="pm-grade-chip-name" style="${isActive ? 'color: #FFFFFF;' : ''}">${escapeHtml(matObj.name)}</span>
          <span class="pm-grade-chip-sub" style="${isActive ? 'background: rgba(0,0,0,0.25); color: #FFFFFF;' : ''}">${matObj.number}</span>
        </a>
      `;
    }).join('');

    // Related types of this product
    const otherTypes = (product.types || []).filter(t => t.slug !== type.slug);
    const relatedTypesHtml = otherTypes.map(ot => {
      const otImgStyle = getCardImageStyle(product.slug, ot.slug);
      return `
      <a href="${buildTypeUrl(product.slug, material.slug, ot.slug, grade ? grade.slug : null)}" class="pm-type-card">
        <div class="pm-type-card-media" style="height: 140px;">
          <img 
            src="${normalizeAssetUrl(ot.image)}" 
            alt="Apollo ${escapeHtml(ot.name)}" 
            class="pm-type-card-img" 
            style="${otImgStyle}"
            loading="lazy"
            onerror="this.onerror=null; this.src='${normalizeAssetUrl(material.image)}';"
          />
        </div>
        <div class="pm-type-card-footer" style="padding: 10px 14px;">
          <span class="pm-type-card-name" style="font-size: 13.5px;">${escapeHtml(ot.name)}</span>
          <svg class="pm-type-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </a>
    `;
    }).join('');

    return `
      ${renderBreadcrumbs(breadcrumbs)}

      <!-- TYPE HERO -->
      <section class="pm-hero-section" aria-label="${escapeHtml(type.name)} Header">
        <div class="pm-hero-overlay" aria-hidden="true"></div>
        <div class="pm-container">
          <div class="pm-hero-grid">
            <div class="pm-hero-content">
              <div class="pm-hero-eyebrow-badge">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>PRODUCT CONFIGURATION DATASHEET</span>
              </div>
              <h1 class="pm-hero-title">${escapeHtml(type.name)}</h1>
              <div class="pm-hero-subtitle">${escapeHtml(product.title)} CONFIGURATION IN ${escapeHtml(material.name.toUpperCase())}</div>
              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-hero-desc">${escapeHtml(type.description)}</p>
              
              <div class="pm-hero-standards-bar">
                <div class="pm-standard-tag"><span>STANDARDS:</span> ${escapeHtml(type.standards || 'ASME / DIN / EN')}</div>
                <div class="pm-standard-tag"><span>SIZES:</span> ${escapeHtml(type.sizes || '1/2" - 24"')}</div>
                <div class="pm-standard-tag"><span>RATINGS:</span> ${escapeHtml(type.pressureClasses || '150# - 2500#')}</div>
              </div>
            </div>

            <div class="pm-hero-showcase">
              <div class="pm-hero-showcase-card">
                <div class="pm-showcase-glow" aria-hidden="true"></div>
                <div class="pm-showcase-media">
                  <img 
                    src="${normalizeAssetUrl(type.image)}" 
                    alt="Apollo ${escapeHtml(type.name)} Showcase" 
                    class="pm-showcase-img"
                    loading="eager"
                    onerror="this.onerror=null; this.src='${normalizeAssetUrl(material.image)}';"
                  />
                </div>
                <div class="pm-showcase-tag">
                  <span class="pm-showcase-dot" aria-hidden="true"></span>
                  <span>${escapeHtml(type.name.toUpperCase())} / ${escapeHtml(material.name.toUpperCase())}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TYPE TECHNICAL BODY -->
      <div class="pm-container" style="padding-top: clamp(48px, 5vw, 68px);">
        <div class="pm-material-main">
          
          <!-- DESIGN & MECHANICAL CONFIGURATION -->
          <section class="pm-catalog-block" aria-label="Design Configuration">
            <div class="pm-block-header">
              <div class="pm-block-eyebrow">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>MECHANICAL GEOMETRY</span>
              </div>
              <h2 class="pm-block-title">Design &amp; Mechanical Configuration</h2>
              <div class="pm-hero-divider" aria-hidden="true"></div>
            </div>
            <p class="pm-block-sub" style="font-size: 15px; color: var(--charcoal-800); line-height: 1.7;">
              ${escapeHtml(type.design || type.description)}
            </p>
          </section>

          <!-- FUNCTION & INDUSTRIAL ROLE -->
          <section class="pm-catalog-block" aria-label="Industrial Function">
            <div class="pm-block-header">
              <div class="pm-block-eyebrow">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>PIPING SERVICE ROLE</span>
              </div>
              <h2 class="pm-block-title">Industrial Purpose &amp; Operating Role</h2>
              <div class="pm-hero-divider" aria-hidden="true"></div>
            </div>
            <p class="pm-block-sub" style="font-size: 15px; color: var(--charcoal-800); line-height: 1.7;">
              ${escapeHtml(type.function || 'Engineered for critical industrial containment where verified mechanical joint strength and leak tightness are required.')}
            </p>
          </section>

          <!-- FACING & END CONFIGURATIONS (IF FLANGE) -->
          ${type.facing ? `
            <section class="pm-catalog-block" aria-label="Facing Options">
              <div class="pm-block-header">
                <div class="pm-block-eyebrow">
                  <span class="pm-badge-dot" aria-hidden="true"></span>
                  <span>SEALING FACES</span>
                </div>
                <h2 class="pm-block-title">Facing &amp; End Sealing Configurations</h2>
                <div class="pm-hero-divider" aria-hidden="true"></div>
              </div>
              <p class="pm-block-sub" style="font-size: 15px; color: var(--charcoal-800); line-height: 1.7;">
                ${escapeHtml(type.facing)}
              </p>
            </section>
          ` : ''}

          <!-- TECHNICAL SPECIFICATIONS TABLE -->
          <section class="pm-catalog-block" aria-label="Technical Data Table">
            <div class="pm-block-header">
              <div class="pm-block-eyebrow">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>SPECIFICATION SUMMARY</span>
              </div>
              <h2 class="pm-block-title">Technical Data &amp; Manufacturing Range</h2>
              <div class="pm-hero-divider" aria-hidden="true"></div>
            </div>
            <div class="pm-tech-table-wrapper">
              <table class="pm-tech-table">
                <thead>
                  <tr>
                    <th style="width: 32%;">PARAMETER</th>
                    <th>ENGINEERING SPECIFICATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="td-param">Product Line</td>
                    <td>${escapeHtml(product.name)}</td>
                  </tr>
                  <tr>
                    <td class="td-param">Configuration Type</td>
                    <td><strong>${escapeHtml(type.name)}</strong></td>
                  </tr>
                  <tr>
                    <td class="td-param">Dimensional Standards</td>
                    <td>${escapeHtml(type.standards || 'ASME B16.5, ASME B16.47, DIN, EN 1092-1')}</td>
                  </tr>
                  <tr>
                    <td class="td-param">Nominal Size Range</td>
                    <td>${escapeHtml(type.sizes || '1/2" NB to 24" NB / 26" to 60" NB')}</td>
                  </tr>
                  <tr>
                    <td class="td-param">Pressure Rating Scope</td>
                    <td>${escapeHtml(type.pressureClasses || 'Class 150#, 300#, 600#, 900#, 1500#, 2500#')}</td>
                  </tr>
                  ${type.facing ? `
                    <tr>
                      <td class="td-param">Gasket Facing Options</td>
                      <td>${escapeHtml(type.facing)}</td>
                    </tr>
                  ` : ''}
                  <tr>
                    <td class="td-param">Currently Selected Material</td>
                    <td><strong>${escapeHtml(material.name)}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- AVAILABLE MATERIALS FOR THIS TYPE -->
          <section class="pm-catalog-block" aria-label="Available Materials">
            <div class="pm-block-header">
              <div class="pm-block-eyebrow">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>METALLURGICAL FAMILIES</span>
              </div>
              <h2 class="pm-block-title">Available Materials for ${escapeHtml(type.name)}</h2>
              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-block-sub">
                Click a material family below to view ${escapeHtml(type.name)} specifications and grades in that metallurgy.
              </p>
            </div>
            <div class="pm-grades-grid">
              ${supportedMaterialsHtml}
            </div>
          </section>

          <!-- RELATED TYPES OF THIS PRODUCT -->
          ${otherTypes.length > 0 ? `
            <section class="pm-catalog-block" aria-label="Related Product Types">
              <div class="pm-block-header">
                <div class="pm-block-eyebrow">
                  <span class="pm-badge-dot" aria-hidden="true"></span>
                  <span>RELATED CONFIGURATIONS</span>
                </div>
                <h2 class="pm-block-title">Related ${escapeHtml(product.name)} Types</h2>
                <div class="pm-hero-divider" aria-hidden="true"></div>
              </div>
              <div class="pm-types-grid">
                ${relatedTypesHtml}
              </div>
            </section>
          ` : ''}

        </div>
      </div>

      ${renderQuoteBanner(type.name, `${type.name} in ${material.name}`)}
    `;
  }

  // =========================================================================
  // VIEW 4A: MATERIALS HUB / ALL MATERIALS OVERVIEW PAGE (/materials)
  // =========================================================================
  function renderMaterialsHubView() {
    document.title = 'Materials & Certified Metallurgy Catalog | Apollo Forge & Fitting';

    // Update meta description dynamically for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore certified industrial materials: Stainless Steel, Carbon Steel, Alloy Steel, High Alloy Steel, Nickel Alloys, Copper, Titanium, Aluminium, Duplex & Super Duplex by Apollo Forge & Fitting.');
    }

    const breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Materials', url: '/materials' }
    ];

    // Render 9 Material Cards
    const materialCardsHtml = MATERIALS_MASTER_DATA.map(m => {
      const availableProducts = getAvailableProductsForMaterial(m.slug);
      const prodCount = availableProducts.length;
      const materialUrl = `/materials/${m.slug}`;

      const gradesPillsHtml = (m.commonGrades || []).slice(0, 4).map(g => `
        <span class="mat-grade-pill">${escapeHtml(g)}</span>
      `).join('');

      return `
        <article class="material-card" data-material-slug="${m.slug}">
          <div class="material-card-media">
            <div class="material-card-badge">
              <span class="badge-num">${m.number}</span>
              <span class="badge-sep">/</span>
              <span>09</span>
            </div>
            <img 
              src="${normalizeAssetUrl(m.cardImage)}" 
              alt="Apollo ${escapeHtml(m.name)} Industrial Metallurgy" 
              class="material-card-img" 
              loading="lazy"
              onerror="this.onerror=null; this.src='/assets/hero-products/flanges-hero.png';"
            />
          </div>
          <div class="material-card-content">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
              <div class="material-card-eyebrow">METALLURGICAL FAMILY ${m.number}</div>
              <span class="mat-product-count-badge">${prodCount} Products</span>
            </div>
            <h3 class="material-card-title">${escapeHtml(m.name)}</h3>
            <p class="material-card-desc">${escapeHtml(m.shortDescription)}</p>
            
            <div class="mat-grades-pills">
              ${gradesPillsHtml}
            </div>

            <div class="material-card-footer">
              <a href="${materialUrl}" class="btn-apollo-quote-solid" style="padding: 9px 18px; font-size: 12px; width: 100%; justify-content: center;">
                <span>Explore Products</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // 4 Why Material Selection Matters cards
    const whyCards = [
      {
        num: '01',
        title: 'Corrosion Defense & Pitting Resistance',
        desc: 'Precision chromium, nickel, and molybdenum balancing creates self-healing passive oxide films, achieving PREN values up to >65 for total resistance against pitting, crevice attack, and stress corrosion cracking in aggressive acids and hot marine brine.'
      },
      {
        num: '02',
        title: 'High Pressure & Mechanical Containment',
        desc: 'From high-yield carbon steel to precipitation-hardened nickel superalloys and duplex microstructures, our materials are rated for ASME Class 150# through 2500# and API 15,000 PSI containment under severe hydraulic pulsation.'
      },
      {
        num: '03',
        title: 'Extreme Temperatures (-196°C to +1150°C)',
        desc: 'Tested for cryogenic notch ductility without ductile-to-brittle transition for LNG service, alongside creep-rupture strength, scaling resistance, and thermal fatigue stability at temperatures up to 1150°C in power boilers and gas turbines.'
      },
      {
        num: '04',
        title: 'Traceable Certification & Metallurgical NDT',
        desc: 'Every heat is 100% traceable with EN 10204 3.1 inspection certification, Positive Material Identification (PMI) spectrometry, ultrasonic testing, hydrostatic pressure tests, and compliance with NACE MR0175 / ISO 15156 sour service.'
      }
    ];

    const whyCardsHtml = whyCards.map(c => `
      <div class="mat-why-card">
        <div class="mat-why-icon-box">${c.num}</div>
        <h3 class="mat-why-card-title">${escapeHtml(c.title)}</h3>
        <p class="mat-why-card-desc">${escapeHtml(c.desc)}</p>
      </div>
    `).join('');

    // Quick navigation pills
    const quickPillsHtml = MATERIALS_MASTER_DATA.map(m => `
      <a href="/materials/${m.slug}" class="mat-quicknav-pill">
        <span class="pill-dot" aria-hidden="true"></span>
        <span>${escapeHtml(m.name)}</span>
      </a>
    `).join('');

    return `
      ${renderBreadcrumbs(breadcrumbs)}

      <!-- HERO SECTION -->
      <section class="pm-hero-section" aria-label="Materials Catalog Header">
        <div class="pm-hero-overlay" aria-hidden="true"></div>
        <div class="pm-container">
          <div class="pm-hero-grid">
            <div class="pm-hero-content">
              <div class="pm-hero-eyebrow-badge">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>METALLURGICAL CATALOG &amp; ALLOY SPECIFICATIONS</span>
              </div>
              <h1 class="pm-hero-title">Certified Industrial Materials &amp; Alloys</h1>
              <div class="pm-hero-subtitle">ASME / ASTM / DIN / EN Certified Metallurgy for Critical Energy, Marine &amp; Process Infrastructure</div>
              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-hero-desc">
                Apollo Forge &amp; Fittings manufactures and stocks high-integrity industrial piping components across 9 specialized metallurgical families. From cryogenic LNG processing to sour gas deepwater extraction and high-temperature chemical synthesis, our verified materials provide certified pressure containment, superior weldability, and leak-tight reliability.
              </p>
              <div class="pm-hero-standards-bar">
                <div class="pm-standard-tag"><span>ISO 9001:2015</span> CERTIFIED</div>
                <div class="pm-standard-tag"><span>ASME / ASTM</span> COMPLIANT</div>
                <div class="pm-standard-tag"><span>100% HEAT</span> TRACEABILITY</div>
                <div class="pm-standard-tag"><span>EN 10204 3.1</span> INSPECTION</div>
              </div>
            </div>

            <div class="pm-hero-showcase">
              <div class="pm-hero-showcase-card">
                <div class="pm-showcase-glow" aria-hidden="true"></div>
                <div class="pm-showcase-media">
                  <img 
                    src="/assets/hero-products/materials-alloys-hero.jpg" 
                    alt="Apollo Certified Industrial Metallurgy &amp; Raw Alloys Showcase" 
                    class="pm-showcase-img"
                    loading="eager"
                    onerror="this.onerror=null; this.src='/assets/hero-products/flanges-hero.png';"
                  />
                </div>
                <div class="pm-showcase-tag">
                  <span class="pm-showcase-dot" aria-hidden="true"></span>
                  <span>9 CERTIFIED METALLURGICAL FAMILIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: 9 MATERIALS GRID -->
      <section class="pm-materials-section" aria-label="Explore Materials by Category">
        <div class="pm-container">
          <div class="pm-section-intro">
            <div class="pm-intro-eyebrow">
              <span class="pm-intro-dot" aria-hidden="true"></span>
              <span>METALLURGICAL SELECTION</span>
            </div>
            <h2 class="pm-intro-title">EXPLORE OUR MATERIAL CATEGORIES</h2>
            <div class="pm-intro-orange-bar" aria-hidden="true"></div>
            <p class="pm-intro-desc">
              Select a material family below to explore its certified chemical/mechanical properties, verified ASTM and ASME grades, and all available Apollo products manufactured in that metallurgy.
            </p>
          </div>

          <div class="pm-cards-grid">
            ${materialCardsHtml}
          </div>
        </div>
      </section>

      <!-- SECTION 3: WHY MATERIAL SELECTION MATTERS -->
      <section class="mat-why-section" aria-label="Why Material Selection Matters">
        <div class="pm-container">
          <div class="pm-block-header" style="text-align: center; max-width: 820px; margin: 0 auto;">
            <div class="pm-block-eyebrow" style="justify-content: center;">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>METALLURGICAL INTEGRITY</span>
            </div>
            <h2 class="pm-block-title">Why Material Selection Matters in Critical Piping</h2>
            <div class="pm-hero-divider" style="margin: 12px auto;" aria-hidden="true"></div>
            <p class="pm-block-sub">
              In high-pressure, elevated-temperature, and corrosive services, selecting the right metallurgical grade is the difference between safe continuous plant operation and catastrophic containment failure.
            </p>
          </div>

          <div class="mat-why-grid">
            ${whyCardsHtml}
          </div>
        </div>
      </section>

      <!-- SECTION 4: EXPLORE PRODUCTS BY MATERIAL -->
      <section class="mat-quicknav-section" aria-label="Explore Products by Material">
        <div class="pm-container">
          <div class="pm-block-header">
            <div class="pm-block-eyebrow">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>DUAL-DIRECTION CATALOG NAVIGATION</span>
            </div>
            <h2 class="pm-block-title">Explore Products by Material</h2>
            <div class="pm-hero-divider" aria-hidden="true"></div>
            <p class="pm-block-sub">
              Need components for a specific chemical process or operating temperature? Browse our complete inventory of flanges, forged fittings, butt weld fittings, fasteners, pipes, sheets, and bars filtered by certified metallurgy.
            </p>
          </div>

          <div class="mat-quicknav-pills">
            ${quickPillsHtml}
          </div>
        </div>
      </section>

      ${renderQuoteBanner('Materials Catalog', 'METALLURGICAL INQUIRY')}
    `;
  }

  // =========================================================================
  // VIEW 4B: MATERIAL DETAIL PAGE (/materials/:materialSlug)
  // =========================================================================
  function renderMaterialDetailView(materialSlug) {
    const material = getMaterialMaster(materialSlug);
    if (!material) {
      return renderNotFoundView(`Material category "${materialSlug}" is not listed in our verified metallurgy catalog.`);
    }

    document.title = `${material.name} Products | Apollo Forge & Fitting`;

    // Update meta description dynamically for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Explore certified ${material.name} industrial products: flanges, forge fittings, butt weld fittings, pipes, fasteners, and plates manufactured by Apollo Forge & Fitting.`);
    }

    const breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Materials', url: '/materials' },
      { label: material.name, url: `/materials/${material.slug}` }
    ];

    // Highlights
    const highlightsHtml = (material.overview && material.overview.highlights ? material.overview.highlights : []).map(h => `
      <div class="pm-highlight-card">
        <h3 class="pm-highlight-title">${escapeHtml(h.title)}</h3>
        <p class="pm-highlight-desc">${escapeHtml(h.desc)}</p>
      </div>
    `).join('');

    // Key properties chips
    const propertiesChipsHtml = (material.keyProperties || []).map(p => `
      <span class="mat-spec-chip">${escapeHtml(p)}</span>
    `).join('');

    // Common grades chips
    const gradesChipsHtml = (material.commonGrades || []).map(g => `
      <span class="mat-spec-chip" style="font-weight: 700; color: var(--apollo-orange);">${escapeHtml(g)}</span>
    `).join('');

    // Products available in this material
    const availableProducts = getAvailableProductsForMaterial(material.slug);

    let productCardsHtml = '';
    if (availableProducts.length === 0) {
      productCardsHtml = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px;">
          <p style="font-size: 16px; color: var(--charcoal-600); margin: 0 0 16px;">
            Products for this material are currently being updated. Please contact our team for availability.
          </p>
          <a href="mailto:apollo_forge@yahoo.com?subject=Inquiry%20regarding%20${encodeURIComponent(material.name)}%20Products" class="btn-apollo-quote-solid" style="display: inline-flex;">
            <span>Contact Materials Team</span>
          </a>
        </div>
      `;
    } else {
      productCardsHtml = availableProducts.map(item => {
        const p = item.product;
        const mEntry = item.materialEntry;
        const cardImg = (mEntry && mEntry.image) ? mEntry.image : p.heroImage;
        const cardDesc = (mEntry && mEntry.description) ? mEntry.description : p.description;
        const productDetailUrl = buildMaterialUrl(p.slug, material.catalogSlug);

        return `
          <article class="material-card" data-product-slug="${p.slug}">
            <div class="material-card-media">
              <div class="material-card-badge">
                <span class="badge-num">CERTIFIED</span>
                <span class="badge-sep">/</span>
                <span>${escapeHtml(material.name.toUpperCase())}</span>
              </div>
              <img 
                src="${normalizeAssetUrl(cardImg)}" 
                alt="Apollo ${escapeHtml(material.name)} ${escapeHtml(p.name)}" 
                class="material-card-img" 
                loading="lazy"
                onerror="this.onerror=null; this.src='${normalizeAssetUrl(p.heroImage)}';"
              />
            </div>
            <div class="material-card-content">
              <div class="material-card-eyebrow">VERIFIED PRODUCT LINE</div>
              <h3 class="material-card-title">${escapeHtml(p.title || p.name)}</h3>
              <p class="material-card-desc">${escapeHtml(cardDesc)}</p>
              <div class="material-card-footer">
                <a href="${productDetailUrl}" class="btn-apollo-quote-solid" style="padding: 9px 18px; font-size: 12px; width: 100%; justify-content: center;">
                  <span>Explore ${escapeHtml(p.name)}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        `;
      }).join('');
    }

    // Explore other materials (Section 4 per prompt Section 21)
    const otherMaterials = MATERIALS_MASTER_DATA.filter(m => m.slug !== material.slug);
    const otherMaterialsHtml = otherMaterials.map(m => `
      <a href="/materials/${m.slug}" class="mat-explore-other-card">
        <div class="mat-explore-thumb">
          <img src="${normalizeAssetUrl(m.cardImage)}" alt="${escapeHtml(m.name)}" loading="lazy" onerror="this.onerror=null; this.src='/assets/hero-products/flanges-hero.png';" />
        </div>
        <div class="mat-explore-info">
          <h4 class="mat-explore-name">${escapeHtml(m.name)}</h4>
          <span class="mat-explore-cta">
            <span>Explore</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </div>
      </a>
    `).join('');

    return `
      ${renderBreadcrumbs(breadcrumbs)}

      <!-- SECTION 1: MATERIAL HERO -->
      <section class="pm-hero-section" aria-label="${escapeHtml(material.name)} Header">
        <div class="pm-hero-overlay" aria-hidden="true"></div>
        <div class="pm-container">
          <div class="pm-hero-grid">
            <div class="pm-hero-content">
              <div class="pm-hero-eyebrow-badge">
                <span class="pm-badge-dot" aria-hidden="true"></span>
                <span>METALLURGICAL FAMILY ${material.number}</span>
              </div>
              <h1 class="pm-hero-title">${escapeHtml(material.name)} Products</h1>
              <div class="pm-hero-subtitle">${escapeHtml(material.eyebrow)}</div>
              <div class="pm-hero-divider" aria-hidden="true"></div>
              <p class="pm-hero-desc">${escapeHtml(material.description)}</p>
              <div class="pm-hero-standards-bar">
                <div class="pm-standard-tag"><span>ISO 9001:2015</span> CERTIFIED</div>
                <div class="pm-standard-tag"><span>ASME / ASTM</span> COMPLIANT</div>
                <div class="pm-standard-tag"><span>100% HEAT</span> TRACEABILITY</div>
                <div class="pm-standard-tag"><span>EN 10204 3.1</span> INSPECTION</div>
              </div>
            </div>

            <div class="pm-hero-showcase">
              <div class="pm-hero-showcase-card">
                <div class="pm-showcase-glow" aria-hidden="true"></div>
                <div class="pm-showcase-media">
                  <img 
                    src="${normalizeAssetUrl(material.heroImage)}" 
                    alt="Apollo ${escapeHtml(material.name)} Engineering Showcase" 
                    class="pm-showcase-img"
                    loading="eager"
                    onerror="this.onerror=null; this.src='/assets/hero-products/flanges-hero.png';"
                  />
                </div>
                <div class="pm-showcase-tag">
                  <span class="pm-showcase-dot" aria-hidden="true"></span>
                  <span>${escapeHtml(material.heroTag)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: MATERIAL OVERVIEW -->
      <section class="pm-overview-section" aria-label="Material Overview">
        <div class="pm-container">
          <div class="pm-block-header">
            <div class="pm-block-eyebrow">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>METALLURGICAL CHARACTERISTICS</span>
            </div>
            <h2 class="pm-block-title">${escapeHtml(material.name)} — Overview &amp; Industrial Relevance</h2>
            <div class="pm-hero-divider" aria-hidden="true"></div>
          </div>
          <p class="pm-overview-lead">${escapeHtml(material.overview && material.overview.lead ? material.overview.lead : material.tagline)}</p>
          
          <div class="pm-highlights-grid">
            ${highlightsHtml}
          </div>

          <!-- SPECS & GRADES SUMMARY -->
          <div class="mat-specs-bar">
            <div>
              <div class="mat-specs-col-title">Key Metallurgical Properties</div>
              <div class="mat-specs-chips">
                ${propertiesChipsHtml}
              </div>
            </div>
            <div>
              <div class="mat-specs-col-title">Major Certified Industrial Grades</div>
              <div class="mat-specs-chips">
                ${gradesChipsHtml}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: PRODUCTS AVAILABLE IN THIS MATERIAL -->
      <section class="pm-materials-section" aria-label="Products Available in ${escapeHtml(material.name)}">
        <div class="pm-container">
          <div class="pm-section-intro">
            <div class="pm-intro-eyebrow">
              <span class="pm-intro-dot" aria-hidden="true"></span>
              <span>AVAILABLE PRODUCTS</span>
            </div>
            <h2 class="pm-intro-title">${escapeHtml(material.name.toUpperCase())} PRODUCTS</h2>
            <div class="pm-intro-orange-bar" aria-hidden="true"></div>
            <p class="pm-intro-desc">
              Apollo Forge &amp; Fittings engineers and supplies the following certified product lines in ${escapeHtml(material.name)}. Click on any product below to explore detailed mechanical specifications, available sizes, pressure classes, and technical grade data.
            </p>
          </div>

          <div class="pm-cards-grid">
            ${productCardsHtml}
          </div>
        </div>
      </section>

      <!-- SECTION 4: RELATED / EXPLORE OTHER MATERIALS -->
      <section class="mat-explore-other-section" aria-label="Explore Other Materials">
        <div class="pm-container">
          <div class="pm-block-header">
            <div class="pm-block-eyebrow">
              <span class="pm-badge-dot" aria-hidden="true"></span>
              <span>CROSS-ALLOY CATALOG</span>
            </div>
            <h2 class="pm-block-title">Explore Other Materials</h2>
            <div class="pm-hero-divider" aria-hidden="true"></div>
            <p class="pm-block-sub">
              Compare mechanical properties and explore alternative metallurgical solutions across our other 8 certified material categories.
            </p>
          </div>

          <div class="mat-explore-other-grid">
            ${otherMaterialsHtml}
          </div>
        </div>
      </section>

      <!-- SECTION 5: CTA -->
      ${renderQuoteBanner(material.name + ' Products', material.name.toUpperCase() + ' METALLURGICAL RFQ')}
    `;
  }

  // =========================================================================
  // VIEW 5: 404 NOT FOUND
  // =========================================================================
  function renderNotFoundView(msg) {
    document.title = 'Specification Not Found | Apollo Forge & Fitting';

    return `
      <section class="pm-container">
        <div class="pm-not-found" style="text-align: center; padding: 80px 24px;">
          <div class="pm-not-found-badge">404 — NOT FOUND</div>
          <h1 class="pm-not-found-title">Specification Not Found</h1>
          <div class="pm-hero-divider" style="margin: 0 auto 16px;" aria-hidden="true"></div>
          <p class="pm-not-found-desc">
            ${escapeHtml(msg || 'The requested product, material, or technical specification could not be located in our current catalog database.')}
          </p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 24px;">
            <a href="/materials" class="btn-apollo-quote-solid" style="display: inline-flex;">
              <span>Explore Materials Catalog</span>
            </a>
            <a href="${buildProductUrl('flanges')}" class="btn-apollo-quote-solid" style="display: inline-flex; background: var(--charcoal-900);">
              <span>Explore Products Catalog</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  // =========================================================================
  // MAIN ROUTE DISPATCHER
  // =========================================================================
  function renderApp() {
    const mount = document.getElementById('pmDynamicApp');
    if (!mount) return;

    const route = parseCurrentRoute();
    updateNavActiveState(route);

    if (route.view === 'materials_hub') {
      mount.innerHTML = renderMaterialsHubView();
      return;
    }

    if (route.view === 'material_detail') {
      mount.innerHTML = renderMaterialDetailView(route.materialSlug);
      return;
    }

    const product = getProduct(route.productSlug);
    if (!product) {
      mount.innerHTML = renderNotFoundView(`Product line "${route.productSlug}" is not recognized.`);
      return;
    }

    if (route.view === 'product') {
      mount.innerHTML = renderProductView(product);
      return;
    }

    const material = getMaterial(product, route.materialSlug);
    if (!material) {
      mount.innerHTML = renderNotFoundView(`Material family "${route.materialSlug}" is not listed for ${product.name}.`);
      return;
    }

    if (route.view === 'material') {
      mount.innerHTML = renderMaterialView(product, material);
      return;
    }

    if (route.view === 'grade') {
      const grade = getGrade(material, route.gradeSlug);
      if (!grade) {
        mount.innerHTML = renderNotFoundView(`Grade "${route.gradeSlug}" is not a verified grade for ${material.name} ${product.suffix}.`);
        return;
      }
      mount.innerHTML = renderGradeView(product, material, grade);
      return;
    }

    if (route.view === 'type') {
      const type = getType(product, route.typeSlug);
      if (!type) {
        mount.innerHTML = renderNotFoundView(`Product type "${route.typeSlug}" is not listed for ${product.name}.`);
        return;
      }
      const grade = route.gradeSlug ? getGrade(material, route.gradeSlug) : null;
      mount.innerHTML = renderTypeView(product, material, type, grade);
      return;
    }

    mount.innerHTML = renderProductView(product);
  }

  // Helper to escape HTML characters
  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Initialize
  window.addEventListener('DOMContentLoaded', () => {
    initLinkInterception();
    window.addEventListener('popstate', () => {
      renderApp();
    });
    renderApp();
  });

  // If DOM is already loaded
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initLinkInterception();
    window.addEventListener('popstate', () => {
      renderApp();
    });
    renderApp();
  }

})();
