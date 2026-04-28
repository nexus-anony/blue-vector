"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { verifySession } from "@/app/lib/dal";
import {
  SITE_IMAGE_SLOTS,
  normalizeBottomFadeLevel,
  setSiteImage,
} from "@/app/lib/site-images";

const Schema = z.object({
  slot: z.string().trim().min(1),
  url: z
    .string()
    .trim()
    .transform((v) => (v.length === 0 ? null : v))
    .nullable(),
  bottomFade: z.string().trim().default(""),
});

const VALID_SLOTS = new Set(SITE_IMAGE_SLOTS.map((s) => s.key));

export type ImageActionState = {
  ok?: boolean;
  error?: string;
};

export async function updateSiteImageAction(
  _prev: ImageActionState | undefined,
  formData: FormData
): Promise<ImageActionState> {
  await verifySession();
  const parsed = Schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "Invalid input." };
  if (!VALID_SLOTS.has(parsed.data.slot)) return { error: "Unknown slot." };

  const level = normalizeBottomFadeLevel(parsed.data.bottomFade);

  await setSiteImage(parsed.data.slot, parsed.data.url, level);
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/services");
  revalidatePath("/team");
  revalidatePath("/news");
  revalidatePath("/contact");
  revalidatePath("/admin/images");
  return { ok: true };
}
