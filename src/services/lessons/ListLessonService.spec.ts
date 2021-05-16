import FakeLessonsRepository from '../../repositories/fakes/FakesLessonsRepository';
import CreateLessonService from './CreateLessonService';
import ListLessonService from './ListLessonService';

let listLesson: ListLessonService;
let createLesson: CreateLessonService;
let fakeLessonsRepository: FakeLessonsRepository;

describe('ListLessons', () => {
  beforeEach(() => {
    fakeLessonsRepository = new FakeLessonsRepository();
    createLesson = new CreateLessonService(fakeLessonsRepository);
    listLesson = new ListLessonService(fakeLessonsRepository);
  });

  it('should be able to list all lessons', async () => {
    const lesson = await createLesson.execute({
      title: 'Aula de teste',
      description: 'Descrição de aula teste',
      module_id: 1,
      videoId: 'hejfiehih',
    });

    const lessons = await listLesson.execute();

    expect(lessons).toBeDefined();
  });
});
