import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { DeleteUsersUseCase } from './DeleteUsersUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let deleteUsersUseCase: DeleteUsersUseCase;

describe('Delete Users', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    deleteUsersUseCase = new DeleteUsersUseCase(usersRepositoryInMemory);
  });

  it('should be able to delete a user', async () => {
    const { id } = await usersRepositoryInMemory.create({
      firstName: 'Johnny',
      lastName: 'Webster',
      email: 'pe@row.us',
    });

    await deleteUsersUseCase.execute(id);

    const userExist = await usersRepositoryInMemory.findUserBy(id);

    expect(userExist).toBe(undefined);
  });
});
