import { ArrowRight } from "lucide-react";
import { TrackedLink } from "./tracked-link";
import { DISCLAIMER } from "@/lib/constants";

export function FinalCta() {
  return (
    <div className="overflow-hidden rounded-xl bg-graphite px-5 py-7 text-white sm:px-8 sm:py-9">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="font-serif text-[12px] text-white/55">
            Stockmonk research
          </p>
          <h2 className="mt-2 max-w-2xl font-serif text-[28px] leading-[1.08] tracking-[-0.025em] sm:text-[36px]">
            Your next investment idea starts here.
          </h2>
          <p className="mt-2 max-w-xl text-[12px] leading-relaxed text-white/65">
            Discover companies, analyse fundamentals and explore systematic
            strategies with a research process you can inspect.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <TrackedLink
              href="/portfolio"
              event="hero_primary_cta_clicked"
              eventProps={{ surface: "final_cta" }}
              className="inline-flex min-h-[2.5rem] items-center gap-1 rounded-md bg-white px-4 text-[12px] font-semibold text-graphite hover:bg-white/90"
            >
              Explore Stockmonk
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </TrackedLink>
            <TrackedLink
              href="/discover"
              event="hero_secondary_cta_clicked"
              eventProps={{ surface: "final_cta" }}
              className="inline-flex min-h-[2.5rem] items-center gap-1 rounded-md border border-white/20 px-4 text-[12px] font-semibold text-white hover:bg-white/5"
            >
              Discover companies
            </TrackedLink>
          </div>
        </div>
        <p className="max-w-md border-t border-white/15 pt-3 text-[10px] leading-relaxed text-white/45 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
          {DISCLAIMER} Market data is delayed and may not reflect the current
          price. Model-portfolio returns are simulated from current constituents
          and are not live investment returns.
        </p>
      </div>
    </div>
  );
}
