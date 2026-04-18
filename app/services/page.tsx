import type { Metadata } from "next";
import Services from "@/app/components/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four pillars of defense advisory: consulting, community initiatives, technology incubation, and investment support.",
};

export default function ServicesPage() {
  return <Services />;
}
