import Module from '../../models/Module';
import IModuleRepository from '../../repositories/IModulesRepository';

class ListModuleService {

  constructor (
    private modulesRepository: IModuleRepository
  ) {}

  public async execute(): Promise<Module[]> {

    const module = await this.modulesRepository.findAllModules();

    return module;
  }
}

export default ListModuleService;
