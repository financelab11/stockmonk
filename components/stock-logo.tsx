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

function hash(value: string): number {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) >>> 0;
  }
  return result;
}

/**
 * Shared logo component. It has no client-only code, so server components
 * render it on the server and client components bundle the same small markup.
 */
export function StockLogo({
  ticker,
  size = 40,
  className = "",
  priority = false,
  hideLogo = false,
}: {
  ticker: string;
  size?: number;
  className?: string;
  priority?: boolean;
  hideLogo?: boolean;
}) {
  const color = PALETTE[hash(ticker) % PALETTE.length];
  const initials = ticker.replace(/[^A-Z0-9]/g, "").slice(0, 2);

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center font-semibold ${color}`}
        style={{ fontSize: Math.max(10, size * 0.32) }}
      >
        {initials}
      </span>
      {!hideLogo && (
        <img
          src={`/logos/${ticker}.png`}
          alt=""
          width={size}
          height={size}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="relative size-full bg-white object-contain p-[16%]"
        />
      )}
    </span>
  );
}
