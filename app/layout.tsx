import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://japanindotravel.id"),
  title: {
    default: "JP Smart Sim - Teman Setia Kenshusei di Negeri Sakura",
    template: "%s | JP Smart Sim"
  },
  description:
    "Solusi komunikasi praktis, terjangkau, dan andal untuk kenshusei di Jepang. Internet cepat NTT DOCOMO, pembayaran mudah, dan support Bahasa Indonesia.",
  keywords: [
    "JP Smart Sim",
    "kartu SIM Jepang",
    "kenshusei",
    "SIM card Japan",
    "NTT DOCOMO",
    "internet Jepang",
    "Japanindo Travel",
    "magang Jepang"
  ],
  authors: [{ name: "Japanindo Travel" }],
  creator: "PT Japanindo Travel Connection",
  publisher: "PT Japanindo Travel Connection",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://japanindotravel.id",
    siteName: "JP Smart Sim by Japanindo Travel",
    title: "JP Smart Sim - Teman Setia Kenshusei di Negeri Sakura",
    description:
      "Solusi komunikasi praktis, terjangkau, dan andal untuk kenshusei di Jepang. Internet cepat NTT DOCOMO, pembayaran mudah, dan support Bahasa Indonesia.",
    images: [
      {
        url: "/assets/hero2.png",
        width: 1200,
        height: 630,
        alt: "JP Smart Sim Card"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "JP Smart Sim - Teman Setia Kenshusei di Negeri Sakura",
    description:
      "Solusi komunikasi praktis, terjangkau, dan andal untuk kenshusei di Jepang. Internet cepat NTT DOCOMO, pembayaran mudah, dan support Bahasa Indonesia.",
    images: ["/assets/hero2.png"]
  },
  alternates: {
    canonical: "https://japanindotravel.id"
  },
  verification: {
    google: "google-site-verification-code"
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3GKB0HX7ZL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GKB0HX7ZL');
          `}
        </Script>
      </head>
      <body
        className={`${rubik.className} bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-300`}
      >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


