import { v4 } from "uuid";
import { ErrorCodes } from "../../constants";
import { IPokemon } from "../../entities/Pokemon";
import { PublicError } from "../../errors/PublicError";
import { IRepository } from "../../repositories/RepositoryInterface";

export class CreatePokemonUseCase {
    constructor (
        private repository : IRepository
    ) {}

    async run(data: IPokemon) {
        const exists = await this.repository.findByName(data.name)
        console.log(exists)
        if (exists) {
            throw new PublicError({ 
                code: ErrorCodes.DuplicatedEntry, 
                message: "Pokemon already added to the base"
            })
        }
        try {
            await this.repository.save({
                id: v4(),
                ...data
            })
        } catch(error) {
            throw error
        }
        
    }
 }