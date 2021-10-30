import { Router } from "express";
import { createPokemonController } from "./useCases/createPokemons";
import { findAllPokemonController } from "./useCases/findAllPokemons";
import { findPokemonByNameController } from "./useCases/findPokemonByName";

const router: Router = Router()

router.get('/pokemons', (req, res, next) => findAllPokemonController.handle(req, res, next))
router.get('/pokemons/:name', (req, res, next) => findPokemonByNameController.handle(req, res, next))
router.post('/pokemons', (req, res, next) => createPokemonController.handle(req, res, next))

export {
    router
}