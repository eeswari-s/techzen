export const SITE = {
  name: 'TECHZENZA',
  fullName: 'TECHZENZA – Technology & Skill Development Academy',
  tagline: 'LEARN. PRACTICE. GROW. GET PLACED.',
  slogan: 'Skills Today, A Brighter Tomorrow.',
  // Canonical production domain (no trailing slash). Used for canonical/OG URLs and sitemap.xml.
  url: 'https://techzenza.in',
  // Sitemap <lastmod> (YYYY-MM-DD). Update only when the page content actually changes.
  lastModified: '2026-10-23',
  phone: '+918220476984',
  phoneDisplay: '+91 82204 76984',
  email: 'techzenza@gmail.com',
  address: '21, Jawaharlal Nehru Salai, Ambal Nagar, Ekkatuthangal, Chennai, Tamil Nadu – 600 032',
  shortAddress: 'Ekkatuthangal, Chennai – 600 032',
  websites: ['https://www.techzenza.com', 'https://techzenza.in'],
  enquiryForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSf-HglE-qvD_8o1LQgaMsPsKxOp6GhBjMZTbBRsyuocd3dEIA/viewform?usp=publish-editor',
  whatsapp:
    'https://wa.me/918220476984?text=Hello%20Techzenza%2C%20I%20am%20interested%20in%20your%20IT%20courses.',
  social: {
    linkedin: 'https://www.linkedin.com/company/techzenza/',
    instagram: 'https://www.instagram.com/techzenza?cplk=MWRjNGpzaDJlM3AzbQ==',
  },
  // Google Maps embed (Share → Embed a map → copy only the src="…" URL)
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2788.903111112608!2d80.205957!3d13.019417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzA5LjkiTiA4MMKwMTInMjEuNSJF!5e1!3m2!1sen!2sin!4v1792753341219!5m2!1sen!2sin',
  geo: { lat: 13.019417, lng: 80.205957 },
  directions: 'https://www.google.com/maps/dir/?api=1&destination=13.019417,80.205957',
  // Single source for the page's SEO tags. vite.config.js writes these into index.html at build
  // time (so crawlers and link previews see them without JavaScript) and SEO.jsx reuses them.
  seo: {
    title: 'IT Training & Placement Support in Chennai | TECHZENZA',
    description:
      'IT training in Chennai for Java & Python Full Stack, Software & Automation Testing, Data Analytics and DevOps, with practical projects and placement support.',
    ogTitle: 'TECHZENZA – Technology & Skill Development Academy, Chennai',
    ogDescription:
      'Industry-oriented IT training, practical learning, interview preparation and career guidance in Chennai. Learn. Practice. Grow. Get Placed.',
    image: '/images/og-image.jpg',
    imageAlt: 'TECHZENZA – Technology & Skill Development Academy logo',
  },
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'courses', label: 'Courses' },
  { id: 'placement', label: 'Placement' },
  { id: 'contact', label: 'Contact' },
];

export const SECTION_IDS = ['home', 'about', 'courses', 'process', 'placement', 'testimonials', 'faq', 'contact'];
