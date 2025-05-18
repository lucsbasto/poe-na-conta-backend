import { config } from 'dotenv';
import { join } from 'node:path';
import { DataSource, type DataSourceOptions } from 'typeorm';

config();

const isSSL = process.env.DATABASE_SSL === 'true';

export const dataSourcePostgres: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: Number(process.env.DATABASE_PORT ?? 5432),
  username: process.env.DATABASE_USERNAME ?? 'postgres',
  password: process.env.DATABASE_PASSWORD ?? 'postgres',
  database: process.env.DATABASE_NAME ?? 'poe_na_conta',
  ssl: isSSL ? { rejectUnauthorized: false } : false,
  entities: [join(__dirname, '/../entities/*.entity.{ts,js}')],
  migrations: [join(__dirname, '/../migrations/*{.ts,.js}')],
  synchronize: true,
  logging: true,
};

const dataSourceMigrations = new DataSource(dataSourcePostgres);
export default dataSourceMigrations;
