import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { Users } from '../../entities/Users';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class CreateUsersUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository
  ) {}
  // private userRepository: IUserRepository;

  // constructor(userRepository: IUserRepository) {
  //   this.userRepository = userRepository;
  // }

  async execute({
    firstName,
    lastName,
    email,
  }: ICreateUserDTO): Promise<Users> {
    console.log('useCase');

    const user = await this.usersRepository.create({
      firstName,
      lastName,
      email,
    });

    return user;
  }
}
