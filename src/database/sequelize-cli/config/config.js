const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PWD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
  },
  "test": {
    "username": process.env.POSTGRES_USER_TEST,
    "password": process.env.POSTGRES_POSTGRES_PWD_TEST,
    "database": process.env.POSTGRES_DB_TEST,
    "host": process.env.POSTGRES_HOST_TEST,
    "dialect": "postgres",
  },
  "production": {
    "username": process.env.POSTGRES_PRODUCTION_USER,
    "password": process.env.POSTGRES_PRODUCTION_PWD,
    "database": process.env.POSTGRES_PRODUCTION_DB,
    "host": process.env.POSTGRES_PRODUCTION_HOST,
    "dialect": "postgres",
    "ssl": { "rejectUnauthorized": false }},
  }
