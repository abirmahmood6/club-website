import { Hero } from '@components/Hero'
import {
  UnleashingPotential,
  OurMission,
  Learn,
  Collaborate,
} from '@modules/Home'

const HomePage = () => (
  <>
    <main>
      <Hero />
    </main>
    <section id='unleashingPotential'>
      <UnleashingPotential />
    </section>
    <section id='ourMission'>
      <OurMission />
    </section>
    <section id='learn'>
      <Learn />
    </section>
    <section id='collaborate'>
      <Collaborate />
    </section>
  </>
)

export default HomePage
