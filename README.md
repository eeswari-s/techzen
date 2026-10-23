# TECHZENZA – Technology & Skill Development Academy

The official single-page website for TECHZENZA, Chennai. It is built with **Vite + React 18 + Tailwind CSS v3**, with **framer-motion** for animation, **react-helmet-async** for SEO tags and **react-icons** for icons.

## Run it

```bash
npm install       # install dependencies (Node 18+)
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build
```

### Deploy to Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` is included already, so SPA routing works.

## Images: put these files in `public/`

Use these exact names and paths. If a file is missing, the site shows a navy gradient placeholder with an icon, so the layout never breaks.

| Path | Use | Recommended size |
| --- | --- | --- |
| `public/images/logo.png` | Header, footer, preloader, hero card (full logo on navy) | 640×387 ✅ added |
| `public/images/favicon-32.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` | Browser tab, home-screen and Google logo (TZ mark) | ✅ added |
| `public/images/og-image.jpg` | Social share preview (WhatsApp, LinkedIn, etc.) | 1200×630 ✅ added |
| `public/images/about.jpg` | About section | 1280×1040 (16:13) |
| `public/images/courses/java-full-stack.jpg` | Java Full Stack card | 1280×800 (16:10) |
| `public/images/courses/python-full-stack.jpg` | Python Full Stack card | 1280×800 |
| `public/images/courses/web-development.jpg` | Web Development card | 1280×800 |
| `public/images/courses/software-testing.jpg` | Software Testing card | 1280×800 |
| `public/images/courses/automation-testing.jpg` | Automation Testing card | 1280×800 |
| `public/images/courses/data-analytics.jpg` | Data Analytics card | 1280×800 |
| `public/images/courses/devops-cloud.jpg` | DevOps & Cloud card | 1280×800 |
| `public/images/courses/scrum-agile.jpg` | Scrum Master & Agile card | 1280×800 |

Compress JPGs (for example with squoosh.app) to under about 200 KB each to keep Lighthouse scores high.

## Editing content

All text and links are kept in `src/data/`:

- **`site.js`**: name, tagline, phone, email, address, websites, the Google Form link (`enquiryForm`), WhatsApp link, social links, map embed and SEO title/description. Every "Enquire / Apply / Start Your Journey" button reads `SITE.enquiryForm`.
- **`courses.js`**: the course list. To add or edit a course, add or change an object:
  ```js
  {
    id: 'cyber-security',                 // unique, URL-safe
    title: 'Cyber Security',
    category: 'Data & Cloud',             // must match one of COURSE_CATEGORIES
    icon: FaShieldAlt,                    // any react-icons icon (import it at the top)
    image: '/images/courses/cyber-security.jpg',
    description: 'One short sentence.',
    tools: ['Networking', 'Linux', 'Kali'],
  }
  ```
  To add a new filter category, add it to `COURSE_CATEGORIES`. The footer course list and the cards update automatically. Also update the course list in the JSON-LD block in `index.html` so search engines see the same courses.
- **`testimonials.js`**: learner quotes (quote, name, course).

## Google Maps

The final embed is already set (13.019417, 80.205957). To change it, open `src/data/site.js` and replace the `mapEmbed` value with the `src="…"` URL from Google Maps → Share → *Embed a map*. Also update `geo` and `directions` in that file, and the `geo` block in the JSON-LD in `index.html`.

## Google Search Console verification

1. In Search Console, add the property `https://techzenzatechnology.netlify.app` and choose the **HTML tag** method.
2. Open `index.html` and find:
   ```html
   <!-- Google Search Console: paste your verification code below -->
   <meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_VERIFICATION_CODE" />
   ```
3. Replace `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` with the code (only the `content` value), rebuild and deploy, then click **Verify**.
4. Submit `https://techzenzatechnology.netlify.app/sitemap.xml` under *Sitemaps*.

For Bing, uncomment the `msvalidate.01` line below it and paste the Bing code.

### If the domain changes (e.g. techzenza.com)
Update the URL in: `src/data/site.js` (`url`), `index.html` (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD), `public/robots.txt` and `public/sitemap.xml`.

## Project structure

```
src/
  main.jsx, App.jsx, index.css
  data/        site.js, courses.js, testimonials.js
  hooks/       useScrollSpy.js, useScrolled.js
  components/  Preloader, TopBar, Header, MobileMenu, Hero, FeatureStrip, About,
               MissionVision, WhyUs, Courses, CourseCard, CourseCTA, Process,
               Placement, Testimonials, FinalCTA, Contact, MapEmbed, Footer,
               FloatingWhatsApp, BackToTop, ScrollProgress, SEO
    ui/        Button, SectionHeading, Reveal, SmartImage, Logo, SocialIcons
public/        images/, robots.txt, sitemap.xml, _redirects
```

The theme (colours, font, shadows, animations) is in `tailwind.config.js`. The shared classes (`.btn-gold`, `.kicker`, `.card`, `.glass`, `.container-x` and others) are in `src/index.css`.
