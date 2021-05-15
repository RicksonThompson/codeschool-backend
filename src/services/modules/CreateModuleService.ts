import { getRepository } from 'typeorm';

import Module from '../../models/Module';

interface IRequest {
  title: string;
  description: string;
  user_id: number;
}

class CreateModuleService {
  public async execute({ title, description, user_id }: IRequest): Promise<Module> {
    const modulesRepository = getRepository(Module);

    const module = modulesRepository.create({
      title,
      description,
      user_id
    });

    return module;
  }
}

export default CreateModuleService;
