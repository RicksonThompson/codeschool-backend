import Module from '@modules/module/infra/typeorm/entities/Module';
import ModulesRepository from '@modules/module/infra/typeorm/repositories/ModulesRepository';

class ListModuleService {
  public async execute(): Promise<Module[]> {
    const modulesRepository = new ModulesRepository();

    const module = modulesRepository.findAllModules();

    return module;
  }
}

export default ListModuleService;
