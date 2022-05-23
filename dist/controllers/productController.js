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
exports.deleteProduct = exports.editProduct = exports.findOneProductById = exports.addProduct = exports.getAllProducts = void 0;
const Product_1 = require("../models/Product");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Product_1.Product.findAll();
    res.json(response);
});
exports.getAllProducts = getAllProducts;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, stock } = req.body;
    if (name && price && stock) {
        const response = Product_1.Product.build({
            name,
            price,
            stock,
        });
        yield response.save();
        res.status(200);
        res.json(response);
    }
    else {
        res.status(400);
        res.json({ status: "Parametros Incorretos" });
    }
});
exports.addProduct = addProduct;
const findOneProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (id) {
        const response = yield Product_1.Product.findByPk(id);
        res.json({ response });
    }
    else {
        res.status(404);
        res.json({ status: "id de produto invalido" });
    }
});
exports.findOneProductById = findOneProductById;
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, price, stock } = req.body;
    const response = yield Product_1.Product.findOne({ where: { id: id } });
    if (response) {
        response.name = name;
        response.price = price;
        response.stock = stock;
        yield response.save();
        res.status(200);
        res.json(response);
    }
    else {
        res.status(404);
        res.json({ status: "id de produto invalido" });
    }
});
exports.editProduct = editProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield Product_1.Product.findAll({ where: { id: id } });
    response ? res.json({ status: "Produto Removido" }) : res.json({ status: "id de produto invalido" });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productController.js.map