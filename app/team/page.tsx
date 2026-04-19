import type { Metadata } from "next";
import Team from "@/app/components/sections/Team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Founding members of BLUE VECTOR — experienced operators from the Ministry of Defense, the Self-Defense Forces, and the private defense investment sector.",
};

export default function TeamPage() {
  return <Team />;
}
