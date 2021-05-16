import { v4 as uuid_v4 } from "uuid";

import ILessonsRepository from '../ILessonsRepository';

import ICreateLessonDTO from '../dtos/ICreateLessonDTO';

import Lesson from '../../models/Lesson';

class LessonsRepository implements ILessonsRepository {
  private lessons : Lesson[] = []

  public async findById(id: number): Promise<Lesson | undefined> {
    const findLesson = this.lessons.find(findLesson => findLesson.id === id);

    return findLesson;
  }

  public async create(lessonData: ICreateLessonDTO): Promise<Lesson> {
    const lesson = new Lesson();

    Object.assign(lesson, { id: uuid_v4() }, lessonData);

    this.lessons.push(lesson);

    return lesson;
  }

  public async remove(lesson: Lesson): Promise<Lesson | undefined> {
    const findIndex = this.lessons.findIndex(findLesson => findLesson.id === lesson.id);

    this.lessons.splice(findIndex,1);

    return lesson;
  }

  public async update(lesson: Lesson): Promise<Lesson> {
    const findIndex = this.lessons.findIndex(findLesson => findLesson.id === lesson.id);

    this.lessons[findIndex] = lesson;

    return lesson;
  }

  public async findAllLessons(): Promise<Lesson[]> {
    let { lessons } = this;

    lessons = this.lessons;

    return lessons;
  }
}

export default LessonsRepository;
