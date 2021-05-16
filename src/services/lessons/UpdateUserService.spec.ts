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
  const user = await createLesson.execute({
    name: 'John Doe',
    email: 'johndoetest@example.com',
    password: '123456',
  });

  const updatedLesson = await updateLesson.execute({
    id: user.id,
    name: 'John Trê',
    email: 'johnt@example.com',
  });

  expect(updatedUser?.name).toBe('John Trê');
  expect(updatedUser?.email).toBe('johnt@example.com');
});

it('should not be able to update with a non existing user', async () => {
  await expect(
    updateUser.execute({
      id: 1000,
      name: 'User',
      email: 'usuarionaoexiste@example.com',
    }),
  ).rejects.toBeInstanceOf(AppError);
});

});
