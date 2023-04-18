import { Users, createUsers, listUsers, updateUsers } from "./users";


export interface IUserRepositories{
    create(props: createUsers): Promise<Users>
    listAll(): Promise<listUsers[]>
    listById(id: string): Promise<Users | null>
    update(props: updateUsers): Promise<Users>
    delete(id: string): Promise<void>
}