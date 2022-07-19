import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { Users } from '../../entities/Users';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class CreateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    firstName,
    lastName,
    email,
  }: ICreateUserDTO): Promise<Users> {
    const user = await this.usersRepository.create({
      firstName,
      lastName,
      email,
    });

    return user;
  }
}
