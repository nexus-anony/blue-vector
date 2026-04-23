import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Shell from "@/app/components/Shell";
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
  metadataBase: new URL("https://blue-vector.vercel.app"),
  title: {
    default: "BLUE VECTOR | Defense & Security",
    template: "%s | BLUE VECTOR",
  },
  description:
    "BLUE VECTOR is a private infrastructure firm providing defense and security consulting, strategic advisory, community initiatives, technology incubation, and investment support.",
  keywords: [
    "BLUE VECTOR",
    "Defense",
    "Security",
    "National Security",
    "Intelligence Advisory",
    "Strategic Assessment",
    "Japan",
    "Defense Technology",
    "Defense Investment",
  ],
  authors: [{ name: "BLUE VECTOR Inc." }],
  openGraph: {
    title: "BLUE VECTOR | Defense & Security Consulting",
    description:
      "Defense and security consulting and strategic advisory. Supporting defense innovation, policy strategy, and ecosystem development.",
    url: "https://blue-vector.vercel.app",
    siteName: "BLUE VECTOR",
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
      lang="ja"
      className={`${sans.variable} ${serif.variable} ${jp.variable} h-full`}
    >
      <body className="min-h-full bg-[var(--surface)] text-[var(--ink)]">
        <Shell>{children}</Shell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
