import "./main.css";

import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
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
    <html lang="tr" className={cx(fontText.variable, fontDisplay.variable)}>
      <head>
        <Script
          src="https://context7app-git-ctx7-2014-context7-ask-lets-a-si-a830a8-upstash.vercel.app/api/v2/ask/script?siteKey=ask_30b86d085fcdb9c239386615"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-zinc-50 py-24 text-xl text-zinc-700">
        <main>{children}</main>
      </body>
    </html>
  );
}
