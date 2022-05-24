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
    "url": "postgres://gvicusqbfkzzcj:cf11abadf5a73ce4512c845b1b573459da75343efe22aaef0ab223fc6ecc08f9@ec2-34-231-177-125.compute-1.amazonaws.com:5432/d61rechmkcjcgk",
    "ssl": { "rejectUnauthorized": false }},
    "dialect": "postgres",
  }
