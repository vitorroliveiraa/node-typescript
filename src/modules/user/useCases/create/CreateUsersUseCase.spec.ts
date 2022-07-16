import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUsersUseCase } from './CreateUsersUseCase';

let userRepositoryInMemory: UserRepositoryInMemory;
let createUsersUseCase: CreateUsersUseCase;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUsersUseCase = new CreateUsersUseCase(userRepositoryInMemory);
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
