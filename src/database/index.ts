import { DataSource } from 'typeorm';

import { Users } from '../modules/user/entities/Users';

// const defaultHost = process.env.DEFAULT_HOST;

const dataSource = new DataSource({
  applicationName: 'db_users',
  type: 'postgres',
  port: 8482,
  // host: process.env.NODE_ENV === 'test' ? 'localhost' : defaultHost,
  username: 'admin',
  password: 'admin',
  database: process.env.NODE_ENV === 'test' ? 'users_test' : 'users',
  logger: 'advanced-console', // add color and highlight
  logNotifications: true,
  synchronize: false,
  useUTC: false, // false: local time | true: UTC
  uuidExtension: 'uuid-ossp',
  logging: ['query', 'error', 'warn', 'info', 'log'],
  entities: [Users],
  migrations: [],
  migrationsTableName: 'migrations',
});

export function createConnection(host = 'db_users'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
