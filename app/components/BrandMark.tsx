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
    <Link href="/" className="flex items-center group shrink-0" aria-label={`${brand.name} — ${brand.subtitle}`}>
      <Image
        src="/new-logos/BLUE VECTOR logo03.png"
        alt={`${brand.name} — ${brand.subtitle}`}
        width={1920}
        height={1080}
        preload
        className="h-16 md:h-20 lg:h-24 w-auto object-contain object-left"
      />
    </Link>
  );
}
