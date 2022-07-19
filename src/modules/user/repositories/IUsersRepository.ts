import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import { Users } from '../entities/Users';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<Users>;
  list(): Promise<Users[]>;
  update(id: string, data: IUpdateUserDTO): Promise<Users | null>;
  delete(id: string): Promise<void>;
}
