import AppError from '../../errors/AppError';

import FakeModulesRepository from '../../repositories/fakes/FakesModulesRepository';
import CreateModuleService from './CreateModuleService';
import ListModuleService from './ListModuleService';
import DeleteModuleService from './DeleteModuleService';

let fakeModulesRepository: FakeModulesRepository;
let createModule: CreateModuleService;
let listModule: ListModuleService;
let deleteModule: DeleteModuleService;

describe('DeleteModule', () => {
  beforeEach(() => {
    fakeModulesRepository = new FakeModulesRepository();
    createModule = new CreateModuleService(fakeModulesRepository);
    listModule = new ListModuleService(fakeModulesRepository);
    deleteModule = new DeleteModuleService(fakeModulesRepository);
  });

  it('should be able to delete a module', async () => {
    const module = await createModule.execute({
      title: 'Novo módulo',
      description: 'Testando o novo módulo',
      user_id: 1,
    });

    await deleteModule.execute(module.id)

    const modules = await listModule.execute();

    expect(modules).not.toContain(module);
  });

  it('should not be able to delete a module that does not exist', async () => {
    await expect(
      deleteModule.execute(1)
    ).rejects.toBeInstanceOf(AppError);
  });

});
