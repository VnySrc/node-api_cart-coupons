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
exports.deleteCartItem = exports.editCartItem = exports.findOneCartBySessionId = exports.addCartItem = exports.getAllCarts = void 0;
const cartServices_1 = require("../services/cartServices");
const getAllCarts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield cartServices_1.CartServices.FindAll();
    res.json({ carts: response });
});
exports.getAllCarts = getAllCarts;
const addCartItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_id, quantity, coupon } = req.body;
    const session_id = req.session.id;
    req.session.user = session_id;
    const session = req.session.user;
    if (product_id && quantity) {
        const response = yield cartServices_1.CartServices.addCartItem(product_id, quantity, session, coupon);
        if (response instanceof Error) {
            res.status(404);
            res.json({ error: response });
        }
        else {
            res.json({ cart: response });
        }
    }
    else {
        res.status(404);
    }
});
exports.addCartItem = addCartItem;
const findOneCartBySessionId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const session = req.session.user;
    const response = cartServices_1.CartServices.findBySession(session);
    if (response instanceof Error) {
        res.json({ error: response });
    }
    else {
        res.json({ cart: response });
    }
});
exports.findOneCartBySessionId = findOneCartBySessionId;
const editCartItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_id, name, price, quantity } = req.body;
    const session = req.session.user;
    if (product_id) {
        const response = yield cartServices_1.CartServices.editCartItem(product_id, session, quantity);
        if (response instanceof Error) {
            res.json({ error: response });
        }
        else {
            res.json({ cart: response });
        }
    }
    else {
        res.status(404);
    }
});
exports.editCartItem = editCartItem;
const deleteCartItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_id } = req.body;
    const session = req.session.user;
    if (product_id && session) {
        const response = yield cartServices_1.CartServices.deleteCartItem(product_id, session);
        if (response instanceof Error) {
            res.json({ error: response });
        }
        else {
            res.json({ cart: response });
        }
    }
    else {
        res.status(404);
    }
});
exports.deleteCartItem = deleteCartItem;
//# sourceMappingURL=cartController.js.map