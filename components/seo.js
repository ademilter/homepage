import React from 'react'
import Head from 'next/head'

export default function Seo() {
  const site = {
    title: 'test',
    description: 'test',
    url: 'https://test.com'
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>{site.title}</title>
      <meta name="description" content={site.description} />

      <link
        rel="icon"
        type="image/png"
        href={`/static/favicon-32x32.png`}
        sizes="32x32"
      />
    </Head>
  )
}
