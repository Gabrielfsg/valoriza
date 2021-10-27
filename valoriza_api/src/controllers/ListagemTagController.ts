import {Request, Response} from "express";
import { ListagemTagService } from "../services/ListagemTagService";

class ListagemTagController{

  async listarTagPorNome(request: Request, response: Response){
    const {name} = request.body;
    const listagem = new ListagemTagService();
    const tag = await listagem.listarTagPeloNome(name);
    return response.json(tag);
    }
    
    async listarTodasAsTags(request: Request, response: Response){
        const listagem = new ListagemTagService();
        const tag = await listagem.listarTodasAsTags();
        return response.json(tag);
        }
}

export { ListagemTagController };