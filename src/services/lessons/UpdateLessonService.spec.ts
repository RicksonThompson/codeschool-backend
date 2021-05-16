import AppError from '../../errors/AppError';

import FakeLessonsRepository from '../../repositories/fakes/FakesLessonsRepository';
import CreateLessonService from './CreateLessonService';
import ListLessonService from './ListLessonService';
import UpdateLessonService from './UpdateLessonService';

let listLesson: ListLessonService;
let createLesson: CreateLessonService;
let updateLesson: UpdateLessonService;
let fakeLessonsRepository: FakeLessonsRepository;

describe('UpdateLesson', () => {
  beforeEach(() => {
    fakeLessonsRepository = new FakeLessonsRepository();
    createLesson = new CreateLessonService(fakeLessonsRepository);
    listLesson = new ListLessonService(fakeLessonsRepository);
    updateLesson = new UpdateLessonService(fakeLessonsRepository);
  });

it('should be able to update a lesson', async () => {
  const lesson = await createLesson.execute({
    title: 'Atualizar Lesson',
    description: 'Teste para atualizar description',
    module_id: 1,
    videoId: 'jdfudhi'
  });

  const updatedLesson = await updateLesson.execute({
    id: lesson.id,
    title: 'Nova lesson',
    description: 'Lesson atualizada',
    module_id: 1,
    videoId: 'sssf'
  });

  expect(updatedLesson?.title).toBe('Nova lesson');
  expect(updatedLesson?.description).toBe('Lesson atualizada');
});

it('should not be able to update with a non existing lesson', async () => {
  await expect(
    updateLesson.execute({
      id: 1,
      title: 'Lesson',
      description: 'Lesson para atualizar',
      module_id: 1,
      videoId: 'fsfd'
    }),
  ).rejects.toBeInstanceOf(AppError);
});

});
