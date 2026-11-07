import {
  Cloud,
  Cpu,
  CreditCard,
  Factory,
  Flame,
  Globe2,
  HeartPulse,
  Landmark,
  Monitor,
  ShieldCheck,
  ShoppingBasket,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  cpu: Cpu,
  cloud: Cloud,
  globe: Globe2,
  device: Monitor,
  bolt: Zap,
  bank: Landmark,
  heart: HeartPulse,
  flame: Flame,
  basket: ShoppingBasket,
  factory: Factory,
  shield: ShieldCheck,
  card: CreditCard,
};

export function SectorIcon({
  name,
  className = "size-4",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Globe2;
  return <Icon aria-hidden="true" className={className} />;
}
