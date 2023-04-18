import { Request, Response } from "express";
import { ListVehicleUseCase } from "../../useCases/vehicles/listVehicleUseCase";

const listVehicleUseCase = new ListVehicleUseCase()

export class ListVehicleController {
    async handle(request: Request, response: Response): Promise<Response> {        
        const createVehicle = await listVehicleUseCase.execute()

        return response.json(createVehicle)
    }
}