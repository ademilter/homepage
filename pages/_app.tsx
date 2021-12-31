import 'styles/globals.css'

import Head from 'next/head'
import Kbar from 'components/Kbar'
import Header from 'components/Header'
import Footer from 'components/footer'
import { Auth0Provider } from '@auth0/auth0-react'
import { SWRConfig } from 'swr'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      redirectUri={process.env.API_URL}
    >
      <ThemeProvider attribute="class">
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Head>
            <title>Adem ilter</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <Kbar>
            <Header />
            <main className="py-14">
              <Component {...pageProps} />
            </main>
            <Footer />
          </Kbar>
        </SWRConfig>
      </ThemeProvider>
    </Auth0Provider>
  )
}
