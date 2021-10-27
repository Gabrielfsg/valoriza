import { TagRepository } from "../repositories/TagRepository";
import {getCustomRepository} from "typeorm";
import { classToPlain } from "class-transformer";

class ListagemTagService {
    
    async listarTagPeloNome(name: string){
        const tagRepository = getCustomRepository(TagRepository);   
        if(!name){
            throw new Error("Nenhum nome digitado.")
        }   

        const tag = tagRepository.findOne({name});
        if(!tag){
            throw new Error("Tag não existe!")
        }
        return tag;
       
        
    }

    async listarTodasAsTags(){
        const tagRepository = getCustomRepository(TagRepository); 
        const tag = await tagRepository.find({ select: ["id","name"]});
        return tag;
    }
}

export {ListagemTagService};