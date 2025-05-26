import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './application/modules/authentication/authentication.module';
import { CustomerModule } from './application/modules/customer/customer.module';
import { ProductStoreModule } from './application/modules/product-store/product-store.module';
import { ProductModule } from './application/modules/products/product.module';
import { SaleEntryModule } from './application/modules/sale-entry/sale-entry.module';
import { UserModule } from './application/modules/user/user.module';
import { LoggerModule } from './common/logger/logger.module';
import { DataSourcePostgresModule } from './infrastructure/database/typeorm/config/data-source-postgres.module';

@Module({
  imports: [
    DataSourcePostgresModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    LoggerModule,
    CustomerModule,
    UserModule,
    SaleEntryModule,
    ProductModule,
    ProductStoreModule
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
