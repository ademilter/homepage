import Head from 'next/head'
import Header from '@comp/header'
import Footer from '@comp/footer'
import FontFace from '@comp/font-face'
import '@style/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adem ilter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="py-20">
        <Component {...pageProps} />
      </main>

      <Footer />
      <FontFace />
    </>
  )
}
