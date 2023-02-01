import Image from 'next/image'
import { BsDiscord } from 'react-icons/bs'

import { DecorativeSvg } from '@components/Svgs'
import { ButtonIcon } from '@components/Button'
import { GradientSectionTitle } from '@components/SectionTitles'
import { socialLinks } from '@lib/constants'
import Transition from '@hooks/Transition'
import Collab from '@images/collaborate.svg'

const Collaborate = () => {
  return (
    <div className='py-11'>
      <div className='mx-auto max-w-full sm:px-6 lg:px-8'>
        <div className='relative isolate overflow-hidden py-20 px-6 sm:rounded-3xl sm:py-24 sm:px-10 lg:py-24 xl:px-24'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0'>
            <div className='lg:row-start-2 lg:max-w-md'>
              <GradientSectionTitle
                variant='secondary'
                text='Collaborate and Conquer'
              />
              <Transition>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  Working together is the key to success. At the BMCC
                  Programming Club, {"you'll"} find a community of tech-savvy
                  peers ready to help you turn your project dreams into
                  realities.
                </p>
              </Transition>
              <Transition>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  Form your ultimate hackathon team, refine your interview
                  skills through mock sessions, or simply connect with
                  like-minded individuals. The possibilities for growth and
                  accomplishment are endless.
                </p>
              </Transition>
              <ButtonIcon
                variant='secondary'
                className='mt-8'
                href={socialLinks[1].href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Join our Discord server'
              >
                <BsDiscord className='w-6 h-6' />
                <span className='ml-3'>Join our Discord server</span>
              </ButtonIcon>
            </div>
            <div className='relative -z-20 min-w-full max-w-full rounded-xl shadow-2xl ring-1 ring-sky-400/10 lg:row-span-4 lg:w-[64rem] lg:max-w-full p-4'>
              <Image
                data-aos='fade-left'
                src={Collab}
                alt='Product screenshot'
                width={2432}
                height={1442}
              />
            </div>
          </div>
          <DecorativeSvg />
        </div>
      </div>
    </div>
  )
}

export default Collaborate
