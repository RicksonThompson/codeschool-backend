import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.show);

usersRouter.post('/', usersController.create);

usersRouter.put('/', usersController.update);

usersRouter.delete('/:id', usersController.delete);

export default usersRouter;
