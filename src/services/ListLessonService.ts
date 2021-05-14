import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';
import LessonsRepository from '@modules/lessons/infra/typeorm/repositories/LessonsRepository';

class ListLessonService {
  public async execute(): Promise<Lesson[]> {
    const lessonsRepository = new LessonsRepository();

    const lessons = await lessonsRepository.findAllLessons();

    return lessons;
  }
}

export default ListLessonService;
