import { CreateVehicleController } from "../module/controllers/vehicles/createVehicleController";
import {Router} from "express";
import { ListVehicleController } from "../module/controllers/vehicles/listVehicleController";
import { UpdateVehicleController } from "../module/controllers/vehicles/updateVehicleController";

const UserRouter = Router()

const createVehicleController = new CreateVehicleController()
const listVehicleController = new ListVehicleController()
const updateVehicleController = new UpdateVehicleController()

UserRouter.post('/', createVehicleController.handle),
UserRouter.get('/', listVehicleController.handle),
UserRouter.put('/:id', updateVehicleController.handle)

export {UserRouter}
