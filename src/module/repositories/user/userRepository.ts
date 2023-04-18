import prisma from "../../../libs/prismaCliente";
import { IUserRepositories } from "../../interfaces/user/iUsersRepositories";
import { Users, createUsers, listUsers, updateUsers } from "../../interfaces/user/users";


export class UserRepository implements IUserRepositories{
    async create(props: createUsers): Promise<Users> {
        return prisma.users.create({
            data: props
        })
    }
    async listAll(): Promise<listUsers[]> {
        return prisma.users.findMany({
            select: {
                id: true,
                name: true,
                email: true,
            }
        })
    }
    async listById(id: string): Promise<Users | null> {
        return prisma.users.findFirst({
            where:{
                id: id
            }
        })
    }
    async update(props: updateUsers): Promise<Users> {
        return prisma.users.update({
            where:{
                id:props.id
            },
            data: props
        })
    }
    async delete(id: string): Promise<void> {
        prisma.users.delete({
            where: {
                id: id
            }
        })
    }
}