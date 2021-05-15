import { getRepository } from 'typeorm';

import Lesson from '../../models/Lesson';

class ListLessonService {
  public async execute(): Promise<Lesson[]> {
    const lessonsRepository = getRepository(Lesson);

    const lessons = await lessonsRepository.find();

    return lessons;
  }
}

export default ListLessonService;
