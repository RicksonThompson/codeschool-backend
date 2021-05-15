jest.mock('./CreateUserService');

import CreateUserService from  './CreateUserService';
import User from '../../models/User';

describe('CreateUser', () => {

  it('should be able to create a new user', async () => {
    const createUserService = new CreateUserService;

    const users: User[] = [];

    const user = {
      name: 'Rickson',
      email: 'rickson@test.com',
      password: '1234',
    }

    const userr = await createUserService.execute({
      name: user.name,
      email: user.email,
      password: user.password,
    })

    expect(user).toHaveProperty("id");

  })
})
