import Link from "next/link";

export function TabNav({
  items,
  active,
  className = "",
}: {
  items: Array<{ href: string; label: string; count?: number }>;
  active: string;
  className?: string;
}) {
  return (
    <nav
      aria-label="Section tabs"
      className={`scrollbar-none flex gap-6 overflow-x-auto border-b border-line ${className}`}
    >
      {items.map((item) => {
        const isActive = item.href === active;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`tab ${isActive ? "tab-active" : ""}`}
          >
            {item.label}
            {item.count != null && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  isActive ? "bg-paper-deep text-ink" : "bg-paper-deep text-muted"
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
