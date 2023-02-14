import { BsGithub, BsDiscord } from 'react-icons/bs'

export const logoSrc =
  'https://res.cloudinary.com/iamalmiir/image/upload/v1675047562/logoBMCC_ggm94z.png'

export const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contribute', href: '/contribute' },
]

export const links = {
  home: '/',
  about: '/about',
  events: '/events',
  resources: '/resources',
  contribute: '/contribute',
}

export const gitHubLink = 'https://github.com/Program-BMCC'
export const socialLinks = [
  {
    name: 'GitHub',
    href: gitHubLink,
    icon: BsGithub,
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/kUtD4q7zpU',
    icon: BsDiscord,
  },
]
