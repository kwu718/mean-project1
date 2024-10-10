import "reflect-metadata"
import { DataSource } from "typeorm"
import { Player } from "./entity/Player"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pass",
    database: "league",
    synchronize: false,
    logging: false,
    entities: [Player],
    migrations: [],
    subscribers: [],
})
