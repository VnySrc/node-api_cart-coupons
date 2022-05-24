import { Request, Response } from "express";
import { CouponServices } from "../services/couponServices"

export const getAllCoupons = async (req: Request, res: Response) => {
   const response = await CouponServices.getAllProductsService()

    res.json({coupons: response})
}

export const addCoupon = async (req: Request, res: Response) => {
    const { tag, discount, type } = req.body
    if (tag && discount && type) {
        const response = await CouponServices.addCouponService(tag, discount, type)

        if (response instanceof Error) {
            res.json({error: response})
        }
        else {
            res.json({newCoupon: response})
        }
    }
    else {
        res.status(404)
    }
    
}

export const findOneCouponByTag = async (req: Request, res: Response) => {
    const tag = req.params.slug
    const response = await CouponServices.findOneCouponByTagService(tag)
    
    if (response instanceof Error) {
        res.json({error: response})
    }
    else {
        res.json({coupon: response})
    }
}

export const editCoupon = async (req: Request, res: Response) => {
    const {discount, type } = req.body
    const tag = req.params.slug

    if (tag && discount && type) {
        const response = await CouponServices.editCouponService(tag, discount, type)

        if (response instanceof Error) {
            res.json({error: response})
        }
        else {
            res.json({coupon: response})
        }
    }
    else {
        res.status(404)
    }
   
}

export const deleteCoupon = async (req: Request, res: Response) => {
    const tag = req.params.slug
    if (tag) {
        const  response = await CouponServices.deleteCouponService(tag)
    
         if (response instanceof Error) {
            res.json({error: response})
        }
        else {
            res.json({coupon: response})
        }
    }
    else {
        res.status(404)
    }

    
}