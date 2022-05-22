import { Router } from "express";

import * as cartController from "../controllers/cartController"

const router = Router()

router.get("/carts", cartController.getAllCarts)
//router.post("/carts", cartController.addNewCart)
router.get("/carts/products", cartController.findOneCartBySessionId)

router.post("/carts/products", cartController.addCartItem)
router.put("/carts/products", cartController.editCartItem)
router.delete("/carts/products", cartController.deleteCartItem)


export default router