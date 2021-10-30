import { PokemonMongoRepository } from "../../repositories/implementations/PokemonMongoRepository"
import { FindPokemonByNameController } from "./Controller"
import { FindPokemonByNameUseCase } from "./UseCase"

const PokemonRepository = new PokemonMongoRepository()
const findPokemonByNameUseCase = new FindPokemonByNameUseCase(PokemonRepository)
const findPokemonByNameController = new FindPokemonByNameController(findPokemonByNameUseCase)

export {
    findPokemonByNameUseCase,
    findPokemonByNameController
}