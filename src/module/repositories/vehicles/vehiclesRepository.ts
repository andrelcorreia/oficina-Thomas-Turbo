import prisma from '../../../libs/prismaCliente';
import { iVehiclesRepositories } from '../../interfaces/vehicles/iVehiclesRepositories';
import {
	CreateVehicle,
	UpdateVehicle,
	Vehicle,
} from '../../interfaces/vehicles/vehicles';

export class VehiclesRepository implements iVehiclesRepositories {
	async update(props: UpdateVehicle): Promise<Vehicle> {
		return prisma.vehicles.update({
			where: {
				id: props.id,
			},
			data: props,
		});
	}
	async create(props: CreateVehicle): Promise<Vehicle> {
		return prisma.vehicles.create({
			data: props,
		});
	}
	async listAll(): Promise<Vehicle[]> {
		return prisma.vehicles.findMany({
			where: {
				active: true,
			},
		});
	}
	async listById(id: string): Promise<Vehicle | null> {
		return prisma.vehicles.findFirst({
			where: {
				id: id,
			},
		});
	}
	async listByPlate(plate: string): Promise<Vehicle | null> {
		return prisma.vehicles.findFirst({
			where: {
				plate: plate,
			},
		});
	}
	async inactive(id: string): Promise<Vehicle> {
		return prisma.vehicles.update({
			where: {
				id: id,
			},
			data: {
				active: false,
			},
		});
	}
}
