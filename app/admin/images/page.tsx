import { SITE_IMAGE_SLOTS, getSiteImages } from "@/app/lib/site-images";
import ImageSlotRow from "./ImageSlotRow";

const SECTION_LABELS: Record<string, string> = {
  home: "Home — Hero Carousel",
  team: "Team — Hero Carousel",
  news: "News — Hero Carousel",
  about: "About — Hero Background",
  services: "Services — Hero Background",
  contact: "Contact — Hero Background",
};

export default async function ImagesAdminPage() {
  const current = await getSiteImages();
  const grouped = new Map<string, typeof SITE_IMAGE_SLOTS>();
  for (const slot of SITE_IMAGE_SLOTS) {
    const list = grouped.get(slot.section) ?? [];
    list.push(slot);
    grouped.set(slot.section, list);
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">Site Images</h1>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">
          Replace hero carousels and section backgrounds. Reset to revert any slot to its bundled default.
        </p>
      </div>

      {Array.from(grouped.entries()).map(([section, slots]) => (
        <section key={section} className="space-y-4">
          <h2 className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)] border-b border-[var(--rule)] pb-2">
            {SECTION_LABELS[section] ?? section}
          </h2>
          <div className="space-y-4">
            {slots.map((s) => (
              <ImageSlotRow
                key={s.key}
                slot={s.key}
                label={s.label}
                initialUrl={current[s.key]?.url ?? s.defaultUrl}
                initialBottomFade={current[s.key]?.bottomFadeLevel ?? 100}
                initialTopFade={current[s.key]?.topFadeLevel ?? 0}
                defaultUrl={s.defaultUrl}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
