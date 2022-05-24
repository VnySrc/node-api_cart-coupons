import { Product } from "../models/Product"
import { Request, response, Response } from "express"
import { ProductServices } from "../services/productServices"

export const getAllProducts = async (req: Request, res: Response) => {
    const response = await ProductServices.getAllProductsService()
    res.json(response)
}

export const addProduct = async (req: Request, res: Response) => {
    const {name, price, stock} = req.body
    if (name && price && stock) {
        const response = await ProductServices.addProductService(name, price, stock)

        if (response instanceof Error) {
            res.json({error: response})
        }
        else {
            res.json({newProduct: response})
        }
    }
    else{
        res.status(404)
    }
}

export const findOneProductById = async (req: Request, res: Response) => {
    const id = req.params.id
    if (id) {
        const response = await ProductServices.findOneProductByIdService(id)
        if (response instanceof Error) { 
            res.json({error: response})
        }
        else {
            res.json({product: response})
        }     
    }
    else{
        res.status(404)
    }
   
}

export const editProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const {name,price,stock} = req.body
    if (name && price && stock) {
        const reponse = ProductServices.editProductService(id, name, price, stock)
        if (response instanceof Error) {
            res.json({error: reponse})
        }
        else {
            res.json({product: reponse})
        }
    }
    else {
        res.status(404)
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    if (id) {
        const response = await ProductServices.deleteProductService(id)
        if (response instanceof Error) {
            res.json({error: response})
        }
        else {
            res.json({product: response})
        }
    }
    else {
        res.status(404)
    }
}