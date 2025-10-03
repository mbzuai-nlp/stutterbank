'use client'

import { useState } from 'react'

interface PublicationFiltersProps {
  onSearchChange: (search: string) => void
  onTopicFilter: (topic: string) => void
  onYearFilter: (year: string) => void
  availableTopics: string[]
  availableYears: number[]
}

export default function PublicationFilters({
  onSearchChange,
  onTopicFilter,
  onYearFilter,
  availableTopics,
  availableYears
}: PublicationFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearchChange(value)
  }

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedTopic(value)
    onTopicFilter(value)
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedYear(value)
    onYearFilter(value)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedTopic('')
    setSelectedYear('')
    onSearchChange('')
    onTopicFilter('')
    onYearFilter('')
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Publications
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by title or author..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Topic
          </label>
          <select
            id="topic"
            value={selectedTopic}
            onChange={handleTopicChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Topics</option>
            {availableTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Year
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Years</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-end">
          <button
            onClick={clearFilters}
            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  )
}

