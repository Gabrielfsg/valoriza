import { TagRepository } from "../repositories/TagRepository";
import {getCustomRepository} from "typeorm";

class AtualizaTagService {
    
    async atualizarTagPeloNome(name: string, nameProx: string){
        const tagRepository = getCustomRepository(TagRepository);   
        if(!name || !nameProx || !name && !nameProx){
            throw new Error("Algum parâmetro inválido")
        }   

        const newTag = tagRepository.create({
            name: nameProx
        });

        const tag = tagRepository.update(name, {name: newTag.name});
       return tag;
        
    }

}

export {AtualizaTagService};