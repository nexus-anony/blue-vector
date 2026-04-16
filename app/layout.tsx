import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://bluevector.co.jp"),
  title: {
    default: "BLUE VECTOR | Defense & Security",
    template: "%s | BLUE VECTOR",
  },
  description:
    "BLUE VECTOR is a private infrastructure firm providing intelligence advisory and strategic assessment in the defense and security sectors.",
  keywords: [
    "BLUE VECTOR",
    "Defense",
    "Security",
    "National Security",
    "Intelligence Advisory",
    "Strategic Assessment",
    "Japan",
  ],
  authors: [{ name: "BLUE VECTOR Inc." }],
  openGraph: {
    title: "BLUE VECTOR | Defense & Security",
    description:
      "Intelligence advisory and strategic assessment for the defense and security sectors.",
    url: "https://bluevector.co.jp",
    siteName: "BLUE VECTOR",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLUE VECTOR | Defense & Security",
    description:
      "Intelligence advisory and strategic assessment for the defense and security sectors.",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
