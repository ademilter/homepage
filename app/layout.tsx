import "@/styles/globals.css";
import "@upstash/claps/style.css";

import AnalyticsWrapper from "./analytics";
import { Inter } from "@next/font/google";
import Header from "@/components/header";
import PageTransition from "@/components/page-transition";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  style: "normal",
  subsets: ["latin-ext"],
});

export default async function Layout({ children }) {
  return (
    <html lang="tr" className={`"scroll-smooth" ${inter.variable}`}>
      <body className="bg-white text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400">
        <div className="flex min-h-screen flex-col pt-10 pb-14">
          <Header />
          <main className="mt-10 flex-grow sm:mt-20">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
