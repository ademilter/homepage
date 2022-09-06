import "@/styles/globals.css";
import "@upstash/claps/style.css";
import "prism-themes/themes/prism-atom-dark.css";
import { Provider } from "use-http";

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
      <Component {...pageProps} />
    </Provider>
  );
}
