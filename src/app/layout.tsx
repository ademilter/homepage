import "./main.css";
import "@upstash/claps/style.css";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/header";
import cx from "@/lib/cx";

const fontDefault = JetBrains_Mono({
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
    <html lang="tr" className={cx("scroll-smooth", fontDefault.variable)}>
      <body className="text-default min-h-screen bg-zinc-100 pb-24 text-sm antialiased sm:text-base">
        <Header />
        <main className="mt-10 sm:mt-16">{children}</main>
      </body>
    </html>
  );
}
