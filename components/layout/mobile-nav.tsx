"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Briefcase,
  Compass,
  Database,
  FileText,
  Info,
  Menu,
  SlidersHorizontal,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const ITEMS = [
  { href: "/discover", label: "Discover", icon: Compass },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/screener", label: "Screener", icon: SlidersHorizontal },
] as const;

const MORE_LINKS = [
  { href: "/watchlist", label: "Watchlist", icon: Star },
  { href: "/framework", label: "Research methodology", icon: BookOpen },
  {
    href: "/editorial-guidelines",
    label: "Editorial guidelines",
    icon: FileText,
  },
  { href: "/data-sources", label: "Data sources", icon: Database },
  { href: "/about", label: "About Stockmonk", icon: Info },
  { href: "/discover#pro", label: "Stockmonk Pro", icon: Sparkles },
] as const;

const MORE_PATHS = MORE_LINKS.filter((link) => !link.href.includes("#")).map(
  (link) => link.href,
);

export function MobileNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = moreRef.current?.querySelector<HTMLAnchorElement>("a");
    first?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [moreOpen]);

  const moreActive = MORE_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  return (
    <>
      {moreOpen && (
        <button
          type="button"
          aria-label="Close more navigation"
          onClick={() => setMoreOpen(false)}
          className="fixed inset-0 z-40 bg-night/35 lg:hidden"
        />
      )}

      {moreOpen && (
        <div
          ref={moreRef}
          className="fixed inset-x-0 bottom-[calc(56px+env(safe-area-inset-bottom))] z-50 mx-2 rounded-xl border border-hairline bg-warm p-2 shadow-float lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="More navigation"
        >
          <div className="flex items-center justify-between px-2 py-1">
            <p className="text-[11px] font-semibold text-steel">More</p>
            <button
              type="button"
              onClick={() => setMoreOpen(false)}
              aria-label="Close more navigation"
              className="rounded-full border border-line p-1 text-muted"
            >
              <X aria-hidden="true" className="size-3.5" />
            </button>
          </div>
          <nav aria-label="More" className="mt-1">
            <ul className="grid grid-cols-1 gap-0.5">
              {MORE_LINKS.map((link) => {
                const Icon = link.icon;
                const active =
                  !link.href.includes("#") && pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-[12px] font-semibold ${
                        active
                          ? "bg-brand-soft text-brand-deep"
                          : "text-ink-soft hover:bg-paper-deep"
                      }`}
                    >
                      <Icon aria-hidden="true" className="size-4" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      <nav
        aria-label="Mobile"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-warm pb-[env(safe-area-inset-bottom)] lg:hidden"
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
                  active ? "text-brand" : "text-muted hover:text-ink"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className={`size-[18px] ${active ? "stroke-[2.4]" : ""}`}
                />
                {item.label}
              </a>
            );
          })}
          <button
            type="button"
            onClick={() => setMoreOpen((current) => !current)}
            aria-expanded={moreOpen}
            aria-haspopup="dialog"
            className={`flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-semibold ${
              moreActive || moreOpen
                ? "text-brand"
                : "text-muted hover:text-ink"
            }`}
          >
            <Menu
              aria-hidden="true"
              className={`size-[18px] ${moreActive || moreOpen ? "stroke-[2.4]" : ""}`}
            />
            More
          </button>
        </div>
      </nav>
    </>
  );
}
