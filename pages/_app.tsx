import * as React from 'react'
import Head from '../components/Head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Head><Component {...pageProps} /></Head>
}

export default MyApp
