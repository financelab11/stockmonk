import { z } from "zod";
import { GROWTH_RANKER } from "@/config/growth-ranker";
import type { ForecastInput, ProjectionMethod } from "./types";

const llmYearSchema = z.object({
  base: z.number().positive(),
  bear: z.number().positive(),
  bull: z.number().positive(),
});

const llmResponseSchema = z.object({
  projections: z.object({
    FY1: llmYearSchema,
    FY2: llmYearSchema,
    FY3: llmYearSchema,
  }),
  assumptions: z.array(z.string()).min(2).max(12),
  risks: z.array(z.string()).min(2).max(12),
  consensus_note: z.string().nullable(),
});

export type AnalystModelOutput = {
  projections: { base: number[]; bear: number[]; bull: number[] };
  assumptions: string[];
  risks: string[];
  note: string | null;
};

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

function endpoint(): string {
  const base = process.env[GROWTH_RANKER.llm.baseUrlEnv]!.replace(/\/+$/, "");
  return base.endsWith("/chat/completions") ? base : `${base}/chat/completions`;
}

function prompt(input: ForecastInput, method: ProjectionMethod): string {
  return JSON.stringify(
    {
      task:
        "Build a forward-only 3-year revenue forecast. Historical growth must not be an input, an anchor, or a weight. Use only forward evidence: consensus, capacity/capex, order book, new products, pricing, regulation, announced M&A and market growth.",
      method_hint: method,
      company: {
        ticker: input.ticker,
        name: input.name,
        sector: input.sector,
        base_year: input.baseYear,
      },
      segment_context: input.segments,
      consensus_forward_years: input.consensus,
      evidence_available: input.evidence.map((item) => ({
        kind: item.kind,
        title: item.title,
        date: item.date,
        available: item.available,
        note: item.note,
      })),
      output_contract: {
        projections: {
          FY1: { base: "number", bear: "number", bull: "number" },
          FY2: { base: "number", bear: "number", bull: "number" },
          FY3: { base: "number", bear: "number", bull: "number" },
        },
        assumptions: "string[] (2-12, each a forward driver with its evidence)",
        risks: "string[] (2-12)",
        consensus_note:
          "string|null — if consensus exists, explain any difference from it; never silently override it",
      },
      constraints: [
        "Base case must be bottom-up where segment data permits.",
        "Do not extrapolate reported historical revenue growth.",
        "No speculative M&A.",
        "All values are consolidated revenue in INR, same units as base_year.revenue.",
      ],
    },
    null,
    2,
  );
}

function parseJson(content: string): unknown {
  const trimmed = content.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  return JSON.parse(trimmed);
}

async function callModel(input: ForecastInput, method: ProjectionMethod): Promise<AnalystModelOutput> {
  const body = {
    model: process.env[GROWTH_RANKER.llm.modelEnv],
    temperature: 0.2,
    response_format: { type: "json_object" as const },
    messages: [
      {
        role: "system" as const,
        content:
          "You are a senior equity research analyst. You produce auditable, forward-looking revenue forecasts. You never use trailing growth as a forecasting input. You return only valid JSON matching the requested contract.",
      },
      { role: "user" as const, content: prompt(input, method) },
    ] satisfies ChatMessage[],
  };

  let lastError = "Unknown model error";
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), GROWTH_RANKER.llm.timeoutMs);
    try {
      const response = await fetch(endpoint(), {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${process.env[GROWTH_RANKER.llm.apiKeyEnv]}`,
        },
        body: JSON.stringify(
          attempt === 0
            ? body
            : {
                ...body,
                messages: [
                  ...body.messages,
                  {
                    role: "assistant" as const,
                    content: lastError,
                  },
                  {
                    role: "user" as const,
                    content: `The previous response was invalid: ${lastError}. Return only the JSON contract.`,
                  },
                ],
              },
        ),
        signal: controller.signal,
      });
      if (!response.ok) {
        lastError = `Model HTTP ${response.status}`;
        continue;
      }
      const payload = (await response.json()) as {
        choices?: Array<{ message?: { content?: unknown } }>;
      };
      const content = payload.choices?.[0]?.message?.content;
      if (typeof content !== "string") {
        lastError = "Empty model response";
        continue;
      }
      const parsed = llmResponseSchema.safeParse(parseJson(content));
      if (!parsed.success) {
        lastError = parsed.error.issues.map((issue) => issue.message).join("; ");
        continue;
      }
      const years = [parsed.data.projections.FY1, parsed.data.projections.FY2, parsed.data.projections.FY3];
      if (years.some((year) => year.bear > year.base || year.base > year.bull)) {
        lastError = "Require bear <= base <= bull for every year";
        continue;
      }
      return {
        projections: {
          base: years.map((year) => year.base),
          bear: years.map((year) => year.bear),
          bull: years.map((year) => year.bull),
        },
        assumptions: parsed.data.assumptions,
        risks: parsed.data.risks,
        note: parsed.data.consensus_note,
      };
    } catch (error) {
      lastError = error instanceof Error ? error.message : "Model call failed";
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error(lastError);
}

export async function runAnalystModel(
  input: ForecastInput,
  method: ProjectionMethod,
): Promise<AnalystModelOutput> {
  return callModel(input, method);
}

export function llmIsConfigured(): boolean {
  return Boolean(
    process.env[GROWTH_RANKER.llm.baseUrlEnv] &&
      process.env[GROWTH_RANKER.llm.apiKeyEnv] &&
      process.env[GROWTH_RANKER.llm.modelEnv],
  );
}
