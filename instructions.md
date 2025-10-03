# Website Instructions for Cursor (Stuttering Research & Support)

**Goal:** Build a fast, accessible marketing/information site about **Stuttering** with four pages: **Home**, **About**, **Team**, **Publications**. The look and pacing should be inspired by hbcdstudy.org: large image hero with clear headline + subhead, concise 2–3 column content bands, simple CTAs, and a structured footer.

---

## Tech stack & standards
- Framework: **Next.js 14 (App Router)** + **TypeScript**
- Styling: **Tailwind CSS**
- Components: build small, reusable UI blocks (Hero, Section, Card, PublicationList, Footer)
- Content: keep copy in **MDX** for pages; publications in a local **JSON** file for v1
- Accessibility: semantic HTML, keyboard-navigable menus, proper landmarks, alt text, focus rings
- Performance: next/image, responsive images, prefetch internal links, no heavy JS
- SEO: metadata per page, OpenGraph, JSON-LD for `Person` (team) and `ScholarlyArticle` (publications)

---

## Design direction (inspired by hbcdstudy.org)
- Top nav (no mega menu yet): **Home | About | Team | Publications**
- **Hero**: full-width image, strong headline, 1–2 sentence subhead, primary CTA
- **Home body**: three stacked sections with 2–3 column cards:
  1) “What is Stuttering?” (education)
  2) “Support & Therapy” (resources/links)
  3) “For Researchers & Clinicians” (position the Publications page)
- **Callout band** near bottom: short invitation to get in touch, with mailto CTA
- **Footer**: four compact columns (About, Resources, Publications, Connect) + small logo/wordmark + legal links
- Color/typography: academic/clinical vibe. Use a calm primary (blue/teal) and plenty of white space; system fonts for speed (or Inter).

---

## Project setup
1. Create Next.js app with Tailwind and TS.
2. Configure prettier/eslint and Tailwind base styles.
3. Add `content/` for mdx and `data/` for JSON.
4. Set up basic layout with Header and Footer components.

---

## File/folder structure
```plaintext
/app
  /about/page.mdx
  /team/page.tsx
  /publications/page.tsx
  /page.tsx                # Home
  layout.tsx
  globals.css
/components
  Header.tsx
  Footer.tsx
  Hero.tsx
  Section.tsx
  Card.tsx
  PublicationItem.tsx
  PublicationFilters.tsx
  TeamCard.tsx
/content
  about.mdx
  home-intro.mdx
/data
  publications.json
  team.json
/lib
  seo.ts
  types.ts
/public
  images/...
```

---

## Types
```ts
// /lib/types.ts
export type TeamMember = {
  name: string
  role: string
  affiliation?: string
  email?: string
  photo?: string
  bio?: string
  links?: { label: string; url: string }[]
};

export type Publication = {
  id: string
  title: string
  authors: string[]
  year: number
  venue?: string
  doi?: string
  url?: string
  topics?: string[]
};
```

---

## Example seed data
```json
// /data/team.json
[
  {
    "name": "Dr. Hanan Aldermaki",
    "role": "Lead Researcher",
    "affiliation": "MBZUAI",
    "photo": "/images/team/aisha.jpg",
    "bio": "Focus on early childhood stuttering and intervention outcomes."
  },
  {
    "name": "Hawau Toyin",
    "role": "Researcher",
    "photo": "/images/team/omar.jpg"
  },
  {
    "name": "Hawau Toyin",
    "role": "Speech-Language Pathologist",
    "photo": "/images/team/omar.jpg"
  }
]
```

```json
// /data/publications.json
[
  {
    "id": "rahman-2024-neuro",
    "title": "Neural Correlates of Developmental Stuttering",
    "authors": ["Rahman A.", "Haddad O."],
    "year": 2024,
    "venue": "Journal of Fluency Disorders",
    "doi": "10.1234/jfd.2024.001",
    "topics": ["neuro", "developmental"]
  }
]
```

---

## Core components (to build now)
- `Header.tsx`: Sticky top bar with nav
- `Hero.tsx`: Image + title + subtitle + CTA
- `Section.tsx`: Wrapper with eyebrow/title/body
- `Card.tsx`: Simple info tiles
- `PublicationItem.tsx`: Citation rendering
- `PublicationFilters.tsx`: Search + filters
- `TeamCard.tsx`: Profile cards

---

## Pages
- **Home**: Hero, 3 Sections, CTA band
- **About**: MDX content with headings
- **Team**: Map team.json → TeamCards
- **Publications**: Filters + list from publications.json

---

## Copy to-do list
1. Scaffold Next.js + Tailwind project
2. Implement all components above
3. Build 4 pages
4. Add MDX loader
5. Add metadata + SEO
6. Add responsive images
7. Run Lighthouse for a11y & perf fixes
