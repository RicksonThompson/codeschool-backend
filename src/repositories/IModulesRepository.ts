import Module from '../models/Module';

import ICreateModuleDTO from './dtos/ICreateModuleDTO';

export default interface IModulesRepositoryDTO {
  findById(id: number): Promise<Module | undefined>;
  findAllModules(): Promise<Module[]>;
  remove(module: Module): Promise<Module | undefined>;
  create(data: ICreateModuleDTO): Promise<Module>;
  update(module: Module): Promise<Module>;
}
