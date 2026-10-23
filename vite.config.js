import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SITE } from './src/data/site.js';
import { COURSES } from './src/data/courses.js';
import { FAQS } from './src/data/faq.js';

const PUBLIC_DIR = path.resolve(__dirname, 'public');
const xmlEscape = (s) =>
  String(s).replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]);

/** sitemap.xml with an image entry for every brand/course image that exists in public/. */
function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const images = ['/images/logo.png', '/images/og-image.jpg', '/images/about.jpg', ...COURSES.map((c) => c.image)].filter(
    (src) => fs.existsSync(path.join(PUBLIC_DIR, src))
  );
  const imageTags = images
    .map((src) => `    <image:image>\n      <image:loc>${xmlEscape(SITE.url + src)}</image:loc>\n    </image:image>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${xmlEscape(SITE.url)}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${imageTags}
  </url>
</urlset>
`;
}

/** FAQPage structured data, generated from src/data/faq.js so it always matches the page. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

function seoPlugin() {
  return {
    name: 'techzenza-seo',
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(faqJsonLd),
          injectTo: 'head',
        },
      ];
    },
    // Serve the sitemap in `npm run dev` too
    configureServer(server) {
      server.middlewares.use('/sitemap.xml', (_req, res) => {
        res.setHeader('Content-Type', 'application/xml');
        res.end(buildSitemap());
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap() });
    },
  };
}

export default defineConfig({
  plugins: [react(), seoPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
