"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const postgres_1 = require("../database/instances/postgres");
const sequelize_1 = require("sequelize");
exports.Cart = postgres_1.postgres.define("carts", {
    session_id: {
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    original_price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    coupon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    total_quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    products: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
//# sourceMappingURL=Cart.js.map