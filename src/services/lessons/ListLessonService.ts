import Lesson from '../../models/Lesson';
import ILessonsRepository from '../../repositories/ILessonsRepository';

class ListLessonService {

  constructor (
    private lessonsRepository: ILessonsRepository
  ) {}

  public async execute(): Promise<Lesson[]> {

    const lessons = await this.lessonsRepository.findAllLessons();

    return lessons;
  }
}

export default ListLessonService;
