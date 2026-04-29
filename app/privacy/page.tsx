import type { Metadata } from "next";
import LegalPage from "@/app/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How BLUE VECTOR Inc. collects, uses, and protects information you provide through this site.",
};

export default function PrivacyPage() {
  return <LegalPage pageKey="privacy" draft />;
}