export type TeamMember = {
  name: string
  role: string
  affiliation?: string
  email?: string
  photo?: string
  bio?: string
  links?: { label: string; url: string }[]
}

export type Publication = {
  id: string
  title: string
  authors: string[]
  year: number
  venue?: string
  doi?: string
  url?: string
  topics?: string[]
}

