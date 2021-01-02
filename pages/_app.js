import Head from 'next/head'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import '@style/app.css'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
