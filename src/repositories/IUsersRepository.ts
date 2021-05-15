import User from '../models/User';

import ICreateUserDTO from './dtos/ICreateUserDTO';

export default interface IUsersRepository {
  findUsers(): Promise<User[]>;
  findById(id: number): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  remove(user: User): Promise<User | undefined>;
  save(user: User): Promise<User>;
}

