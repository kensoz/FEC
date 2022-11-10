// * ------------------------------
// *
// * Document
// *
// * ------------------------------

import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='fec' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap' rel='stylesheet' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
