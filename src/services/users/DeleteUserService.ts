import AppError from '../../errors/AppError';

import User from '../../models/User';
import IUsersRepository from 'repositories/IUsersRepository';

interface IRequest {
  id: number;
}

class DeleteUserService {

  constructor (
    private usersRepository: IUsersRepository
  ) {}

  public async execute(id: number) :Promise<User | undefined> {

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists!');
    }

    return await this.usersRepository.remove(user);
  }
}

export default DeleteUserService;
