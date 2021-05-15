import { getRepository, Repository } from 'typeorm';

import IModulesRepository from './IModulesRepository';

import ICreateModuleDTO from './dtos/ICreateModuleDTO';

import Module from '../models/Module';

class ModulesRepository implements IModulesRepository {
  private ormRepository: Repository<Module>;

  constructor() {
    this.ormRepository = getRepository(Module);
  }

  public async findById(id: number): Promise<Module | undefined> {
    const findModule = await this.ormRepository.findOne(id);

    return findModule;
  }

  public async create(moduleData: ICreateModuleDTO): Promise<Module> {
    const module = this.ormRepository.create(moduleData);

    await this.ormRepository.save(module);

    return module;
  }

  public async remove(module: Module): Promise<Module | undefined> {

    return await this.ormRepository.remove(module);
  }

  public async update(module: Module): Promise<Module | undefined> {
    return await this.ormRepository.save(module);
  }

  public async findAllModules(): Promise<Module[]> {
    const modules = await this.ormRepository.find();

    return modules;
  }
}

export default ModulesRepository;
