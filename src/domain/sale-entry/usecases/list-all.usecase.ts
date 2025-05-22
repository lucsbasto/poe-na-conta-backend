import { calculateProfit, calculateRevenue, calculateTotalCost } from '@/domain/common/helpers/calculate';
import { IListAllProductUseCase } from '@/domain/product/interfaces/usecases/list-all.usecase';
import { ProductEntity } from '@/infrastructure/database/typeorm/entities/product.entity';
import { StoreEntity } from '@/infrastructure/database/typeorm/entities/store.entity';
import { UserEntity } from '@/infrastructure/database/typeorm/entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IFilterSaleEntryInput } from '../interfaces/dtos/filter.input';
import { ISaleEntryRepository } from '../interfaces/repository/repository';
import { IListAllSalesEntryUseCase } from '../interfaces/usecases/list-all';

@Injectable()
export class ListAllSalesEntryUseCase implements IListAllSalesEntryUseCase {
  constructor(
    @Inject(ISaleEntryRepository)
    private readonly repository: ISaleEntryRepository,
    @Inject(IListAllProductUseCase)
    private readonly listAllProductUseCase: IListAllProductUseCase,
  ) {}

  async execute(userId: string, filter: IFilterSaleEntryInput): Promise<any[]> {
    const salesEntry = await this.repository.findAll(filter);
    if (!salesEntry.length) {
      await this.createSaleEntry({ ...filter, createdBy: userId });
    }
    const salesEntryWithProduct = await this.repository.findAll({ ...filter });
    return this.buildResponse(salesEntryWithProduct);
  }
  private buildResponse(salesEntry: any[]) {
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
  private async createSaleEntry(input: any): Promise<void> {
    const products = await this.listAllProductUseCase.execute({ customerId: input.customerId });
    const salesEntries = products.map((product) => {
      return {
        id: undefined,
        product: product as ProductEntity,
        productId: product.id,
        store: { id: input.storeId } as StoreEntity,
        storeId: input.storeId,
        createdById: input.createdBy,
        createdBy: { id: input.createdBy } as UserEntity,
        unitCost: 4,
        quantitySentToStore: 0,
        quantitySold: 0,
        quantityReturned: 0,
        salePrice: 7,
        date: new Date(),
      };
    });
    await this.repository.save(salesEntries);
  }
}
