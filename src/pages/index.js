import { Navbar } from '@components/Navbar'
import { Hero } from '@components/Hero'
import { UnleashingPotential, OurMission, Learn, Footer } from '@modules/Home'

const Home = () => {
  return (
    <div>
      <nav className='sticky top-0 z-40 backdrop-blur-2xl shadow-xl pb-4'>
        <Navbar />
      </nav>
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
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
