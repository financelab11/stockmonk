"""Extract the SEC companyfacts JSON files needed by the score universe.

The SEC publishes one large companyfacts.zip. Downloading it once and
extracting only the CIKs we use is much faster than thousands of individual
companyfacts requests.

Usage:
  python3 scripts/extract-companyfacts.py
"""

from __future__ import annotations

import json
import os
import re
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ZIP_PATH = ROOT / "data" / "raw" / "companyfacts.zip"
SEC_MAP = ROOT / "data" / "raw" / "sec" / "company_tickers.json"
SCORE_UNIVERSE = ROOT / "config" / "score-universe.json"
STOCKS = ROOT / "public" / "data" / "stocks.json"
OUT_DIR = ROOT / "data" / "raw" / "sec"

ALIASES = {
    "BRK.A": "BRK-A",
    "BRK.B": "BRK-B",
    "CIG.C": "CIG-C",
    "GEF.B": "GEF-B",
    "LEN.B": "LEN-B",
    "MKC.V": "MKC-V",
    "MOG.B": "MOG-B",
    "UHAL.B": "UHAL-B",
    "PSTG": "PSTG",
}


def read_tickers() -> set[str]:
    tickers: set[str] = set()
    if SCORE_UNIVERSE.exists():
        for row in json.loads(SCORE_UNIVERSE.read_text(encoding="utf-8")):
            if row.get("ticker"):
                tickers.add(str(row["ticker"]).upper())
    if STOCKS.exists():
        for row in json.loads(STOCKS.read_text(encoding="utf-8")):
            if row.get("ticker"):
                tickers.add(str(row["ticker"]).upper())
    return tickers


def main() -> int:
    if not ZIP_PATH.exists():
        print(f"Missing {ZIP_PATH}; download companyfacts.zip first", file=sys.stderr)
        return 1
    if not SEC_MAP.exists():
        print(f"Missing {SEC_MAP}", file=sys.stderr)
        return 1

    sec = json.loads(SEC_MAP.read_text(encoding="utf-8"))
    by_ticker = {
        str(row["ticker"]).upper(): int(row["cik_str"])
        for row in sec.values()
    }
    tickers = read_tickers()
    ciks: set[int] = set()
    for ticker in tickers:
        cik = by_ticker.get(ALIASES.get(ticker, ticker))
        if cik:
            ciks.add(cik)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    extracted = 0
    missing = 0

    with zipfile.ZipFile(ZIP_PATH) as archive:
        wanted = {f"CIK{cik:010d}.json" for cik in ciks}
        for name in archive.namelist():
            if name not in wanted:
                continue
            cik = re.search(r"CIK(\d{10})", name)
            if not cik:
                continue
            target = OUT_DIR / f"companyfacts-{cik.group(1)}.json"
            with archive.open(name) as source, target.open("wb") as destination:
                while True:
                    chunk = source.read(1024 * 1024)
                    if not chunk:
                        break
                    destination.write(chunk)
            extracted += 1
            if extracted % 250 == 0:
                print(f"extracted {extracted}")
        missing = len(wanted) - extracted

    print(
        f"Extracted {extracted} companyfacts files for {len(ciks)} CIKs "
        f"({missing} not present in the archive)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
