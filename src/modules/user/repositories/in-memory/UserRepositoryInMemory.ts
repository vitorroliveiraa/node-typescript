import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { UserTest } from '../../entities/user';
import { IUserRepository } from '../IUserRepository';

export class UserRepositoryInMemory implements IUserRepository {
  users: UserTest[] = [];

  async create({
    firstName,
    lastName,
    email,
  }: ICreateUserDTO): Promise<UserTest> {
    const user = new UserTest();

    Object.assign(user, {
      firstName,
      lastName,
      email,
    });

    this.users.push(user);

    return user;
  }

  async list(): Promise<UserTest[]> {
    return this.users.filter(obj => {
      return obj;
    });
  }

  async update(
    id: string,
    { firstName, lastName, email }: IUpdateUserDTO
  ): Promise<UserTest> {
    const userIndex = this.users.findIndex(user => user.id === id);

    const user = this.users[userIndex];

    Object.assign(user, {
      firstName,
      lastName,
      email,
    });

    return user;
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex > -1) this.users.splice(userIndex, 1);
  }
}
