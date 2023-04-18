import { Request, Response } from 'express';
import { InactiveUserUseCase } from '../../useCases/users/deleteUserUseCase';

const inactiveUserUseCase = new InactiveUserUseCase();

export class InactiveUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params as { id: string };

		const inactiveUser = await inactiveUserUseCase.execute({ id });

		return response.json(inactiveUser);
	}
}
