import AppError from '../../errors/AppError';
import Lesson from '../../models/Lesson';
import ILessonsRepository from '../../repositories/ILessonsRepository';

interface IRequest {
  id: number;
  title: string;
  description: string;
  videoId: string;
  module_id: number;
}

class UpdateLessonService {

  constructor (
    private lessonsRepository: ILessonsRepository
  ) {}

  public async execute({ id, title, description, videoId, module_id }: IRequest): Promise<Lesson> {

    const lesson = await this.lessonsRepository.findById(id);

    if (!lesson) {
      throw new AppError('Lesson does not exist.')
    }

    lesson.title = title;
    lesson.description = description;
    lesson.videoId = videoId;
    lesson.module_id = module_id;

    const updatedLesson = await this.lessonsRepository.update(lesson);

    return updatedLesson;
  }
}

export default UpdateLessonService;
