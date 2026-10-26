const fs = require('fs');

// Read catalog-data.js and extract products
const content = fs.readFileSync('catalog-data.js', 'utf8');

// We can extract product slugs and names
const match = content.match(/export const CATALOG_PRODUCTS_DATA = (\[[\s\S]*?\]);\s*export default/);
if (match) {
  try {
    // Quick evaluate in sandbox
    const vm = require('vm');
    const sandbox = {};
    vm.runInNewContext('CATALOG_PRODUCTS_DATA = ' + match[1], sandbox);
    const prods = sandbox.CATALOG_PRODUCTS_DATA.map((p, idx) => ({
      index: idx,
      id: p.id,
      name: p.name,
      slug: p.slug,
      materialsCount: (p.materials || []).length,
      typesCount: (p.types || []).length
    }));
    console.log(JSON.stringify(prods, null, 2));
  } catch (e) {
    console.error('Parse error:', e);
  }
} else {
  console.log('Match failed');
}
