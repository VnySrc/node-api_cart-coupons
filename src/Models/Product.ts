import { DataTypes, Model } from "sequelize"
import { postgres } from "../database/instances/postgres"
//types
import { ProductInterface } from "../types/modelTypes"


export const Product = postgres.define<ProductInterface>("products", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull:  false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        timestamps: false,
        createdAt: false,
    },

)