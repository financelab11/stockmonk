import Image from "next/image";
import { logoUrl } from "@/lib/logos";

function initials(name: string, ticker: string): string {
  const words = name
    .split(/[\s.&,-]+/)
    .filter((word) => /[a-z0-9]/i.test(word));
  const letters = words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return letters || ticker.slice(0, 2).toUpperCase();
}

export function CompanyLogo({
  ticker,
  name,
}: {
  ticker: string;
  name: string;
}) {
  const url = logoUrl(ticker);

  if (url) {
    return (
      <span
        data-company-logo="image"
        className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white sm:size-14"
      >
        <Image
          src={url}
          alt=""
          width={56}
          height={56}
          unoptimized
          loading="eager"
          className="size-full object-contain p-1"
        />
      </span>
    );
  }

  return (
    <span
      data-company-logo="monogram"
      aria-hidden="true"
      className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-line bg-brand-soft text-[15px] font-semibold tracking-tight text-brand-deep sm:size-14"
    >
      {initials(name, ticker)}
    </span>
  );
}
