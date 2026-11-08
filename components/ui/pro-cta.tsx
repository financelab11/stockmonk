import { ArrowRight, BarChart3, BellRing, FileText, ListChecks } from "lucide-react";
import { formatPrice, PRICING } from "@/config/pricing";

const BENEFITS = [
  { icon: FileText, label: "Full company research reports" },
  { icon: BarChart3, label: "Multi-factor rankings and screens" },
  { icon: BellRing, label: "Data-change alerts on your watchlist" },
  { icon: ListChecks, label: "Earnings summaries and estimate trackers" },
];

export function ProCTA({ context = "article" }: { context?: "article" | "page" }) {
  return (
    <section
      aria-labelledby="pro-cta-title"
      className="hero-indigo relative overflow-hidden rounded-2xl px-5 py-8 text-white sm:px-8 sm:py-10"
    >
      <div className="pointer-events-none absolute -right-10 -top-16 size-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 size-56 rounded-full bg-[#8b3dff]/30 blur-2xl" />
      <div className="relative">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
          Stockmonk Pro
        </p>
        <h2
          id="pro-cta-title"
          className="display mt-2 max-w-xl text-[28px] leading-[1.1] tracking-[-0.02em] sm:text-[34px]"
        >
          {context === "article"
            ? "Enjoyed this research report? Then you will love Stockmonk Pro."
            : "Go deeper with Stockmonk Pro."}
        </h2>
        <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-white/70">
          Longer reports, peer screens and watchlist alerts for new filings and
          estimate changes. The checkout is a demo: no payment is taken.
        </p>
        <ul className="mt-5 grid gap-2 text-[12px] text-white/80 sm:grid-cols-2">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <li key={benefit.label} className="flex items-center gap-2">
                <Icon aria-hidden="true" className="size-4 text-[#ffb28f]" />
                {benefit.label}
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="/discover#pro" className="btn btn-brand">
            See Pro — {formatPrice(PRICING.monthlyPrice)}/mo
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <span className="text-[11px] text-white/55">
            Mock checkout · no card required
          </span>
        </div>
      </div>
    </section>
  );
}
