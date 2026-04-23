"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { verifySession } from "@/app/lib/dal";
import {
  createTeamMember,
  deleteTeamMember,
  updateTeamMember,
  type TeamInput,
} from "@/app/lib/team-queries";

const TeamSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1)
    .regex(/^[a-z0-9-]+$/i, "Slug may only contain letters, numbers, and dashes."),
  sort_order: z.coerce.number().int().default(0),
  name_en: z.string().trim().min(1),
  name_jp: z.string().trim().min(1),
  role_en: z.string().trim().min(1),
  role_jp: z.string().trim().min(1),
  bio_en: z.string().trim().min(1),
  bio_jp: z.string().trim().min(1),
  initials: z.string().trim().min(1).max(4),
  photo: z
    .string()
    .trim()
    .transform((v) => (v.length === 0 ? null : v))
    .nullable()
    .default(null),
});

export type TeamFormState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

function parseForm(
  formData: FormData
): TeamInput | { error: string; fieldErrors: Record<string, string[]> } {
  const raw = Object.fromEntries(formData);
  const result = TeamSchema.safeParse(raw);
  if (!result.success) {
    return {
      error: "Please correct the errors below.",
      fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }
  return result.data;
}

export async function createTeamAction(
  _prev: TeamFormState | undefined,
  formData: FormData
): Promise<TeamFormState> {
  await verifySession();
  const parsed = parseForm(formData);
  if ("error" in parsed) return parsed;
  await createTeamMember(parsed);
  revalidatePath("/team");
  revalidatePath("/admin/team");
  redirect("/admin/team");
}

export async function updateTeamAction(
  id: number,
  _prev: TeamFormState | undefined,
  formData: FormData
): Promise<TeamFormState> {
  await verifySession();
  const parsed = parseForm(formData);
  if ("error" in parsed) return parsed;
  await updateTeamMember(id, parsed);
  revalidatePath("/team");
  revalidatePath("/admin/team");
  redirect("/admin/team");
}

export async function deleteTeamAction(id: number) {
  await verifySession();
  await deleteTeamMember(id);
  revalidatePath("/team");
  revalidatePath("/admin/team");
}
