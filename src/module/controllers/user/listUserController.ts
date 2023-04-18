import { Request, Response } from "express";
import { ListVehicleUseCase } from "../../useCases/vehicles/listVehicleUseCase";
import { ListUserUseCase } from "../../useCases/users/listUserUseCase";

const listUserUseCase = new ListUserUseCase()

export class ListUserController {
    async handle(request: Request, response: Response): Promise<Response> {        
        const listUser = await listUserUseCase.execute()

        return response.json(listUser)
    }
}