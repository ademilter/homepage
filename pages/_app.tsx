import "@/styles/globals.css";
import "@upstash/claps/style.css";
import "prism-themes/themes/prism-atom-dark.css";
import { Provider } from "use-http";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "@next/font/google";
import cx from "classnames";

const inter = Inter({
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }) {
  const options = {
    interceptors: {
      request: async ({ options }) => {
        return options;
      },
      response: async ({ response }) => {
        return response;
      },
    },
  };

  return (
    <Provider url={process.env.NEXT_PUBLIC_API_URL} options={options}>
      <body
        className={cx(
          "bg-white text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400",
          inter.variable
        )}
      >
        <Component {...pageProps} />
      </body>
      <Analytics />
    </Provider>
  );
}
