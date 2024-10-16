require('dotenv').config();
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Player } from "./entity/Player"
import { Team } from "./entity/Team";
import { Coach } from "./entity/Coach";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Player, Team, Coach],
    migrations: [],
    subscribers: [],
})
