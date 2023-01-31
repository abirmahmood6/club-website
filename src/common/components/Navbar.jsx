import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import { navigation, logoSrc } from '@lib/constants'
import { OuterContainer } from '@components/Container'

export const MobileNav = ({ open, onClose }) => (
  <Dialog as='div' open={open} onClose={onClose}>
    <Dialog.Panel
      focus='true'
      className='fixed inset-0 z-50 overflow-y-auto bg-slate-900 px-6 py-6 lg:hidden'
    >
      <div className='flex items-center justify-between'>
        <Link href='/' className='-m-1.5 p-1.5  '>
          <span className='sr-only'>BMCC Programming Club</span>
          <Image
            className='h-8'
            width={64}
            height={32}
            src={logoSrc}
            alt='BMCC Programming Club Logo'
          />
        </Link>
        <h6 className='text-white text-xs font-medium'>
          BMCC Programming Club
        </h6>
        <button
          type='button'
          className='-m-2.5 rounded-md p-2.5 text-gray-700'
          onClick={() => onClose(false)}
        >
          <span className='sr-only'>Close menu</span>
          <RiCloseLine className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
      <div className='mt-6 flow-root'>
        <div className='-my-6 divide-y divide-gray-500/10'>
          <div className='space-y-2 py-6'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-400/10'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='py-6'>
            <a
              href='#'
              className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-100 hover:bg-gray-400/10'
            >
              Join the club <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
)

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <OuterContainer className='pt-6'>
      <nav className='flex items-center justify-between' aria-label='Global'>
        <div className='flex items-center lg:flex-1'>
          <Link href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>BMCC Programming Club</span>
            <Image
              className='h-8'
              width={64}
              height={32}
              src={logoSrc}
              alt='BMCC Programming Club Logo'
            />
          </Link>
          <h6 className='text-white text-xs font-medium'>
            BMCC Programming Club
          </h6>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <RiMenu3Line className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='link link-underline link-underline-black text-sm font-semibold leading-6 text-white'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden  z-40 lg:flex lg:flex-1 lg:justify-end'>
          <Link
            href='#'
            className='text-sm font-semibold leading-6 link link-underline link-underline-black text-white'
          >
            Join the Club <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </OuterContainer>
  )
}
