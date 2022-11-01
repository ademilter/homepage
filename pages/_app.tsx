import "@/styles/globals.css";
import "@upstash/claps/style.css";
import "prism-themes/themes/prism-atom-dark.css";
import { Provider } from "use-http";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "@next/font/google";

const inter = Inter({
  // variable: "--font-sans",
  subsets: ["latin-ext"],
  weight: ["400", "600"],
  style: "normal",
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
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </Provider>
  );
}
