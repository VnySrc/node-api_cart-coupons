import { Product } from "../models/Product"
import { Request, Response } from "express"

export const getAllProducts = async (req: Request, res: Response) => {
    const response = await Product.findAll()
    res.json(response)
}

export const addProduct = async (req: Request, res: Response) => {
    const {name, price, stock} = req.body
    if (name && price && stock) {
        const response = Product.build({
            name,
            price,
            stock,
        })
        await response.save()

        res.status(200)
        res.json(response)
    }
    else{
        res.status(400)
        res.json({status: "Parametros Incorretos"})
    }
}

export const findOneProductById = async (req: Request, res: Response) => {
    const id = req.params.id
    if (id) {
        const response = await Product.findByPk(id)
        res.json({response})
    }
    else{
        res.status(404)
        res.json({status: "id de produto invalido"})
    }
   
}

export const editProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const {name,price,stock} = req.body
    const response = await Product.findOne({where:{id:id}})
    if (response) {
        response.name = name
        response.price = price
        response.stock = stock
        
        await response.save()

        res.status(200)
        res.json(response)
    }
    else {
        res.status(404)
        res.json({status: "id de produto invalido"})
    }
   
}

export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const response = await Product.findAll({where: {id: id}})
    response? res.json({status: "Produto Removido"}) : res.json({status: "id de produto invalido"})
}