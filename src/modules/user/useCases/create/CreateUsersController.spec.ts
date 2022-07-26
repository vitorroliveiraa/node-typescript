import request from 'supertest';
import { DataSource } from 'typeorm';

import { createConnection } from '../../../../database';
import { app } from '../../../../shared/infra/http/app';

let connection: DataSource;

describe('Create User Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.destroy();
  });

  it('should create a new user', async () => {
    const response = await request(app).post('/users').send({
      firstName: 'Rhoda',
      lastName: 'Larson',
      email: 'pododjet@ape.ye',
    });

    expect(response.status).toBe(201);
  });
});
