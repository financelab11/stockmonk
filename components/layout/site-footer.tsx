import { getLatestDataDate } from "@/lib/data-date";
import { DISCLAIMER, FOOTER_COLUMNS, SITE } from "@/lib/constants";
import { formatDate } from "@/lib/format";

export function SiteFooter() {
  const asOf = getLatestDataDate();

  return (
    <footer className="mt-16 bg-graphite text-white">
      <div className="container-page pb-[calc(5rem+env(safe-area-inset-bottom))] pt-10 lg:py-14">
        <div className="grid gap-9 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a
              href="/"
              className="flex items-center gap-2.5 text-white"
              aria-label="Stockmonk home"
            >
              <img
                src="/brand/logo-mark.webp"
                alt=""
                width={38}
                height={38}
                loading="lazy"
                className="size-9 rounded-[10px] ring-1 ring-white/15"
              />
              <span className="font-serif text-2xl tracking-[-0.03em]">
                Stockmonk
              </span>
            </a>
            <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-white/60">
              Equity research built from filings and financial statements, with
              the sources shown next to the numbers.
            </p>
            <p className="mt-4 text-[10.5px] text-white/50">
              Installable PWA <span aria-hidden="true">·</span> Works offline
              for visited pages
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-[10.5px] font-semibold text-white/50">
                {column.title}
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[12px] text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <p className="text-[10.5px] font-semibold text-white/60">
            Important disclaimer
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-white/65">
            {DISCLAIMER}
          </p>
          <p className="mt-1.5 text-[10.5px] leading-relaxed text-white/50">
            Market data is delayed and may not reflect the current price.
            Nothing on this site is a solicitation or an offer to buy or sell
            any security.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-[10.5px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. Built for education.
          </p>
          <p>
            Market prices as of{" "}
            {asOf ? formatDate(asOf) : "the latest ingestion"}{" "}
            <span aria-hidden="true">·</span>{" "}
            <a
              href="/data-sources"
              className="text-white/80 underline underline-offset-2 hover:text-white"
            >
              Sources &amp; methodology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
