import { TagRepository } from "../repositories/TagRepository";
import {getCustomRepository} from "typeorm";



class CreateTagService {
    async execute(name: string){
        const tagRepository = getCustomRepository(TagRepository);
        if(!name){
            throw new Error("Nome null");     
        }
        const tagAlreadyExist = await tagRepository.findOne({name});
        if(tagAlreadyExist){
            throw new Error("Atag já existe.");
        }
        const tag = tagRepository.create({
            name
        })
        await tagRepository.save(tag);

        return tag;
    }
}
export {CreateTagService};