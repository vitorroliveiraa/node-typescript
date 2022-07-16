import { DataSource } from 'typeorm';

const defaultHost = process.env.DEFAULT_HOST;

const AppDataSource = new DataSource({
  applicationName: 'db_users',
  type: 'postgres',
  port: 8482,
  host: process.env.NODE_ENV === 'test' ? 'localhost' : defaultHost,
  username: 'admin',
  password: 'admin',
  database: 'users',
  logger: 'advanced-console', // add color and highlight
  logNotifications: true,
  synchronize: false,
  useUTC: false, // false: local time | true: UTC
  uuidExtension: 'uuid-ossp',
  logging: ['query', 'error', 'warn', 'info', 'log'],
  entities: [`${__dirname}/../modules/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
  migrationsTableName: 'migrations',
});

export { AppDataSource };
