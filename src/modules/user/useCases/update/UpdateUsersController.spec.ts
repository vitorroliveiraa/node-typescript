import request from 'supertest';
import { DataSource } from 'typeorm';

import { createConnection } from '../../../../database';
import { app } from '../../../../shared/infra/http/app';

let connection: DataSource;

describe('Update Users Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.destroy();
  });

  it('should be able to update a user', async () => {
    const createdUser = await request(app).post('/users').send({
      firstName: 'Rhoda',
      lastName: 'Larson',
      email: 'pododjet@ape.ye',
    });

    const { id } = createdUser.body;

    const response = await request(app).put(`/users/update/${id}`).send({
      firstName: 'Gordon',
      lastName: 'Young',
      email: 'vut@lovlahwo.am',
    });

    expect(response.statusCode).toBe(200);
  });
});
