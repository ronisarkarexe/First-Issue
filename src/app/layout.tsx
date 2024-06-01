import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First Issue",
  metadataBase: new URL("https://firstissuedev.vercel.app"),
  description:
    "Good First Issue curates easy pickings from popular open-source projects, and helps you make your first contribution to open-source",
  twitter: {
    title: "First Issue",
    description:
      "Good First Issue curates easy pickings from popular open-source projects, and helps you make your first contribution to open-source.",
    creator: "@firstissue_team",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-white">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');`}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
