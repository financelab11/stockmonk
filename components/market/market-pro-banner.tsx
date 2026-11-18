import Link from "next/link";

export function MarketProBanner({
  detail = "Longer reports, multi-factor comparisons, earnings summaries and watchlist alerts. Pro is a demo: no payment is taken and the checkout is disabled.",
}: {
  detail?: string;
}) {
  return (
    <section id="pro" className="container-page scroll-mt-24 py-8">
      <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="kicker">Stockmonk Pro</p>
          <h2 className="display mt-1 text-[22px] leading-snug tracking-[-0.02em] text-ink sm:text-[26px]">
            A deeper layer when a snapshot is not enough
          </h2>
          <p className="mt-1 max-w-2xl text-[12px] leading-relaxed text-muted">{detail}</p>
        </div>
        <Link
          prefetch={false}
          href="/framework"
          className="btn btn-primary h-10 min-h-0 shrink-0 px-4 text-[12px]"
        >
          See how the research is built
        </Link>
      </div>
    </section>
  );
}
