import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository"; 


interface IAuthenticationRequest{
    email: string;
    password: string;
}

class AuthenticationUserService {

}

export {AuthenticationUserService};