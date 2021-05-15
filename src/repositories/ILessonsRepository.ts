import Lesson from '../models/Lesson';

import ICreateLessonDTO from './dtos/ICreateLessonDTO';

export default interface ILessonsRepository {
  findById(id: number): Promise<Lesson | undefined>;
  findAllLessons(): Promise<Lesson[]>;
  create(data: ICreateLessonDTO): Promise<Lesson>;
  update(lesson: Lesson): Promise<Lesson | undefined>;
  remove(lesson: Lesson): Promise<Lesson | undefined>;
}
