import { Response, NextFunction } from "express";
import { ErrorCodes } from "../../constants";
import { RequestWithId } from "../../entities/RequestWithId";
import { PublicError } from "../../errors/PublicError";
import { FindPokemonByNameUseCase } from "./UseCase";

export class FindPokemonByNameController {
    useCase: FindPokemonByNameUseCase

    constructor(useCase: FindPokemonByNameUseCase) {
        this.useCase = useCase
    }

    async handle(req: RequestWithId, res: Response, next: NextFunction): Promise<any> {
        const { name } = req.params
        try {
            const pokemon = await this.useCase.run(name)
           
            if (!pokemon) {
                throw new PublicError({code: ErrorCodes.NotFound, message: "Did't found any pokemon with searched name", statusCode: 404})
            }

            return res.status(200).json(pokemon)
        } catch (error) {
           next(error)
        }

    }
}