import { CreateVehicleController } from '../module/controllers/vehicles/createVehicleController';
import { Router } from 'express';
import { ListVehicleController } from '../module/controllers/vehicles/listVehicleController';
import { UpdateVehicleController } from '../module/controllers/vehicles/updateVehicleController';
import { InactiveVehicleController } from '../module/controllers/vehicles/inactiveVehicleController';

const VehicleRouter = Router();

const createVehicleController = new CreateVehicleController();
const listVehicleController = new ListVehicleController();
const updateVehicleController = new UpdateVehicleController();
const inactiveVehicleController = new InactiveVehicleController();

VehicleRouter.post('/', createVehicleController.handle),
	VehicleRouter.get('/', listVehicleController.handle),
	VehicleRouter.put('/:id', updateVehicleController.handle);
VehicleRouter.put('/inactive/:id', inactiveVehicleController.handle);

export { VehicleRouter };
