import { PokemonMongoRepository } from "../../repositories/implementations/PokemonMongoRepository"
import { FindAllPokemonController } from "./Controller"
import { FindAllPokemonUseCase } from "./UseCase"

const PokemonRepository = new PokemonMongoRepository()
const findAllPokemonUseCase = new FindAllPokemonUseCase(PokemonRepository)
const findAllPokemonController = new FindAllPokemonController(findAllPokemonUseCase)

export {
    findAllPokemonUseCase,
    findAllPokemonController
}