import { Module } from '@nestjs/common';
import { TypeOrmModule, type TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourcePostgres } from './postgres.provider';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (): Promise<TypeOrmModuleOptions> => dataSourcePostgres,
    }),
  ],
})
export class DataSourcePostgresModule {}
