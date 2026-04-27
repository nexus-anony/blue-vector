import type { Metadata } from "next";
import About from "@/app/components/sections/About";
import { getSiteImages } from "@/app/lib/site-images";

export const metadata: Metadata = {
  title: "About",
  description:
    "BLUE VECTOR — Vision, Mission, Values. A private infrastructure firm for the defense and security ecosystem, established April 2026.",
};

export default async function AboutPage() {
  const images = await getSiteImages();
  return <About backgroundImage={images.about_bg} />;
}
