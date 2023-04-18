import { UserRepository } from "../../repositories/user/userRepository";
import { VehiclesRepository } from "../../repositories/vehicles/vehiclesRepository";


const userRepository = new UserRepository()

export class ListUserUseCase {
    async execute(): Promise<any> {
        const listAllUsers = await userRepository.listAll()

        return {listAllUsers}
    }
}