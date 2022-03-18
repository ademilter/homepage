import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";
import { ThemeProvider } from "next-themes";
import { Provider, CachePolicies } from "use-http";

import "styles/globals.css";

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
          <title>Adem ilter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
