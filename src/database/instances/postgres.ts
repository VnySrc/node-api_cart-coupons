import { Sequelize } from "sequelize"
import dotenv from "dotenv"
import  db  from "../helpers/databaseHelper"
dotenv.config()

export const postgres = new Sequelize(
    db.db as string,
    db.user as string,
    db.pwd as string,

    {
        dialect: "postgres",
        host: db.host,
        port: parseInt(db.port as string),
        ssl: db.ssl,
    }
)