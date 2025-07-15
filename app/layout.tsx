import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stotle AI | Book Discovery Made Simple",
  description: "Discover books instantly with AI image recognition while shopping in-store. Stotle AI streamlines your book shopping experience with intelligent recommendations.",
  keywords: ["AI book app", "book discovery", "image recognition", "book shopping assistant", "book recommendations"],
  openGraph: {
    type: "website",
    title: "Stotle AI | Book Discovery Made Simple",
    description: "Discover books instantly with AI image recognition while shopping in-store.",
    siteName: "Stotle AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stotle AI | Book Discovery Made Simple",
    description: "Discover books instantly with AI image recognition while shopping in-store.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8KCLCEMTFK"
        strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8KCLCEMTFK');
            `}
          </Script>
        {children}
      </body>
    </html>
  );
}
