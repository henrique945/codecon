import { Controller, Get, Param } from "@nestjs/common";
import { FinanceService } from "../services/finance.service";
import { StockProxy } from "../models/stock.interface";

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) { }

  @Get('stock/:stock')
  public async listStock(@Param('stock') stock: string): Promise<StockProxy> {
    return await this.financeService.listStock(stock);
  }
}