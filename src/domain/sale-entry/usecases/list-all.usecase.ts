import { calculateProfit, calculateRevenue, calculateTotalCost } from '@/domain/common/helpers/calculate';
import { IProductStoreRepository } from '@/domain/product-store/interfaces/repository/repository';
import { IListAllProductStoreUseCase } from '@/domain/product-store/interfaces/usecases/list-all';
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
    @Inject(IProductStoreRepository)
    private readonly productStoreRepository: IProductStoreRepository,
    @Inject(IListAllProductStoreUseCase)
    private readonly listAllProductStoreUseCase: IListAllProductStoreUseCase,
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

  private findAllProductStore(storeId: string) {
    return this.productStoreRepository.findAll({ storeId });
  }
  private async createSaleEntry(input: any): Promise<void> {
    // Busca todos os produtos do cliente
    const productStore = await this.listAllProductStoreUseCase.execute({ customerId: input.customerId });

    // Busca os registros da entidade product_store para a loja
    const productStoreEntries = await this.findAllProductStore(input.storeId);

    // Cria os lançamentos de venda com os dados do produto + valores de product_store
    const salesEntries = productStore.map((item) => {
      const productStore = productStoreEntries.find((entry) => entry.productId === item.productId);

      if (!productStore) {
        throw new Error(`ProductStore not found for product ID: ${item.productId} and store ID: ${input.storeId}`);
      }

      return {
        id: undefined,
        product: { id: item.productId } as ProductEntity,
        productId: item.productId,
        store: { id: input.storeId } as StoreEntity,
        storeId: input.storeId,
        createdById: input.createdBy,
        createdBy: { id: input.createdBy } as UserEntity,
        unitCost: item.unitCost,
        quantitySentToStore: item.quantity,
        quantitySold: 0,
        quantityReturned: 0,
        salePrice: item.salePrice,
        date: new Date(),
      };
    });

    await this.repository.save(salesEntries);
  }
}
