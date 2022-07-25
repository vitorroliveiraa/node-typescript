import { IUsersRepository } from 'modules/user/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    return this.usersRepository.delete(id);
  }
}
