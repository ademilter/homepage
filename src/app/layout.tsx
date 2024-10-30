import "./main.css";
import "@upstash/claps/style.css";

import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import cx from "@/lib/cx";
import BgColor from "@/components/bg";

const fontDefault = Inter({
  variable: "--font-display",
  subsets: ["latin-ext"],
});
const fontDisplay = Inter_Tight({
  variable: "--font-default",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ademilter.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Adem ilter",
    template: `%s | Adem ilter`,
  },
  description: "Designer, developer, creator and photographer.",
  icons: {
    icon: "/icons/icon-android-chrome-192x192.png",
    apple: "/icons/icon-apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={cx(
        "scroll-smooth bg-zinc-50 text-zinc-900",
        "dark:bg-zinc-900 dark:text-zinc-200",
        fontDisplay.variable,
        fontDefault.variable,
      )}
    >
      <body className="antialiased">
        <BgColor />

        <div className="flex min-h-screen flex-col pt-10 pb-14">
          <Header />
          <main className="mt-10 grow sm:mt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
