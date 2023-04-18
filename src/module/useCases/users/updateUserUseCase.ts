import { updateUsers } from '../../interfaces/user/users';
import { UserRepository } from '../../repositories/user/userRepository';

const userRepository = new UserRepository();

export class UpdateUserUseCase {
	async execute({ id, name }: updateUsers): Promise<any> {
		const idExist = await userRepository.listById(id);

		if (!idExist) {
			return { message: 'Id não existente' };
		}

		const total = {
			id: idExist.id,
			name,
		};

		const updateUser = await userRepository.update(total);

		return { updateUser };
	}
}
