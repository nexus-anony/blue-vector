"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { verifySession } from "@/app/lib/dal";
import {
  createNews,
  deleteNews,
  updateNews,
  type NewsInput,
} from "@/app/lib/news-queries";

const NewsSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1)
    .regex(/^[a-z0-9-]+$/i, "Slug may only contain letters, numbers, and dashes."),
  date_published: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD."),
  sort_order: z.coerce.number().int().default(0),
  category_en: z.string().trim().min(1),
  category_jp: z.string().trim().min(1),
  title_en: z.string().trim().min(1),
  title_jp: z.string().trim().min(1),
  excerpt_en: z.string().trim().min(1),
  excerpt_jp: z.string().trim().min(1),
  body_en: z.string().trim().min(1),
  body_jp: z.string().trim().min(1),
});

export type NewsFormState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

function parseForm(formData: FormData): NewsInput | { error: string; fieldErrors: Record<string, string[]> } {
  const raw = Object.fromEntries(formData);
  const result = NewsSchema.safeParse(raw);
  if (!result.success) {
    return {
      error: "Please correct the errors below.",
      fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }
  return result.data;
}

export async function createNewsAction(
  _prev: NewsFormState | undefined,
  formData: FormData
): Promise<NewsFormState> {
  await verifySession();
  const parsed = parseForm(formData);
  if ("error" in parsed) return parsed;
  await createNews(parsed);
  revalidatePath("/news");
  revalidatePath("/admin/news");
  redirect("/admin/news");
}

export async function updateNewsAction(
  id: number,
  _prev: NewsFormState | undefined,
  formData: FormData
): Promise<NewsFormState> {
  await verifySession();
  const parsed = parseForm(formData);
  if ("error" in parsed) return parsed;
  await updateNews(id, parsed);
  revalidatePath("/news");
  revalidatePath("/admin/news");
  redirect("/admin/news");
}

export async function deleteNewsAction(id: number) {
  await verifySession();
  await deleteNews(id);
  revalidatePath("/news");
  revalidatePath("/admin/news");
}
