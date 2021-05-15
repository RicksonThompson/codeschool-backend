import AppError from '../../errors/AppError';

import FakeModulesRepository from '../../repositories/fakes/FakesModulesRepository';
import CreateModuleService from './CreateModuleService';

let fakeModulesRepository: FakeModulesRepository;
let createModule: CreateModuleService;

describe('CreateModule', () => {
  beforeEach(() => {
    fakeModulesRepository = new FakeModulesRepository();
    createModule = new CreateModuleService(fakeModulesRepository);
  });

  it('should be able to create a new module', async () => {
    const module = await createModule.execute({
      title: 'Novo módulo',
      description: 'Testando o novo módulo',
      user_id: 1,
    });

    expect(module).toHaveProperty('id');
  });

});
