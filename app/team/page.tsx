import { Metadata } from 'next'
import TeamCard from '@/components/TeamCard'
import { TeamMember } from '@/lib/types'
import { generatePersonJsonLd } from '@/lib/seo'
import teamData from '@/data/team.json'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the researchers, clinicians, and experts behind StutterBank\'s mission to advance stuttering research and support.',
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = teamData

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated researchers, clinicians, and experts who are advancing stuttering research and providing support to individuals and families worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <TeamCard member={member} />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(generatePersonJsonLd(member))
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for passionate individuals to join our mission. Whether you're a researcher, clinician, or advocate, we'd love to hear from you.
          </p>
          <a
            href="mailto:careers@stutterbank.org"
            className="btn-primary"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  )
}

