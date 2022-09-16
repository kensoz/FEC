import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout'
import Nav from '../components/layout/nav'
import '../styles/globals.css'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* サイトのタイトル */}
      <Head>
        <title>FEC</title>
      </Head>

      {/* ページレイアウト */}

      <main className='flex h-screen w-screen overflow-hidden'>
        {/* ナビバー */}
        <Nav />

        {/* コンテンツレイアウト */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  )
}

export default App
