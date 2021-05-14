import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';

class DeleteLessonService {
  public async execute(id: string) :Promise<void> {
    const lessonsRepository = getRepository(Lesson);

    const lesson = await lessonsRepository.findOne(id);

    if (!lesson) {
      throw new AppError('Lesson does not exists!');
    }

    await lessonsRepository.remove(lesson);
  }
}

export default DeleteLessonService;
