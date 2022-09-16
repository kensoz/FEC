import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
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
        <RecoilRoot>
          {/* ナビバー */}
          <Nav />

          {/* コンテンツレイアウト */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </main>
    </>
  )
}

export default App
