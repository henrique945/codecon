import { BadRequestException, Injectable, NotImplementedException } from "@nestjs/common";
import { StockProxy } from "../models/stock.interface";

@Injectable()
export class FinanceService {
  constructor() {
    if (!process.env.ALPHA_VANTAGE_URL || !process.env.APLHA_VANTAGE_KEY)
      throw new NotImplementedException('ALPHA_VANTAGE setup is missing.');
  }

  public baseUrl: string = process.env.ALPHA_VANTAGE_URL!;
  public alphaKey: string = process.env.APLHA_VANTAGE_KEY!;

  public async listStock(stock: string): Promise<StockProxy> {
    const url: string = `${this.baseUrl}/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=${this.alphaKey}`;

    const res = await fetch(url);
    const data: StockProxy = await res.json();

    console.log(data["Time Series (Daily)"]);
    return data;
  }
}