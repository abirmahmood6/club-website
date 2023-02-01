import Image from 'next/image'
import { BsCodeSlash } from 'react-icons/bs'
import Transition from '@hooks/Transition'

const Learn = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-sky-600 pb-16 lg:relative lg:z-10 lg:pb-0'>
      <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8'>
        <div className='relative lg:-my-8'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-0 h-1/2 lg:hidden'
          />
          <div
            data-aos='fade-right'
            className='mx-auto max-w-md p-4 sm:max-w-5xl lg:h-full lg:p-0'
          >
            <div className='aspect-w-12 aspect-h-6 overflow-hidden rounded-xl shadow-2xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full'>
              <Image
                className='object-cover lg:h-full lg:w-full'
                width={2102}
                height={1188}
                src='https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Members of the community learning together'
              />
            </div>
          </div>
        </div>
        <div className='mt-12 lg:col-span-2 lg:m-0 lg:pl-8'>
          <div className='mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20'>
            <blockquote>
              <div>
                <div className='flex justify-start items-center'>
                  <Transition>
                    <BsCodeSlash className='h-12 w-12 text-primary-accent' />
                  </Transition>
                  <h6 className='p-4 text-3xl font-bold text-gray-200 backdrop:blur-xl'>
                    Leveling Up Tech Skills
                  </h6>
                </div>
                <p className='mt-6 text-xl font-medium text-gray-300'>
                  At the BMCC Programming Club, we welcome all levels of tech
                  enthusiasts. Whether {"you're"} just starting your journey or
                  are a seasoned pro, our community is designed to help you
                  grow.
                  <br />
                  <br />
                  Join us for a variety of tech talks, workshops, challenges,
                  and more. Our engaging events cater to both beginners and
                  advanced learners, empowering you to build your first website
                  or advance your cloud deployment skills. With hands-on
                  learning and a supportive community, {"it's"} never been
                  easier to level up your tech career.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
