import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { Users } from '../../entities/Users';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepositoryInMemory implements IUsersRepository {
  users: Users[] = [];

  async create({ firstName, lastName, email }: ICreateUserDTO): Promise<Users> {
    const user = new Users();

    Object.assign(user, {
      firstName,
      lastName,
      email,
    });

    this.users.push(user);

    return user;
  }

  async list(): Promise<Users[]> {
    return this.users.filter(obj => {
      return obj;
    });
  }

  async update(
    id: string,
    { firstName, lastName, email }: IUpdateUserDTO
  ): Promise<Users> {
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
