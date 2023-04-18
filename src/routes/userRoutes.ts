import { InactiveUserController } from './../module/controllers/user/inactiveUserController';
import { Router } from 'express';
import { CreateUserController } from '../module/controllers/user/createUserController';
import { ListUserController } from '../module/controllers/user/listUserController';
import { UpdateUserController } from '../module/controllers/user/updateUserController';

const UserRouter = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const inactiveUserController = new InactiveUserController();

UserRouter.post('/', createUserController.handle),
	UserRouter.get('/', listUserController.handle),
	UserRouter.put('/:id', updateUserController.handle);
UserRouter.put('/inactive/:id', inactiveUserController.handle);

export { UserRouter };
