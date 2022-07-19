import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUsersUseCase } from './CreateUsersUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUsersUseCase: CreateUsersUseCase;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUsersUseCase = new CreateUsersUseCase(usersRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user = await createUsersUseCase.execute({
      firstName: 'Ronald',
      lastName: 'Patton',
      email: 'didloas@dup.mz',
    });

    expect(user).toHaveProperty('id');
  });
});
