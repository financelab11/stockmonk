import {
  BadgeCheck,
  Boxes,
  Gauge,
  Layers,
  Rocket,
  Scale,
  Shield,
  Sigma,
  Sparkles,
  Sprout,
  Target,
  TrendingUp,
} from "lucide-react";
import type { PortfolioPrimaryCategory } from "@/lib/portfolios/types";

const STYLES: Record<
  PortfolioPrimaryCategory,
  { icon: typeof Sigma; className: string }
> = {
  Quantitative: { icon: Sigma, className: "bg-brand-soft text-brand" },
  Thematic: { icon: Sparkles, className: "bg-coral-soft text-coral-deep" },
  Sector: { icon: Layers, className: "bg-paper-deep text-brand-deep" },
  Fundamental: { icon: BadgeCheck, className: "bg-positive-soft text-positive" },
  Technical: { icon: TrendingUp, className: "bg-brand-soft text-brand" },
  "Single-Factor": { icon: Target, className: "bg-amber-soft text-amber" },
  "Multi-Factor": { icon: Boxes, className: "bg-paper-deep text-ink-soft" },
  Growth: { icon: Rocket, className: "bg-coral-soft text-coral-deep" },
  Value: { icon: Scale, className: "bg-positive-soft text-positive" },
  "Quality & Dividend": {
    icon: Gauge,
    className: "bg-brand-soft text-brand-deep",
  },
  Defensive: { icon: Shield, className: "bg-paper-deep text-ink-soft" },
  "Small & Mid Cap": { icon: Sprout, className: "bg-positive-soft text-positive" },
};

export function PortfolioLogo({
  slug,
  category,
  size = 46,
  className = "",
  priority = false,
}: {
  slug: string;
  category: PortfolioPrimaryCategory;
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  const style = STYLES[category] ?? STYLES.Quantitative;
  const Icon = style.icon;
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[22%] border border-line ${style.className} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Icon
        style={{ width: size * 0.46, height: size * 0.46 }}
        strokeWidth={1.8}
      />
      <img
        src={`/portfolio-logos/${slug}.svg`}
        alt=""
        width={size}
        height={size}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
    </span>
  );
}
