import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import modulesRouter from '@modules/module/infra/http/routes/modules.routes';
import lessonsRouter from '@modules/lessons/infra/http/routes/lessons.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/lessons',lessonsRouter);
routes.use('/modules', modulesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
