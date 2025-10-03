import Image from 'next/image'
import { TeamMember } from '@/lib/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow duration-200">
      {member.photo && (
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={member.photo}
            alt={`${member.name} photo`}
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {member.name}
      </h3>
      <p className="text-primary-600 font-medium mb-2">
        {member.role}
      </p>
      {member.affiliation && (
        <p className="text-sm text-gray-600 mb-3">
          {member.affiliation}
        </p>
      )}
      {member.bio && (
        <p className="text-sm text-gray-600 mb-4">
          {member.bio}
        </p>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Contact
        </a>
      )}
      {member.links && member.links.length > 0 && (
        <div className="mt-4 space-y-2">
          {member.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block text-sm text-primary-600 hover:text-primary-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

