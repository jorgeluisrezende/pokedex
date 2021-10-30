import { ErrorCodes } from "../../constants";
import { IPokemon } from "../../entities/Pokemon";
import { PublicError } from "../../errors/PublicError";
import { IRepository } from "../../repositories/RepositoryInterface";

export class FindPokemonByNameUseCase {
    constructor (
        private repository : IRepository
    ) {}

    async run(name: string) {
        return await this.repository.findByName(name)
    }
 }