import 'dotenv/config';
import { join } from 'path';
import { DataSource } from 'typeorm';
import { initEntities1676741321719 } from './migrations/1676741321719-initEntities';
import { addRecoverCode1677861564070 } from './migrations/1677861564070-add_recover_code';
import { updateConstraints1677120124430 } from './migrations/1677120124430-update_constraints';

const entities = [join(__dirname, '..', '**', '*.entity{.ts,.js}')];
const migrations = [join(__dirname, 'migrations', '*{.ts,.js}')];

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities,
  migrations: [initEntities1676741321719, updateConstraints1677120124430, addRecoverCode1677861564070],
});
