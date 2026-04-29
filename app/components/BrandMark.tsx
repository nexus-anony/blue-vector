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
    <Link href="/" className="flex items-center gap-2.5 md:gap-3 group shrink-0">
      <Image
        src="/new-logo.png"
        alt={`${brand.name} logo`}
        width={48}
        height={48}
        preload
        className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 object-contain"
      />
      <div className="flex flex-col items-stretch font-[var(--font-hero)] leading-none">
        <div className="text-[14px] md:text-[16px] lg:text-[18px] tracking-normal font-extrabold text-[var(--ink)]">
          {brand.name}
        </div>
        <div className="mt-1 md:mt-1.5 text-[7px] md:text-[8px] lg:text-[8.5px] tracking-[0.18em] uppercase font-semibold text-[var(--ink)] text-center">
          {brand.subtitle}
        </div>
      </div>
    </Link>
  );
}
