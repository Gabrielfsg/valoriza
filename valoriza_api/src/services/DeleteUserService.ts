import {getCustomRepository} from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class DeleteUserService {

    async deletarUsuario(nome: string){
        const userRepository = getCustomRepository(UserRepository);
        if(!nome){
            throw new Error("Nome invalido.");
        }
        return userRepository.delete({name: nome});
    }
}

export {DeleteUserService};