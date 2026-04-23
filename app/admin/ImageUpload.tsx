"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ImageUpload({
  name,
  initialUrl,
  label,
}: {
  name: string;
  initialUrl?: string | null;
  label: string;
}) {
  const [url, setUrl] = useState<string | null>(initialUrl ?? null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handlePick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Upload failed");
        return;
      }
      setUrl(json.url as string);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function handleRemove() {
    setUrl(null);
    setError(null);
  }

  return (
    <div>
      <label className="block text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)] mb-2">
        {label}
      </label>

      <input type="hidden" name={name} value={url ?? ""} />

      <div className="flex items-start gap-4">
        {url ? (
          <div className="relative w-28 h-28 border border-[var(--rule-strong)] overflow-hidden shrink-0">
            <Image
              src={url}
              alt="Preview"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-28 h-28 border border-dashed border-[var(--rule-strong)] flex items-center justify-center text-[10px] text-[var(--ink-muted)] shrink-0">
            No image
          </div>
        )}

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
            onChange={handlePick}
            disabled={uploading}
            className="text-[12px] text-[var(--ink-soft)] file:mr-3 file:py-1.5 file:px-3 file:border file:border-[var(--rule-strong)] file:bg-transparent file:text-[var(--ink)] file:text-[10px] file:tracking-[0.2em] file:uppercase file:font-semibold file:cursor-pointer hover:file:bg-[var(--surface-hover)] cursor-pointer disabled:opacity-50"
          />
          <div className="flex items-center gap-3 text-[11px]">
            {uploading && (
              <span className="text-[var(--ink-soft)]">Uploading…</span>
            )}
            {url && !uploading && (
              <button
                type="button"
                onClick={handleRemove}
                className="text-red-400 hover:text-red-300 tracking-[0.2em] uppercase font-semibold text-[10px] cursor-pointer"
              >
                Remove
              </button>
            )}
            {url && (
              <span className="text-[var(--ink-muted)] truncate text-[10px]">
                {url}
              </span>
            )}
          </div>
          {error && <p className="text-[11px] text-red-400">{error}</p>}
          <p className="text-[10px] text-[var(--ink-muted)]">
            JPG / PNG / WebP / GIF / AVIF · max 5 MB
          </p>
        </div>
      </div>
    </div>
  );
}
