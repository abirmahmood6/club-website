import Image from 'next/image'
import { Button } from '@components/Button'

import notFoundSvg from '@images/not-found.svg'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
      <div className='mx-auto max-w-max'>
        <main className='sm:flex'>
          <Image
            src={notFoundSvg}
            width={240}
            height={340}
            className='text-4xl font-bold tracking-tight text-sky-400/70 sm:text-5xl'
            alt='404 page not found'
          />

          <div className='sm:ml-6'>
            <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
              <h1 className='text-4xl font-playfair font-bold tracking-tight text-gray-200 sm:text-5xl'>
                Page not found
              </h1>
              <p className='mt-1 text-base text-gray-500'>
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
              <Button href={'/'}>Go back home</Button>
              <Button variant='secondary' href={'/'}>
                Contact support
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default NotFoundPage
