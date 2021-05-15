import Lesson from '../../models/Lesson';
import ILessonsRepository from '../../repositories/ILessonsRepository';

interface IRequest {
  title: string;
  description: string;
  module_id: number;
  videoId: string;
}

class CreateClassService {

  constructor (
    private lessonsRepository: ILessonsRepository
  ) {}

  public async execute({title, description, module_id, videoId} :IRequest) :Promise<Lesson> {

    const videoIdDivided = videoId.split("=");

    const lesson = await this.lessonsRepository.create({
      title,
      description,
      videoId: videoIdDivided[1],
      module_id,
    });

    return lesson;
  }
}

export default CreateClassService;
