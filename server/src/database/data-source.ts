import 'dotenv/config';
import { join } from 'path';
import { DataSource } from 'typeorm';

const entities = [join(__dirname, '..', '**', '*.entity{.ts,.js}')];
const migrations = [join(__dirname, 'migrations', '*{.ts,.js}')];

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities,
  migrations,
});
