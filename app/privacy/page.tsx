import type { Metadata } from "next";
import LegalPage from "@/app/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How BLUE VECTOR Inc. collects, uses, and protects information you provide through this site.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <LegalPage pageKey="privacy" draft />;
}