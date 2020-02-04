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
          --bg: #f8e3c8;
          --color: #23231f;
          --color-light: rgba(0, 0, 0, 0.2);
          --fs-base: 18px;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #000;
            --color: #fff;
            --color-light: rgba(255, 255, 255, 0.2);
          }
        }
        @media (min-width: 600px) {
          :root {
            --fs-base: 22px;
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
          src: url('/fonts/soehne-breit-test-fett-kursiv.woff') format('woff');
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
          font-family: var(--ff);
          line-height: 1.2;
          background-color: var(--bg);
          color: var(--color);
        }
        a {
          color: inherit;
          text-decoration-color: var(--color-light);
        }
        a:hover {
          text-decoration-color: inherit;
        }
        .nowrap {
          white-space: nowrap;
        }
      `}</style>
    </>
  )
}

export default App
