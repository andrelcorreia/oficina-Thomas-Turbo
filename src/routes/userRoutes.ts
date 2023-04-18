import { CreateVehicleController } from "../module/controllers/vehicles/createVehicleController";
import {Router} from "express";
import { ListVehicleController } from "../module/controllers/vehicles/listVehicleController";
import { UpdateVehicleController } from "../module/controllers/vehicles/updateVehicleController";
import { CreateUserController } from "../module/controllers/user/createUserController";
import { ListUserController } from "../module/controllers/user/listUserController";

const UserRouter = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const updateVehicleController = new UpdateVehicleController()

UserRouter.post('/', createUserController.handle),
UserRouter.get('/', listUserController.handle),
UserRouter.put('/:id', updateVehicleController.handle)

export {UserRouter}
