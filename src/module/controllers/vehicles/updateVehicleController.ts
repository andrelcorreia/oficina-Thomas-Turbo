import { Request, Response } from "express";
import { UpdateVehicle } from "../../interfaces/vehicles/vehicles";
import { UpdateVehicleUseCase } from "../../useCases/vehicles/updateVehicleUseCase";

const updateVehicleUseCase = new UpdateVehicleUseCase()

export class UpdateVehicleController {    
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params
        const {brand,
            model,
            year_of_manufacture,
            plate,
            mileage,
            color,
            comments,
            document_owner,
            owner_name} = request.body as UpdateVehicle
        
        const updateVehicle = await updateVehicleUseCase.execute({
        id,
        brand,
        model,
        year_of_manufacture,
        plate,
        mileage,
        color,
        comments,
        document_owner,
        owner_name,
        })

        return response.json(updateVehicle)
    }
}