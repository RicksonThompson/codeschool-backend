import { getRepository } from 'typeorm';

import Module from '../../models/Module';

interface IRequest {
  id: number;
  title: string;
  description: string;
}

class UpdateModuleService {
  public async execute({ id, title, description }: IRequest): Promise<Module | undefined> {
    const modulesRepository = getRepository(Module);

    const module = await modulesRepository.findOne(id);

    module.title = title;
    module.description = description;

    await modulesRepository.save(module);

    return module;
  }
}

export default UpdateModuleService;
