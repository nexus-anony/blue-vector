import NewsForm from "../NewsForm";
import { createNewsAction } from "../actions";

export default function NewNewsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">
          New post
        </h1>
        <p className="mt-1 text-sm text-[var(--ink-soft)]">
          Create a new news, briefing, or announcement.
        </p>
      </div>
      <NewsForm action={createNewsAction} submitLabel="Create" />
    </div>
  );
}
