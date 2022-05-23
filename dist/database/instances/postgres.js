"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgres = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.postgres = new sequelize_1.Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PWD, {
    dialect: "postgres",
    host: process.env.PROSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
});
//# sourceMappingURL=postgres.js.map