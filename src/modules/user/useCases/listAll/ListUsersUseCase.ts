import { Users } from 'modules/user/entities/Users';
import { IUsersRepository } from 'modules/user/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<Users[]> {
    return this.usersRepository.list();
  }
}
