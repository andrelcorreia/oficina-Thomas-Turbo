import bcrypt from 'bcryptjs';
import { createUsers } from "../../interfaces/user/users";
import { UserRepository } from "../../repositories/user/userRepository";


const userRepository = new UserRepository()

export class CreateUserUseCase {
    async execute({name, email, password}: createUsers): Promise<any> {
        const emailExist = await userRepository.listByEmail(email)

        if(emailExist){
            return{message: 'Email já em uso'}
        }

        const salt = 12
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

		if (!regex.test(email))
			return {
				message: 'Invalid e-mail',
			};

            if (
                !password.match(
                    /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
                )
            ) {
                return{
                    message: 'This password is weak!',
                };
            }

            const passwordHash = await bcrypt.hash(password, salt );

            const total = {
                name,
                email,
                password: passwordHash
            }

        const createUser = await userRepository.create(total)

        return {createUser}
    }
}