import { Request, Response } from 'express';

import AuthenticateUserService from '../../services/users/AuthenticateUserService';

import UsersRepository from '../../repositories/UsersRepository';

export default class UsersController {

  public async create(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return response.json({ user: userWithoutPassword, token });

}
}
