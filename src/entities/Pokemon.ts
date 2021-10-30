import { PokemonTypes } from "../constants";

export interface IPokemon {
    id?: string,
    name: string,
    attack: number,
    defense: number,
    type: PokemonTypes,
    level: number
}