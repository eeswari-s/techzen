import { SITE } from './site.js';

/**
 * Head tags for a page, as plain data: [{ tag: 'meta' | 'link', attrs }].
 * Used by vite.config.js (written into index.html at build time) and by SEO.jsx (react-helmet-async),
 * so the static HTML and the runtime tags are always identical.
 * `path` is the page path, e.g. '/' — canonical and og:url are absolute URLs on SITE.url.
 */
export function getSeoTags({
  path = '/',
  title = SITE.seo.title,
  description = SITE.seo.description,
  ogTitle = SITE.seo.ogTitle,
  ogDescription = SITE.seo.ogDescription,
  image = SITE.seo.image,
  imageAlt = SITE.seo.imageAlt,
} = {}) {
  const url = `${SITE.url}${path}`;
  const imageUrl = `${SITE.url}${image}`;
  return {
    title,
    tags: [
      { tag: 'meta', attrs: { name: 'description', content: description } },
      { tag: 'link', attrs: { rel: 'canonical', href: url } },
      { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
      { tag: 'meta', attrs: { property: 'og:locale', content: 'en_IN' } },
      { tag: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
      { tag: 'meta', attrs: { property: 'og:title', content: ogTitle } },
      { tag: 'meta', attrs: { property: 'og:description', content: ogDescription } },
      { tag: 'meta', attrs: { property: 'og:url', content: url } },
      { tag: 'meta', attrs: { property: 'og:image', content: imageUrl } },
      { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
      { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
      { tag: 'meta', attrs: { property: 'og:image:type', content: 'image/jpeg' } },
      { tag: 'meta', attrs: { property: 'og:image:alt', content: imageAlt } },
      { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
      { tag: 'meta', attrs: { name: 'twitter:title', content: ogTitle } },
      { tag: 'meta', attrs: { name: 'twitter:description', content: ogDescription } },
      { tag: 'meta', attrs: { name: 'twitter:image', content: imageUrl } },
      { tag: 'meta', attrs: { name: 'twitter:image:alt', content: imageAlt } },
    ],
  };
}
