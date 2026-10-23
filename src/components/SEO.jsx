import { Helmet } from 'react-helmet-async';
import { getSeoTags } from '../data/seoTags';

/**
 * Page-level SEO tags. The same tags are pre-rendered into index.html (marked data-rh),
 * so Helmet adopts them instead of adding duplicates. Pass props to override per page.
 */
export default function SEO(props) {
  const { title, tags } = getSeoTags(props);
  return (
    <Helmet>
      <title>{title}</title>
      {tags.map(({ tag: Tag, attrs }) => (
        <Tag key={attrs.name || attrs.property || attrs.rel} {...attrs} />
      ))}
    </Helmet>
  );
}
