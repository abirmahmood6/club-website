import '@styles/globals.css'
import '@fontsource/playfair-display'
import '@fontsource/montserrat-alternates'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/react'
const AOS = dynamic(() => import('@components/CustomAOS'))

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <AOS />
    <Component {...pageProps} />
    <Analytics />
  </Fragment>
)
export default MyApp
