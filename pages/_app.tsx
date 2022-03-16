import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";
import { SWRConfig } from "swr";
import { ThemeProvider } from "next-themes";

import "styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Head>
          <title>Adem ilter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Header />
        <main className="pt-14 pb-20">
          <Component {...pageProps} />
        </main>
        <Footer />
      </SWRConfig>
    </ThemeProvider>
  );
}
