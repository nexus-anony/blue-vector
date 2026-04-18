"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrandMark({
  brand,
}: {
  brand: { name: string; subtitle: string };
  onDark?: boolean;
}) {
  return (
    <Link href="/" className="flex items-center gap-3 group shrink-0">
      <Image
        src="/logo.png"
        alt={`${brand.name} logo`}
        width={32}
        height={32}
        preload
        className="h-8 w-8 object-contain"
      />
      <div className="leading-tight">
        <div className="text-[13px] tracking-[0.28em] font-bold text-[var(--ink)]">
          {brand.name}
        </div>
        <div className="text-[9px] tracking-[0.32em] uppercase mt-0.5 text-[var(--ink-muted)]">
          {brand.subtitle}
        </div>
      </div>
    </Link>
  );
}
