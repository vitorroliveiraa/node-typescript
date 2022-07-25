import { Router } from 'express';

import { CreateUsersController } from '../../../../modules/user/useCases/create/CreateUsersController';
import { DeleteUsersController } from '../../../../modules/user/useCases/delete/DeleteUsersController';
import { ListUsersController } from '../../../../modules/user/useCases/listAll/ListUsersController';
import { UpdateUsersController } from '../../../../modules/user/useCases/update/UpdateUsersController';

const usersRoutes = Router();

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const updateUsersController = new UpdateUsersController();
const deleteUsersController = new DeleteUsersController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.get('/', listUsersController.handle);
usersRoutes.put('/update/:id', updateUsersController.handle);
usersRoutes.delete('/:id', deleteUsersController.handle);

export { usersRoutes };
