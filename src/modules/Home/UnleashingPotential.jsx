import Image from 'next/image'

import { SunRiseSvg } from '@components/Svgs'

const UnleashingPotential = () => {
  return (
    <div className='relative isolate overflow-hidden lg:overflow-visible'>
      <div className='py-24 px-6 sm:px-6 sm:py-14 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-5xl tracking-tight text-transparent'>
            Unleashing Your Potential
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
            Empowering tech-driven students to learn and grow together as a
            community.
          </p>
          <div
            data-aos='flip-left'
            className='mt-5 flex items-center justify-center gap-x-6'
          >
            <Image
              src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80'
              width={1200}
              height={800}
              alt='Image of a person'
              className='shadow-xl h-full shadow-textColor-primary rounded-md'
            />
          </div>
        </div>
      </div>
      <SunRiseSvg />
    </div>
  )
}

export default UnleashingPotential
