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
        <meta name='description' content='fec' />
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
