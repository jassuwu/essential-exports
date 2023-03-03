import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css" />
      </Head>
      <body className='bg-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
