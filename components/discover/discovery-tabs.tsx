import Link from "next/link";

export type DiscoveryTab = {
  id: string;
  href: string;
  label: string;
  count?: number;
  /** Kept for compatibility with older callers; no longer rendered. */
  icon?: string;
  /** Kept for compatibility with older callers; no longer rendered. */
  description?: string;
};

/**
 * Compact segmented navigation for the company views. The active state is an
 * underline, which keeps the directory itself visually dominant.
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
  return (
    <nav
      aria-label={label}
      className="scrollbar-none flex gap-4 overflow-x-auto border-b border-line sm:gap-6"
    >
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <Link
            key={item.id}
            href={item.href}
            prefetch={false}
            aria-current={isActive ? "page" : undefined}
            className={`relative shrink-0 pb-3 pt-1 text-[13px] font-semibold transition-colors ${
              isActive ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {item.label}
            {item.count != null && (
              <>
                {" "}
                <span className="tabular ml-0.5 hidden text-[11px] font-medium text-muted sm:inline">
                  {item.count}
                </span>
              </>
            )}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
