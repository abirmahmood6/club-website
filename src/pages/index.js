import { Navbar } from '@components/Navbar'
import { Hero } from '@components/Hero'

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home
