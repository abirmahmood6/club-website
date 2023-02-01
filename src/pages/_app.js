import '@styles/globals.css'
import '@fontsource/playfair-display'
import '@fontsource/montserrat-alternates'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '@components/Footer'
const AOS = dynamic(() => import('@components/CustomAOS'))
const Navbar = dynamic(() => import('@components/Navbar'))

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Analytics />
    <AOS />
    <nav className='sticky top-0 z-40 backdrop-blur-2xl shadow-xl pb-4'>
      <Navbar />
    </nav>
    <Component {...pageProps} />
    <footer>
      <Footer />
    </footer>
  </Fragment>
)
export default MyApp
