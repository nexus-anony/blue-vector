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
    <Link href="/" className="font-sans flex items-center gap-2.5 md:gap-3 group shrink-0">
      <Image
        src="/new-logo.png"
        alt={`${brand.name} logo`}
        width={48}
        height={48}
        preload
        className="h-11 w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
      />
      <div className="flex flex-col items-stretch font-hero leading-none">
        <div className="text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.06em] font-semibold text-[var(--ink)]">
          {brand.name}
        </div>
        <div className="mt-1 md:mt-1.5 text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.2em] [word-spacing:-0.25em] uppercase font-medium text-[var(--ink)] text-center">
          {brand.subtitle}
        </div>
      </div>
    </Link>
  );
}
