import { resolve } from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

function copyAssetsPlugin() {
  return {
    name: 'copy-root-assets',
    closeBundle() {
      const srcDir = resolve(__dirname, 'assets');
      const destDir = resolve(__dirname, 'dist', 'assets');
      if (fs.existsSync(srcDir)) {
        try {
          fs.cpSync(srcDir, destDir, { recursive: true });
          console.log('✓ Successfully copied all assets to dist/assets');
        } catch (err) {
          console.error('Failed to copy assets:', err);
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [
    copyAssetsPlugin(),
    {
      name: 'products-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (
            req.url &&
            (req.url.startsWith('/products/') ||
              req.url === '/products' ||
              req.url.startsWith('/materials/') ||
              req.url === '/materials')
          ) {
            req.url = '/product-materials.html';
          } else if (req.url && (req.url === '/contact' || req.url === '/contact/')) {
            req.url = '/contact.html';
          } else if (
            req.url &&
            (req.url === '/certificate' ||
              req.url === '/certificate/' ||
              req.url === '/certificates' ||
              req.url === '/certificates/' ||
              req.url.startsWith('/certificate?') ||
              req.url.startsWith('/certificates?'))
          ) {
            const queryIndex = req.url.indexOf('?');
            req.url = '/certificate.html' + (queryIndex !== -1 ? req.url.slice(queryIndex) : '');
          } else if (
            req.url &&
            (req.url === '/get-quote' ||
              req.url === '/get-quote/' ||
              req.url === '/rfq' ||
              req.url === '/rfq/' ||
              req.url.startsWith('/get-quote?') ||
              req.url.startsWith('/rfq?'))
          ) {
            const queryIndex = req.url.indexOf('?');
            req.url = '/get-quote.html' + (queryIndex !== -1 ? req.url.slice(queryIndex) : '');
          } else if (req.url && (req.url === '/about' || req.url === '/about/' || req.url.startsWith('/about?'))) {
            const queryIndex = req.url.indexOf('?');
            req.url = '/about.html' + (queryIndex !== -1 ? req.url.slice(queryIndex) : '');
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (
            req.url &&
            (req.url.startsWith('/products/') ||
              req.url === '/products' ||
              req.url.startsWith('/materials/') ||
              req.url === '/materials')
          ) {
            req.url = '/product-materials.html';
          } else if (req.url && (req.url === '/contact' || req.url === '/contact/')) {
            req.url = '/contact.html';
          } else if (
            req.url &&
            (req.url === '/certificate' ||
              req.url === '/certificate/' ||
              req.url === '/certificates' ||
              req.url === '/certificates/' ||
              req.url.startsWith('/certificate?') ||
              req.url.startsWith('/certificates?'))
          ) {
            const queryIndex = req.url.indexOf('?');
            req.url = '/certificate.html' + (queryIndex !== -1 ? req.url.slice(queryIndex) : '');
          } else if (
            req.url &&
            (req.url === '/get-quote' ||
              req.url === '/get-quote/' ||
              req.url === '/rfq' ||
              req.url === '/rfq/' ||
              req.url.startsWith('/get-quote?') ||
              req.url.startsWith('/rfq?'))
          ) {
            const queryIndex = req.url.indexOf('?');
            req.url = '/get-quote.html' + (queryIndex !== -1 ? req.url.slice(queryIndex) : '');
          } else if (req.url && (req.url === '/about' || req.url === '/about/' || req.url.startsWith('/about?'))) {
            const queryIndex = req.url.indexOf('?');
            req.url = '/about.html' + (queryIndex !== -1 ? req.url.slice(queryIndex) : '');
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        productMaterials: resolve(__dirname, 'product-materials.html'),
        materials: resolve(__dirname, 'materials.html'),
        contact: resolve(__dirname, 'contact.html'),
        getQuote: resolve(__dirname, 'get-quote.html'),
        certificate: resolve(__dirname, 'certificate.html'),
      },
    },
  },
});
