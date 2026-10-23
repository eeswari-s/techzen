import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/site';

export default function SEO({ title = SITE.seo.title, description = SITE.seo.description }) {
  const url = `${SITE.url}/`;
  const image = `${SITE.url}${SITE.seo.image}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
