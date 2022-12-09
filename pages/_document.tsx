// * ------------------------------
// *
// * Document
// *
// * ------------------------------
import { Html, Head, Main, NextScript } from 'next/document'

const Document = (): JSX.Element => {
  return (
    <Html>
      {/* Head */}
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/logo-s.png' />
        <link rel='apple-touch-icon' sizes='200x200' href='/logo-s.png' />
        <meta name='apple-mobile-web-app-title' content='FEC' />
        <meta name='description' content='fec web Front-End-Collection フロントエンドコレクション' />
        <link href='https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&display=swap' rel='stylesheet' />
      </Head>

      {/* Body */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
