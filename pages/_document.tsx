import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_ID } from "@/lib/helper";

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
            href="/fonts/Inter.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/TiemposTextWeb-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/TiemposTextWeb-RegularItalic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />

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

          {process.env.NODE_ENV === "production" && (
            <>
              <Script
                strategy="worker"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <Script strategy="lazyOnload" type="text/javascript">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){ dataLayer.push(arguments); }
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `}
              </Script>
            </>
          )}
        </Head>

        <body className="bg-white text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
