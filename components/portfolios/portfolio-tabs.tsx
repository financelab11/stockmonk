import Link from "next/link";

export function PortfolioTabs({
  slug,
  active,
  holdingsCount,
}: {
  slug: string;
  active: "overview" | "constituents";
  holdingsCount: number;
}) {
  const items = [
    {
      id: "overview" as const,
      href: `/portfolio/${slug}?tab=overview`,
      label: "Overview",
    },
    {
      id: "constituents" as const,
      href: `/portfolio/${slug}?tab=constituents`,
      label: "Constituents",
      count: holdingsCount,
    },
  ];

  return (
    <nav
      aria-label="Portfolio sections"
      className="scrollbar-none flex gap-6 overflow-x-auto border-b border-line"
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            className={`tab ${isActive ? "tab-active" : ""}`}
          >
            {item.label}
            {item.count != null && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  isActive
                    ? "bg-paper-deep text-ink"
                    : "bg-paper-deep text-muted"
                }`}
              >
                {item.count}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
