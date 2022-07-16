import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import { UserTest } from '../entities/user';

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<UserTest>;
  list(): Promise<UserTest[]>;
  update(id: string, data: IUpdateUserDTO): Promise<UserTest | null>;
  delete(id: string): Promise<void>;
}
