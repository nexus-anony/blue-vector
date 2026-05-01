import type { Metadata } from "next";
import LegalPage from "@/app/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "BLUE VECTOR's accessibility commitment, conformance goals, and feedback channel.",
  alternates: { canonical: "/accessibility" },
  robots: { index: true, follow: true },
};

export default function AccessibilityPage() {
  return <LegalPage pageKey="accessibility" />;
}