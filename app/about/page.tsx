import type { Metadata } from "next";
import About from "@/app/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "BLUE VECTOR — Vision, Mission, Values. A private infrastructure firm for the defense and security ecosystem, established April 2026.",
};

export default function AboutPage() {
  return <About />;
}
