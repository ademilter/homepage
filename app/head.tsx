import { META } from "@/data/meta";

export default function Head() {
  const meta = {
    title: `${META.name} – Designer, developer, creator.`,
    description: `${META.description}`,
    url: `${META.url}`,
  };

  return (
    <>
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
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ademilter" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:url" content={meta.url} />

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
    </>
  );
}
