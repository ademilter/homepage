import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import SiteConfig from '../site.config'

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html
        lang={SiteConfig.lang}
        className="bg-white text-gray-500 antialiased js-focus-visible"
      >
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter-italic.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* base */}
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={SiteConfig.description} />
          <link rel="canonical" href={SiteConfig.siteUrl} />

          {/* facebook */}
          <meta property="og:url" content={SiteConfig.siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={SiteConfig.title} />
          <meta property="og:description" content={SiteConfig.description} />

          {/* twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={SiteConfig.siteUrl} />
          <meta name="twitter:title" content={SiteConfig.title} />
          <meta name="twitter:description" content={SiteConfig.description} />

          {/* pwa */}
          <link href="/static/icons/site.webmanifest" rel="manifest" />
          <link
            href="/static/icons/icon-apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/icons/icon-favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/icons/icon-favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#ffffff"
            href="/static/icons/icon-safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />

          {/* analytic */}
          {SiteConfig.googleAnalytic && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${SiteConfig.googleAnalytic}`}
              />
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${SiteConfig.googleAnalytic}');`
                }}
              />
            </>
          )}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
