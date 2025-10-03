# StutterBank - Stuttering Research & Support Website

A modern, accessible website for stuttering research and support built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Four Main Pages**: Home, About, Team, and Publications
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Semantic HTML, keyboard navigation, proper landmarks
- **SEO Optimized**: Metadata, OpenGraph, and JSON-LD structured data
- **Performance**: Next.js Image optimization, prefetching, and minimal JavaScript
- **Type Safety**: Full TypeScript implementation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for pages, JSON for data
- **Images**: Next.js Image component with optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Theehawau/stutterbank.github.io.git
cd stutterbank.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── team/              # Team page  
│   ├── publications/      # Publications page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css         # Global styles
├── components/            # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── Section.tsx       # Content section wrapper
│   ├── Card.tsx          # Generic card component
│   ├── TeamCard.tsx      # Team member card
│   ├── PublicationItem.tsx # Publication display
│   └── PublicationFilters.tsx # Publication filters
├── content/              # MDX content files
├── data/                 # JSON data files
│   ├── team.json         # Team member data
│   └── publications.json # Publication data
├── lib/                  # Utility functions
│   ├── seo.ts           # SEO metadata helpers
│   └── types.ts         # TypeScript type definitions
└── public/               # Static assets
    └── images/          # Images and graphics
```

## Pages

### Home Page
- Hero section with call-to-action
- Three content sections: Understanding Stuttering, Support & Therapy, Research
- Callout band for engagement

### About Page
- Mission and vision
- Research focus areas
- Impact metrics
- Contact information

### Team Page
- Team member profiles with photos and bios
- Structured data for SEO
- Contact information for each member

### Publications Page
- Searchable and filterable publication list
- Filter by topic and year
- Structured data for each publication
- Links to external resources

## Components

### Core Components
- **Header**: Sticky navigation with mobile menu
- **Footer**: Multi-column footer with links
- **Hero**: Full-width image with title and CTA
- **Section**: Content wrapper with eyebrow, title, and subtitle
- **Card**: Reusable content card component

### Specialized Components
- **TeamCard**: Team member profile display
- **PublicationItem**: Publication citation display
- **PublicationFilters**: Search and filter interface

## Data Management

### Team Data (`data/team.json`)
```json
{
  "name": "Dr. Jane Smith",
  "role": "Lead Researcher", 
  "affiliation": "University Name",
  "email": "jane@example.com",
  "photo": "/images/team/jane.jpg",
  "bio": "Research focus description"
}
```

### Publication Data (`data/publications.json`)
```json
{
  "id": "unique-id",
  "title": "Publication Title",
  "authors": ["Author 1", "Author 2"],
  "year": 2024,
  "venue": "Journal Name",
  "doi": "10.1234/example",
  "topics": ["topic1", "topic2"]
}
```

## SEO & Accessibility

- **Metadata**: Page-specific titles and descriptions
- **OpenGraph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive image alternatives

## Performance

- **Next.js Image**: Optimized image loading
- **Code Splitting**: Automatic route-based splitting
- **Prefetching**: Internal link prefetching
- **Minimal JavaScript**: Server-side rendering where possible

## Deployment

The site is configured for GitHub Pages deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages (configured in repository settings)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Contact

- **Email**: info@stutterbank.org
- **Website**: https://stutterbank.github.io
- **Repository**: https://github.com/Theehawau/stutterbank.github.io

