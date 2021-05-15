import { getRepository } from 'typeorm';

import AppError from '../../errors/AppError';

import User from '../../models/User';

interface IRequest {
  id: number;
}

class DeleteUserService {

  public async execute(id: number) :Promise<User | undefined> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User does not exists!');
    }

    return await usersRepository.remove(user);
  }
}

export default DeleteUserService;
