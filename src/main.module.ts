import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './application/modules/customer/customer.module';
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
    LoggerModule,
    CustomerModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
