import { CATALOG_PRODUCTS_DATA } from '../catalog-data.js';

const products = CATALOG_PRODUCTS_DATA.map((p, idx) => {
  return {
    index: idx,
    slug: p.slug,
    name: p.name,
    materials: (p.materials || []).map(m => ({
      slug: m.slug,
      name: m.name,
      grades: (m.grades || []).map(g => ({ slug: g.slug, name: g.name }))
    })),
    types: (p.types || []).map(t => ({ slug: t.slug, name: t.name }))
  };
});

console.log('PRODUCTS SUMMARY:');
products.forEach(p => {
  console.log(`Product #${p.index + 1}: ${p.name} (slug: "${p.slug}")`);
  console.log(`  - Materials (${p.materials.length}): ${p.materials.map(m => m.slug).join(', ')}`);
  console.log(`  - Types (${p.types.length}): ${p.types.map(t => t.slug).join(', ')}`);
  p.materials.forEach(m => {
    console.log(`    * [${m.slug}] Grades (${m.grades.length}): ${m.grades.map(g => g.slug).join(', ')}`);
  });
});
