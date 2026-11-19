"use client";

import { usePathname } from "next/navigation";
import { Compass, Menu, SlidersHorizontal, Star } from "lucide-react";

const ITEMS = [
  { href: "/discover", label: "Discover", icon: Compass },
  { href: "/screener", label: "Screener", icon: SlidersHorizontal },
  { href: "/watchlist", label: "Watchlist", icon: Star },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <div className="grid grid-cols-4">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-semibold ${
                active ? "text-brand" : "text-muted hover:text-brand"
              }`}
            >
              <Icon aria-hidden="true" className="size-[19px]" />
              {item.label}
            </a>
          );
        })}
        <details className="group relative">
          <summary className="flex min-h-14 cursor-pointer list-none flex-col items-center justify-center gap-1 text-[10px] font-semibold text-muted marker:content-none">
            <Menu aria-hidden="true" className="size-[19px]" />
            More
          </summary>
          <div className="absolute bottom-full right-2 mb-2 w-64 rounded-2xl border border-line bg-surface p-3 shadow-float">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-faint">
              More
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { href: "/india", label: "India stocks" },
                { href: "/gcc", label: "GCC stocks" },
                { href: "/tools/growth-ranker", label: "Growth ranker" },
                { href: "/discover/all-stocks", label: "All US stocks" },
                { href: "/india/all-stocks", label: "All India stocks" },
                { href: "/framework", label: "Methodology" },
                { href: "/about", label: "About" },
                { href: "/editorial-guidelines", label: "Guidelines" },
                { href: "/data-sources", label: "Data sources" },
                { href: "/discover#pro", label: "Stockmonk Pro" },
                { href: "/offline", label: "Offline" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-line bg-paper px-2.5 py-2 text-[11px] font-semibold text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
