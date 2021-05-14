import Module from '@modules/module/infra/typeorm/entities/Module';
import ModulesRepository from '@modules/module/infra/typeorm/repositories/ModulesRepository';

interface IRequest {
  id: string;
  title: string;
  description: string;
}

class UpdateModuleService {
  public async execute({ id, title, description }: IRequest): Promise<Module | undefined> {
    const modulesRepository = new ModulesRepository();

    const module = await modulesRepository.findById(id);

    module.title = title;
    module.description = description;

    await modulesRepository.update(module);

    return module;
  }
}

export default UpdateModuleService;
