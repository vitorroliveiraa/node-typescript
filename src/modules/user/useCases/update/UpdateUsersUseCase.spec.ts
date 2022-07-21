import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { UpdateUsersUseCase } from './UpdateUsersUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let updateUsersUseCase: UpdateUsersUseCase;

describe('Update Users', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    updateUsersUseCase = new UpdateUsersUseCase(usersRepositoryInMemory);
  });

  it('should update a user', async () => {
    const result = await usersRepositoryInMemory.create({
      firstName: 'Jacob',
      lastName: 'Cannon',
      email: 'wo@useniza.gm',
    });

    const { id } = await usersRepositoryInMemory.findUserBy(result.id);

    const updatedUser = await updateUsersUseCase.execute(id, {
      firstName: 'Gordon',
      lastName: 'Young',
      email: 'vut@lovlahwo.am',
    });

    expect(updatedUser?.firstName).toBe('Gordon');
  });
});
