import { Schema, model } from 'mongoose';
import { PokemonTypes } from '../../constants';
import { IPokemon } from "../../entities/Pokemon";
import { IRepository } from "../RepositoryInterface"

const schema = new Schema<IPokemon>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    type: { type: String, enum: Object.values(PokemonTypes) },
    level: { type: Number, required: true }
});

const PokemonModel = model<IPokemon>('Pokemon', schema);

export class PokemonMongoRepository implements IRepository {
      async save(data: IPokemon): Promise<void> {
        PokemonModel.create(data)
    }
    async findByName(name: string): Promise<any> {
        return PokemonModel.findOne({ name })
    }
    async findAll(): Promise<any[]> {
        return PokemonModel.find({})
    }
    async update(id: string, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}