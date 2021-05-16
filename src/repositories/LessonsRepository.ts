import { getRepository, Repository } from 'typeorm';

import ILessonsRepository from './ILessonsRepository';

import ICreateLessonDTO from './dtos/ICreateLessonDTO';

import Lesson from '../models/Lesson';

class LessonsRepository implements ILessonsRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  public async findById(id: number): Promise<Lesson | undefined> {
    const findLesson = await this.ormRepository.findOne(id);

    return findLesson;
  }

  public async create(lessonData: ICreateLessonDTO): Promise<Lesson> {
    const lesson = this.ormRepository.create(lessonData);

    await this.ormRepository.save(lesson);

    return lesson;
  }

  public async remove(id: number): Promise<undefined> {
    const lesson = await this.ormRepository.findOne(id);

    await this.ormRepository.remove(lesson);

    return undefined;

  }

  public async update(lesson: Lesson): Promise<Lesson> {
    return this.ormRepository.save(lesson);
  }

  public async findAllLessons(): Promise<Lesson[]> {
    const lessons = await this.ormRepository.find();

    return lessons;
  }
}

export default LessonsRepository;
