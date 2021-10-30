import { IPokemon } from "../entities/Pokemon";

export interface IRepository {
    save(data: any): Promise<void>,
    findByName(name: string): Promise<any>,
    findAll(): Promise<any[]>,
}