import AppError from '../../errors/AppError';

import FakeModulesRepository from '../../repositories/fakes/FakesModulesRepository';
import CreateModuleService from './CreateModuleService';
import ListModuleService from './ListModuleService';
import UpdateModuleService from './UpdateModuleService';

let listModule: ListModuleService;
let createModule: CreateModuleService;
let updateModule: UpdateModuleService;
let fakeModulesRepository: FakeModulesRepository;

describe('UpdateModule', () => {
  beforeEach(() => {
    fakeModulesRepository = new FakeModulesRepository();
    createModule = new CreateModuleService(fakeModulesRepository);
    listModule = new ListModuleService(fakeModulesRepository);
    updateModule = new UpdateModuleService(fakeModulesRepository);
  });

it('should be able to update a lesson', async () => {
  const module = await createModule.execute({
    title: 'Novo módulo',
    description: 'Módulo a ser atualizado',
    user_id: 1,
  });

  const updatedModule = await updateModule.execute({
    id_module: module.id,
    title: 'Módulo atualizado',
    description: 'Módulo foi atualizado'
  });

  expect(updatedModule?.title).toBe('Módulo atualizado');
  expect(updatedModule?.description).toBe('Módulo foi atualizado');
});

it('should not be able to update with a non existing module', async () => {
  await expect(
    updateModule.execute({
      id_module: 1,
      title: 'Module',
      description: 'Module de teste'
    }),
  ).rejects.toBeInstanceOf(AppError);
});

});
