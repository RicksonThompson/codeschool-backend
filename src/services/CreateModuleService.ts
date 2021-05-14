import Module from '@modules/module/infra/typeorm/entities/Module';
import ModulesRepository from '@modules/module/infra/typeorm/repositories/ModulesRepository';

// import AppError from '../errors/AppError';

interface IRequest {
  title: string;
  description: string;
}

class CreateModuleService {
  public async execute({ title, description}: IRequest): Promise<Module> {
    const modulesRepository = new ModulesRepository();

    const module = modulesRepository.create({
      title,
      description,
    });

    return module;
  }
}

export default CreateModuleService;
