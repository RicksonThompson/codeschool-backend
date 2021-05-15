import { getRepository, Repository } from 'typeorm';

import IUsersRepository from './IUsersRepository';

import ICreateUserDTO from './dtos/ICreateUserDTO';

import User from '../models/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: number): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne(id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async remove(user: User): Promise<User | undefined> {

    return await this.ormRepository.remove(user);
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async findUsers(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }
}

export default UsersRepository;
