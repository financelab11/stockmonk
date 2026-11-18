import { BROKER_LOGOS } from "@/config/broker-logos";

const PALETTE = [
  "bg-[#0f3d5c] text-white",
  "bg-[#5b2333] text-white",
  "bg-[#1f4d3a] text-white",
  "bg-[#4a3d6b] text-white",
  "bg-[#6b4a1f] text-white",
  "bg-[#22354a] text-white",
];

function hash(value: string): number {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) >>> 0;
  }
  return result;
}

/** Broker logo with an initials fallback; never borrows another broker's mark. */
export function BrokerLogo({
  id,
  name,
  size = 34,
  className = "",
}: {
  id: string;
  name: string;
  size?: number;
  className?: string;
}) {
  const file = BROKER_LOGOS[id as keyof typeof BROKER_LOGOS] ?? null;
  const color = PALETTE[hash(id) % PALETTE.length];
  const initials = name
    .replace(/[^A-Za-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-white ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
      title={name}
    >
      {file ? (
        <img
          src={`/brokers/${file}`}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          className="size-full object-contain p-[14%]"
        />
      ) : (
        <span
          className={`flex size-full items-center justify-center font-semibold ${color}`}
          style={{ fontSize: Math.max(9, size * 0.3) }}
        >
          {initials || "BR"}
        </span>
      )}
    </span>
  );
}
