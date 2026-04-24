import { notFound } from "next/navigation";
import NewsForm from "../NewsForm";
import { updateNewsAction, type NewsFormState } from "../actions";
import { getNews } from "@/app/lib/news-queries";

export default async function EditNewsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) notFound();

  const item = await getNews(numericId);
  if (!item) notFound();

  const action = async (
    prev: NewsFormState | undefined,
    formData: FormData
  ): Promise<NewsFormState> => {
    "use server";
    return updateNewsAction(numericId, prev, formData);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">
          Edit post
        </h1>
        <p className="mt-1 text-sm text-[var(--ink-soft)]">
          {item.title_en}
        </p>
      </div>
      <NewsForm initial={item} action={action} submitLabel="Save changes" />
    </div>
  );
}
