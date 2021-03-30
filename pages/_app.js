import '@style/globals.css'

import { RoomServiceProvider } from '@roomservice/react'
import useUserID from '../hooks/use-user-id'
import Head from 'next/head'
import Header from '@comp/header'
import Footer from '@comp/footer'
import { Auth0Provider } from '@auth0/auth0-react'
import Cat from '@comp/live'

async function myAuthFunction({ room, ctx }) {
  const response = await fetch('/api/roomservice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    //  Pass cookies to server
    credentials: 'include',
    body: JSON.stringify({
      room: room,
      //  TODO: Determine userID on server based on cookies or values passed in here.
      user: ctx.userID
    })
  })

  if (response.status === 401) {
    throw new Error('Unauthorized!')
  }

  if (response.status !== 200) {
    throw await response.text()
  }

  const body = await response.json()
  return {
    user: body.user,
    resources: body.resources,
    token: body.token
  }
}

export default function MyApp({ Component, pageProps }) {
  const userID = useUserID()

  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      redirectUri={process.env.API_URL}
    >
      <Head>
        <title>Adem ilter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <RoomServiceProvider
        online={userID !== null}
        clientParameters={{ auth: myAuthFunction, ctx: { userID } }}
      >
        <Header />
        <main className="py-14">
          <Component {...pageProps} />
        </main>
        <Footer />
        <Cat />
      </RoomServiceProvider>
    </Auth0Provider>
  )
}
