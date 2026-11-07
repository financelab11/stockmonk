/**
 * Demo pricing configuration. Checkout is intentionally a mock: no payment
 * processor is connected and no card data leaves the browser.
 */
export const PRICING = {
  planName: "Stockmonk Pro",
  monthlyPrice: 7.99,
  annualPrice: 79.99,
  currency: "USD",
  trialDays: 7,
  checkoutIsDemo: true,
  benefits: [
    "Full company research reports",
    "Multi-factor rankings across the coverage universe",
    "Earnings-call summaries within hours of the release",
    "Watchlist alerts for price and filing events",
    "Data-quality screens and CSV exports",
  ],
} as const;

export function formatPrice(value: number, currency = PRICING.currency): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}
