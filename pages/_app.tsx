// * ------------------------------
// *
// * FEC Next.js APP
// * 2022-11-01 renhou　新規作成
// *
// * ------------------------------

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import Layout from '../components/layout'
import Nav from '../components/nav'
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
      <RecoilRoot>
        <main className='main'>
          {/* ナビバー */}
          <Nav />

          {/* コンテンツレイアウト */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </RecoilRoot>
    </>
  )
}

export default App
