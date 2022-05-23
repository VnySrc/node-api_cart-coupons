"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartServices = void 0;
const Cart_1 = require("../models/Cart");
const Product_1 = require("../models/Product");
const Coupon_1 = require("../models/Coupon");
const cartHelpers_1 = require("../helpers/cartHelpers");
exports.CartServices = {
    FindAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield Cart_1.Cart.findAll();
        return response;
    }),
    addCartItem: (product_id, quantity, session, coupon) => __awaiter(void 0, void 0, void 0, function* () {
        const hasProduct = yield Product_1.Product.findByPk(product_id);
        const hasCoupon = yield Coupon_1.Coupon.findByPk(coupon);
        const hasCart = yield Cart_1.Cart.findByPk(session);
        if (!hasProduct) {
            return new Error("Invalid Product ID");
        }
        else {
            hasProduct.setDataValue("cart_quantity", quantity); // criar na tavela cart_qauntity coma  quantidade selecionada para a resposta da api
            if (hasCart) {
                const product = Object.assign(Object.assign({}, hasCart.products), { [hasProduct.id]: hasProduct });
                const calcCupon = (0, cartHelpers_1.cartHelper)(hasProduct.price, quantity, "add", hasCoupon === null || hasCoupon === void 0 ? void 0 : hasCoupon.discount, hasCoupon === null || hasCoupon === void 0 ? void 0 : hasCoupon.type, hasCart.original_price);
                hasCart.setDataValue("products", product); // add prodct on cart
                hasCart.total_quantity += quantity; //add quantity product to cart total quantity
                hasCart.coupon = hasCoupon.tag; // actualize prodct on cart
                hasCart.original_price = calcCupon.originalPrice;
                hasCart.price = calcCupon.finalPrice;
                yield hasCart.save();
                return hasCart;
            }
            else {
                const helperResult = (0, cartHelpers_1.cartHelper)(hasProduct.price, quantity, "add", hasCoupon === null || hasCoupon === void 0 ? void 0 : hasCoupon.discount, hasCoupon === null || hasCoupon === void 0 ? void 0 : hasCoupon.type); // trocar numero pelo valor do cupom
                const newCart = Cart_1.Cart.build({
                    session_id: session,
                    original_price: helperResult.originalPrice,
                    coupon: hasCoupon === null || hasCoupon === void 0 ? void 0 : hasCoupon.tag,
                    price: helperResult.finalPrice,
                    total_quantity: quantity,
                    products: { [hasProduct.id]: hasProduct },
                });
                yield newCart.save();
                return newCart;
            }
        }
    }),
    findBySession: (session) => __awaiter(void 0, void 0, void 0, function* () {
        const hasCart = yield Cart_1.Cart.findByPk(session);
        if (hasCart) {
            return hasCart;
        }
        else {
            return new Error("session_id does not have a cart");
        }
    }),
    editCartItem: (product_id, session, newQuantity) => __awaiter(void 0, void 0, void 0, function* () {
        const hasCart = yield Cart_1.Cart.findByPk(session);
        if (hasCart) {
            const hasProduct = yield Product_1.Product.findByPk(product_id);
            const cartProduct = hasCart.products[product_id];
            const hasCoupon = yield Coupon_1.Coupon.findByPk(hasCart.coupon);
            const calcCupon = (0, cartHelpers_1.cartHelper)(hasProduct.price, cartProduct["cart_quantity"], "edit", hasCoupon.discount, hasCoupon.type, hasCart.original_price, newQuantity);
            hasCart.products[product_id]["cart_quantity"] = newQuantity; // editando cart quantity
            newQuantity < cartProduct["cart_quantity"] ? hasCart.total_quantity = cartProduct["cart_quantity"] - newQuantity : hasCart.total_quantity = cartProduct["cart_quantity"] + newQuantity; // editando total quantity do cart se for menos subtraia se for maior adicione
            hasCart.original_price = calcCupon.originalPrice;
            hasCart.price = calcCupon.finalPrice;
            yield hasCart.save();
            return hasCart;
        }
        else {
            return new Error("session_id does not have a cart");
        }
    }),
    deleteCartItem: (product_id, session) => __awaiter(void 0, void 0, void 0, function* () {
        const hasCart = yield Cart_1.Cart.findByPk(session);
        if (hasCart) {
            //const ProductToDelete = hasCart.products[0].filter(product => product.id == product_id)
            const hasProduct = yield Product_1.Product.findByPk(product_id);
            const hasCoupon = yield Coupon_1.Coupon.findByPk(hasCart.coupon);
            const cartProduct = hasCart.products[product_id];
            const calcCupon = (0, cartHelpers_1.cartHelper)(hasProduct.price, cartProduct["cart_quantity"], "rm", hasCoupon.discount, hasCoupon.type, hasCart.original_price);
            delete hasCart.products[product_id];
            yield Cart_1.Cart.update({
                products: hasCart.products,
                original_price: calcCupon.originalPrice,
                total_quantity: hasCart.total_quantity - cartProduct["cart_quantity"],
                price: calcCupon.finalPrice
            }, { where: {
                    session_id: session
                }
            });
            // para atualziar exibiçao ao request
            hasCart.products = hasCart.products,
                hasCart.original_price = calcCupon.originalPrice,
                hasCart.total_quantity = hasCart.total_quantity - cartProduct["cart_quantity"],
                hasCart.price = calcCupon.finalPrice;
            hasCart.save();
            return hasCart;
        }
        else {
            return new Error("session_id does not have a cart");
        }
    })
};
//# sourceMappingURL=cartServices.js.map