import Head from 'next/head'
import theme from '../theme'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Header from '@comp/header'
import Footer from '@comp/footer'
import FontFace from '@comp/font-face'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Adem ilter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Header />

        <Box as="main" py={20}>
          <Component {...pageProps} />
        </Box>

        <Footer />
        <FontFace />
      </ChakraProvider>
    </>
  )
}
