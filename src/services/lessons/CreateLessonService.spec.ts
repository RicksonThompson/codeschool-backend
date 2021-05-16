import FakeLessonsRepository from '../../repositories/fakes/FakesLessonsRepository';
import CreateLessonService from './CreateLessonService';

let createLesson: CreateLessonService;
let fakeLessonsRepository: FakeLessonsRepository;

describe('CreateLesson', () => {
  beforeEach(() => {
    fakeLessonsRepository = new FakeLessonsRepository();
    createLesson = new CreateLessonService(fakeLessonsRepository);
  });

  it('should be able to create a new lesson', async () => {
    const lesson = await createLesson.execute({
      title: 'Aula de teste',
      description: 'Descrição de aula teste',
      module_id: 1,
      videoId: 'hejfiehih',
    });

    expect(lesson).toHaveProperty('id');
  });

});
