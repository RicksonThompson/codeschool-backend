import AppError from '../../errors/AppError';
import FakeUsersRepository from '../../repositories/fakes/FakesUsersRepository';
import CreateUserService from './CreateUserService';
import DeleteUserService from './DeleteUserService';
import ListUserService from './ListUsersService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;
let deleteUser: DeleteUserService;
let listUser: ListUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
    listUser = new ListUserService(fakeUsersRepository);
    deleteUser = new DeleteUserService(fakeUsersRepository);
  });

  it('should be able to delete a user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123123',
    });

    await deleteUser.execute(user.id)

    const users = await listUser.execute();

    expect(users).not.toContain(user);
  });

  it('should not be able to delete a user that does not exist', async () => {
    await expect(
      deleteUser.execute(1)
    ).rejects.toBeInstanceOf(AppError);
  });

});
