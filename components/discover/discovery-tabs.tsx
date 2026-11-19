import Link from "next/link";
import { BarChart3, Layers, ShieldCheck, Star, TrendingUp } from "lucide-react";

const ICONS = {
  star: Star,
  shield: ShieldCheck,
  layers: Layers,
  trending: TrendingUp,
  chart: BarChart3,
} as const;

export type DiscoveryTab = {
  id: string;
  href: string;
  label: string;
  icon: keyof typeof ICONS;
  count?: number;
  description?: string;
};

/**
 * Segmented navigation for the three company views. Links keep the existing
 * routes (and therefore stay crawlable and work without JavaScript).
 */
export function DiscoveryTabs({
  items,
  active,
  label = "Company views",
}: {
  items: DiscoveryTab[];
  active: string;
  label?: string;
}) {
  const current = items.find((item) => item.id === active);

  return (
    <div>
      <nav
        aria-label={label}
        className="scrollbar-none flex gap-1.5 overflow-x-auto rounded-xl border border-line bg-paper-deep p-1.5"
      >
        {items.map((item) => {
          const Icon = ICONS[item.icon];
          const isActive = item.id === active;

          return (
            <Link
              key={item.id}
              href={item.href}
              prefetch={false}
              aria-current={isActive ? "page" : undefined}
              className={`relative inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3 py-2 pb-2.5 text-[11.5px] font-semibold transition-colors duration-150 sm:flex-1 sm:justify-center sm:text-[12.5px] ${
                isActive
                  ? "bg-brand-deep text-white shadow-sm"
                  : "text-muted hover:bg-surface hover:text-ink"
              }`}
            >
              <Icon
                aria-hidden="true"
                className={`size-4 shrink-0 ${isActive ? "text-coral" : "text-faint"}`}
              />
              <span className="whitespace-nowrap">{item.label}</span>
              {item.count != null && (
                <span
                  className={`tabular rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                    isActive ? "bg-white/15 text-white" : "bg-surface text-muted"
                  }`}
                >
                  {item.count}
                </span>
              )}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-coral"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {current?.description && (
        <p className="mt-2.5 max-w-3xl text-[11.5px] leading-relaxed text-muted">
          {current.description}
        </p>
      )}
    </div>
  );
}
