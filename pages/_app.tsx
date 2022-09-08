import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  console.log('app')
  return (
    <>
      <Head>
        <title>FEC</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
