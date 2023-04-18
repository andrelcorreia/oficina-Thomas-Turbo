import { CreateVehicle, UpdateVehicle, Vehicle } from "./vehicles";


export interface iVehiclesRepositories {
    create(props: CreateVehicle): Promise<Vehicle>
    listAll(): Promise<Vehicle[]>
    listById(id: string): Promise<Vehicle | null>
    update(props: UpdateVehicle): Promise<Vehicle>
    delete(id: string): Promise<void>
}