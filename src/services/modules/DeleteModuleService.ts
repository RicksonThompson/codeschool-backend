import { getRepository } from 'typeorm';

import AppError from '../../errors/AppError';

import Module from '../../models/Module';

class DeleteModuleService {
  public async execute(id: string) :Promise<void> {
    const modulesRepository = getRepository(Module);

    const module = await modulesRepository.findOne(id);

    if (!module) {
      throw new AppError('Module does not exists!');
    }

    await modulesRepository.remove(module);
  }
}

export default DeleteModuleService;
