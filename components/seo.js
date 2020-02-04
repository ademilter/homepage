import React from 'react'
import Head from 'next/head'

export default function Seo() {
  const site = {
    title: 'Adem ilter - Design and Code',
    description: 'Frontend Developer from Istanbul',
    url: 'https://ademilter.com',
    twitter: '@ademilter'
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

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.twitter} />
      <meta name="twitter:creator" content={site.twitter} />
      <meta name="twitter:title" content={site.title} />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={site.title} />
      <meta property="og:url" content={site.url} />

      <meta name="theme-color" content="#000000" />

      <link
        rel="preload"
        href="/fonts/soehne-breit-test-extraleicht-kursiv.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/soehne-breit-test-fett-kursiv.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />

      {/*<link*/}
      {/*  rel="apple-touch-icon"*/}
      {/*  sizes="180x180"*/}
      {/*  href={`/static/apple-touch-icon.png`}*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  href={`/static/favicon-32x32.png`}*/}
      {/*  sizes="32x32"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  href={`/static/favicon-16x16.png`}*/}
      {/*  sizes="16x16"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="mask-icon"*/}
      {/*  href={`/static/safari-pinned-tab-fill.svg`}*/}
      {/*  color="#086054"*/}
      {/*/>*/}
    </Head>
  )
}
