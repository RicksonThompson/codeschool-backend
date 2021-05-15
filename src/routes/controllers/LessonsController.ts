import { Request, Response } from 'express';

import CreateLessonService from '../../services/lessons/CreateLessonService';
import DeleteLessonService from '../../services/lessons/DeleteLessonService';
import ListLessonService from '../../services/lessons/ListLessonService';
import UpdateLessonService from '../../services/lessons/UpdateLessonService';

export default class ModulesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description, link, module_id } = request.body;

    const CreateLesson = new CreateLessonService();

    const lesson = await CreateLesson.execute({
      title,
      description,
      link,
      module_id,
    });

    return response.json(lesson);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, title, description, link, module_id } = request.body;

    const UpdateLesson = new UpdateLessonService();

    const lesson = await UpdateLesson.execute({
      id,
      title,
      description,
      link,
      module_id
    })

    return response.json(lesson);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const DeleteLesson = new DeleteLessonService();

    await DeleteLesson.execute(id)

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const lessonsRepository = new ListLessonService();

    const lessons = await lessonsRepository.execute();

    return response.json(lessons);
  }
}
