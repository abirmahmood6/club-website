import Link from 'next/link'

import { socialLinks } from '@lib/constants'
import { OuterContainer } from '@components/Container'

export const Footer = () => {
  return (
    <OuterContainer data-aos='fade-up'>
      <div className='mt-16 border-t p-6 border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24'>
        <div className='flex space-x-6 md:order-2'>
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className={`${
                item.name === 'GitHub'
                  ? 'hover:bg-black'
                  : 'hover:bg-indigo-700'
              } text-gray-500 p-3 rounded-full hover:text-gray-300`}
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </Link>
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
