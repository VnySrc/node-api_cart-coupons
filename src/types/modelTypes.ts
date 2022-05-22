import {Model} from "sequelize"

declare module 'express-session' {
    export interface SessionData {
      user: string;
    }
  }

export interface CartsInterface extends Model {
    session_id: string, 
    original_price: number ,
    coupon?: string,
    price: number,
    total_quantity: number,
    products: [ProductInterface],
}

export interface ProductInterface extends Model {
    id: number,
    name: string,
    price: number,
    stock: number,
}


export interface couponInterface extends Model {
    tag: string,
    discount: number,
    type: string,
}
