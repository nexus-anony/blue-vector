import type { Metadata } from "next";
import Services from "@/app/components/sections/Services";
import { getSiteImages } from "@/app/lib/site-images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four pillars of defense advisory: consulting, community initiatives, technology incubation, and investment support.",
};

export default async function ServicesPage() {
  const images = await getSiteImages();
  return <Services backgroundImage={images.services_bg} />;
}
