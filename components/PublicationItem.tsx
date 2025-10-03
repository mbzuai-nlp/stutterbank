import { Publication } from '@/lib/types'

interface PublicationItemProps {
  publication: Publication
}

export default function PublicationItem({ publication }: PublicationItemProps) {
  const formatAuthors = (authors: string[]) => {
    if (authors.length <= 2) {
      return authors.join(' & ')
    }
    return `${authors.slice(0, -1).join(', ')}, & ${authors[authors.length - 1]}`
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {publication.title}
        </h3>
        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
          {publication.year}
        </span>
      </div>
      
      <p className="text-gray-700 mb-2">
        {formatAuthors(publication.authors)}
      </p>
      
      {publication.venue && (
        <p className="text-sm text-gray-600 mb-3 italic">
          {publication.venue}
        </p>
      )}
      
      {publication.topics && publication.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {publication.topics.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex space-x-4">
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            View DOI
          </a>
        )}
        {publication.url && (
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Read Paper
          </a>
        )}
      </div>
    </div>
  )
}

