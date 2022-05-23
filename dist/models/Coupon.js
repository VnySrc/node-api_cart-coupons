"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
const postgres_1 = require("../database/instances/postgres");
const sequelize_1 = require("sequelize");
exports.Coupon = postgres_1.postgres.define("coupons", {
    tag: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    discount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    updatedAt: false,
});
//# sourceMappingURL=Coupon.js.map