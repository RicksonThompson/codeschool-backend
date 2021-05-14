import { getRepository } from 'typeorm';

import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';

interface IRequest {
  id: number;
  title: string;
  description: string;
  link: string;
  module_id: string;
}

class UpdateLessonService {
  public async execute({ id, title, description, link, module_id }: IRequest): Promise<Lesson> {
    const lessonsRepository = getRepository(Lesson);

    const lesson = await lessonsRepository.findOne(id);

    lesson.title = title;
    lesson.description = description;
    lesson.link = link;
    lesson.module_id = module_id;

    await lessonsRepository.save(lesson);

    return lesson;
  }
}

export default UpdateLessonService;
