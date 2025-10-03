import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://stutterbank.github.io'),
  title: {
    default: 'StutterBank - Stuttering Research & Support',
    template: '%s | StutterBank'
  },
  description: 'Leading research and support for stuttering. Evidence-based therapy, research publications, and resources for individuals, families, and professionals.',
  keywords: ['stuttering', 'speech therapy', 'fluency disorders', 'research', 'support'],
  authors: [{ name: 'StutterBank Research Team' }],
  creator: 'StutterBank',
  publisher: 'StutterBank',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stutterbank.github.io',
    siteName: 'StutterBank',
    title: 'StutterBank - Stuttering Research & Support',
    description: 'Leading research and support for stuttering. Evidence-based therapy, research publications, and resources.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StutterBank - Stuttering Research & Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StutterBank - Stuttering Research & Support',
    description: 'Leading research and support for stuttering. Evidence-based therapy, research publications, and resources.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export function generatePersonJsonLd(person: {
  name: string
  role: string
  affiliation?: string
  email?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    ...(person.affiliation && { worksFor: { '@type': 'Organization', name: person.affiliation } }),
    ...(person.email && { email: person.email }),
  }
}

export function generateArticleJsonLd(article: {
  title: string
  authors: string[]
  year: number
  venue?: string
  doi?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: article.title,
    author: article.authors.map(author => ({ '@type': 'Person', name: author })),
    datePublished: `${article.year}-01-01`,
    ...(article.venue && { publisher: { '@type': 'Organization', name: article.venue } }),
    ...(article.doi && { identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: article.doi } }),
  }
}

