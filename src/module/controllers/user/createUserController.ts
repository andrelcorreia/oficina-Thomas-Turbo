import { Request, Response } from "express";
import { createUsers } from "../../interfaces/user/users";
import { CreateUserUseCase } from "../../useCases/users/createUserUseCase";

const createUserUseCase = new CreateUserUseCase()

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, password} = request.body as createUsers

        const createUser = await createUserUseCase.execute({
        name, email, password
        })

        return response.json(createUser)
    }
}