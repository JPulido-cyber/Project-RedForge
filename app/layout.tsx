import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { JsonLd } from "@/components/seo";
import { applicationMetadata } from "@/constants";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(applicationMetadata.siteUrl),
  title: {
    default: applicationMetadata.defaultTitle,
    template: applicationMetadata.titleTemplate,
  },
  description: applicationMetadata.description,
  applicationName: applicationMetadata.name,
  openGraph: {
    type: "website",
    locale: applicationMetadata.locale,
    siteName: applicationMetadata.name,
    title: applicationMetadata.defaultTitle,
    description: applicationMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: applicationMetadata.defaultTitle,
    description: applicationMetadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: applicationMetadata.name,
            description: applicationMetadata.description,
            url: applicationMetadata.siteUrl,
          }}
        />
        {children}
      </body>
    </html>
  );
}
