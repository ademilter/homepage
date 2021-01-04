import Head from 'next/head'
import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'

import Header from '@comp/header'
import Footer from '@comp/footer'
import FontFace from '@comp/font-face'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />

        <FontFace />
      </ChakraProvider>
    </>
  )
}
