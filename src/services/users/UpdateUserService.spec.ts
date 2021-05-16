import AppError from '../../errors/AppError';

import FakeUsersRepository from '../../repositories/fakes/FakesUsersRepository';
import CreateUserService from './CreateUserService';
import ListUserService from './ListUsersService';
import UpdateUserService from './UpdateUserService';

let listUser: ListUserService;
let createUser: CreateUserService;
let updateUser: UpdateUserService;
let fakeUsersRepository: FakeUsersRepository;

describe('UpdateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
    listUser = new ListUserService(fakeUsersRepository);
    updateUser = new UpdateUserService(fakeUsersRepository);
  });

it('should be able to update a user', async () => {
  const user = await createUser.execute({
    name: 'John Doe',
    email: 'johndoetest@example.com',
    password: '123456',
  });

  const updatedUser = await updateUser.execute({
    id: user.id,
    name: 'John Trê',
    email: 'johnt@example.com',
  });

  expect(updatedUser?.name).toBe('John Trê');
  expect(updatedUser?.email).toBe('johnt@example.com');
  // expect(user).toHaveProperty('id')
});

it('should not be able to update with a non existing user', async () => {
  await expect(
    updateUser.execute({
      id: 1000,
      name: 'User',
      email: 'usuarionaoexiste@example.com',
    }),
  ).rejects.toBeInstanceOf(AppError);
});

});
