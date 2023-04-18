import { Request, Response } from 'express';
import { session } from '../../interfaces/session/session';

import { SessionUseCase } from '../../useCases/session/sessionUseCase';

const sessionUseCase = new SessionUseCase();

export class SessionController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body as session;

		const session = await sessionUseCase.execute({
			email,
			password,
		});

		return response.json(session);
	}
}
