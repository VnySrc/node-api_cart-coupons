import { Router } from "express"
import * as couponController from "../Controllers/couponController"

const router = Router()

router.get("/coupons", couponController.getAllCoupons)
router.post("/coupons", couponController.addCoupon)
router.get("/coupons/:slug", couponController.findOneCouponByTag)
router.put("/coupons/:slug", couponController.editCoupon)
router.delete("coupons/:slug", couponController.deleteCoupon)


export default router