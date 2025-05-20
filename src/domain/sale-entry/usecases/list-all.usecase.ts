import { calculateProfit, calculateRevenue, calculateTotalCost } from '@/domain/common/helpers/calculate';
import { Inject, Injectable } from '@nestjs/common';
import { IFilterSaleEntryInput } from '../interfaces/dtos/filter.input';
import { ISaleEntryRepository } from '../interfaces/repository/repository';
import { IListAllSalesEntryUseCase } from '../interfaces/usecases/list-all';

@Injectable()
export class ListAllSalesEntryUseCase implements IListAllSalesEntryUseCase {
  constructor(
    @Inject(ISaleEntryRepository)
    private readonly repository: ISaleEntryRepository,
  ) {}

  async execute(filter?: IFilterSaleEntryInput): Promise<any[]> {
    const salesEntry = await this.repository.findAll(filter);

    return salesEntry.map((saleEntry) => {
      const totalCost = calculateTotalCost(saleEntry.unitCost, saleEntry.quantitySentToStore);
      const revenue = calculateRevenue(saleEntry.salePrice, saleEntry.quantitySentToStore);
      const profit = calculateProfit(revenue, totalCost);

      return {
        id: saleEntry.id,
        type: saleEntry.product.name,
        price: Number(saleEntry.salePrice),
        quantity: Number(saleEntry.quantitySentToStore),
        sold: Number(saleEntry.quantitySold),
        returned: Number(saleEntry.quantityReturned),
        unitCost: Number(saleEntry.unitCost),
        date: saleEntry.date,
        totalCost,
        revenue,
        profit,
      };
    });
  }
}
