import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Advancing Stuttering Research & Support"
        subtitle="Leading evidence-based research and providing comprehensive support for individuals with stuttering. Join our mission to improve lives through innovative therapy and cutting-edge research."
        ctaText="Explore Our Research"
        ctaHref="/publications"
        imageSrc="/images/hero-stuttering-research.svg"
        imageAlt="Stuttering research and therapy"
      />

      <Section
        eyebrow="Understanding"
        title="What is Stuttering?"
        subtitle="Stuttering is a speech disorder that affects the fluency and flow of speech. Our research focuses on understanding its causes and developing effective interventions."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Developmental Stuttering"
            description="Most common form that begins in early childhood, affecting approximately 5% of children."
            icon={
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            }
          />
          <Card
            title="Neurogenic Stuttering"
            description="Acquired stuttering that can occur after brain injury, stroke, or other neurological conditions."
            icon={
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
          />
          <Card
            title="Psychogenic Stuttering"
            description="Rare form that may develop in response to psychological trauma or stress-related factors."
            icon={
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />
        </div>
      </Section>

      <Section
        eyebrow="Support & Therapy"
        title="Evidence-Based Interventions"
        subtitle="Our research informs the development of effective therapy approaches and support systems for individuals and families."
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Speech Therapy"
            description="Individualized therapy programs designed to improve fluency and communication confidence."
          >
            <Link href="/resources/therapy" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Learn More →
            </Link>
          </Card>
          <Card
            title="Support Groups"
            description="Connect with others who understand the challenges and triumphs of living with stuttering."
          >
            <Link href="/resources/support" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Find Groups →
            </Link>
          </Card>
          <Card
            title="Family Resources"
            description="Comprehensive guides and tools to support families navigating stuttering together."
          >
            <Link href="/resources/family" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Get Resources →
            </Link>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Research"
        title="For Researchers & Clinicians"
        subtitle="Access our latest research findings, collaborate on studies, and stay informed about advances in stuttering research."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Latest Publications"
            description="Explore our peer-reviewed research on stuttering causes, interventions, and outcomes."
          >
            <Link href="/publications" className="btn-primary inline-block">
              View Publications
            </Link>
          </Card>
          <Card
            title="Research Collaboration"
            description="Join our network of researchers and clinicians working to advance stuttering research."
          >
            <Link href="/collaborate" className="btn-secondary inline-block">
              Collaborate With Us
            </Link>
          </Card>
        </div>
      </Section>

      {/* Callout band */}
      <section className="bg-primary-600 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Whether you're seeking support, conducting research, or looking to collaborate, we're here to help advance stuttering research and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@stutterbank.org"
              className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Get in Touch
            </a>
            <Link
              href="/about"
              className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
