import type { Metadata } from "next";
import Contact from "@/app/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BLUE VECTOR for advisory engagements, briefings, and general inquiries.",
};

export default function ContactPage() {
  return <Contact />;
}
