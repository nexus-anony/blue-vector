"use client";

import { useActionState, useRef, useState } from "react";
import Image from "next/image";
import { updateSiteImageAction, type ImageActionState } from "./actions";

export default function ImageSlotRow({
  slot,
  label,
  initialUrl,
  defaultUrl,
}: {
  slot: string;
  label: string;
  initialUrl: string;
  defaultUrl: string;
}) {
  const [url, setUrl] = useState<string>(initialUrl);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [state, formAction, pending] = useActionState<ImageActionState | undefined, FormData>(
    updateSiteImageAction,
    undefined
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const isCustom = url !== defaultUrl;

  async function handlePick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) {
        setUploadError(json.error ?? "Upload failed");
        return;
      }
      setUrl(json.url as string);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function handleReset() {
    setUrl(defaultUrl);
  }

  return (
    <form action={formAction} className="border border-[var(--rule)] p-5 grid md:grid-cols-[160px_1fr_auto] gap-5 items-start">
      <input type="hidden" name="slot" value={slot} />
      <input type="hidden" name="url" value={isCustom ? url : ""} />

      <div className="relative w-full aspect-[4/3] md:w-40 md:h-30 border border-[var(--rule-strong)] overflow-hidden bg-[var(--surface-raised)]">
        {url ? (
          <Image src={url} alt={label} fill sizes="160px" className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[10px] text-[var(--ink-muted)]">
            No image
          </div>
        )}
      </div>

      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)] mb-1">
          {label}
        </div>
        <div className="text-[11px] text-[var(--ink-muted)] truncate mb-2">
          {url}
          {!isCustom && <span className="ml-2 text-[var(--ink-faint)]">(default)</span>}
        </div>
        <input
          ref={inputRef}
          type="file"
          aria-label={`Upload image for ${label}`}
          accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
          onChange={handlePick}
          disabled={uploading || pending}
          className="text-[12px] text-[var(--ink-soft)] file:mr-3 file:py-1.5 file:px-3 file:border file:border-[var(--rule-strong)] file:bg-transparent file:text-[var(--ink)] file:text-[10px] file:tracking-[0.2em] file:uppercase file:font-semibold file:cursor-pointer hover:file:bg-[var(--surface-hover)] cursor-pointer disabled:opacity-50"
        />
        {uploading && <div className="mt-2 text-[11px] text-[var(--ink-soft)]">Uploading…</div>}
        {uploadError && <div className="mt-2 text-[11px] text-red-400">{uploadError}</div>}
        {state?.error && <div className="mt-2 text-[11px] text-red-400">{state.error}</div>}
        {state?.ok && !pending && <div className="mt-2 text-[11px] text-emerald-400">Saved.</div>}
      </div>

      <div className="flex md:flex-col gap-2 items-stretch">
        <button
          type="submit"
          disabled={pending || uploading}
          className="px-4 py-2 bg-[var(--invert)] text-[var(--on-invert)] text-[10px] font-semibold tracking-[0.22em] uppercase cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? "Saving…" : "Save"}
        </button>
        {isCustom && (
          <button
            type="button"
            onClick={handleReset}
            disabled={pending || uploading}
            className="px-4 py-2 border border-[var(--rule-strong)] text-[var(--ink-soft)] text-[10px] font-semibold tracking-[0.22em] uppercase cursor-pointer hover:bg-[var(--surface-hover)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        )}
      </div>
    </form>
  );
}
