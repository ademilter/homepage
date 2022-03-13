import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { meta } from "../site.config";

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman.var.woff2?v=3.15"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* base */}
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={meta.description} />
          <link rel="canonical" href={meta.url} />

          {/* facebook */}
          <meta property="og:url" content={meta.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />

          {/* twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={meta.url} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />

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

          {/*<link*/}
          {/*  rel="alternate"*/}
          {/*  type="application/rss+xml"*/}
          {/*  title="RSS Feed for feyz.li"*/}
          {/*  href="/feed.xml"*/}
          {/*/>*/}

          {/* analytic */}
          {meta.ga && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${meta.ga}`}
              />
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${meta.ga}');`,
                }}
              />
            </>
          )}
        </Head>

        <body
          className="bg-white text-gray-600 antialiased
      dark:bg-gray-900 dark:text-gray-400"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
