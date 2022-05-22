import { postgres } from "../database/instances/postgres";
import { DataTypes } from "sequelize";
//Types
import { CartsInterface } from "../types/modelTypes";

export const Cart = postgres.define<CartsInterface>("carts", {
    session_id : {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING
    },
    original_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    coupon: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    },
    price : {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    total_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    products: {
        type: DataTypes.JSON,
        allowNull: false,
    },
},
    {
        createdAt: false,
        updatedAt: false,
    }
)