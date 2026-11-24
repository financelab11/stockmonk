import { getLatestDataDate } from "@/lib/data";
import { DISCLAIMER, FOOTER_COLUMNS, SITE } from "@/lib/constants";
import { formatDate } from "@/lib/format";

export function SiteFooter() {
  const asOf = getLatestDataDate();

  return (
    <footer className="mt-20 bg-brand-deep text-white">
      <div className="container-page pt-12 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center gap-2.5 text-white" style={{ color: "#ffffff" }} aria-label="Stockmonk home">
              <img
                src="/brand/logo-mark.webp"
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="size-10 rounded-[11px] ring-1 ring-white/15"
              />
              <span className="display text-2xl tracking-[-0.03em]">Stockmonk</span>
            </a>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/65">
              Equity research built from filings and financial statements, with
              the sources shown next to the numbers.
            </p>
            <p className="mt-5 text-[11px] text-white/65">
              Installable PWA · Works offline for visited pages
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/65">
                {column.title}
              </p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white transition-colors hover:text-white/80"
                      style={{ color: "#ffffff" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/12 bg-white/[0.04] p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/65">
            Important disclaimer
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/70">{DISCLAIMER}</p>
          <p className="mt-2 text-[11px] leading-relaxed text-white/65">
            Market data is delayed and may not reflect the current price. Nothing
            on this site is a solicitation or an offer to buy or sell any
            security.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-5 text-[11px] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. Built for education.
          </p>
          <p>
            Market prices as of {asOf ? formatDate(asOf) : "the latest ingestion"} ·{" "}
            <a href="/data-sources" className="text-white underline underline-offset-2 hover:text-white/80" style={{ color: "#ffffff" }}>
              Sources &amp; methodology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
