import { StockLogo } from "@/components/stock-logo";

export function LogoStack({
  tickers,
  size = 30,
}: {
  tickers: string[];
  size?: number;
}) {
  return (
    <div className="flex items-center -space-x-2">
      {tickers.slice(0, 3).map((ticker) => (
        <StockLogo
          key={ticker}
          ticker={ticker}
          size={size}
          className="ring-2 ring-white"
        />
      ))}
    </div>
  );
}
