import { Repository } from 'typeorm';

import dataSource from '../../../../database';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { Users } from '../../entities/Users';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = dataSource.getRepository(Users);
  }

  async create({ firstName, lastName, email }: ICreateUserDTO): Promise<Users> {
    const user = this.repository.create({
      firstName,
      lastName,
      email,
    });

    await this.repository.save(user);

    return user;
  }

  async list(): Promise<Users[]> {
    const users = this.repository.find();

    return users;
  }

  async findUserBy(id: string): Promise<Users | null> {
    return this.repository.findOneBy({ id });
  }

  async update(
    id: string,
    { firstName, lastName, email }: IUpdateUserDTO
  ): Promise<Users | null> {
    const user = await this.repository.findOneBy({ id });

    if (user !== null) {
      Object.assign(user, {
        firstName,
        lastName,
        email,
      });

      await this.repository.save(user);
    }

    return user;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
