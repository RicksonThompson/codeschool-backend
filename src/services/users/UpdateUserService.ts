import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import AppError from '../../errors/AppError';

import User from '../../models/User';

interface IRequest {
  id: number;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

class UpdateUserService {

  public async execute({id, name, email, password, old_password}: IRequest): Promise<User | undefined> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found!');
    }

    user.name = name;
    user.email = email;

    const checkUserExists = await usersRepository.findOne(email);

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
    return await usersRepository.save(user);
  }
}

export default UpdateUserService;
