import request from 'supertest';
import { DataSource } from 'typeorm';

import { createConnection } from '../../../../database';
import { app } from '../../../../shared/infra/http/app';

let connection: DataSource;

describe('Delete Users Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.destroy();
  });

  it('should be able to delete a user', async () => {
    const createdUser = await request(app).post('/users').send({
      firstName: 'Rhoda',
      lastName: 'Larson',
      email: 'pododjet@ape.ye',
    });

    const { id } = createdUser.body;

    const response = await request(app).delete(`/users/${id}`).send();

    expect(response.statusCode).toBe(204);
  });
});
