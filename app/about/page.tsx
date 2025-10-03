import { Metadata } from 'next'
import Section from '@/components/Section'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about StutterBank\'s mission to advance stuttering research and provide comprehensive support for individuals and families.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 sm:text-5xl">
              About StutterBank
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are dedicated to advancing research and providing comprehensive support for individuals affected by stuttering. 
              Through evidence-based research, innovative therapy approaches, and community support, we're improving lives worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section
        eyebrow="Our Purpose"
        title="Mission & Vision"
        subtitle="Guided by our core values, we work to transform understanding and treatment of stuttering"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Our Mission"
            description="StutterBank is dedicated to advancing research and providing comprehensive support for individuals affected by stuttering. We believe that through evidence-based research, innovative therapy approaches, and community support, we can improve the lives of millions of people worldwide."
            icon={
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <Card
            title="Our Vision"
            description="We envision a world where stuttering is fully understood, effectively treated, and where individuals with stuttering feel supported, confident, and empowered in their communication."
            icon={
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
          />
        </div>
      </Section>

      {/* Research Focus */}
      <Section
        eyebrow="Research Excellence"
        title="Our Research Focus"
        subtitle="Our research spans multiple areas critical to understanding and treating stuttering"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="Early Childhood Intervention"
            description="Identifying and treating stuttering in its earliest stages, when intervention can be most effective."
          />
          <Card
            title="Neural Mechanisms"
            description="Uncovering the brain mechanisms underlying stuttering through advanced neuroimaging techniques."
          />
          <Card
            title="Therapy Outcomes"
            description="Rigorously evaluating the effectiveness of different therapy approaches with scientific evidence."
          />
          <Card
            title="Technology Integration"
            description="Exploring how technology can enhance therapy delivery and support practice tracking."
          />
        </div>
      </Section>

      {/* Impact */}
      <Section
        eyebrow="Making a Difference"
        title="Our Impact"
        subtitle="Since our founding, StutterBank has made significant contributions to the field"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Peer-reviewed research articles published</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">1000s</div>
            <div className="text-gray-600">Individuals and families supported</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100s</div>
            <div className="text-gray-600">Speech-language pathologists trained</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">Global</div>
            <div className="text-gray-600">Collaborations with leading institutions</div>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section
        eyebrow="Multidisciplinary"
        title="Our Approach"
        subtitle="We bring together diverse expertise to advance stuttering research and support"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Speech-Language Pathologists"
            description="Experts in fluency disorders with deep clinical experience and research expertise."
          />
          <Card
            title="Neuroscientists"
            description="Studying the brain mechanisms of speech and communication to understand stuttering at its core."
          />
          <Card
            title="Psychologists"
            description="Understanding the psychological aspects of stuttering and its impact on individuals and families."
          />
          <Card
            title="Technology Experts"
            description="Developing innovative solutions to enhance therapy delivery and accessibility."
          />
          <Card
            title="Community Advocates"
            description="Ensuring our work serves real-world needs and connects with the communities we serve."
          />
          <Card
            title="Research Collaborators"
            description="Building partnerships with institutions worldwide to advance the field collectively."
          />
        </div>
      </Section>

      {/* Get Involved */}
      <Section
        eyebrow="Join Our Mission"
        title="Get Involved"
        subtitle="There are many ways to contribute to our mission, whether you're a researcher, clinician, individual with stuttering, or family member"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Participate in Research"
            description="Join our studies and help advance scientific understanding of stuttering. Your participation makes a real difference."
          >
            <a href="mailto:research@stutterbank.org" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Join a Study →
            </a>
          </Card>
          <Card
            title="Access Resources"
            description="Use our evidence-based tools, materials, and resources to support your journey or practice."
          >
            <a href="/resources" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Browse Resources →
            </a>
          </Card>
          <Card
            title="Connect with Community"
            description="Join our support networks, attend events, and connect with others who understand your experience."
          >
            <a href="/community" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Find Community →
            </a>
          </Card>
          <Card
            title="Support Our Work"
            description="Help us continue our research and outreach efforts through donations, partnerships, or volunteering."
          >
            <a href="/support" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              Support Us →
            </a>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Whether you're seeking support, conducting research, or looking to collaborate, we're here to help advance stuttering research and support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-white font-semibold mb-2">Email</div>
                <a href="mailto:info@stutterbank.org" className="text-primary-100 hover:text-white">
                  info@stutterbank.org
                </a>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Phone</div>
                <div className="text-primary-100">(555) 123-4567</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Address</div>
                <div className="text-primary-100">123 Research Drive<br />Academic City, AC 12345</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="mailto:info@stutterbank.org"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Notice */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic">
                StutterBank is committed to accessibility and inclusion. If you need accommodations to access our resources 
                or participate in our programs, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

