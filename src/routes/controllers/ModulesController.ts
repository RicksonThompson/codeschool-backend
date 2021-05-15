import { Request, Response } from 'express';

import CreateModuleService from '../../services/modules/CreateModuleService';
import DeleteModuleService from '../../services/modules/DeleteModuleService';
import ListModuleService from '../../services/modules/ListModuleService';
import UpdateModuleService from '../../services/modules/UpdateModuleService';

import ModulesRepository from '../../repositories/ModulesRepository';

export default class ModulesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const modulesRepository = new ModulesRepository();

    try {
      const { title, description, user_id } = request.body;

      const CreateModule = new CreateModuleService(modulesRepository);

      const module = await CreateModule.execute({
        title,
        description,
        user_id
      });

      return response.json(module);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const modulesRepository = new ModulesRepository();

    const { id_module, title, description } = request.body;

    const UpdateModule = new UpdateModuleService(modulesRepository);

    const module = await UpdateModule.execute({
      id_module,
      title,
      description,
    });

    return response.json(module);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const modulesRepository = new ModulesRepository();

    const { id } = request.params;

    const id_module= parseInt(id);

    const DeleteModule = new DeleteModuleService(modulesRepository);

    await DeleteModule.execute(id_module);

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const modulesRepository = new ModulesRepository();
    
    const listModule = new ListModuleService(modulesRepository);

    const modules = await listModule.execute();

    return response.json(modules);
  }
}
