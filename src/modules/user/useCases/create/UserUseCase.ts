import { inject, injectable, autoInjectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UserTest } from '../../entities/user';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
@autoInjectable()
export class UserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  // private userRepository: IUserRepository;

  // constructor(userRepository: IUserRepository) {
  //   this.userRepository = userRepository;
  // }

  async execute({
    firstName,
    lastName,
    email,
  }: ICreateUserDTO): Promise<UserTest> {
    console.log('useCase');

    const user = await this.userRepository.create({
      firstName,
      lastName,
      email,
    });

    return user;
  }
}
