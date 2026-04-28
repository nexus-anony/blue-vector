"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { verifySession } from "@/app/lib/dal";
import { setPrivacyContent } from "@/app/lib/privacy-content";

const Schema = z.object({
  title_en: z.string().trim().default(""),
  title_jp: z.string().trim().default(""),
  body_en: z.string().default(""),
  body_jp: z.string().default(""),
  agree_en: z.string().trim().default(""),
  agree_jp: z.string().trim().default(""),
  cancel_en: z.string().trim().default(""),
  cancel_jp: z.string().trim().default(""),
});

export type PrivacyActionState = {
  ok?: boolean;
  error?: string;
};

export async function updatePrivacyAction(
  _prev: PrivacyActionState | undefined,
  formData: FormData
): Promise<PrivacyActionState> {
  await verifySession();
  const parsed = Schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "Invalid input." };

  await setPrivacyContent(parsed.data);
  revalidatePath("/contact");
  revalidatePath("/admin/privacy");
  return { ok: true };
}
