import Hero from "@/app/components/sections/Hero";
import { getSiteImages } from "@/app/lib/site-images";

export default async function Home() {
  const images = await getSiteImages();
  const heroImages = [
    images.home_hero_1,
    images.home_hero_2,
    images.home_hero_3,
    images.home_hero_4,
  ];
  return <Hero images={heroImages} />;
}
