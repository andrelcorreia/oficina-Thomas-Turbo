import prisma from '../../../libs/prismaCliente';
import { IUserRepositories } from '../../interfaces/user/iUsersRepositories';
import {
	Users,
	createUsers,
	listUsers,
	updateUsers,
	deleteUsers,
} from '../../interfaces/user/users';

export class UserRepository implements IUserRepositories {
	async create(props: createUsers): Promise<Users> {
		return prisma.users.create({
			data: props,
		});
	}
	async listAll(): Promise<listUsers[]> {
		return prisma.users.findMany({
			where: {
				active: true,
			},
			select: {
				id: true,
				name: true,
				email: true,
				active: true,
			},
		});
	}
	async listById(id: string): Promise<Users | null> {
		return prisma.users.findFirst({
			where: {
				id: id,
				active: true,
			},
		});
	}

	async listByEmail(email: string): Promise<Users | null> {
		return prisma.users.findFirst({
			where: {
				email: email,
				active: true,
			},
		});
	}

	async update(props: updateUsers): Promise<Users> {
		return prisma.users.update({
			where: {
				id: props.id,
			},
			data: props,
		});
	}
	async inactive(id: string): Promise<Users> {
		return prisma.users.update({
			where: {
				id: id,
			},
			data: {
				active: false,
			},
		});
	}
}
