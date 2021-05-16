import FakeModulesRepository from '../../repositories/fakes/FakesModulesRepository';
import CreateModuleService from './CreateModuleService';
import ListModuleService from './ListModuleService';

let fakeModulesRepository: FakeModulesRepository;
let createModule: CreateModuleService;
let listModule: ListModuleService;

describe('ListModule', () => {
  beforeEach(() => {
    fakeModulesRepository = new FakeModulesRepository();
    createModule = new CreateModuleService(fakeModulesRepository);
    listModule = new ListModuleService(fakeModulesRepository);
  });

  it('should be able to list all modules', async () => {
    await createModule.execute({
      title: 'Novo módulo',
      description: 'Testando o novo módulo',
      user_id: 1,
    });

    const modules = await listModule.execute();

    expect(modules).toBeDefined();
  });

});
