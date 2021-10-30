import dotenv from 'dotenv';
import { IDatabaseConfig } from './src/providers/Database/DatabaseProvider';

dotenv.config()

interface IConfig {
    port: number,
    logLevel: string,
    database: IDatabaseConfig
}

const config : IConfig = {
    port: Number(process.env.PORT),
    logLevel: String(process.env.LOGGIN_LEVEL),
    database: {
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
        username: String(process.env.DB_USER),
        password: String(process.env.DB_PASS),
        database: String(process.env.DB_NAME)
    }
}

export {
    config
}