import AppError from '../../errors/AppError';

import IModuleRepository from '../../repositories/IModulesRepository';

class DeleteModuleService {

  constructor (
    private modulesRepository: IModuleRepository
  ) {}

  public async execute(id: number) :Promise<void> {

    const module = await this.modulesRepository.findById(id);

    if (!module) {
      throw new AppError('Module does not exists!');
    }

    await this.modulesRepository.remove(module);
  }
}

export default DeleteModuleService;
