import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "WhatsApp Business Technology Provider | PT Japanindo Travel Connection",
  description: "Official technology presentation and compliance disclosure for PT Japanindo Travel Connection as a managed WhatsApp Business API infrastructure provider.",
  robots: {
    index: true,
    follow: true
  }
};

export default function TechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-black text-white antialiased`}
      >
        <main className="min-h-screen bg-black overflow-x-hidden selection:bg-blue-600 selection:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
