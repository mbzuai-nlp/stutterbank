import { Metadata } from 'next'
import PublicationsList from '@/components/PublicationsList'
import { Publication } from '@/lib/types'
import { generateArticleJsonLd } from '@/lib/seo'
import publicationsData from '@/data/publications.json'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Explore our latest research publications on stuttering, including studies on causes, interventions, and therapy outcomes.',
}

export default function PublicationsPage() {
  const publications: Publication[] = publicationsData

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Publications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our peer-reviewed research on stuttering causes, interventions, and outcomes. Our publications contribute to the global understanding of fluency disorders.
          </p>
        </div>

        <PublicationsList publications={publications} />

        {/* Add JSON-LD structured data for each publication */}
        {publications.map((publication) => (
          <script
            key={publication.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateArticleJsonLd(publication))
            }}
          />
        ))}

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaborate With Us</h2>
          <p className="text-gray-600 mb-6">
            Interested in collaborating on research or have questions about our publications? We'd love to hear from you.
          </p>
          <a
            href="mailto:research@stutterbank.org"
            className="btn-primary"
          >
            Contact Research Team
          </a>
        </div>
      </div>
    </div>
  )
}

