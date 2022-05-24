import dotenv from "dotenv"
dotenv.config()

let db = {
    db: process.env.POSTGRES_DB as string,
    user:  process.env.POSTGRES_USER as string,
    pwd:  process.env.POSTGRES_PWD as string,
    port:  process.env.POSTGRES_PORT as string,
    host:  process.env.POSTGRES_HOST as string,
    ssl: false
}

if ( process.env.NODE_ENV === "production" ) {
    db = {
    db: process.env.POSTGRES_PRODUCTION_DB as string,
    user:  process.env.POSTGRES_PRODUCTION_USER as string,
    pwd:  process.env.POSTGRES_PRODUCTION_PWD as string,
    port:  process.env.POSTGRES_PRODUCTION_PORT as string,
    host:  process.env.POSTGRES_PRODUCTION_HOST as string,
    ssl: true
    }
}

export default db