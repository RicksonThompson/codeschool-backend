import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

@injectable()
class DeleteUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository : IUsersRepository,
  ){}

  public async execute(id: number) :Promise<User | undefined> {

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists!');
    }

    return await this.usersRepository.remove(user);
  }
}

export default DeleteUserService;
