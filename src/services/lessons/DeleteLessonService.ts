import ILessonsRepository from '../../repositories/ILessonsRepository';

import AppError from '../../errors/AppError';

class DeleteLessonService {

  constructor (
    private lessonsRepository: ILessonsRepository
  ) {}

  public async execute(id: number) :Promise<void> {

    const lesson = await this.lessonsRepository.findById(id);

    if (!lesson) {
      throw new AppError('Lesson does not exists!');
    }

    await this.lessonsRepository.remove(lesson);
  }
}

export default DeleteLessonService;
