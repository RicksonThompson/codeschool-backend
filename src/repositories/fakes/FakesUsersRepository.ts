import { v4 as uuid_v4 } from "uuid";

import IUsersRepository from '../IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

import User from '../../models/User';

class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: number): Promise<User | undefined> {

    const findUser = this.users.find(FindUser => FindUser.id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid_v4() }, userData);

    this.users.push(user);

    return user;
  }

  public async remove(user: User): Promise<User | undefined> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users.splice(findIndex,1);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }

  public async findUsers(): Promise<User[]> {
    let { users } = this;

    users = this.users;

    return users;
  }
}

export default UsersRepository;
