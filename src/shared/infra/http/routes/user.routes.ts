import { Router } from 'express';

import { UserController } from '../../../../modules/user/useCases/create/UserController';
import { ListUserController } from '../../../../modules/user/useCases/list/ListUserController';

const userRoutes = Router();

const userController = new UserController();
const listUserController = new ListUserController();

userRoutes.post('/', userController.handle);
userRoutes.get('/', listUserController.handle);

export { userRoutes };
