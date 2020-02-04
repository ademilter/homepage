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
        :root {
          --ff: 'Soehne Breit', -apple-system, system-ui, BlinkMacSystemFont,
            'Helvetica', 'Arial', sans-serif;
          --bg: #e0caa5;
          --color: #23231f;
          --fs-base:18px;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #000;
            --color: #fff;
          }
        }
        @media (min-width: 600px) {
          :root {
            --fs-base:22px;
          }
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
          font-size: var(--fs-base);
        }
        body {
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          //hyphens: auto;
          font-family: var(--ff);
          line-height: 1.1;
          background-color: var(--bg);
          color: var(--color);
        }
      `}</style>
    </>
  )
}

export default App
