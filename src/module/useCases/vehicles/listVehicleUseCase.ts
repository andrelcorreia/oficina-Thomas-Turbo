import { VehiclesRepository } from "../../repositories/vehicles/vehiclesRepository";


const vehiclesRepository = new VehiclesRepository()

export class ListVehicleUseCase {
    async execute(): Promise<any> {
        const listAllVehicles = await vehiclesRepository.listAll()

        return {listAllVehicles}
    }
}