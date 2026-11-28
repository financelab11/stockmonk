"use client";

import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

const MORE_LINKS = [
  { href: "/framework", label: "Research methodology" },
  { href: "/about", label: "About" },
  { href: "/editorial-guidelines", label: "Editorial guidelines" },
  { href: "/data-sources", label: "Data sources" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
      {NAV_LINKS.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <a
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`relative whitespace-nowrap px-3 py-2 text-[12.5px] font-semibold transition-colors ${
              active ? "text-graphite" : "text-steel hover:text-graphite"
            }`}
          >
            {link.label}
            {active && (
              <span
                aria-hidden="true"
                className="absolute inset-x-3 -bottom-[19px] h-0.5 rounded-full bg-accent"
              />
            )}
          </a>
        );
      })}
      <div className="group relative">
        <button
          type="button"
          className="whitespace-nowrap px-3 py-2 text-[12.5px] font-semibold text-steel transition-colors hover:text-graphite"
          aria-haspopup="true"
        >
          More
        </button>
        <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 rounded-lg border border-hairline bg-warm p-1.5 opacity-0 shadow-float transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          {MORE_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-[12px] font-medium text-steel hover:bg-canvas hover:text-graphite"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
