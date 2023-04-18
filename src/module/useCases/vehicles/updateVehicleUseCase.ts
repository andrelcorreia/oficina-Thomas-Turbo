import { UpdateVehicle } from "../../interfaces/vehicles/vehicles";
import { VehiclesRepository } from "../../repositories/vehicles/vehiclesRepository";


const vehiclesRepository = new VehiclesRepository()

export class UpdateVehicleUseCase {
    async execute({id,brand,
        model,
        year_of_manufacture,
        plate,
        mileage,
        color,
        comments,
        document_owner,
        owner_name,}: UpdateVehicle): Promise<any> {

        const today = new Date().getFullYear()

        if(year_of_manufacture > today) {
            return {message: 'O ano de fabricação do carro não pode ser maior do que o ano atual'};
        }

        if((year_of_manufacture) < 1900) {
            return {message: 'O ano de fabricação não pode ser negativo nem menor do que 1900'};
        }

        const total = {
            id,
            brand,
            model,
            year_of_manufacture,
            plate,
            mileage,
            color,
            comments,
            document_owner,
            owner_name, 
        }

        const updateVehicle = await vehiclesRepository.update(total)

        return {updateVehicle}
    }
}