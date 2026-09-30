type Link = {
  label: string
  href: string
}

type Experience = {
  title: string
  description: string
  date: string
  links?: Link[]
}

export const volunteerExperience: Experience[] = [
  {
    title: 'Modrinth - A mod distribution platform',
    date: 'March 2025 - Present',
    description: 'Lead Community Moderator & Discord Bot Maintainer.',
    links: [
      { label: 'Website', href: 'https://modrinth.com' },
      {
        label: 'Discord Bot',
        href: 'https://github.com/modrinth/discord-bot',
      },
    ],
  },
  {
    title:
      'StopMalwareContent - Organization to fight against malicious content',
    date: 'June 2024 - Present',
    description: 'Founder, Project Maintainer.',
    links: [
      {
        label: 'Website',
        href: 'https://stopmalwarecontent.lodine.xyz',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/StopMalwareContent',
      },
    ],
  },
  {
    title:
      'NotEssential - Website linking to mods that can substitute Essential’s features',
    date: 'June 2024 - August 2025',
    description: 'Core Team Member, Project Maintainer.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/usevital/notessential',
      },
    ],
  },
]
