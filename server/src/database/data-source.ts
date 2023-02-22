import 'dotenv/config';
import { join } from 'path';
import { DataSource } from 'typeorm';

const rootLocation = join(__dirname, '..');

const entities = [rootLocation + '/**/*.entity{.ts,.js}'];
const migrations = [rootLocation + '/database/migrations/*{.ts,.js}'];

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities,
  migrations,
});
