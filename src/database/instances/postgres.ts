import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

export const postgres = new Sequelize(
    process.env.POSTGRES_DB as string,
    process.env.POSTGRES_USER as string,
    process.env.POSTGRES_PWD as string,

    {
        dialect: "postgres",
        host: process.env.PROSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT as string),
    }
)