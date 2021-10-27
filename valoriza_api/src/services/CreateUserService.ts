import { UserRepository } from "../repositories/UserRepository";
import {getCustomRepository} from "typeorm";
import { hash } from "bcryptjs"

interface IUserRequest {
    name: string;
    email: string;
    password?:string;
    admin?: boolean;
}


class CreateUserService {

    async execute({name,email,password,admin}: IUserRequest){
        const usersRepository = getCustomRepository(UserRepository);

        if(!email){
            throw new Error("Email incorreto!");
       }

        const userAlreadyExist = await usersRepository.findOne({
            email
        });
        if(userAlreadyExist){
             throw new Error("Usuário ja cadastrado!");
        }

        const passwordHash = await hash(password,8);

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash,
            admin});

            await usersRepository.save(user);

            if(!user){
                throw new Error("Erro ao inserir usuário!");
            }

            return user;
    }

    
}

export {CreateUserService};