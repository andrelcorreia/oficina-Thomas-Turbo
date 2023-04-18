import { Request, Response } from 'express';
import { updateUsers } from '../../interfaces/user/users';
import { UpdateUserUseCase } from '../../useCases/users/updateUserUseCase';

const updateUserUseCase = new UpdateUserUseCase();

export class UpdateUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const { name } = request.body as updateUsers;

		const updateUser = await updateUserUseCase.execute({
			id,
			name,
		});

		return response.json(updateUser);
	}
}
