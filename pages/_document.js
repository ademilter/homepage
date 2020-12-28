import Document, { Html, Head, Main, NextScript } from 'next/document'
import SiteConfig from '../site.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={SiteConfig.lang}>
        <Head>
          {/* base */}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={SiteConfig.description} />

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
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
          <meta name="application-name" content={SiteConfig.title} />
          <meta name="apple-mobile-web-app-title" content={SiteConfig.title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />

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

export default MyDocument
