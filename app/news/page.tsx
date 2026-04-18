import type { Metadata } from "next";
import News from "@/app/components/sections/News";

export const metadata: Metadata = {
  title: "News",
  description:
    "News, briefings, and announcements from Blue Vector — firm updates, research perspectives, and commentary on the defense landscape.",
};

export default function NewsPage() {
  return <News />;
}
