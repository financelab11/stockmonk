import fs from "node:fs";
import readline from "node:readline";

export type CsvRow = Record<string, string>;

/** Split one line, honouring double quotes and doubled quote escapes. */
export function splitCsvLine(line: string, delimiter = ";"): string[] {
  const out: string[] = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (quoted) {
      if (char === '"') {
        if (line[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === delimiter) {
      out.push(field);
      field = "";
    } else {
      field += char;
    }
  }
  out.push(field);
  return out;
}

/** Stream a semicolon-separated SimFin CSV export as objects. */
export async function* readCsv(
  file: string,
  delimiter = ";",
): AsyncGenerator<CsvRow> {
  const stream = fs.createReadStream(file, { encoding: "utf8" });
  const lines = readline.createInterface({ input: stream, crlfDelay: Infinity });
  let header: string[] | null = null;
  for await (const rawLine of lines) {
    const line = header ? rawLine : rawLine.replace(/^\uFEFF/, "");
    if (!header) {
      header = splitCsvLine(line, delimiter);
      continue;
    }
    if (!line) continue;
    const values = splitCsvLine(line, delimiter);
    const row: CsvRow = {};
    for (let index = 0; index < header.length; index += 1) {
      row[header[index]] = values[index] ?? "";
    }
    yield row;
  }
}

export function csvNumber(value: string | undefined): number | null {
  if (value == null || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}
