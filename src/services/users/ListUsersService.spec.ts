import AppError from '../../errors/AppError';

import FakeUsersRepository from '../../repositories/fakes/FakesUsersRepository';
import CreateUserService from './CreateUserService';
import ListUserService from './ListUsersService';

let listUser: ListUserService;
let createUser: CreateUserService;
let fakeUsersRepository: FakeUsersRepository;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
    listUser = new ListUserService(fakeUsersRepository);
  });

  it('should be able to list all users', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123123',
    });

    const users = await listUser.execute();

    console.log(users);

    expect(users).toBeDefined();
  });
});
