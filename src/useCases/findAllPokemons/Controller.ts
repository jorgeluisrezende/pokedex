import { Response, NextFunction } from "express";
import { RequestWithId } from "../../entities/RequestWithId";
import { FindAllPokemonUseCase } from "./UseCase";

export class FindAllPokemonController {
    useCase: FindAllPokemonUseCase

    constructor(useCase: FindAllPokemonUseCase) {
        this.useCase = useCase
    }

    async handle(req: RequestWithId, res: Response, next: NextFunction): Promise<any> {
        try {
            const pokemons = await this.useCase.run()
            return res.status(200).json(pokemons)
        } catch (error) {
           next(error)
        }

    }
}