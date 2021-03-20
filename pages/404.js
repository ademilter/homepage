import Head from 'next/head'
import PageTransition from '@comp/page-transition'

function Error() {
  return (
    <PageTransition>
      <Head>
        <title>404</title>
      </Head>

      <div className="c-small">
        <p className="text-4xl">404</p>
      </div>
    </PageTransition>
  )
}

export default Error
