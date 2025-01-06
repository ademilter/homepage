import "./main.css";
import "@upstash/claps/style.css";

import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Header from "@/components/header";
import cx from "@/lib/cx";

const fontText = Inter({
  variable: "--font-sans",
  subsets: ["latin-ext"],
});

const fontDisplay = Inter_Tight({
  variable: "--font-display",
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
  description: "Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={cx("scroll-smooth", fontText.variable, fontDisplay.variable)}
    >
      <body className="text-default min-h-screen bg-zinc-100 pb-24 antialiased">
        {/*<Header />*/}
        <main className="mt-10 sm:mt-16">{children}</main>
      </body>
    </html>
  );
}
