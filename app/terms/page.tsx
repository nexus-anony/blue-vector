import type { Metadata } from "next";
import LegalPage from "@/app/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description:
    "BLUE VECTOR provides advisory and consulting services on a per-engagement basis under written engagement letters.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <LegalPage pageKey="terms" draft />;
}