import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jp = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluevector.co.jp"),
  title: {
    default: "BLUE VECTOR | Defense & Security Consulting",
    template: "%s | BLUE VECTOR",
  },
  description:
    "Blue Vector is a private infrastructure firm providing defense and security consulting, strategic advisory, community initiatives, technology incubation, and investment support.",
  keywords: [
    "Blue Vector",
    "Defense",
    "Security",
    "National Security",
    "Intelligence Advisory",
    "Strategic Assessment",
    "Japan",
    "Defense Technology",
    "Defense Investment",
  ],
  authors: [{ name: "Blue Vector Inc." }],
  openGraph: {
    title: "BLUE VECTOR | Defense & Security Consulting",
    description:
      "Defense and security consulting and strategic advisory. Supporting defense innovation, policy strategy, and ecosystem development.",
    url: "https://bluevector.co.jp",
    siteName: "Blue Vector",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLUE VECTOR | Defense & Security Consulting",
    description:
      "Defense and security consulting and strategic advisory. Supporting defense innovation, policy strategy, and ecosystem development.",
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
      className={`${sans.variable} ${serif.variable} ${jp.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
