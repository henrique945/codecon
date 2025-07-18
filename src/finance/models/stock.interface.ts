export interface StockDataProxy {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export type StockDailyProxy = Map<string, StockDataProxy>;

export interface StockMetadataProxy {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Time Zone": string;
}

export interface StockProxy {
  "Meta Data": StockMetadataProxy;
  "Time Series (Daily)": StockDailyProxy;
}
