import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MarketIntro({
  eyebrow,
  title,
  description,
  meta,
  primaryLabel = "Browse company research",
}: {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  primaryLabel?: string;
}) {
  return (
    <>
      <section className="hero-indigo relative overflow-hidden text-white">
        <div className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-[#8b3dff]/30 blur-3xl" />
        <div className="container-page relative py-9 lg:py-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
            {eyebrow}
          </p>
          <h1 className="display mt-2 max-w-2xl text-[34px] leading-[1.04] tracking-[-0.03em] sm:text-[46px]">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/70">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#directory" className="btn btn-brand">
              {primaryLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <Link
              prefetch={false}
              href="/framework"
              className="btn border border-white/25 text-white hover:bg-white/10"
            >
              Read the methodology
            </Link>
          </div>
          <p className="mt-3 text-[10.5px] text-white/50">{meta}</p>
        </div>
      </section>
    </>
  );
}
