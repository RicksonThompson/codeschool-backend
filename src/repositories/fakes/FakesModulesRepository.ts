import { v4 as uuid_v4 } from "uuid";

import IModulesRepository from '../IModulesRepository';

import ICreateModuleDTO from '../dtos/ICreateModuleDTO';

import Module from '../../models/Module';

class ModulesRepository implements IModulesRepository {
  private modules: Module[];

  public async findById(id: number): Promise<Module | undefined> {
    const findModule = this.modules.find(FindModule => FindModule.id === id);

    return findModule;
  }

  public async create(moduleData: ICreateModuleDTO): Promise<Module> {
    const module = new Module();

    Object.assign(module, { id: uuid_v4() }, moduleData);

    this.modules.push(module);

    return module;
  }

  public async remove(module: Module): Promise<Module | undefined> {
    const findIndex = this.modules.findIndex(findModule => findModule.id === module.id)

    this.modules.splice(findIndex,1);

    return module;
  }

  public async update(module: Module): Promise<Module> {
    const findIndex = this.modules.findIndex(findModule => findModule.id === module.id)

    this.modules[findIndex] = module;

    return module;
  }

  public async findAllModules(): Promise<Module[]> {
    let { modules } = this;

    modules = this.modules;

    return modules;
  }
}

export default ModulesRepository;
