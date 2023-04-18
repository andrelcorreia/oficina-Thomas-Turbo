import prisma from "../../../libs/prismaCliente";
import { iVehiclesRepositories } from "../../interfaces/vehicles/iVehiclesRepositories";
import { CreateVehicle, UpdateVehicle, Vehicle } from "../../interfaces/vehicles/vehicles";


export class VehiclesRepository implements iVehiclesRepositories{
    async update(props: UpdateVehicle): Promise<Vehicle> {
        return prisma.vehicles.update({
            where:{
                id:props.id
            },
            data: props
        })
    }
    async create(props: CreateVehicle): Promise<Vehicle> {
        return prisma.vehicles.create({
            data: props
        });
    }
    async listAll(): Promise<Vehicle[]> {
        return prisma.vehicles.findMany()
    }
    async listById(id: string): Promise<Vehicle | null> {
        return prisma.vehicles.findFirst({
            where:{
                id: id
            }
        })
    }
    async delete(id: string): Promise<void> {
        prisma.vehicles.delete({
            where: {
                id: id
            }
        })
    }}