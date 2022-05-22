import { Router } from "express";
import * as productController from "../controllers/productController"

const router = Router()

router.get("/products", productController.getAllProducts)
router.post("/products", productController.addProduct)
router.get("/products/:id", productController.findOneProductById)
router.put("/products/:id", productController.editProduct)
router.delete("products/:id", productController.deleteProduct)

export default router