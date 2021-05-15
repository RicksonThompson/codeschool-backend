import { getRepository } from 'typeorm';

import Lesson from '../../models/Lesson';

interface IRequest {
  title: string;
  description: string;
  module_id: number;
  link: string;
}

class CreateClassService {
  public async execute({title, description, module_id, link} :IRequest) :Promise<Lesson> {
    const lessonRepository = getRepository(Lesson);

    const lesson = await lessonRepository.create({
      title,
      description,
      link,
      module_id,
    });

    await lessonRepository.save(lesson);

    return lesson;
  }
}

export default CreateClassService;
