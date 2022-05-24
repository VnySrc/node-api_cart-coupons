import { Product } from "../models/Product";

export const ProductServices = {
    getAllProductsService: async () => {
        const response = await Product.findAll()
        return response
    },
    addProductService: async (name, price, stock) => {
        try {
            const response = Product.build({
                name,
                price,
                stock,
            })
            await response.save()
            return response
        }
        catch (err) {
            return err
        }
        
    },
    findOneProductByIdService: async (id) => {
        const response = await Product.findByPk(id)
        if (response) {
            return response
        }
        else {
            return new Error ("Invalid product id")
        }
    },
    editProductService: async (id, name, price, stock) => {
        const response = await Product.findOne({where:{id:id}})
        if (response) {
            response.name = name
            response.price = price
            response.stock = stock
            await response.save()
            return response
         }
        else {
            return new Error ("invalid product id")
        }
    },
    deleteProductService: async (id) => {
        const response = await Product.findByPk(id)
        if (response) {
            await response.destroy()
            return `Product id:${id} deleted`
        }
        else {
            return new Error ("Invalid product id")
        }
    }

}