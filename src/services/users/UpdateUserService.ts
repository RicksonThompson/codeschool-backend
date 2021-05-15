import { getRepository } from 'typeorm';

import AppError from '../../errors/AppError';

import User from '../../models/User';
import IUsersRepository from 'repositories/IUsersRepository';

interface IRequest {
  id: number;
  name: string;
  email: string;
}

class UpdateUserService {

  constructor (
    private usersRepository: IUsersRepository
  ) {
  }

  public async execute({id, name, email }: IRequest): Promise<User | undefined> {

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found!');
    }

    user.name = name;
    user.email = email;

    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    return await this.usersRepository.save(user);
  }
}

export default UpdateUserService;
