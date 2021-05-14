import AppError from '@shared/errors/AppError';

import Module from '@modules/module/infra/typeorm/entities/Module';
import ModulesRepository from '@modules/module/infra/typeorm/repositories/ModulesRepository';

class DeleteModuleService {
  public async execute(id: string) :Promise<void> {
    const modulesRepository = new ModulesRepository();

    const module = await modulesRepository.findById(id);

    if (!module) {
      throw new AppError('Module does not exists!');
    }

    await modulesRepository.remove(module);
  }
}

export default DeleteModuleService;
