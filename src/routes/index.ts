import { Router } from 'express';

import usersRouter from './users.routes';
import modulesRouter from './modules.routes';
import lessonsRouter from './lessons.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/lessons',lessonsRouter);
routes.use('/modules', modulesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
