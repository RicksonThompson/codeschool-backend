import { compare, hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: number;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

@injectable()
class UpdateUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository : IUsersRepository,
  ){}

  public async execute({user_id, name, email, password, old_password}: IRequest): Promise<User | undefined> {

    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found!');
    }

    user.name = name;
    user.email = email;

    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    if(password && !old_password) {
      throw new AppError('You need to inform old password to set a new password.')
    }

    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }
      user.password = await hash(password, 8);
    }
    return await this.usersRepository.save(user);
  }
}

export default UpdateUserService;
