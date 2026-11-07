import { Check, Lock } from "lucide-react";
import { formatPrice, PRICING } from "@/config/pricing";

export function PricingCard() {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-line bg-paper-deep px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
              Demo plan
            </p>
            <h3 className="display mt-1 text-2xl tracking-[-0.02em] text-ink">
              {PRICING.planName}
            </h3>
          </div>
          <div className="text-right">
            <p className="tabular text-2xl font-semibold text-ink">
              {formatPrice(PRICING.monthlyPrice)}
              <span className="text-[12px] font-normal text-muted">/month</span>
            </p>
            <p className="text-[10px] text-muted">
              or {formatPrice(PRICING.annualPrice)}/year
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <ul className="space-y-2">
          {PRICING.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-2 text-[12px] leading-snug text-ink-soft">
              <Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-positive" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-5 space-y-2.5" aria-describedby="demo-checkout-note">
          <label className="block">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="h-10 w-full rounded-lg border border-line bg-surface px-3 text-[12px] text-ink outline-none placeholder:text-faint focus:border-brand"
            />
          </label>
          <div className="rounded-lg border border-dashed border-line bg-paper-deep px-3 py-2.5">
            <div className="flex items-center justify-between text-[11px] text-muted">
              <span className="flex items-center gap-1.5">
                <Lock aria-hidden="true" className="size-3.5" />
                Card fields are disabled in this demo
              </span>
              <span className="font-mono">•••• 4242</span>
            </div>
          </div>
          <button type="button" disabled className="btn btn-brand w-full disabled:cursor-not-allowed disabled:opacity-70">
            Demo checkout disabled
          </button>
          <p id="demo-checkout-note" className="text-center text-[10px] leading-relaxed text-muted">
            {PRICING.checkoutIsDemo
              ? "Mock checkout — no payment is processed, no card data is stored, and no subscription is created."
              : null}
          </p>
        </div>
      </div>
    </div>
  );
}
