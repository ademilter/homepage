import "styles/globals.css";
import "@codesandbox/sandpack-react/dist/index.css";

import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";
import { ThemeProvider } from "next-themes";
import { Provider } from "use-http";
import { meta } from "../site.config";

export default function MyApp({ Component, pageProps }) {
  const options = {
    interceptors: {
      request: async ({ options, url, path, route }) => {
        console.log("METHOD:", options.method);
        return options;
      },
      response: async ({ response }) => {
        console.log("response", response);
        return response;
      },
    },
  };

  return (
    <ThemeProvider attribute="class">
      <Provider url={process.env.NEXT_PUBLIC_API_URL} options={options}>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Adem ilter</title>
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
        </Head>

        <Header />
        <main className="pt-14 pb-20">
          <Component {...pageProps} />
        </main>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}
