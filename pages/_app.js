import '@style/globals.css'
import Head from 'next/head'
import Header from '@comp/header'
import Footer from '@comp/footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adem ilter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="py-14">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
