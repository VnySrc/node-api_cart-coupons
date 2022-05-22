import { postgres } from "../database/instances/postgres";
import { DataTypes, Model } from "sequelize";
//Types
import { couponInterface } from "../types/modelTypes";

export const Coupon = postgres.define<couponInterface>("coupons", {
    tag: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        timestamps: false,
        updatedAt: false,
    }
)