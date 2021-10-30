import { Response, NextFunction } from "express";
import { RequestWithId } from "../../entities/RequestWithId";
import { CreatePokemonUseCase } from "./UseCase";

export class CreatePokemonController {
    useCase: CreatePokemonUseCase

    constructor(useCase: CreatePokemonUseCase) {
        this.useCase = useCase
    }

    async handle(req: RequestWithId, res: Response, next: NextFunction): Promise<any> {
        try {
            await this.useCase.run(req.body)
            return res.status(201).send()
        } catch (error) {
           next(error)
        }

    }
}