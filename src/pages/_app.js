import '@styles/globals.css'
import '@fontsource/playfair-display'
import '@fontsource/montserrat-alternates'
import { Fragment } from 'react'
import { Analytics } from '@vercel/analytics/react'

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Component {...pageProps} />
    <Analytics />
  </Fragment>
)
export default MyApp
