import { inflateRawSync } from "node:zlib";
import { XMLParser } from "fast-xml-parser";
import { GROWTH_RANKER } from "@/config/growth-ranker";
import type { ParsedUpload, UploadMapping, UploadRow } from "./types";

const TICKER_KEYS = [
  "ticker",
  "symbol",
  "nse",
  "bse",
  "scrip",
  "code",
  "isin",
  "identifier",
  "ric",
];
const NAME_KEYS = ["company", "name", "company name", "security", "issuer"];
const EXCHANGE_KEYS = ["exchange", "market", "listing"];
const CAP_KEYS = ["market cap", "marketcap", "mcap", "capitalisation", "capitalization"];

function normaliseHeader(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
}

function findHeader(headers: string[], keys: string[]): string | null {
  const normalised = headers.map((header) => [header, normaliseHeader(header)] as const);
  for (const key of keys) {
    const exact = normalised.find(([, value]) => value === key);
    if (exact) return exact[0];
  }
  for (const key of keys) {
    const partial = normalised.find(([, value]) => value.includes(key));
    if (partial) return partial[0];
  }
  return null;
}

export function detectMapping(headers: string[]): UploadMapping {
  const ticker = findHeader(headers, TICKER_KEYS);
  const name = findHeader(headers, NAME_KEYS);
  return {
    ticker,
    name,
    exchange: findHeader(headers, EXCHANGE_KEYS),
    marketCap: findHeader(headers, CAP_KEYS),
  };
}

function looksLikeHeader(cells: string[]): boolean {
  const joined = normaliseHeader(cells.join(" "));
  return [...TICKER_KEYS, ...NAME_KEYS, ...CAP_KEYS].some((key) => joined.includes(key));
}

function parseDelimitedLine(line: string, delimiter: string): string[] {
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
      out.push(field.trim());
      field = "";
    } else {
      field += char;
    }
  }
  out.push(field.trim());
  return out;
}

function detectDelimiter(lines: string[]): string {
  const sample = lines.slice(0, 5).join("\n");
  const counts: Array<[string, number]> = [
    [",", (sample.match(/,/g) ?? []).length],
    [";", (sample.match(/;/g) ?? []).length],
    ["\t", (sample.match(/\t/g) ?? []).length],
  ];
  counts.sort((a, b) => b[1] - a[1]);
  return counts[0][1] > 0 ? counts[0][0] : ",";
}

function toRows(headers: string[], lines: string[], delimiter: string): UploadRow[] {
  const rows: UploadRow[] = [];
  for (const [index, line] of lines.entries()) {
    if (!line.trim()) continue;
    const cells = parseDelimitedLine(line, delimiter);
    if (cells.every((cell) => !cell)) continue;
    const values: Record<string, string> = {};
    headers.forEach((header, column) => {
      values[header] = cells[column] ?? "";
    });
    rows.push({ rowNumber: index + 1, values });
  }
  return rows;
}

export function parseDelimitedText(raw: string): ParsedUpload {
  const text = raw.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const nonEmpty = text.split("\n").filter((line) => line.trim().length > 0);
  if (!nonEmpty.length) {
    return {
      headers: [],
      rows: [],
      delimiter: ",",
      format: "text",
      mapping: { ticker: null, name: null, exchange: null, marketCap: null },
      truncated: false,
    };
  }

  // A single column of tickers (the common paste case) has no delimiter.
  const delimiter = detectDelimiter(nonEmpty);
  const firstCells = parseDelimitedLine(nonEmpty[0], delimiter);
  const firstNormalised = normaliseHeader(firstCells[0] ?? "");
  const singleTickerHeader =
    firstCells.length === 1 && TICKER_KEYS.includes(firstNormalised);
  const singleNameHeader =
    firstCells.length === 1 && NAME_KEYS.includes(firstNormalised);
  const hasHeader =
    (firstCells.length > 1 && looksLikeHeader(firstCells)) ||
    singleTickerHeader ||
    singleNameHeader;

  const headers = hasHeader
    ? firstCells.map((cell, index) => cell || `Column ${index + 1}`)
    : ["Ticker"];
  const dataLines = hasHeader ? nonEmpty.slice(1) : nonEmpty;

  const truncated = dataLines.length > GROWTH_RANKER.maxRows;
  const rows = toRows(headers, dataLines.slice(0, GROWTH_RANKER.maxRows), delimiter);

  return {
    headers,
    rows,
    delimiter,
    format: hasHeader ? "csv" : "text",
    mapping: hasHeader
      ? detectMapping(headers)
      : { ticker: "Ticker", name: "Ticker", exchange: null, marketCap: null },
    truncated,
  };
}

/* ------------------------------- XLSX ---------------------------------- */

type ZipEntry = {
  name: string;
  method: number;
  compressedSize: number;
  localOffset: number;
};

const SIG_EOCD = 0x06054b50;
const SIG_CENTRAL = 0x02014b50;
const SIG_LOCAL = 0x04034b50;

function readZipDirectory(buffer: Buffer): Map<string, ZipEntry> {
  let eocd = -1;
  const maxBack = Math.min(buffer.length, 66_000);
  for (let offset = buffer.length - 22; offset >= buffer.length - maxBack; offset -= 1) {
    if (buffer.readUInt32LE(offset) === SIG_EOCD) {
      eocd = offset;
      break;
    }
  }
  if (eocd < 0) throw new Error("Not a valid XLSX file (missing ZIP directory).");

  const entryCount = buffer.readUInt16LE(eocd + 10);
  let cursor = buffer.readUInt32LE(eocd + 16);
  const entries = new Map<string, ZipEntry>();

  for (let index = 0; index < entryCount; index += 1) {
    if (buffer.readUInt32LE(cursor) !== SIG_CENTRAL) break;
    const method = buffer.readUInt16LE(cursor + 10);
    const compressedSize = buffer.readUInt32LE(cursor + 20);
    const nameLength = buffer.readUInt16LE(cursor + 28);
    const extraLength = buffer.readUInt16LE(cursor + 30);
    const commentLength = buffer.readUInt16LE(cursor + 32);
    const localOffset = buffer.readUInt32LE(cursor + 42);
    const name = buffer.toString("utf8", cursor + 46, cursor + 46 + nameLength);
    entries.set(name, { name, method, compressedSize, localOffset });
    cursor += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

function readZipEntry(buffer: Buffer, entry: ZipEntry): Buffer {
  if (buffer.readUInt32LE(entry.localOffset) !== SIG_LOCAL) {
    throw new Error(`Corrupt XLSX entry: ${entry.name}`);
  }
  const nameLength = buffer.readUInt16LE(entry.localOffset + 26);
  const extraLength = buffer.readUInt16LE(entry.localOffset + 28);
  const start = entry.localOffset + 30 + nameLength + extraLength;
  const data = buffer.subarray(start, start + entry.compressedSize);
  if (entry.method === 0) return Buffer.from(data);
  if (entry.method !== 8) throw new Error(`Unsupported XLSX compression: ${entry.method}`);
  const inflated = inflateRawSync(data);
  if (inflated.length > 25_000_000) throw new Error("XLSX sheet is too large.");
  return inflated;
}

function columnIndex(reference: string): number {
  const letters = reference.replace(/[^A-Z]/gi, "").toUpperCase();
  let value = 0;
  for (const letter of letters) {
    value = value * 26 + (letter.charCodeAt(0) - 64);
  }
  return Math.max(0, value - 1);
}

type XmlNode = Record<string, unknown>;

function asArray(value: unknown): unknown[] {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function textOf(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (typeof value === "object" && "#text" in (value as XmlNode)) {
    return textOf((value as XmlNode)["#text"]);
  }
  return "";
}

function parseSharedStrings(xml: string | null): string[] {
  if (!xml) return [];
  const parser = new XMLParser({ ignoreAttributes: true, trimValues: false });
  const parsed = parser.parse(xml) as XmlNode;
  const sst = parsed.sst as XmlNode | undefined;
  return asArray(sst?.si).map((item) => {
    const node = item as XmlNode;
    if (Array.isArray(node.r)) {
      return node.r.map((run) => textOf((run as XmlNode).t)).join("");
    }
    return textOf(node.t);
  });
}

function sheetRows(xml: string, shared: string[]): string[][] {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    trimValues: false,
  });
  const parsed = parser.parse(xml) as XmlNode;
  const worksheet = parsed.worksheet as XmlNode | undefined;
  const sheetData = worksheet?.sheetData as XmlNode | undefined;
  const rows = asArray(sheetData?.row).map((rowNode) => {
    const row = rowNode as XmlNode;
    const cells = asArray(row.c).map((cellNode) => {
      const cell = cellNode as XmlNode;
      const type = cell["@_t"];
      const raw = textOf(cell.v);
      if (type === "s") {
        const index = Number(raw);
        return shared[index] ?? "";
      }
      if (type === "inlineStr") {
        const inline = cell.is as XmlNode | undefined;
        return textOf(inline?.t);
      }
      return raw;
    });
    const indexed: string[] = [];
    let width = 0;
    asArray(row.c).forEach((cellNode, cellIndex) => {
      const cell = cellNode as XmlNode;
      const ref = typeof cell["@_r"] === "string" ? cell["@_r"] : "";
      const column = ref ? columnIndex(ref) : cellIndex;
      indexed[column] = cells[cellIndex] ?? "";
      width = Math.max(width, column + 1);
    });
    return Array.from({ length: width }, (_, index) => indexed[index] ?? "");
  });
  return rows.filter((row) => row.some((cell) => cell.trim().length > 0));
}

export function parseXlsx(buffer: Buffer): ParsedUpload {
  const entries = readZipDirectory(buffer);
  const sheetName = [...entries.keys()]
    .filter((name) => /^xl\/worksheets\/sheet\d+\.xml$/.test(name))
    .sort((a, b) => {
      const aIndex = Number(a.match(/sheet(\d+)\.xml$/)?.[1] ?? 0);
      const bIndex = Number(b.match(/sheet(\d+)\.xml$/)?.[1] ?? 0);
      return aIndex - bIndex;
    })[0];
  if (!sheetName) throw new Error("No worksheet found in the XLSX file.");

  const shared = entries.has("xl/sharedStrings.xml")
    ? parseSharedStrings(readZipEntry(buffer, entries.get("xl/sharedStrings.xml")!).toString("utf8"))
    : [];
  const rows = sheetRows(readZipEntry(buffer, entries.get(sheetName)!).toString("utf8"), shared);
  if (!rows.length) {
    return {
      headers: [],
      rows: [],
      delimiter: ",",
      format: "xlsx",
      mapping: { ticker: null, name: null, exchange: null, marketCap: null },
      truncated: false,
    };
  }

  const headers = rows[0].map((cell, index) =>
    (cell || `Column ${index + 1}`).replace(/\s+/g, " ").trim(),
  );
  const dataRows = rows.slice(1);
  const truncated = dataRows.length > GROWTH_RANKER.maxRows;
  const uploadRows: UploadRow[] = dataRows
    .slice(0, GROWTH_RANKER.maxRows)
    .map((cells, index) => {
      const values: Record<string, string> = {};
      headers.forEach((header, column) => {
        values[header] = cells[column] ?? "";
      });
      return { rowNumber: index + 1, values };
    });

  return {
    headers,
    rows: uploadRows,
    delimiter: ",",
    format: "xlsx",
    mapping: detectMapping(headers),
    truncated,
  };
}
