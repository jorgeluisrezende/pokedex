import { connect } from "mongoose";
import { IDatabaseProvider, IDatabaseConfig } from "../DatabaseProvider";

export class MongoProvider  implements IDatabaseProvider {
    async connect(config: IDatabaseConfig) {
        try {
            const connectUri = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}?authSource=admin`
            console.log(connectUri)
            await connect(connectUri)      
        } catch (error) {
            console.log(error)
        }
    }
}