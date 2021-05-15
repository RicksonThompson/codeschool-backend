import Module from '../../models/Module';
import IModuleRepository from '../../repositories/IModulesRepository';

interface IRequest {
  id_module: number;
  title: string;
  description: string;
}

class UpdateModuleService {

  constructor (
    private modulesRepository: IModuleRepository
  ) {}

  public async execute({ id_module, title, description }: IRequest): Promise<Module | undefined> {

    const module = await this.modulesRepository.findById(id_module);

    module.title = title;
    module.description = description;

    await this.modulesRepository.update(module);

    return module;
  }
}

export default UpdateModuleService;
