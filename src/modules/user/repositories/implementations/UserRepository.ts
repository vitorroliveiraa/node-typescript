import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database/data-source';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { UserTest } from '../../entities/user';
import { IUserRepository } from '../IUserRepository';

// const repository = AppDataSource.getRepository(UserTest);

export class UserRepository implements IUserRepository {
  private repository: Repository<UserTest>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserTest);
  }

  async create({
    firstName,
    lastName,
    email,
  }: ICreateUserDTO): Promise<UserTest> {
    const user = this.repository.create({
      firstName,
      lastName,
      email,
    });

    await this.repository.save(user);

    return user;
  }

  async list(): Promise<UserTest[]> {
    const users = this.repository.find();

    return users;
  }

  async update(
    id: string,
    { firstName, lastName, email }: IUpdateUserDTO
  ): Promise<UserTest | null> {
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
