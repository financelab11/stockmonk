const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const compactTwo = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 2,
});

const decimal = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

const integer = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const croreWhole = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const croreDecimal = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 1 });

export function formatCompactCurrency(
  value: number | null | undefined,
  currency = "USD",
): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  if (currency === "INR") {
    // Indian readers expect crore, not billions: ₹7,822 Cr rather than ₹78.2B.
    const crore = abs / 10_000_000;
    if (crore >= 100) return `${sign}₹${croreWhole.format(crore)} Cr`;
    if (crore >= 1) return `${sign}₹${croreDecimal.format(crore)} Cr`;
    const lakh = abs / 100_000;
    if (lakh >= 1) return `${sign}₹${croreDecimal.format(lakh)} L`;
    if (abs >= 1_000) return `${sign}₹${compact.format(abs / 1_000)}K`;
    return `${sign}₹${decimal.format(abs)}`;
  }
  const prefix = currency === "USD" ? "$" : `${currency} `;
  if (abs >= 1_000_000_000_000) return `${sign}${prefix}${compactTwo.format(abs / 1_000_000_000_000)}T`;
  if (abs >= 1_000_000_000) return `${sign}${prefix}${compact.format(abs / 1_000_000_000)}B`;
  if (abs >= 1_000_000) return `${sign}${prefix}${compact.format(abs / 1_000_000)}M`;
  if (abs >= 1_000) return `${sign}${prefix}${compact.format(abs / 1_000)}K`;
  return `${sign}${prefix}${decimal.format(abs)}`;
}

export function formatCurrency(
  value: number | null | undefined,
  digits = 2,
  currency = "USD",
): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

export function formatNumber(value: number | null | undefined, digits = 0): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export function formatPercent(
  value: number | null | undefined,
  digits = 1,
  alreadyPercent = false,
): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  const pct = alreadyPercent ? value : value * 100;
  return `${pct >= 0 ? "" : "-"}${Math.abs(pct).toFixed(digits)}%`;
}

export function formatSignedPercent(
  value: number | null | undefined,
  digits = 1,
): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  const pct = value * 100;
  return `${pct >= 0 ? "+" : ""}${pct.toFixed(digits)}%`;
}

export function formatMultiple(value: number | null | undefined, suffix = "x"): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  return `${value.toFixed(1)}${suffix}`;
}

/** 72 -> "72nd", 51 -> "51st", 93 -> "93rd", 11 -> "11th". */
export function formatOrdinal(value: number | null | undefined): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  const rounded = Math.round(value);
  const mod100 = Math.abs(rounded) % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${rounded}th`;
  switch (Math.abs(rounded) % 10) {
    case 1:
      return `${rounded}st`;
    case 2:
      return `${rounded}nd`;
    case 3:
      return `${rounded}rd`;
    default:
      return `${rounded}th`;
  }
}

export function formatDate(value: string | null | undefined): string {
  if (!value) return "n/a";
  const date = new Date(`${value.slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatMonthYear(value: string | null | undefined): string {
  if (!value) return "n/a";
  const date = new Date(`${value.slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatFiscalQuarter(period: string, fyear: number): string {
  return `${period} FY${String(fyear).slice(-2)}`;
}

export function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return `${integer.format(count)} ${count === 1 ? singular : plural}`;
}

export function truncate(value: string, max = 140): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trimEnd()}…`;
}

export function titleCase(value: string): string {
  return value
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function humanizeKey(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function classNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
