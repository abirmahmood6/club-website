import { GradientSectionTitle } from '@components/SectionTitles'
import Transition from '@hooks/Transition'

const OurMission = () => (
  <div className='backdrop-blur-xl'>
    <div className='mx-auto max-w-7xl py-16 px-6 sm:py-11 lg:px-8'>
      <div className='text-center'>
        <h2 className='text-lg font-semibold text-primary-accent'>
          Our Mission
        </h2>
        <Transition>
          <GradientSectionTitle
            variant='secondary'
            text='Elevating Tech Careers through Community'
          />
        </Transition>
        <Transition>
          <p className='mx-auto mt-5 max-w-xl text-xl text-gray-300'>
            The BMCC Programming Club is dedicated to helping students with a
            passion for technology connect and grow. We offer a dynamic and
            inclusive community of like-minded peers, a variety of engaging
            events, and opportunities to develop in-demand tech skills.
          </p>
        </Transition>
        <br />
        <Transition>
          <p className='mx-auto mt-5 max-w-xl text-xl text-gray-300'>
            From hands-on workshops to hackathons, {"we've"} got you covered.
            Whether {"you're"} seeking a career in Software Engineering, Data
            Science, UX/UI Design or any other tech-related field, or simply
            looking to expand your network and have some fun, the BMCC
            Programming Club is the place to be.
          </p>
        </Transition>
      </div>
    </div>
  </div>
)

export default OurMission
