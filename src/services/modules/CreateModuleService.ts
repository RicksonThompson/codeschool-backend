import Module from '../../models/Module';
import IModuleRepository from '../../repositories/IModulesRepository';

interface IRequest {
  title: string;
  description: string;
  user_id: number;
}

class CreateModuleService {

  constructor (
    private modulesRepository: IModuleRepository
  ) {}

  public async execute({ title, description, user_id }: IRequest): Promise<Module> {

    const module = await this.modulesRepository.create({
      title,
      description,
      user_id
    });

    return module;
  }
}

export default CreateModuleService;
