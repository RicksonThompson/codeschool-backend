import User from '../../models/User';
import IUsersRepository from 'repositories/IUsersRepository';

class ListUserService {

  constructor (
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<User[]> {

    const users = await this.usersRepository.findUsers();

    return users;
  }
}

export default ListUserService;
