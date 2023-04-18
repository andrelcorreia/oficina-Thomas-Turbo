import { Request, Response } from 'express';
import { InactiveVehicleUseCase } from './../../useCases/vehicles/deleteVehicleUseCase';

const inactiveVehicleUseCase = new InactiveVehicleUseCase();

export class InactiveVehicleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params as { id: string };

		const inactiveVehicle = await inactiveVehicleUseCase.execute({ id });

		return response.json(inactiveVehicle);
	}
}
