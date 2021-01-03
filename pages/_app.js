import Head from 'next/head'
import FontFace from '@comp/font-face'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
      <FontFace />
    </>
  )
}
