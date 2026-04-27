import type { Metadata } from "next";
import Contact from "@/app/components/sections/Contact";
import { getSiteImages } from "@/app/lib/site-images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BLUE VECTOR for advisory engagements, briefings, and general inquiries.",
};

export default async function ContactPage() {
  const images = await getSiteImages();
  return <Contact backgroundImage={images.contact_bg} />;
}
