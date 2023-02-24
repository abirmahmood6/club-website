import Image from 'next/image'
import Link from 'next/link'

import { FaDiscord, FaCalendarAlt } from 'react-icons/fa'
import { MdFormatListBulleted } from 'react-icons/md'

import BlurCyan from '@images/blur-cyan.png'
import BlurIndigo from '@images/blur-indigo.png'
import { gitHubLink, discordLink, googleFormLink } from '@lib/constants'

const Join = () => {
  return (
    <div className='pt-6 mt-11 text-slate-200'>
      <Image
        className='absolute bottom-1/3 right-2/3 overflow-clip pointer-events-none'
        src={BlurCyan}
        alt='background-blur-image'
        width={530}
        height={530}
        unoptimized
        priority
      />

      <div
        className={
          'absolute left-2/3 overflow-clip w-15 h-15 pointer-events-none'
        }
      >
        <Image
          className='top-2/3 md:top-1/2  w-max h-max'
          src={BlurIndigo}
          alt='background-blur-image'
          unoptimized
          priority
        />
      </div>

      <div
        className={
          'absolute top-2/3 left-3/4 overflow-clip w-15 h-15 pointer-events-none'
        }
      >
        <Image
          className='top-2/3 md:top-1/2  w-max h-max'
          src={BlurCyan}
          alt='background-blur-image'
          unoptimized
          priority
        />
      </div>

      <div
        className={
          'absolute bottom-4/5 right-3/4 overflow-clip w-20 h-20 pointer-events-none'
        }
      >
        <Image
          className='md:top-1/2  w-max h-max'
          src={BlurIndigo}
          alt='background-blur-image'
          unoptimized
          priority
        />
      </div>

      <div className='container p-4 w-5/6 md:w-1/2 mx-auto bg-gray-900 outline outline-blue-900 rounded place-content-center'>
        <h1 className='mt-3 text-2xl text-blue-500 pb-2'>Joining the Club</h1>
        <p className='pb-2'>
          There are a couple options for you to join our club which you choose
          from below.
          <br />
          <br />
          The only requirement is that you must be a student enrolled at BMCC.
          We do however welcome contributions to{' '}
          <Link
            href={gitHubLink}
            target='_blank'
            className='underline underline-offset-2 hover:text-orange-500 transition-colors'
          >
            our projects
          </Link>
          , member or not.
        </p>
      </div>
      <div
        className={
          'flex justify-between mx-auto flex-wrap gap-20 w-5/6 mt-10 lg:w-1/2 lg:mt-20'
        }
      >
        <div
          className={
            'mx-auto text-center hover:text-orange-400 transition-colors'
          }
        >
          <Link target='_blank' href={googleFormLink}>
            <MdFormatListBulleted
              className={'mx-auto text-8xl text-blue-500'}
            />
            <p className={'mx-auto mt-3'}>Sign-Up via Google Form</p>
          </Link>
        </div>
        <div
          className={
            'mx-auto  text-center hover:text-orange-400 transition-colors'
          }
        >
          <Link target='_blank' href={discordLink}>
            <FaDiscord className={'mx-auto text-8xl text-indigo-500'} />
            <p className={'mx-auto mt-3'}>Join Our Discord Server</p>
          </Link>
        </div>
        <div className={'mx-auto text-center'}>
          <FaCalendarAlt className={'mx-auto text-8xl text-red-500'} />
          <p className={'mx-auto mt-3'}>Meet Us in Person! (Setting TBD)</p>
        </div>
      </div>
    </div>
  )
}

export default Join
