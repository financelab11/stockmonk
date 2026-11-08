import { NAV_LINKS } from "@/lib/constants";

export function MainNav() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
        >
          {link.label}
        </a>
      ))}
      <div className="group relative">
        <button
          type="button"
          className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
          aria-haspopup="true"
        >
          More
        </button>
        <div className="invisible absolute left-0 top-full z-50 w-52 translate-y-1 rounded-xl border border-line bg-surface p-1.5 opacity-0 shadow-float transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          {[
            { href: "/framework", label: "Framework" },
            { href: "/watchlist", label: "Watchlist" },
            { href: "/about", label: "About" },
            { href: "/editorial-guidelines", label: "Editorial guidelines" },
            { href: "/data-sources", label: "Data sources" },
            { href: "/discover#pro", label: "Stockmonk Pro" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-[13px] font-medium text-ink-soft hover:bg-paper-deep hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
