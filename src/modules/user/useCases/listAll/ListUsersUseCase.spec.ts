import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { ListUsersUseCase } from './ListUsersUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let listUsersUseCase: ListUsersUseCase;

describe('List All Users', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    listUsersUseCase = new ListUsersUseCase(usersRepositoryInMemory);
  });

  it('should list all users', async () => {
    const users = await listUsersUseCase.execute();

    expect(Array.isArray(users)).toBe(true);
    expect(users.length >= 0).toBe(true);
  });
});
