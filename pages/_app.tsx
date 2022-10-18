import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import Layout from '../components/layout'
import Nav from '../components/nav'
import '../styles/globals.css'
import '../firebase/index'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* サイトのタイトル */}
      <Head>
        <title>FEC</title>
      </Head>

      {/* ページレイアウト */}

      <main className='main'>
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
