import { PokemonMongoRepository } from "../../repositories/implementations/PokemonMongoRepository"
import { CreatePokemonController } from "./Controller"
import { CreatePokemonUseCase } from "./UseCase"

const PokemonRepository = new PokemonMongoRepository()
const createPokemonUseCase = new CreatePokemonUseCase(PokemonRepository)
const createPokemonController = new CreatePokemonController(createPokemonUseCase)

export {
    createPokemonUseCase,
    createPokemonController
}