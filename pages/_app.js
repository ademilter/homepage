import React from 'react'
import Router from 'next/router'

import * as gtag from '../lib/gtag'
import Seo from '../components/seo'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

function App({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        html {
          box-sizing: border-box;
          text-rendering: optimizeLegibility;
          scroll-behavior: smooth;
          font-size: 22px;
        }
        body {
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: 'Soehne Breit', sans-serif;
          font-size: 1rem;
          line-height: 1.4;
          background-color: #000;
          color: #fff;
        }
        @font-face {
          font-family: 'Soehne Breit';
          src: url('/fonts/soehne-breit-test-extraleicht-kursiv.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Soehne Breit';
          src: url('/fonts/soehne-breit-test-halbfett-kursiv.woff')
            format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </>
  )
}

export default App
