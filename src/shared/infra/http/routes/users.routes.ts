import { Router } from 'express';

import { CreateUsersController } from '../../../../modules/user/useCases/create/CreateUsersController';
import { ListUserController } from '../../../../modules/user/useCases/list/ListUserController';

const usersRoutes = Router();

const createUsersController = new CreateUsersController();
const listUserController = new ListUserController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.get('/', listUserController.handle);

export { usersRoutes };
