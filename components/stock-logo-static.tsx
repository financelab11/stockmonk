import fs from "node:fs";
import path from "node:path";
import { logoUrl } from "@/lib/logos";

const PALETTE = [
  "bg-[#0b6b53] text-white",
  "bg-[#0b1220] text-white",
  "bg-[#7c3aed] text-white",
  "bg-[#0e7490] text-white",
  "bg-[#b45309] text-white",
  "bg-[#be123c] text-white",
  "bg-[#1d4ed8] text-white",
  "bg-[#065f46] text-white",
];

const legacyLogos = new Map<string, string | null>();

/** US research pages keep their logos directly in public/logos. */
function resolveLegacyLogo(ticker: string): string | null {
  if (legacyLogos.has(ticker)) return legacyLogos.get(ticker) ?? null;
  const pngPath = path.join(process.cwd(), "public", "logos", `${ticker}.png`);
  const svgPath = path.join(process.cwd(), "public", "logos", `${ticker}.svg`);
  const file = fs.existsSync(pngPath)
    ? `${ticker}.png`
    : fs.existsSync(svgPath)
      ? `${ticker}.svg`
      : null;
  legacyLogos.set(ticker, file);
  return file;
}

function hash(value: string): number {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) >>> 0;
  }
  return result;
}

/** Server-rendered logo for server components. Client components use StockLogo. */
export function StockLogoStatic({
  ticker,
  size = 40,
  className = "",
  priority = false,
}: {
  ticker: string;
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  const indiaLogo = logoUrl(ticker);
  const legacyLogo = indiaLogo ? null : resolveLegacyLogo(ticker);
  const src = indiaLogo ?? (legacyLogo ? `/logos/${legacyLogo}` : null);
  const color = PALETTE[hash(ticker) % PALETTE.length];
  const initials = ticker.replace(/[^A-Z0-9]/g, "").slice(0, 2);

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {src ? (
        <img
          src={src}
          alt=""
          width={size}
          height={size}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="size-full object-contain p-[10%]"
        />
      ) : (
        <span
          className={`flex size-full items-center justify-center font-semibold ${color}`}
          style={{ fontSize: Math.max(10, size * 0.32) }}
        >
          {initials}
        </span>
      )}
    </span>
  );
}
