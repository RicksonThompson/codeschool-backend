import { Request, Response } from 'express';

import CreateUserService from '../../services/users/CreateUserService';
import UpdateUserService from '../../services/users/UpdateUserService';
import DeleteUserService from '../../services/users/DeleteUserService';
import ListUserService from '../../services/users/ListUsersService';

import UsersRepository from '../../repositories/UsersRepository';


export default class UsersController {

  public async show(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const ListUser = new ListUserService(usersRepository);

    const users = await ListUser.execute();
    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const { name, email, password } = request.body;

    const createUser = new CreateUserService(usersRepository);

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
  const usersRepository = new UsersRepository();

  const { id, name, email } = request.body;

  const updateUser = new UpdateUserService(usersRepository);

  const user = await updateUser.execute({
    id,
    name,
    email
  });

  return response.json(user);
}

public async delete(request: Request, response: Response): Promise<Response> {
  const usersRepository = new UsersRepository();
  
  const { id } = request.params;

  const id_user = parseInt(id);

  const deleteUser = new DeleteUserService(usersRepository);

  await deleteUser.execute(id_user);

  return response.status(204).send();
}
}
