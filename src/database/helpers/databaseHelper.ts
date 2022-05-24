

let db = {
    db: process.env.POSTGRES_DB,
    user:  process.env.POSTGRES_USER,
    pwd:  process.env.POSTGRES_PWD,
    port:  process.env.POSTGRES_PORT,
    host:  process.env.POSTGRES_HOST,
}

if ( process.env.NODE_ENV === "production" ) {
    db = {
    db: process.env.POSTGRES_PRODUCTION_DB,
    user:  process.env.POSTGRES_PRODUCTION_USER,
    pwd:  process.env.POSTGRES_PRODUCTION_PWD,
    port:  process.env.POSTGRES_PRODUCTION_PORT,
    host:  process.env.POSTGRES_PRODUCTION_HOST,
    }
}

export default db