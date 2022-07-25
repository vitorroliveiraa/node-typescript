import { IUpdateUserDTO } from 'modules/user/dtos/IUpdateUserDTO';
import { IUsersRepository } from 'modules/user/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { Users } from '../../entities/Users';

@injectable()
export class UpdateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(
    id: string,
    { firstName, lastName, email }: IUpdateUserDTO
  ): Promise<Users | null> {
    const user = await this.usersRepository.update(id, {
      firstName,
      lastName,
      email,
    });

    return user;
  }
}
