import { deleteUsers } from '../../interfaces/user/users';
import { UserRepository } from '../../repositories/user/userRepository';

const userRepository = new UserRepository();

export class InactiveUserUseCase {
	async execute({ id }: deleteUsers): Promise<any> {
		const idExist = await userRepository.listById(id);

		if (!idExist) {
			return { message: 'Id não existente' };
		}

		await userRepository.inactive(id);

		return { message: 'Usuário inativado com sucesso!' };
	}
}
