import Image from 'next/image'

import { SunRiseSvg } from '@components/Svgs'

const UnleashingPotential = () => {
  return (
    <div className='relative isolate overflow-hidden lg:overflow-visible'>
      <div className='py-24 px-6 sm:px-6 sm:py-14 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-5xl font-bold tracking-tight text-white'>
            Unleashing Your Potential
            <br />
            <span className='text-sky-300'>With Us</span>
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
            Empowering tech-driven students to learn and grow together as a
            community.
          </p>
          <div className='mt-5 flex items-center justify-center gap-x-6'>
            <Image
              src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80'
              width={1200}
              height={800}
              alt='Image of a person'
              className='shadow-xl h-96 shadow-textColor-primary rounded-md'
            />
          </div>
        </div>
      </div>
      <SunRiseSvg />
    </div>
  )
}

export default UnleashingPotential
