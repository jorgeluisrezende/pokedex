import { ErrorCodes } from "../../constants";
import { IPokemon } from "../../entities/Pokemon";
import { PublicError } from "../../errors/PublicError";
import { IRepository } from "../../repositories/RepositoryInterface";

export class FindAllPokemonUseCase {
    constructor (
        private repository : IRepository
    ) {}

    async run() {
        return await this.repository.findAll()
    }
 }