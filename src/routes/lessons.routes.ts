import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import LessonsController from '../controllers/LessonsController';

const lessonsRouter = Router();
const lessonsController = new LessonsController();

lessonsRouter.use(ensureAuthenticated);

lessonsRouter.get('/', lessonsController.show);

lessonsRouter.post('/', lessonsController.create);

lessonsRouter.put('/', lessonsController.update);

lessonsRouter.delete('/:id', lessonsController.delete);

export default lessonsRouter;
