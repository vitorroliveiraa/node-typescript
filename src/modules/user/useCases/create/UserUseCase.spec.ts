import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { UserUseCase } from './UserUseCase';

let userRepositoryInMemory: UserRepositoryInMemory;
let userUseCase: UserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userUseCase = new UserUseCase(userRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user = await userUseCase.execute({
      firstName: 'Ronald',
      lastName: 'Patton',
      email: 'didloas@dup.mz',
    });

    expect(user).toHaveProperty('id');
  });
});
