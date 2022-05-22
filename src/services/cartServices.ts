import { Cart } from "../models/Cart";
import { Product } from "../models/Product";
import { Coupon } from "../models/Coupon";

import { cartHelper } from "../helpers/cartHelpers";

export const CartServices = {

    FindAll: async () => {
        const response = await Cart.findAll()
        return response
    },
    addCartItem: async (product_id, quantity, session, coupon?) => {
        const hasProduct = await Product.findByPk(product_id)
        const hasCoupon = await Coupon.findByPk(coupon)
        const hasCart = await Cart.findByPk(session)
        if (!hasProduct) {
            return new Error("Invalid Product ID")
        }
        else{
            hasProduct.setDataValue("cart_quantity", quantity) // criar na tavela cart_qauntity coma  quantidade selecionada para a resposta da api

            
            if (hasCart) { 
                const product = {...hasCart.products, [hasProduct.id]: hasProduct}
                const calcCupon = cartHelper(hasProduct.price, quantity, "add", hasCoupon?.discount, hasCoupon?.type, hasCart.original_price)
                hasCart.setDataValue("products", product) // add prodct on cart
                hasCart.total_quantity += quantity //add quantity product to cart total quantity
                hasCart.coupon = hasCoupon.tag // actualize prodct on cart
                hasCart.original_price = calcCupon.originalPrice
                hasCart.price = calcCupon.finalPrice
                
                await hasCart.save()
                return hasCart
            }
            else {
                const helperResult = cartHelper(hasProduct.price, quantity, "add", hasCoupon?.discount, hasCoupon?.type) // trocar numero pelo valor do cupom
                const newCart = Cart.build({
                    session_id: session,
                    original_price: helperResult.originalPrice,
                    coupon: hasCoupon?.tag,
                    price: helperResult.finalPrice,
                    total_quantity: quantity,
                    products: {[hasProduct.id] : hasProduct},
                })
                await newCart.save()
                return newCart
            } 
        }
    },
    findBySession: async (session) => {
        const hasCart = await Cart.findByPk(session)
        if (hasCart) {
            return hasCart
        }
        else {
            return new Error("session_id does not have a cart"); 
        }
    },
    editCartItem: async (product_id, session, newQuantity?) => {
        const hasCart = await Cart.findByPk(session)

        if (hasCart) {
            const hasProduct = await Product.findByPk(product_id)     
            const cartProduct = hasCart.products[product_id]
            const hasCoupon = await Coupon.findByPk(hasCart.coupon)
            const calcCupon = cartHelper(hasProduct.price, cartProduct["cart_quantity"], "edit", hasCoupon.discount, hasCoupon.type, hasCart.original_price, newQuantity)
            hasCart.products[product_id]["cart_quantity"] = newQuantity // editando cart quantity
            newQuantity < cartProduct["cart_quantity"]? hasCart.total_quantity = cartProduct["cart_quantity"] - newQuantity : hasCart.total_quantity = cartProduct["cart_quantity"] + newQuantity  // editando total quantity do cart se for menos subtraia se for maior adicione
            hasCart.original_price = calcCupon.originalPrice
            hasCart.price = calcCupon.finalPrice
            await hasCart.save()
            return hasCart
        }
        else {
            return new Error("session_id does not have a cart"); 
        }
    },
    deleteCartItem: async (product_id, session) => {
        const hasCart = await Cart.findByPk(session)

        if (hasCart) { 
            //const ProductToDelete = hasCart.products[0].filter(product => product.id == product_id)
            const hasProduct = await Product.findByPk(product_id)
            const hasCoupon = await Coupon.findByPk(hasCart.coupon)

            const cartProduct = hasCart.products[product_id]
            const calcCupon = cartHelper(hasProduct.price, cartProduct["cart_quantity"], "rm",hasCoupon.discount, hasCoupon.type, hasCart.original_price)
            delete hasCart.products[product_id]
            await Cart.update({
                products: hasCart.products,
                original_price: calcCupon.originalPrice,
                total_quantity: hasCart.total_quantity - cartProduct["cart_quantity"],
                price: calcCupon.finalPrice
                },
                {where: {
                    session_id: session
                }
                
            })
            // para atualziar exibiçao ao request
            hasCart.products = hasCart.products,
            hasCart.original_price = calcCupon.originalPrice,
            hasCart.total_quantity = hasCart.total_quantity - cartProduct["cart_quantity"],
            hasCart.price = calcCupon.finalPrice
            hasCart.save()
            return hasCart
        }
        else {
            return new Error("session_id does not have a cart"); 
        }
    }
}
   