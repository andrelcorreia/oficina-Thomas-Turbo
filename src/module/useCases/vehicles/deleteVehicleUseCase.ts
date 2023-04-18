import { deleteUsers } from '../../interfaces/user/users';
import { VehiclesRepository } from './../../repositories/vehicles/vehiclesRepository';

const vehiclesRepository = new VehiclesRepository();

export class InactiveVehicleUseCase {
	async execute({ id }: deleteUsers): Promise<any> {
		const idExist = await vehiclesRepository.listById(id);

		if (!idExist) {
			return { message: 'Id não existente' };
		}

		await vehiclesRepository.inactive(id);

		return { message: 'Veículo inativado com sucesso!' };
	}
}
