import type { Metadata } from "next";
import Team, { type TeamMemberView } from "@/app/components/sections/Team";
import { listTeam } from "@/app/lib/team-queries";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Founding members of BLUE VECTOR — experienced operators from the Ministry of Defense, the Self-Defense Forces, and the private defense investment sector.",
};

export default async function TeamPage() {
  const rows = await listTeam();
  const members: TeamMemberView[] = rows.map((r) => ({
    id: r.id,
    name_en: r.name_en,
    name_jp: r.name_jp,
    role_en: r.role_en,
    role_jp: r.role_jp,
    bio_en: r.bio_en,
    bio_jp: r.bio_jp,
    initials: r.initials,
    photo: r.photo,
  }));
  return <Team members={members} />;
}
