import { describe, expect, it } from "vitest";
import { findBroker, normalizeBrokerName, brokerInitials } from "@/config/brokers";
import { scoreMateriality } from "@/lib/materiality";
import { detailedSummary, executiveSummary } from "@/lib/broker-summary";

describe("broker registry", () => {
  it("normalises names and resolves aliases", () => {
    expect(normalizeBrokerName("Prabhudas Lilladher Pvt Ltd")).toBe("prabhudas lilladher pvt");
    expect(findBroker("Prabhudas Lilladher")?.id).toBe("prabhudas-lilladher");
    expect(findBroker("SBICAP Securities")?.id).toBe("sbi-securities");
    expect(findBroker("Axis Direct")?.id).toBe("axis-securities");
    expect(findBroker("Unknown Broker Ltd")).toBeNull();
    expect(brokerInitials("Prabhudas Lilladher")).toBe("PL");
  });
});

describe("materiality", () => {
  it("scores initiating coverage as high", () => {
    const result = scoreMateriality({
      reportType: "Initiating Coverage",
      headline: "Scaling the carbon materials value chain",
      target: 120,
      cmp: 100,
    });
    expect(result.label).toBe("High");
  });

  it("scores a routine result note as medium", () => {
    const result = scoreMateriality({
      reportType: "Result Update",
      headline: "Q2 FY27 Result Update",
      target: 105,
      cmp: 100,
    });
    expect(result.label).toBe("Medium");
  });

  it("raises materiality on a downgrade", () => {
    const base = scoreMateriality({
      reportType: "Stock Note",
      headline: "Company update",
    });
    const downgrade = scoreMateriality({
      reportType: "Stock Note",
      headline: "Downgrade to sell after profit warning",
    });
    expect(downgrade.score).toBeGreaterThan(base.score);
  });
});

describe("summary lengths", () => {
  it("keeps the executive summary under 100 words", () => {
    const text = executiveSummary({
      broker: "Prabhudas Lilladher",
      reportType: "Result Update",
      company: "Example Ltd",
      blurb:
        "Revenue grew 18% with EBITDA margin expanding 120 basis points. Management guided to a stronger second half on capacity additions and maintained its FY27 outlook.".repeat(3),
      metrics: { recommendation: "BUY", target: 120, cmp: 100, upside: 20 },
    });
    expect(text.split(/\s+/).length).toBeLessThanOrEqual(100);
  });

  it("keeps the detailed summary under 500 words", () => {
    const sections = detailedSummary({
      blurb: "A long investment thesis ".repeat(40),
      highlights: Array.from({ length: 6 }, () => "Revenue and profit grew with margins expanding ".repeat(6)),
      valuation: ["Target price implies upside based on 18x FY28 earnings"],
      watch: ["Raw material costs and customer concentration"],
      metrics: { recommendation: "BUY", target: 120, cmp: 100, upside: 20 },
    });
    const words = sections.reduce(
      (sum, section) => sum + section.bullets.join(" ").split(/\s+/).length,
      0,
    );
    expect(words).toBeLessThanOrEqual(500);
  });
});
