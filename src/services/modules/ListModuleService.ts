import { getRepository } from 'typeorm';

import Module from '../../models/Module';

class ListModuleService {
  public async execute(): Promise<Module[]> {
    const modulesRepository = getRepository(Module);

    const module = modulesRepository.find();

    return module;
  }
}

export default ListModuleService;
