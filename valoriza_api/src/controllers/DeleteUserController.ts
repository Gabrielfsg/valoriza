import {Request, Response} from "express";
import { DeleteUserService } from "../services/DeleteUserService";


class DeleteUserController{

    async deletarUsuario(request: Request, response: Response){
        const {name} = request.body;
        const deletarUser = new DeleteUserService();
        try{
            deletarUser.deletarUsuario(name);
        }catch(error){
            response.status(400);
        }
    }
}

export {DeleteUserController};