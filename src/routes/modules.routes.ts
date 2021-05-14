import { Router } from 'express';

import ModulesController from '../controllers/ModulesController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const modulesRouter = Router();
const modulesController = new ModulesController();

modulesRouter.use(ensureAuthenticated);

modulesRouter.get('/', modulesController.show)

modulesRouter.post('/', modulesController.create);

modulesRouter.put('/', modulesController.update);

modulesRouter.delete('/:id', modulesController.delete);

export default modulesRouter;
