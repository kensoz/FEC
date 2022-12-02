// * ------------------------------
// *
// * FEC
// * 2022-11-01 renhou　新規作成
// *
// * ------------------------------
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import Layout from '../components/layout'
import Nav from '../components/nav'
import '../styles/index.css'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      {/* サイトのタイトル */}
      <Head>
        <title>FEC</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      {/* ページレイアウト */}
      <ThemeProvider attribute='class'>
        <RecoilRoot>
          <main className='fec-main'>
            {/* ナビバー */}
            <Nav />

            {/* コンテンツレイアウト */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export default App
