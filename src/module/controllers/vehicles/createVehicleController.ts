import { Request, Response } from 'express';
import { CreateVehicleUseCase } from '../../useCases/vehicles/createVehicleUseCase';
import { CreateVehicle } from '../../interfaces/vehicles/vehicles';

const createVehicleUseCase = new CreateVehicleUseCase();

export class CreateVehicleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {
			brand,
			model,
			year_of_manufacture,
			plate,
			mileage,
			color,
			comments,
			document_owner,
			owner_name,
		} = request.body as CreateVehicle;

		const createVehicle = await createVehicleUseCase.execute({
			brand,
			model,
			year_of_manufacture,
			plate,
			mileage,
			color,
			comments,
			document_owner,
			owner_name,
		});

		return response.json(createVehicle);
	}
}
