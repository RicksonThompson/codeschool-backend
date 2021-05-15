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

  public async execute({ id, title, description, videoId, module_id }: IRequest): Promise<Lesson | undefined> {

    const lesson = await this.lessonsRepository.findById(id);

    lesson.title = title;
    lesson.description = description;
    lesson.videoId = videoId;
    lesson.module_id = module_id;

    await this.lessonsRepository.update(lesson);

    return lesson;
  }
}

export default UpdateLessonService;
