import { BsGithub, BsDiscord } from 'react-icons/bs'

import { OuterContainer } from '@components/Container'

const navigation = {
  social: [
    {
      name: 'Github',
      href: 'https://github.com/Program-BMCC',
      icon: BsGithub,
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/h7DmshxJ',
      icon: BsDiscord,
    },
  ],
}

const Marketing = () => {
  return (
    <OuterContainer>
      <div className='mt-16 border-t p-8 border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24'>
        <div className='flex space-x-6 md:order-2'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-500 hover:text-gray-400'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0'>
          &copy; {new Date().getFullYear()} BMCC Programming Club, All rights
          reserved.
        </p>
      </div>
    </OuterContainer>
  )
}

export default Marketing
