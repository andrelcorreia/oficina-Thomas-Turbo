import { CreateVehicle } from "../../interfaces/vehicles/vehicles";
import { VehiclesRepository } from "../../repositories/vehicles/vehiclesRepository";


const vehiclesRepository = new VehiclesRepository()

export class CreateVehicleUseCase {
    async execute({brand,
        model,
        year_of_manufacture,
        plate,
        mileage,
        color,
        comments,
        document_owner,
        owner_name}: CreateVehicle): Promise<any> {
        const plateExist = await vehiclesRepository.listByPlate(plate)

        if(plateExist) {
            return{message: 'Placa já existente'}
        }

        const today = new Date().getFullYear()

        if(year_of_manufacture > today) {
            return {message: 'O ano de fabricação do carro não pode ser maior do que o ano atual'};
        }

        if((year_of_manufacture) < 1900) {
            return {message: 'O ano de fabricação não pode ser negativo nem menor do que 1900'};
        }

        const total = {
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

        const createVehicle = await vehiclesRepository.create(total)

        return {createVehicle}
    }
}