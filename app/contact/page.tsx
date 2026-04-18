import type { Metadata } from "next";
import Contact from "@/app/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Blue Vector for advisory engagements, briefings, and general inquiries.",
};

export default function ContactPage() {
  return <Contact />;
}
