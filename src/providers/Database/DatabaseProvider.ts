export interface IDatabaseConfig {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string
}

export interface IDatabaseProvider {
    connect(config: IDatabaseConfig) : void
}

