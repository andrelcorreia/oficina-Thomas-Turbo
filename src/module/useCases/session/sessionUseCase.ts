import bcrypt from 'bcryptjs';
import { session } from '../../interfaces/session/session';

import { UserRepository } from '../../repositories/user/userRepository';

const userRepository = new UserRepository();

export class SessionUseCase {
	async execute({ email, password }: session): Promise<any> {
		const emailExist = await userRepository.listByEmail(email);

		if (!emailExist) {
			return { message: 'Email ou password inválido' };
		}

		const passwordExist = await bcrypt.compare(password, emailExist.password);

		if (!passwordExist) {
			return { message: 'Email ou password inválido' };
		}

		return { message: 'logado com sucesso!' };
	}
}
