import { IProductStoreRepository } from '@/domain/product-store/interfaces/repository/repository';
import { Inject, Injectable } from '@nestjs/common';
import { IListAllProductStoreUseCase } from '../interfaces/usecases/list-all';

@Injectable()
export class ListAllProductStoreUseCase implements IListAllProductStoreUseCase {
  constructor(
    @Inject(IProductStoreRepository)
    private readonly repository: IProductStoreRepository,
  ) {}

  async execute(filter: any): Promise<any[]> {
    const filterCustomer = {
        store: {
            id: filter.storeId,
            customerId: filter.customerId
        }
    }
    const productStore = await this.repository.findAll(filterCustomer);
    return productStore.map(item => {
      return {
        id: item.id,
        productId: item.productId,
        storeId: item.storeId,
        quantity: item.quantity,
        price: Number(item.salePrice),
        unitCost: Number(item.unitCost),
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        productName: item.product.name,
        isActive: item.isActive,
      }
    })
  }

}
