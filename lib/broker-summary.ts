import type { BrokerMetrics } from "@/lib/broker-reports";

export type SummarySection = { heading: string; bullets: string[] };

const words = (value: string) => value.split(/\s+/).filter(Boolean).length;

function trimToWords(text: string, max: number): string {
  const parts = text.split(/\s+/).filter(Boolean);
  return parts.length <= max ? text : `${parts.slice(0, max).join(" ")}…`;
}

function rupee(value: number | null | undefined): string | null {
  return value == null ? null : `₹${value.toLocaleString("en-IN")}`;
}

/** Executive summary, target 50–80 words and never above 100. */
export function executiveSummary(input: {
  broker: string;
  reportType: string;
  company: string;
  blurb: string;
  metrics: BrokerMetrics;
}): string {
  const { metrics } = input;
  const bits: string[] = [];
  bits.push(
    `${input.broker} published a ${input.reportType.toLowerCase()} on ${input.company}.`,
  );
  if (metrics.recommendation) bits.push(`Rating: ${metrics.recommendation}.`);
  if (metrics.target != null) {
    const upside =
      metrics.cmp != null && metrics.cmp > 0
        ? ((metrics.target - metrics.cmp) / metrics.cmp) * 100
        : null;
    bits.push(
      `Target ${rupee(metrics.target)}${upside != null ? ` (${upside >= 0 ? "+" : ""}${upside.toFixed(0)}% vs ${rupee(metrics.cmp)})` : ""}.`,
    );
  }
  if (input.blurb) bits.push(input.blurb);
  return trimToWords(bits.join(" "), 95);
}

/** Detailed summary, capped at 500 words, only using sections with content. */
export function detailedSummary(input: {
  blurb: string;
  highlights: string[];
  valuation: string[];
  watch: string[];
  metrics: BrokerMetrics;
}): SummarySection[] {
  const sections: SummarySection[] = [];
  const thesis = [input.blurb, input.highlights[0]].filter(Boolean);
  if (thesis.length) sections.push({ heading: "Investment thesis", bullets: thesis });

  const performance = input.highlights.slice(1, 4);
  if (performance.length) {
    sections.push({ heading: "Financial performance", bullets: performance });
  }

  if (input.metrics.target != null || input.metrics.recommendation) {
    const valuation = [
      ...(input.metrics.recommendation ? [`Broker rating: ${input.metrics.recommendation}.`] : []),
      ...(input.metrics.target != null
        ? [
            `Target price ${rupee(input.metrics.target)}${input.metrics.cmp != null ? ` against a market price of ${rupee(input.metrics.cmp)} at the report date` : ""}.`,
          ]
        : []),
      ...input.valuation,
    ];
    sections.push({ heading: "Valuation", bullets: valuation });
  }

  if (input.watch.length) {
    sections.push({ heading: "Risks and concerns", bullets: input.watch });
  }

  const takeaways = input.highlights.slice(-1);
  if (takeaways.length) {
    sections.push({ heading: "Key takeaways", bullets: takeaways });
  }

  let budget = 480;
  const capped: SummarySection[] = [];
  for (const section of sections) {
    const bullets: string[] = [];
    for (const bullet of section.bullets) {
      const count = words(bullet);
      if (budget - count < 0) break;
      bullets.push(bullet);
      budget -= count;
    }
    if (bullets.length) capped.push({ heading: section.heading, bullets });
  }
  return capped;
}
