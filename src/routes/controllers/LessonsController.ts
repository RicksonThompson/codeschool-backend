import { Request, Response } from 'express';

import CreateLessonService from '../../services/lessons/CreateLessonService';
import DeleteLessonService from '../../services/lessons/DeleteLessonService';
import ListLessonService from '../../services/lessons/ListLessonService';
import UpdateLessonService from '../../services/lessons/UpdateLessonService';

import LessonsRepository from '../../repositories/LessonsRepository';

export default class ModulesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const lessonsRepository = new LessonsRepository();

    const { title, description, videoId, module_id } = request.body;

    const CreateLesson = new CreateLessonService(lessonsRepository);

    const lesson = await CreateLesson.execute({
      title,
      description,
      videoId,
      module_id,
    });

    return response.json(lesson);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const lessonsRepository = new LessonsRepository();

    const { id, title, description, videoId, module_id } = request.body;

    const UpdateLesson = new UpdateLessonService(lessonsRepository);

    const lesson = await UpdateLesson.execute({
      id,
      title,
      description,
      videoId,
      module_id
    })

    return response.json(lesson);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const lessonsRepository = new LessonsRepository();

    const { id } = request.params;

    const id_lesson = parseInt(id);

    const DeleteLesson = new DeleteLessonService(lessonsRepository);

    await DeleteLesson.execute(id_lesson)

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const lessonsRepository = new LessonsRepository();

    const ListLesson = new ListLessonService(lessonsRepository);

    const lessons = await ListLesson.execute();

    return response.json(lessons);
  }
}
