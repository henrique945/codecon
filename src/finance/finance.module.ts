import { Module } from '@nestjs/common';
import { FinanceService } from './services/finance.service';
import { FinanceController } from './controllers/finance.controller';

@Module({
  controllers: [FinanceController],
  providers: [FinanceService],
  exports: [FinanceService],
})
export class FinanceModule { }
