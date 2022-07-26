import request from 'supertest';
import { DataSource } from 'typeorm';

import { createConnection } from '../../../../database';
import { app } from '../../../../shared/infra/http/app';

let connection: DataSource;

describe('List All Users', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.destroy();
  });

  it('should list all users', async () => {
    const response = await request(app).get('/users').send();

    expect(response.statusCode).toBe(200);
  });
});
