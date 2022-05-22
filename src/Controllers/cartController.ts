import { NextFunction, Request, Response } from "express";
import { CartServices } from "../services/cartServices";


export const getAllCarts = async (req: Request, res: Response, next: NextFunction) => {
    const response = await CartServices.FindAll()
    res.json({carts: response})
}

export const addCartItem = async (req: Request, res: Response, next: NextFunction) => {
    const {product_id, quantity, coupon} = req.body
    const session_id = req.session.id
    req.session.user = session_id
    const session = req.session.user
    
    if (product_id && quantity) {
        const response = await CartServices.addCartItem(product_id,quantity,session,coupon)
        if (response instanceof Error) {
            res.status(404)
           res.json({error: response})
        }
        else{
            res.json({cart: response})
        }

    }
    else {
        res.status(404)
    }
    
}

export const findOneCartBySessionId = async (req: Request, res: Response, next: NextFunction) => {
    const session = req.session.user
    const response = CartServices.findBySession(session)
    if (response instanceof Error) {
        res.json({error: response})
    }
    else{
        res.json({cart: response})
    }
   
}

export const editCartItem = async (req: Request, res: Response, next: NextFunction) => {
    const {product_id,  name, price, quantity} = req.body
    const session = req.session.user
    if (product_id) {
        const response = await CartServices.editCartItem(product_id, session, quantity)
        if (response instanceof Error) {
            res.json({error: response})
        }
        else{
            res.json({cart: response})
        }
    }
    else {
        res.status(404)
    }
}

export const deleteCartItem = async (req: Request, res: Response, next: NextFunction) => {
    const {product_id} = req.body
    const session = req.session.user
    if (product_id && session) {
        const response = await CartServices.deleteCartItem(product_id, session)
        if (response instanceof Error) {
            res.json({error: response})
        }
        else{
            res.json({cart: response})
        }
    }
    else{
        res.status(404)
    }
    

}