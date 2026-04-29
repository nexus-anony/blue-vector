import type { Metadata } from "next";
import Contact from "@/app/components/sections/Contact";
import { getSiteImages } from "@/app/lib/site-images";
import { getPrivacyContent } from "@/app/lib/privacy-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BLUE VECTOR for advisory engagements, briefings, and general inquiries.",
};

export default async function ContactPage() {
  const [images, privacy] = await Promise.all([
    getSiteImages(),
    getPrivacyContent(),
  ]);
  return <Contact background={images.contact_bg} privacy={privacy} />;
}
