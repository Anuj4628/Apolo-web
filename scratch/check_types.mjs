import { CATALOG_PRODUCTS_DATA } from '../catalog-data.js';

CATALOG_PRODUCTS_DATA.forEach(p => {
  if (p.types && p.types.length > 0) {
    console.log(`\nProduct: ${p.name} (slug: ${p.slug})`);
    p.types.forEach(t => {
      console.log(`  - type slug: "${t.slug}", name: "${t.name}"`);
    });
  }
});
