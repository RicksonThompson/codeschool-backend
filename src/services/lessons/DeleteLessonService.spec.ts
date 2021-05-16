import FakeLessonsRepository from '../../repositories/fakes/FakesLessonsRepository';
import CreateLessonService from './CreateLessonService';
import DeleteLessonService from './DeleteLessonService';
import ListLessonService from './ListLessonService';

let fakeLessonsRepository: FakeLessonsRepository;
let createLesson: CreateLessonService;
let deleteLesson: DeleteLessonService;
let listLesson: ListLessonService;

describe('DeleteLesson', () => {
  beforeEach(() => {
    fakeLessonsRepository = new FakeLessonsRepository();
    createLesson = new CreateLessonService(fakeLessonsRepository);
    listLesson = new ListLessonService(fakeLessonsRepository);
    deleteLesson = new DeleteLessonService(fakeLessonsRepository);
  });

  it('should be able to delete a lesson', async () => {
    const lesson = await createLesson.execute({
      title: 'Lesson a ser deletada',
      description: 'Teste para deletar lesson',
      module_id: 1,
      videoId: 'ndindi'
    });

    await deleteLesson.execute(lesson.id)

    const lessons = await listLesson.execute();

    expect(lessons).not.toContain(lesson);
  });

});
