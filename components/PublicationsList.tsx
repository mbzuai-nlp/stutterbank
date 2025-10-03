'use client'

import { useState, useMemo } from 'react'
import PublicationItem from '@/components/PublicationItem'
import PublicationFilters from '@/components/PublicationFilters'
import { Publication } from '@/lib/types'

interface PublicationsListProps {
  publications: Publication[]
}

export default function PublicationsList({ publications }: PublicationsListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [topicFilter, setTopicFilter] = useState('')
  const [yearFilter, setYearFilter] = useState('')

  // Get unique topics and years for filters
  const availableTopics = useMemo(() => {
    const topics = new Set<string>()
    publications.forEach(pub => {
      pub.topics?.forEach(topic => topics.add(topic))
    })
    return Array.from(topics).sort()
  }, [publications])

  const availableYears = useMemo(() => {
    const years = new Set<number>()
    publications.forEach(pub => years.add(pub.year))
    return Array.from(years).sort((a, b) => b - a) // Sort descending
  }, [publications])

  // Filter publications based on search and filters
  const filteredPublications = useMemo(() => {
    return publications.filter(publication => {
      const matchesSearch = searchTerm === '' || 
        publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        publication.authors.some(author => 
          author.toLowerCase().includes(searchTerm.toLowerCase())
        )

      const matchesTopic = topicFilter === '' || 
        publication.topics?.includes(topicFilter)

      const matchesYear = yearFilter === '' || 
        publication.year.toString() === yearFilter

      return matchesSearch && matchesTopic && matchesYear
    })
  }, [publications, searchTerm, topicFilter, yearFilter])

  return (
    <>
      <PublicationFilters
        onSearchChange={setSearchTerm}
        onTopicFilter={setTopicFilter}
        onYearFilter={setYearFilter}
        availableTopics={availableTopics}
        availableYears={availableYears}
      />

      <div className="space-y-6">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((publication) => (
            <PublicationItem key={publication.id} publication={publication} />
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No publications found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find publications.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
