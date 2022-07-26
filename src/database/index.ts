import { DataSource, DataSourceOptions } from 'typeorm';

const host = process.env.HOST;

const options: DataSourceOptions = {
  applicationName: 'db_users',
  type: 'postgres',
  port: process.env.NODE_ENV === 'test' ? 8482 : 5432,
  host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
  username: 'admin',
  password: 'admin',
  database: process.env.NODE_ENV === 'test' ? 'users_test' : 'users',
  logger: 'advanced-console', // add color and highlight
  logNotifications: true,
  synchronize: false,
  useUTC: false, // false: local time | true: UTC
  uuidExtension: 'uuid-ossp',
  logging: ['error', 'log'],
  entities: [`${__dirname}/../modules/**/entities/*.{ts,js}`],
  // entities: [Users],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
  // migrations: [UsersEntity1658154534266],
  migrationsTableName: '_migrations',
};

const dataSource = new DataSource(options);

export function createConnection(): Promise<DataSource> {
  return dataSource.initialize();
}

export default dataSource;
