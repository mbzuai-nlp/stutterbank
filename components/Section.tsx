import { ReactNode } from 'react'

interface SectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export default function Section({ eyebrow, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-max">
        <div className="text-center">
          {eyebrow && (
            <p className="text-sm font-semibold leading-6 text-primary-600 uppercase tracking-wide">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-16">
          {children}
        </div>
      </div>
    </section>
  )
}

