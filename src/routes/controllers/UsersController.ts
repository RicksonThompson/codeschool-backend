import { Request, Response } from 'express';

import CreateUserService from '../../services/users/CreateUserService';
import UpdateUserService from '../../services/users/UpdateUserService';
import DeleteUserService from '../../services/users/DeleteUserService';
import ListUserService from '../../services/users/ListUsersService';

export default class UsersController {

  public async show(request: Request, response: Response): Promise<Response> {

    const ListUser = new ListUserService();

    const users = await ListUser.execute();
    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
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

    return response.json(userWithoutPassword);

}

public async update(request: Request, response: Response): Promise<Response> {

  const { id, name, email, password, old_password } = request.body;

  const updateUser = new UpdateUserService();

  const user = await updateUser.execute({
    id,
    name,
    email,
    password,
    old_password,
  });

  return response.json(user);
}

public async delete(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  const id_user = parseInt(id);

  const deleteUser = new DeleteUserService();
  await deleteUser.execute(id_user);

  return response.status(204).send();
}
}
