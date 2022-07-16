import { container, delay } from 'tsyringe';

import { UserRepository } from '../../modules/user/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  delay(() => UserRepository)
);
