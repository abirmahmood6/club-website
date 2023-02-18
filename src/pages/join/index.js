import React from 'react'
import Image from 'next/image'
import BlurCyan from '@images/blur-cyan.png'
import BlurIndigo from '@images/blur-indigo.png'
import GFormsPNG from '@images/google_forms_logo.png'
import DiscordLogo from '@images/discord-mark-blue.png'

const Join = () => {
  return <div className='pt-6 text-slate-200'>
      <Image
          className='absolute bottom-1/3 right-2/3 overflow-clip pointer-events-none'
          src={BlurCyan}
          alt='background-blur-image'
          width={530}
          height={530}
          unoptimized
          priority
      />

      <div className={'absolute left-2/3 overflow-clip w-15 h-15 pointer-events-none'}>
          <Image
              className='top-2/3 md:top-1/2  w-max h-max'
              src={BlurIndigo}
              alt='background-blur-image'
              unoptimized
              priority
          />

      </div>

      <div className={'absolute top-2/3 left-3/4 overflow-clip w-15 h-15 pointer-events-none'}>
          <Image
              className='top-2/3 md:top-1/2  w-max h-max'
              src={BlurCyan}
              alt='background-blur-image'
              unoptimized
              priority
          />
      </div>

      <div className={'absolute bottom-4/5 right-3/4 overflow-clip w-20 h-20 pointer-events-none'}>
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
                      There are a couple options for you to join our club which you choose from below.
                      <br/>
                      <br/>
                      The only requirement is that you must be a student enrolled at BMCC.
                      We do however welcome contributions to <a href={'https://github.com/Program-BMCC'} className='underline underline-offset-2 hover:text-orange-500 transition-colors'>our projects</a>, member or not.
                  </p>
            </div>
            <div className={'flex justify-between mx-auto flex-wrap gap-20 w-5/6 mt-10 lg:w-1/2 lg:mt-20'}>
                <div className={'mx-auto text-center hover:text-orange-400 transition-colors'}>
                    <a href={"https://docs.google.com/forms/d/e/1FAIpQLSeE24To66MBfdrlnxSZ8fVdY9cKnmr9n2UAPkfI6v-S1mxcbw/viewform"}>
                    <Image className={'mx-auto'}
                       src={GFormsPNG}
                       alt={'Google-Forms Logo'}
                       width={100}
                           height={100}
                    />
                    <p className={'mx-auto mt-3'}>Sign-Up via Google Form</p>
                    </a>
                </div>
                <div className={'mx-auto  text-center hover:text-orange-400 transition-colors'}>
                    <a href={"https://discord.gg/kUtD4q7zpU"}>
                    <Image className={'mx-auto'}
                           src={DiscordLogo}
                           alt={'Discord Logo'}
                           height={100}
                    />
                    <p className={'mx-auto mt-3'}>Join Our Discord Server</p>
                        </a>
                </div>
                <div className={'mx-auto text-center'}>
                    <svg className={'mx-auto fill-red-500 '}
                        xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24" width="100" fill="currentColor"><path d="M18 7V5a1 1 0 0 0-1-1h-1v1a1 1 0 0 1-2 0V4H6v1a1 1 0 1 1-2 0V4H3a1 1 0 0 0-1 1v2h16zm0 2H2v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9zm-2-7h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1V1a1 1 0 1 1 2 0v1h8V1a1 1 0 0 1 2 0v1z"></path></svg>
                    <p className={'mx-auto mt-3'}>Meet Us in Person! (Setting TBD)</p>
                </div>
            </div>
  </div>
}

export default Join
