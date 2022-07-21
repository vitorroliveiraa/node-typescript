import { Router } from 'express';

import { CreateUsersController } from '../../../../modules/user/useCases/create/CreateUsersController';
import { ListUsersController } from '../../../../modules/user/useCases/listAll/ListUsersController';
import { UpdateUsersController } from '../../../../modules/user/useCases/update/UpdateUsersController';

const usersRoutes = Router();

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const updateUsersController = new UpdateUsersController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.get('/', listUsersController.handle);
usersRoutes.put('/', updateUsersController.handle);

export { usersRoutes };
