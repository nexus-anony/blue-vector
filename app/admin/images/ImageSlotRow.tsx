"use client";

import { useActionState, useRef, useState } from "react";
import Image from "next/image";
import { updateSiteImageAction, type ImageActionState } from "./actions";

const BOTTOM_FADE_LEVELS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;
const DEFAULT_LEVEL = 100;

function fadeBackground(level: number): string {
  if (level <= 0) return "";
  if (level >= 100) {
    return "linear-gradient(to bottom, transparent 50%, var(--surface) 100%)";
  }
  return `linear-gradient(to bottom, transparent 50%, color-mix(in oklab, var(--surface) ${level}%, transparent) 100%)`;
}

export default function ImageSlotRow({
  slot,
  label,
  initialUrl,
  initialBottomFade,
  defaultUrl,
}: {
  slot: string;
  label: string;
  initialUrl: string;
  initialBottomFade: number;
  defaultUrl: string;
}) {
  const [url, setUrl] = useState<string>(initialUrl);
  const [bottomFade, setBottomFade] = useState<number>(initialBottomFade);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [state, formAction, pending] = useActionState<ImageActionState | undefined, FormData>(
    updateSiteImageAction,
    undefined
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const isCustomUrl = url !== defaultUrl;
  const isCustomFade = bottomFade !== DEFAULT_LEVEL;
  const isCustom = isCustomUrl || isCustomFade;

  const previewFadeBackground = fadeBackground(bottomFade);

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
    setBottomFade(DEFAULT_LEVEL);
  }

  return (
    <form action={formAction} className="border border-[var(--rule)] p-5 grid md:grid-cols-[160px_1fr_auto] gap-5 items-start">
      <input type="hidden" name="slot" value={slot} />
      <input type="hidden" name="url" value={isCustomUrl ? url : ""} />
      <input type="hidden" name="bottomFade" value={String(bottomFade)} />

      <div className="relative w-full aspect-[4/3] md:w-40 md:h-30 border border-[var(--rule-strong)] overflow-hidden bg-[var(--surface-raised)]">
        {url ? (
          <>
            <Image src={url} alt={label} fill sizes="160px" className="object-cover" />
            {previewFadeBackground && (
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: previewFadeBackground }}
              />
            )}
          </>
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
          {!isCustomUrl && <span className="ml-2 text-[var(--ink-faint)]">(default)</span>}
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <input
            ref={inputRef}
            type="file"
            aria-label={`Upload image for ${label}`}
            accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
            onChange={handlePick}
            disabled={uploading || pending}
            className="text-[12px] text-[var(--ink-soft)] file:mr-3 file:py-1.5 file:px-3 file:border file:border-[var(--rule-strong)] file:bg-transparent file:text-[var(--ink)] file:text-[10px] file:tracking-[0.2em] file:uppercase file:font-semibold file:cursor-pointer hover:file:bg-[var(--surface-hover)] cursor-pointer disabled:opacity-50"
          />
          <label className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--ink-soft)]">
            Bottom fade
            <select
              value={String(bottomFade)}
              onChange={(e) => setBottomFade(Number.parseInt(e.target.value, 10))}
              disabled={uploading || pending}
              className="bg-transparent border border-[var(--rule-strong)] text-[var(--ink)] text-[11px] tracking-normal normal-case font-normal px-2 py-1.5 cursor-pointer hover:bg-[var(--surface-hover)] disabled:opacity-50"
            >
              {BOTTOM_FADE_LEVELS.map((lvl) => (
                <option key={lvl} value={String(lvl)} className="bg-[var(--surface)] text-[var(--ink)]">
                  {lvl}%
                </option>
              ))}
            </select>
          </label>
        </div>
        {uploading && <div className="mt-1 text-[11px] text-[var(--ink-soft)]">Uploading…</div>}
        {uploadError && <div className="mt-1 text-[11px] text-red-400">{uploadError}</div>}
        {state?.error && <div className="mt-1 text-[11px] text-red-400">{state.error}</div>}
        {state?.ok && !pending && <div className="mt-1 text-[11px] text-emerald-400">Saved.</div>}
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
